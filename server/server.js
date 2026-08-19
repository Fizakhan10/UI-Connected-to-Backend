import express from 'express';
import multer from 'multer';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

// Create uploads directory if it doesn't exist
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(uploadsDir));

// Configure multer for file storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsDir);
  },
  filename: (req, file, cb) => {
    // Create unique filename with timestamp
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const ext = path.extname(file.originalname);
    const nameWithoutExt = path.basename(file.originalname, ext);
    cb(null, `${nameWithoutExt}-${uniqueSuffix}${ext}`);
  }
});

// File filter for validation
const fileFilter = (req, file, cb) => {
  const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
  
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('Invalid file type. Only JPEG, PNG, GIF, and WebP are allowed.'), false);
  }
};

// Configure multer with limits
const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB max file size
  }
});

// Routes
app.get('/', (req, res) => {
  res.json({ 
    message: 'File Upload Server is running',
    endpoints: {
      upload: 'POST /api/upload',
      files: 'GET /uploads/:filename'
    }
  });
});

// Upload endpoint
app.post('/api/upload', upload.single('file'), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ 
        success: false, 
        message: 'No file uploaded' 
      });
    }

    // Log upload details
    console.log('File uploaded successfully:', {
      originalName: req.file.originalname,
      filename: req.file.filename,
      size: req.file.size,
      mimetype: req.file.mimetype
    });

    // Return file URL
    const fileUrl = `http://localhost:${PORT}/uploads/${req.file.filename}`;
    
    res.json({
      success: true,
      message: 'File uploaded successfully',
      fileUrl: fileUrl,
      fileDetails: {
        originalName: req.file.originalname,
        filename: req.file.filename,
        size: req.file.size,
        mimetype: req.file.mimetype
      }
    });
  } catch (error) {
    console.error('Upload error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Upload failed', 
      error: error.message 
    });
  }
});

// Get all uploaded files
app.get('/api/files', (req, res) => {
  try {
    const files = fs.readdirSync(uploadsDir);
    const fileList = files.map(filename => ({
      filename,
      url: `http://localhost:${PORT}/uploads/${filename}`
    }));
    
    res.json({
      success: true,
      count: fileList.length,
      files: fileList
    });
  } catch (error) {
    console.error('Error reading files:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to read files', 
      error: error.message 
    });
  }
});

// Delete file endpoint (optional)
app.delete('/api/files/:filename', (req, res) => {
  try {
    const filePath = path.join(uploadsDir, req.params.filename);
    
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
      res.json({ 
        success: true, 
        message: 'File deleted successfully' 
      });
    } else {
      res.status(404).json({ 
        success: false, 
        message: 'File not found' 
      });
    }
  } catch (error) {
    console.error('Delete error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to delete file', 
      error: error.message 
    });
  }
});

// Error handling middleware
app.use((error, req, res, next) => {
  if (error instanceof multer.MulterError) {
    if (error.code === 'LIMIT_FILE_SIZE') {
      return res.status(400).json({
        success: false,
        message: 'File size too large. Maximum size is 5MB.'
      });
    }
    return res.status(400).json({
      success: false,
      message: error.message
    });
  }
  
  res.status(500).json({
    success: false,
    message: error.message || 'An error occurred'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📁 Uploads directory: ${uploadsDir}`);
  console.log(`📡 Ready to accept file uploads`);
});
