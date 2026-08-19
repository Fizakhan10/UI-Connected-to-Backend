# 🧪 Testing Instructions - Week 4 Part 1

## Before You Start Testing

Make sure both servers are running:

✅ **Backend**: `cd server && npm start` (Port 3000)  
✅ **Frontend**: `npm run dev` (Port 5173)

---

## Test Case 1: Drag and Drop Upload

**Steps:**
1. Open http://localhost:5173 in your browser
2. Find any image file on your computer (JPEG, PNG, GIF, or WebP)
3. Drag the file over the upload zone
4. Observe the zone changes color and scales up
5. Drop the file

**Expected Result:**
- ✅ Zone highlights during drag
- ✅ Image preview appears immediately
- ✅ File name and size displayed
- ✅ "Upload File" button becomes enabled

---

## Test Case 2: Click to Select Upload

**Steps:**
1. Click anywhere on the upload zone
2. Browser file picker opens
3. Select an image file
4. Click "Open"

**Expected Result:**
- ✅ File picker opens
- ✅ Image preview appears
- ✅ File details shown
- ✅ Upload button enabled

---

## Test Case 3: Upload Progress

**Steps:**
1. Select a file (use larger file for better visibility, but <5MB)
2. Click "Upload File" button
3. Watch the progress bar

**Expected Result:**
- ✅ Button becomes disabled
- ✅ Button text changes to "Uploading..."
- ✅ Progress bar appears
- ✅ Percentage increases from 0 to 100%
- ✅ Takes a few seconds to complete

---

## Test Case 4: Upload Success

**Steps:**
1. Wait for upload to complete (100%)
2. Observe the success state

**Expected Result:**
- ✅ Success animation plays (checkmark appears)
- ✅ Success message: "Upload Successful!"
- ✅ Uploaded image displays
- ✅ File name shown
- ✅ "View Full Size" link appears
- ✅ "Upload Another File" button shows

---

## Test Case 5: View Uploaded Image

**Steps:**
1. After successful upload
2. Click "View Full Size" link

**Expected Result:**
- ✅ Opens in new browser tab
- ✅ Shows full-size image
- ✅ URL format: `http://localhost:3000/uploads/filename-123456.jpg`

---

## Test Case 6: Upload Another File

**Steps:**
1. After successful upload
2. Click "Upload Another File" button

**Expected Result:**
- ✅ Form resets
- ✅ Returns to upload zone
- ✅ Ready for new file

---

## Test Case 7: Invalid File Type Validation

**Steps:**
1. Create a text file (.txt) or use any non-image file
2. Try to drag and drop it OR select it

**Expected Result:**
- ✅ Red error message appears
- ✅ Message: "Only JPEG, PNG, GIF, and WebP images are allowed"
- ✅ No preview shown
- ✅ Upload button disabled
- ✅ Red border on upload zone

---

## Test Case 8: File Size Validation

**Steps:**
1. Find or create an image file larger than 5MB
2. Try to upload it

**Expected Result:**
- ✅ Error message appears
- ✅ Message: "File size must be less than 5MB"
- ✅ No preview shown
- ✅ Upload button disabled

---

## Test Case 9: Backend File Storage

**Steps:**
1. Successfully upload an image
2. Open file explorer
3. Navigate to: `C:\Users\Administrator\Documents\fiza-dev\server\uploads\`
4. Check the folder contents

**Expected Result:**
- ✅ Folder exists
- ✅ Uploaded file is saved there
- ✅ Filename format: `originalname-1234567890-123456789.jpg`
- ✅ File can be opened and viewed

---

## Test Case 10: Multiple Uploads

**Steps:**
1. Upload first image successfully
2. Click "Upload Another File"
3. Upload second image
4. Check `server/uploads` folder

**Expected Result:**
- ✅ Both files saved
- ✅ Different filenames (unique)
- ✅ No files overwritten

---

## Test Case 11: Backend API Test

**Steps:**
1. Open browser console (F12)
2. Go to Network tab
3. Upload a file
4. Check the network request

**Expected Result:**
- ✅ Request: `POST http://localhost:3000/api/upload`
- ✅ Status: 200 OK
- ✅ Response contains:
  ```json
  {
    "success": true,
    "message": "File uploaded successfully",
    "fileUrl": "http://localhost:3000/uploads/...",
    "fileDetails": { ... }
  }
  ```

