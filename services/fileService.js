const fs = require('fs');
const path = require('path');
const multer = require('multer');
const mammoth = require('mammoth');
const pdf = require('pdf-parse');

// Setup multer for file upload
const upload = multer({ dest: 'uploads/' });

const fileService = {
  uploadMiddleware: upload.single('resumeFile'),

  extractText: async (file) => {
    const ext = path.extname(file.originalname).toLowerCase();
    const filePath = path.join(__dirname, '..', file.path);

    try {
      let text = '';

      if (ext === '.docx') {
        text = await fileService.extractTextFromWord(filePath);
      } else if (ext === '.pdf') {
        text = await fileService.extractTextFromPDF(filePath);
      } else {
        throw new Error('Unsupported file format.');
      }

	   // Debug: Log the extracted text to ensure it's correct
	   console.log('Extracted text:', text);


      // Clean up the uploaded file
      fs.unlinkSync(filePath);

      return text;
    } catch (error) {
      console.error('Error extracting text:', error);
      throw new Error('Could not extract text from file.');
    }
  },

  extractTextFromWord: async (filePath) => {
    const result = await mammoth.extractRawText({ path: filePath });
    return result.value;
  },

  extractTextFromPDF: async (filePath) => {
    const data = fs.readFileSync(filePath);
    const result = await pdf(data);
    return result.text;
  }
};

module.exports = fileService;
