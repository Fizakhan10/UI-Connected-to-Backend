import { useState, useRef } from 'react';
import './FileUpload.css';

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadedFileUrl, setUploadedFileUrl] = useState(null);
  const [error, setError] = useState(null);
  const fileInputRef = useRef(null);

  // File validation settings
  const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
  const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];

  const validateFile = (file) => {
    if (!file) {
      return 'Please select a file';
    }

    if (!ALLOWED_TYPES.includes(file.type)) {
      return 'Only JPEG, PNG, GIF, and WebP images are allowed';
    }

    if (file.size > MAX_FILE_SIZE) {
      return `File size must be less than ${MAX_FILE_SIZE / (1024 * 1024)}MB`;
    }

    return null;
  };

  const handleFileSelect = (selectedFile) => {
    setError(null);
    
    const validationError = validateFile(selectedFile);
    if (validationError) {
      setError(validationError);
      return;
    }

    setFile(selectedFile);

    // Create preview for image files
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result);
    };
    reader.readAsDataURL(selectedFile);
  };

  const handleInputChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      handleFileSelect(selectedFile);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);

    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      handleFileSelect(droppedFile);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      setError('Please select a file first');
      return;
    }

    setIsUploading(true);
    setUploadProgress(0);
    setError(null);

    const formData = new FormData();
    formData.append('file', file);

    try {
      const xhr = new XMLHttpRequest();

      // Track upload progress
      xhr.upload.addEventListener('progress', (e) => {
        if (e.lengthComputable) {
          const percentComplete = (e.loaded / e.total) * 100;
          setUploadProgress(Math.round(percentComplete));
        }
      });

      // Handle completion
      xhr.addEventListener('load', () => {
        if (xhr.status === 200) {
          const response = JSON.parse(xhr.responseText);
          setUploadedFileUrl(response.fileUrl);
          setUploadProgress(100);
          
          // Reset form after successful upload
          setTimeout(() => {
            setIsUploading(false);
          }, 500);
        } else {
          throw new Error('Upload failed');
        }
      });

      // Handle errors
      xhr.addEventListener('error', () => {
        setError('Upload failed. Please try again.');
        setIsUploading(false);
        setUploadProgress(0);
      });

      // Send request
      xhr.open('POST', 'http://localhost:3000/api/upload');
      xhr.send(formData);

    } catch (err) {
      setError(err.message || 'Upload failed. Please try again.');
      setIsUploading(false);
      setUploadProgress(0);
    }
  };

  const handleReset = () => {
    setFile(null);
    setPreview(null);
    setUploadProgress(0);
    setIsUploading(false);
    setUploadedFileUrl(null);
    setError(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
  };

  return (
    <div className="file-upload-container">
      <h2>File/Image Upload</h2>
      <p className="subtitle">Upload images with drag-and-drop or file picker</p>

      {!uploadedFileUrl ? (
        <>
          {/* Drag and Drop Zone */}
          <div
            className={`drop-zone ${isDragging ? 'dragging' : ''} ${error ? 'error' : ''}`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
          >
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleInputChange}
              accept="image/*"
              style={{ display: 'none' }}
            />

            {!preview ? (
              <div className="drop-zone-content">
                <svg className="upload-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                <p className="drop-zone-text">
                  <strong>Click to upload</strong> or drag and drop
                </p>
                <p className="drop-zone-hint">
                  PNG, JPG, GIF or WebP (Max 5MB)
                </p>
              </div>
            ) : (
              <div className="preview-container">
                <img src={preview} alt="Preview" className="preview-image" />
                <div className="file-info">
                  <p className="file-name">{file?.name}</p>
                  <p className="file-size">{formatFileSize(file?.size || 0)}</p>
                </div>
              </div>
            )}
          </div>

          {/* Error Message */}
          {error && (
            <div className="error-message">
              <svg className="error-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
              </svg>
              {error}
            </div>
          )}

          {/* Upload Progress */}
          {isUploading && (
            <div className="progress-container">
              <div className="progress-bar">
                <div 
                  className="progress-fill" 
                  style={{ width: `${uploadProgress}%` }}
                ></div>
              </div>
              <p className="progress-text">{uploadProgress}%</p>
            </div>
          )}

          {/* Action Buttons */}
          <div className="button-group">
            <button
              className="btn btn-primary"
              onClick={handleUpload}
              disabled={!file || isUploading}
            >
              {isUploading ? 'Uploading...' : 'Upload File'}
            </button>
            {file && !isUploading && (
              <button className="btn btn-secondary" onClick={handleReset}>
                Clear
              </button>
            )}
          </div>
        </>
      ) : (
        /* Success State */
        <div className="success-container">
          <div className="success-icon-wrapper">
            <svg className="success-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3>Upload Successful!</h3>
          
          <div className="uploaded-preview">
            <img src={uploadedFileUrl} alt="Uploaded file" />
          </div>
          
          <div className="uploaded-info">
            <p className="uploaded-filename">{file?.name}</p>
            <a 
              href={uploadedFileUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="download-link"
            >
              View Full Size
            </a>
          </div>

          <button className="btn btn-primary" onClick={handleReset}>
            Upload Another File
          </button>
        </div>
      )}

      {/* Instructions */}
      <div className="instructions">
        <h3>Features:</h3>
        <ul>
          <li>✅ Drag and drop or click to select files</li>
          <li>✅ Real-time image preview before upload</li>
          <li>✅ File type and size validation</li>
          <li>✅ Upload progress indicator</li>
          <li>✅ Success confirmation with image display</li>
          <li>✅ Backend storage integration</li>
        </ul>
      </div>
    </div>
  );
};

export default FileUpload;