---

## Test Case 12: Responsive Design

**Steps:**
1. Open browser DevTools (F12)
2. Toggle device toolbar (Ctrl+Shift+M)
3. Test on different screen sizes:
   - Mobile (375px)
   - Tablet (768px)
   - Desktop (1920px)

**Expected Result:**
- ✅ Layout adapts to screen size
- ✅ Upload zone scales properly
- ✅ Buttons stack on mobile
- ✅ Text remains readable
- ✅ Images resize appropriately

---

## Test Case 13: Clear Button

**Steps:**
1. Select a file (don't upload)
2. File preview appears
3. Click "Clear" button

**Expected Result:**
- ✅ Preview disappears
- ✅ Form resets
- ✅ Back to empty state
- ✅ Upload button disabled

---

## Test Case 14: Network Error Handling

**Steps:**
1. Stop the backend server (Ctrl+C in server terminal)
2. Try to upload a file
3. Wait for response

**Expected Result:**
- ✅ Error message appears
- ✅ Message: "Upload failed. Please try again."
- ✅ Progress resets
- ✅ Can try again

---

## Test Case 15: Server Validation

**Steps:**
1. Open `server/server.js`
2. Temporarily change `fileFilter` to allow all files
3. Try uploading a .txt file from browser
4. Should still validate on server

**Expected Result:**
- ✅ Server rejects invalid file types
- ✅ Returns error response
- ✅ File not saved to disk
- ✅ Error shown in browser

---

## Browser Compatibility Testing

Test in multiple browsers:

- [ ] Chrome/Edge (Chromium)
- [ ] Firefox
- [ ] Safari (if available)

All features should work consistently.

---

## Performance Testing

**Test with different file sizes:**

| Size | Expected Behavior |
|------|------------------|
| 100KB | Instant upload, progress bar barely visible |
| 500KB | Quick upload, progress visible for 1-2 seconds |
| 2MB | Moderate upload, progress clearly visible |
| 5MB | Slower upload, full progress experience |
| >5MB | Blocked by validation, error message |

---

## Accessibility Testing

**Keyboard Navigation:**
1. Tab to upload zone
2. Press Enter to open file picker
3. Select file with arrow keys
4. Tab to Upload button
5. Press Enter to upload

**Screen Reader:**
- Upload zone should be announced
- File selection should be announced
- Progress updates should be announced
- Success/error messages should be announced

---

## Bug Tracking

If you find any issues, note them here:

| Issue | Severity | Steps to Reproduce | Status |
|-------|----------|-------------------|--------|
| | | | |

---

## Testing Completion Checklist

- [ ] All 15 test cases passed
- [ ] Tested in multiple browsers
- [ ] Tested responsive design
- [ ] Tested with various file sizes
- [ ] Tested error handling
- [ ] Backend storage verified
- [ ] Performance acceptable
- [ ] No console errors
- [ ] Ready for video recording

---

## Video Recording - What to Show

Based on testing, show these in your video:

1. ✅ **Test Case 1** - Drag and drop (most impressive)
2. ✅ **Test Case 3** - Upload progress
3. ✅ **Test Case 4** - Success state
4. ✅ **Test Case 5** - View uploaded image
5. ✅ **Test Case 7** - Error handling
6. ✅ **Test Case 9** - Backend file storage

---

## Common Issues and Solutions

### Issue: CORS Error
**Solution:**
```bash
# Restart backend server
cd server
npm start
```

### Issue: Port Already in Use
**Solution:**
```bash
# Kill process on port 3000
netstat -ano | findstr :3000
taskkill /PID [PID_NUMBER] /F
```

### Issue: Upload Hangs
**Solution:**
- Check backend server is running
- Check network tab for errors
- Restart both servers

### Issue: Files Not Saving
**Solution:**
- Check `server/uploads` folder exists
- Check file permissions
- Check server console for errors

---

## Ready to Record? ✅

Once all tests pass, you're ready to:
1. Record your demonstration video
2. Post on LinkedIn
3. Submit your work

**Great job completing Week 4 Part 1! 🎉**
