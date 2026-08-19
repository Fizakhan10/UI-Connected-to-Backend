# Fiza Khan — Developer Portfolio

A fully responsive file upload application with drag-and-drop, real-time preview, and backend storage built with **React + Vite + Express** for the Neuron5Solutions internship program.

---

## 🌐 Week 3 · Part 1 — File/Image Upload with Backend Storage

This project demonstrates building a production-ready file upload system with drag-and-drop, validation, progress tracking, and backend storage.

### Requirements

| Requirement | Implementation |
|------------|----------------|
| **Styled Upload UI** | Custom drag-and-drop zone with file picker (not bare browser input) |
| **Upload Progress** | Real-time progress bar and preview before submission |
| **Backend Storage** | Express server with Multer for local file storage |
| **File Validation** | Type and size validation on frontend before upload |
| **Display Uploaded File** | Image preview and download link after successful upload |
| **User Feedback** | Success/error states with smooth animations |

### Features

- ✅ **Drag & Drop**: Intuitive drag-and-drop zone with visual feedback
- ✅ **File Preview**: Real-time image preview before upload
- ✅ **Validation**: Client-side validation for file type (JPEG, PNG, GIF, WebP) and size (max 5MB)
- ✅ **Progress Tracking**: Real-time upload progress bar with percentage
- ✅ **Backend Integration**: Express server with Multer for secure file storage
- ✅ **Success State**: Beautiful success screen with uploaded image display
- ✅ **Download Link**: View full-size image in new tab
- ✅ **Responsive Design**: Mobile-first approach with smooth animations
- ✅ **Error Handling**: Clear error messages for validation failures and upload errors

---

## 🚀 Tech Stack

**Frontend:**
- React 19.2.7
- Vite (Build Tool)
- CSS3 with animations

**Backend:**
- Node.js + Express
- Multer (File upload middleware)
- CORS enabled

---

## 📦 Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/Fizakhan10/Forms-Validation-.git
cd Forms-Validation-
```

### 2. Install Frontend Dependencies
```bash
npm install
```

### 3. Install Backend Dependencies
```bash
cd server
npm install
```

### 4. Start the Backend Server
```bash
# From the server directory
npm start
```
The server will run on `http://localhost:3000`

### 5. Start the Frontend Development Server
```bash
# From the root directory
npm run dev
```
The frontend will run on `http://localhost:5173`

---

## 🎯 Project Structure

```
Forms-Validation-/
├── src/
│   ├── components/
│   │   ├── FileUpload.jsx        # Main upload component
│   │   └── FileUpload.css        # Upload component styles
│   ├── App.jsx                   # Main app component
│   ├── App.css                   # App styles
│   └── main.jsx                  # Entry point
├── server/
│   ├── server.js                 # Express backend server
│   ├── package.json              # Backend dependencies
│   ├── uploads/                  # Uploaded files storage
│   └── .gitignore
├── public/
└── package.json
```

---

## 🔌 API Endpoints

### Upload File
```
POST http://localhost:3000/api/upload
Content-Type: multipart/form-data

Body: { file: [binary] }

Response: {
  success: true,
  message: "File uploaded successfully",
  fileUrl: "http://localhost:3000/uploads/filename-123456.jpg",
  fileDetails: {
    originalName: "image.jpg",
    filename: "image-123456.jpg",
    size: 245678,
    mimetype: "image/jpeg"
  }
}
```

### Get All Files
```
GET http://localhost:3000/api/files

Response: {
  success: true,
  count: 5,
  files: [...]
}
```

### Delete File
```
DELETE http://localhost:3000/api/files/:filename

Response: {
  success: true,
  message: "File deleted successfully"
}
```

---

## ✨ Key Features Implementation

### 1. Drag and Drop Zone
- Visual feedback during drag (color change, scale animation)
- Click to open file picker
- Validates dropped files

### 2. File Validation
- **Allowed Types**: JPEG, PNG, GIF, WebP
- **Max Size**: 5MB
- Clear error messages for validation failures

### 3. Upload Progress
- XMLHttpRequest for progress tracking
- Real-time progress bar (0-100%)
- Smooth animations

### 4. Backend Storage
- Unique filename generation (timestamp + random ID)
- File type validation on server
- Size limit enforcement (5MB)
- Serves uploaded files via static endpoint

### 5. Success State
- Animated success icon
- Full-size image preview
- Download/view link
- Upload another file option

---

## 🎓 Internship Information

**Program**: Neuron5Solutions Web Development Internship  
**Week**: 3  
**Part**: 1  
**Task**: File/Image Upload UI Connected to Backend Storage  
**Developer**: Fiza Khan

---

## 📸 Screenshots

_Screenshots and video demonstration will be added upon completion_

### Video Demonstration Checklist:
- [ ] Show drag-and-drop functionality
- [ ] Upload a file and show progress
- [ ] Display uploaded image in UI
- [ ] Try invalid file type/size
- [ ] Show error handling
- [ ] Post on LinkedIn

---

## 🔗 Links

- [Live Demo](#) _(Coming soon)_
- [GitHub Repository](https://github.com/Fizakhan10/Forms-Validation-)
- [LinkedIn Post](#) _(Coming soon)_

---

## 🚧 Future Enhancements

- [ ] Cloudinary/S3 integration for cloud storage
- [ ] Multiple file upload
- [ ] Image compression before upload
- [ ] File management dashboard
- [ ] Upload history with thumbnails

---

## 📝 License

This project is created for educational purposes as part of the Neuron5Solutions internship program.
