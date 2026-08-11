# Requirements Document: Multi-Field Form with Validation and User Feedback

## Functional Requirements

### FR-1: Form Fields
The system shall provide a multi-field form with the following input fields:
- Full Name (text input)
- Email Address (email input)
- Country (dropdown/select)
- Date of Birth (date picker)
- Phone Number (text input with pattern)
- Website (URL input, optional)
- Profile Image (file upload, optional)

### FR-2: Client-Side Validation
The system shall perform client-side validation on all form fields with the following rules:
- **Full Name**: Required, minimum 2 characters, maximum 100 characters, alphabetic characters and spaces only
- **Email**: Required, valid email format, maximum 255 characters
- **Country**: Required, must be selected from predefined list
- **Date of Birth**: Required, valid date, user must be at least 18 years old
- **Phone Number**: Required, valid phone format (digits, spaces, dashes, parentheses allowed)
- **Website**: Optional, if provided must be valid URL with http:// or https:// protocol
- **Profile Image**: Optional, if provided must be image file (jpg, jpeg, png, gif, webp) with maximum size of 5MB

### FR-3: Field-Specific Error Messages
The system shall display clear, field-specific error messages that describe exactly what is wrong, not generic "invalid input" messages.

### FR-4: Validation Timing
The system shall validate fields at the following times:
- Individual field validation on blur (when user leaves the field)
- Complete form validation on submit button click
- File validation immediately on file selection

### FR-5: Error Display
The system shall display validation errors:
- Inline below the respective field
- Only after the field has been touched (focused and then blurred)
- With appropriate ARIA attributes for accessibility


### FR-6: Server-Side Validation
The system shall implement independent server-side validation that:
- Never trusts client-side validation results
- Validates all fields with same or stricter rules as client-side
- Returns structured error responses with field-specific messages
- Handles backend-specific validation (e.g., email uniqueness checks)

### FR-7: Submit Button State Management
The system shall manage submit button state as follows:
- Disable submit button when form submission is in progress
- Re-enable submit button after submission completes (success or error)
- Display loading indicator while submission is in progress
- Show "Submitting..." text during submission

### FR-8: Toast/Banner Notifications
The system shall display toast or banner notifications for:
- **Success**: "Form submitted successfully!" (green/success styling)
- **Validation Error**: "Please correct the errors and try again" (red/error styling)
- **Network Error**: "Network error. Please check your connection and try again."
- **Server Error**: "Something went wrong on our end. Please try again later."

### FR-9: Toast Auto-Dismiss
The system shall automatically dismiss toast notifications after a configurable duration (default: 5 seconds) with option for manual dismissal via close button.

### FR-10: Form Reset
The system shall reset the form to initial state after successful submission, clearing:
- All field values
- All error messages
- All touched states
- Submission count

### FR-11: Form State Persistence During Errors
The system shall preserve form data when submission fails due to validation or server errors, allowing users to correct issues without re-entering all data.


### FR-12: File Upload Handling
The system shall handle file uploads with:
- Client-side file size validation (max 5MB)
- Client-side file type validation (image formats only)
- Immediate validation on file selection
- Clear error messages for invalid files
- Accept attribute limiting file picker to image types

### FR-13: Age Calculation
The system shall calculate age from date of birth by:
- Comparing birth date to current date
- Accounting for leap years
- Using UTC to avoid timezone issues
- Rejecting users under 18 years old

### FR-14: Error State Recovery
The system shall clear field errors when:
- User modifies a field that previously had an error
- User corrects the value and it passes validation on blur

### FR-15: API Communication
The system shall communicate with backend via:
- POST request to /api/form endpoint (or configurable)
- multipart/form-data format for file uploads
- JSON format for form data if no file upload
- Proper error handling for 400, 500, network errors

### FR-16: Backend Error Transformation
The system shall transform backend error responses to match frontend error format, handling:
- Various backend error formats (arrays, nested objects, etc.)
- Field name mapping if backend uses different names
- Multiple errors per field (extract first error)
- Unrecognized errors mapped to general form error


### FR-17: Optional Callback Handlers
The system shall support optional callback props:
- onSuccess callback triggered after successful submission with response data
- onError callback triggered after submission failure with error object

### FR-18: Initial Values Support
The system shall support optional initialValues prop to pre-populate form fields for edit scenarios.

## Non-Functional Requirements

