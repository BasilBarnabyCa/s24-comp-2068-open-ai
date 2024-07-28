const mongoose = require('mongoose');

const dataSchemaObject = {
	title: { type: String, required: true },
	data: { type: String, required: true },
	createdAt: { type: Date, default: Date.now }
};
const mongooseSchema = mongoose.Schema(dataSchemaObject);
module.exports = mongoose.model("Suggestion", mongooseSchema);