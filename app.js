var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var config = require("./config/globals");
var mongoose = require("mongoose");
var cors = require("cors");
var { engine } = require("express-handlebars");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.engine(
  "hbs",
  engine({
    extname: ".hbs",
    defaultLayout: "layout",
    layoutsDir: path.join(__dirname, "views"),
    helpers: {
      eq: (v1, v2) => v1 === v2,
    },
  })
);
app.set("view engine", "hbs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// Cors
var cors_options = {
  origin: "*",
  optionsSuccessStatus: 200,
};
app.use(cors(cors_options));

app.use("/", indexRouter);
app.use("/users", usersRouter);

// Connect to MongoDB
mongoose
  .connect(config.ConnectionStrings.MongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected Successfully!"))
  .catch((error) => console.log(`Error while connecting: ${error}`));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
