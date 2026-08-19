# Setup Guide - File Upload Application

## Quick Start

### Step 1: Install Dependencies

**Frontend:**
```bash
npm install
```

**Backend:**
```bash
cd server
npm install
```

### Step 2: Start the Application

You need to run both the backend server and frontend development server simultaneously.

**Option A: Using Two Terminals**

Terminal 1 - Backend Server:
```bash
cd server
npm start
```
✅ Server will run on http://localhost:3000

Terminal 2 - Frontend:
```bash
npm run dev
```
✅ Frontend will run on http://localhost:5173

**Option B: Using PowerShell (Windows)**

You can use PowerShell to run both in the same window:
```powershell
# Terminal 1
cd server ; npm start

# Terminal 2 (open new terminal)
npm run dev
```

### Step 3: Test the Application

1. Open your browser to `http://localhost:5173`
2. You should see the File Upload interface
3. Try uploading an image:
   - Drag and drop an image OR
   - Click the upload zone to select a file
4. Watch the upload progress
5. See your uploaded image displayed!

---

## Troubleshooting

### Backend Server Won't Start
- Check if port 3000 is already in use
- Make sure you installed dependencies: `cd server && npm install`
- Check for errors in the console

### Frontend Won't Connect to Backend
- Verify backend is running on http://localhost:3000
- Check browser console for CORS errors
- Make sure CORS is enabled in server.js

### File Upload Fails
- Check file size (max 5MB)
- Verify file type (JPEG, PNG, GIF, WebP only)
- Check server console for error messages
- Verify uploads directory exists in server folder

### CORS Error
If you see a CORS error in the browser console:
- Make sure the backend server is running
- Check that CORS is properly configured in server.js
- Restart both servers

---

## File Structure

```
Forms-Validation-/
├── src/                          # Frontend source
│   ├── components/
│   │   ├── FileUpload.jsx       # Main upload component
│   │   └── FileUpload.css       # Styles
│   ├── App.jsx
│   └── main.jsx
├── server/                       # Backend
│   ├── server.js                # Express server
│   ├── uploads/                 # Uploaded files (created automatically)
│   └── package.json
└── package.json                  # Frontend dependencies
```

---

## Features Checklist

Test these features to verify everything works:

- [ ] Drag and drop an image file
- [ ] Click to select a file
- [ ] See image preview before upload
- [ ] Try uploading invalid file type (e.g., .txt)
- [ ] Try uploading file >5MB (should show error)
- [ ] Watch upload progress bar
- [ ] See success message with uploaded image
- [ ] View uploaded image in full size
- [ ] Upload another file
- [ ] Check server/uploads folder for saved files

---

## Video Recording Tips

When recording your demonstration video:

1. **Show the complete flow:**
   - Open the application
   - Drag and drop OR select a file
   - Show the preview
   - Click upload
   - Show progress bar
   - Show success state with image

2. **Demonstrate validation:**
   - Try uploading wrong file type
   - Show the error message

3. **Show backend:**
   - Open the server/uploads folder
   - Show the saved files

4. **Keep it concise:** 1-2 minutes is perfect

5. **Add captions:**
   - "Drag and drop functionality"
   - "Real-time preview"
   - "Upload progress"
   - "Success - image displayed"

---

## Publishing to GitHub

```bash
# Add all files
git add .

# Commit changes
git commit -m "feat: Add file upload with drag-and-drop and backend storage"

# Push to GitHub
git push origin main
```

---

## LinkedIn Post Template

Here's a template for your LinkedIn post:

```
🎉 Week 3 Part 1 Complete! 🚀

Just completed my File Upload feature for the Neuron5Solutions internship!

✨ Key Features:
✅ Drag & Drop upload interface
✅ Real-time image preview
✅ Upload progress tracking
✅ Frontend validation (file type & size)
✅ Backend storage with Express + Multer
✅ Beautiful success state with image display

🛠️ Tech Stack: React, Vite, Node.js, Express, Multer

This project taught me about:
- FormData and file handling
- XMLHttpRequest for progress tracking
- Backend file storage
- Client-server file upload flow
- User experience design for uploads

[Video demonstration]

#WebDevelopment #ReactJS #NodeJS #FileUpload #Internship #Neuron5Solutions #LearningInPublic

GitHub: [Your repo link]
```

---

## Next Steps

After completing this project:

1. ✅ Record demonstration video
2. ✅ Post on LinkedIn
3. ✅ Push to GitHub
4. 🔥 Consider enhancements:
   - Add Cloudinary integration
   - Multiple file upload
   - Image compression
   - Upload history/gallery
   - File management dashboard

Good luck! 🚀