### NFR-1: Accessibility Compliance
The system shall meet WCAG 2.1 Level AA accessibility standards:
- All form fields must have associated labels
- Error messages must be announced to screen readers via ARIA live regions
- Invalid fields must have aria-invalid="true" attribute
- Error messages must be associated with fields via aria-describedby
- Submit button must indicate busy state with aria-busy during submission
- Keyboard navigation must be fully supported
- Focus management must direct user to first error on validation failure

### NFR-2: Performance
The system shall meet the following performance criteria:
- Validation functions execute in under 10ms per field
- Form submission UI feedback appears within 100ms of user action
- No perceptible lag during field input or validation
- File validation completes before user can click submit

### NFR-3: Browser Compatibility
The system shall function correctly in:
- Modern Chrome, Firefox, Safari, Edge (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Android)
- Graceful degradation for older browsers


### NFR-4: Security
The system shall implement the following security measures:
- Never trust client-side validation alone
- Backend must independently validate all inputs
- Input sanitization to prevent XSS attacks
- File upload validation on both client and server
- CSRF protection for form submission
- Rate limiting on backend to prevent spam
- File type validation beyond MIME type checking
- No sensitive data stored in localStorage or sessionStorage
- All form submissions over HTTPS

### NFR-5: Usability
The system shall provide good user experience:
- Clear, actionable error messages in plain language
- Errors appear immediately after user leaves field (on blur)
- Loading indicator visible during submission
- Submit button disabled during submission to prevent double-submit
- Form data preserved on error to avoid re-entry
- Success feedback clearly indicates completion
- Toast notifications auto-dismiss but allow manual close

### NFR-6: Maintainability
The system shall be designed for maintainability:
- Validation rules defined in centralized configuration
- Clear separation of concerns (presentation, validation, submission)
- Component-based architecture with single responsibility
- Well-documented interfaces and data models
- Testable functions with clear preconditions and postconditions

### NFR-7: Testability
The system shall be designed for comprehensive testing:
- Unit tests for all validation functions (90%+ coverage)
- Property-based tests for validation robustness
- Integration tests for complete form submission flows
- Mock API responses for testing error scenarios
- All error paths covered by tests


### NFR-8: Error Handling Robustness
The system shall handle all error scenarios gracefully:
- Network timeouts and connection failures
- Backend server errors (5xx)
- Backend validation errors (400)
- Invalid file uploads
- Malformed backend responses
- No error should crash the application
- All errors should be logged for debugging

### NFR-9: Responsiveness
The system shall be responsive across device sizes:
- Mobile-first design approach
- Touch-friendly input fields and buttons
- Readable error messages on small screens
- Proper form layout on tablets and desktops
- Date picker optimized for mobile devices

### NFR-10: Code Quality
The system shall maintain high code quality:
- Follow React best practices and patterns
- Use TypeScript for type safety (or PropTypes for JavaScript)
- Consistent code formatting
- Meaningful variable and function names
- No code duplication
- Proper error boundaries for React components

## Constraints

### C-1: Technology Stack
- Frontend framework: React 19.2.7
- Build tool: Vite
- Styling: CSS (no CSS framework requirement)
- No external form library dependencies (Formik, React Hook Form) for core implementation

### C-2: Backend Contract
- Backend endpoint: POST /api/form (configurable)
- Request format: multipart/form-data or JSON
- Response format: JSON with {success, data, errors, message} structure
- Backend must provide structured validation errors


### C-3: File Upload Limits
- Maximum file size: 5MB
- Allowed file types: JPG, JPEG, PNG, GIF, WebP
- Single file upload per form submission

### C-4: Age Restriction
- Minimum age requirement: 18 years old
- Age calculated from date of birth to current date

### C-5: Browser Support
- Must support ES6+ JavaScript features
- Must support modern browser APIs (Fetch, FormData, File API)
- No support required for Internet Explorer

## Assumptions

### A-1: Backend Availability
The backend API endpoint is available and properly configured to accept form submissions with the expected request/response format.

### A-2: Network Connectivity
Users have stable internet connection for form submission. Network errors are handled gracefully but users are expected to have basic connectivity.

### A-3: JavaScript Enabled
Users have JavaScript enabled in their browsers (required for React application).

### A-4: Country List
A predefined list of countries is available for the dropdown selection. This list can be hardcoded or fetched from an API.

### A-5: Date Input Support
Modern browsers support native date input type. For older browsers, a fallback or polyfill may be needed.

### A-6: Backend Validation Implementation
Backend implements proper validation and returns errors in a structured, parseable format.

