# Tasks: Multi-Field Form with Validation and User Feedback

## 1. Setup and Infrastructure

- [ ] 1.1 Review existing React project structure and identify where form components will live
- [ ] 1.2 Create components directory structure: `/src/components/Form/`
- [ ] 1.3 Create utilities directory for validation: `/src/utils/validation/`
- [ ] 1.4 Create types/interfaces file for TypeScript definitions (or PropTypes if using plain JS)
- [ ] 1.5 Set up test infrastructure (install testing libraries: @testing-library/react, @testing-library/jest-dom)

## 2. Core Data Models and Types

- [ ] 2.1 Define FormData interface with all 7 fields (fullName, email, country, dateOfBirth, phoneNumber, website, profileImage)
- [ ] 2.2 Define FormErrors interface for error messages
- [ ] 2.3 Define FormState interface (values, errors, touched, isSubmitting, submitCount)
- [ ] 2.4 Define ValidationRule interface for validation configuration
- [ ] 2.5 Define ToastProps and ToastType for notification system
- [ ] 2.6 Define ApiResponse interface for backend communication

## 3. Validation Engine

- [ ] 3.1 Create validation utilities module (src/utils/validation/validators.js)
- [ ] 3.2 Implement required field validator
- [ ] 3.3 Implement email format validator with regex
- [ ] 3.4 Implement full name validator (2-100 chars, letters and spaces only)
- [ ] 3.5 Implement phone number validator with regex
- [ ] 3.6 Implement URL validator for website field
- [ ] 3.7 Implement age validator (calculate age, check 18+ requirement)
- [ ] 3.8 Implement file size validator (max 5MB)
- [ ] 3.9 Implement file type validator (image types only)
- [ ] 3.10 Create validateField function (single field validation)
- [ ] 3.11 Create validateAllFields function (complete form validation)
- [ ] 3.12 Create validation rules configuration object mapping fields to rules


## 4. Form Field Components

- [ ] 4.1 Create TextField component (text input with error display)
- [ ] 4.2 Create EmailField component (email input with error display)
- [ ] 4.3 Create SelectField component (dropdown/select with error display)
- [ ] 4.4 Create DateField component (date picker with error display)
- [ ] 4.5 Create PhoneField component (phone input with error display)
- [ ] 4.6 Create URLField component (URL input with error display)
- [ ] 4.7 Create FileUploadField component (file input with size/type validation)
- [ ] 4.8 Add ARIA attributes to all field components (aria-invalid, aria-describedby)
- [ ] 4.9 Add error message display with role="alert" for screen readers
- [ ] 4.10 Style error states (red border, error text color)

## 5. Toast/Banner Notification Component

- [ ] 5.1 Create Toast component with message, type, duration props
- [ ] 5.2 Implement auto-dismiss with setTimeout (default 5000ms)
- [ ] 5.3 Implement manual close button
- [ ] 5.4 Add ARIA live region attributes (role="alert", aria-live="polite")
- [ ] 5.5 Style toast for different types (success=green, error=red, warning=yellow, info=blue)
- [ ] 5.6 Implement toast positioning (fixed position, top-right or top-center)
- [ ] 5.7 Add fade-in and fade-out animations
- [ ] 5.8 Create useToast custom hook for managing toast state

## 6. Main Form Component

- [ ] 6.1 Create MultiFieldForm component shell
- [ ] 6.2 Initialize form state with useState (values, errors, touched, isSubmitting, submitCount)
- [ ] 6.3 Implement handleFieldChange function (update field value, clear error)
- [ ] 6.4 Implement handleFieldBlur function (mark as touched, validate field)
- [ ] 6.5 Implement handleSubmit function with client-side validation
- [ ] 6.6 Add form submission logic (disable button, show loading, API call)
- [ ] 6.7 Implement resetForm function
- [ ] 6.8 Render all 7 form fields with proper props
- [ ] 6.9 Create Submit button with loading state
- [ ] 6.10 Integrate toast notifications
- [ ] 6.11 Handle initialValues prop for form pre-population
- [ ] 6.12 Implement onSuccess and onError callback props


## 7. API Client

- [ ] 7.1 Create API client module (src/utils/api/formApi.js)
- [ ] 7.2 Implement submitForm function with fetch API
- [ ] 7.3 Handle multipart/form-data for file uploads
- [ ] 7.4 Implement transformBackendErrors function to map backend errors to FormErrors
- [ ] 7.5 Add error handling for network errors (timeout, no connection)
- [ ] 7.6 Add error handling for HTTP status codes (400, 500, etc.)
- [ ] 7.7 Configure API endpoint URL (environment variable or config)
- [ ] 7.8 Add request timeout configuration

## 8. Styling

- [ ] 8.1 Create Form.css for form component styles
- [ ] 8.2 Style form layout (field groups, spacing, alignment)
- [ ] 8.3 Style form fields (inputs, selects, file upload)
- [ ] 8.4 Style error messages (color, font size, icon)
- [ ] 8.5 Style submit button (normal, hover, disabled, loading states)
- [ ] 8.6 Style loading spinner animation
- [ ] 8.7 Style toast notifications (positioning, colors, animations)
- [ ] 8.8 Add responsive styles for mobile devices
- [ ] 8.9 Ensure proper focus styles for accessibility
- [ ] 8.10 Add hover and active states for interactive elements

## 9. Integration

- [ ] 9.1 Import MultiFieldForm component into App.jsx
- [ ] 9.2 Add form to application with appropriate layout
- [ ] 9.3 Implement onSuccess handler in App.jsx (console.log or navigate)
- [ ] 9.4 Implement onError handler in App.jsx (error logging)
- [ ] 9.5 Test complete user flow from field input to submission
- [ ] 9.6 Verify toast notifications appear correctly
- [ ] 9.7 Test form reset after successful submission


## 10. Unit Testing

- [ ] 10.1 Write tests for required field validator
- [ ] 10.2 Write tests for email validator (valid and invalid formats)
- [ ] 10.3 Write tests for full name validator (length, character restrictions)
- [ ] 10.4 Write tests for phone validator
- [ ] 10.5 Write tests for URL validator
- [ ] 10.6 Write tests for age validator (exactly 18, under 18, over 18, edge cases)
- [ ] 10.7 Write tests for file size validator (exactly 5MB, over 5MB, under 5MB)
- [ ] 10.8 Write tests for file type validator
- [ ] 10.9 Write tests for validateField function
- [ ] 10.10 Write tests for validateAllFields function
- [ ] 10.11 Write tests for handleFieldChange
- [ ] 10.12 Write tests for handleFieldBlur
- [ ] 10.13 Write tests for resetForm
- [ ] 10.14 Write tests for transformBackendErrors

## 11. Property-Based Testing

- [ ] 11.1 Install fast-check library for property-based testing
- [ ] 11.2 Write property test: email validation never throws errors
- [ ] 11.3 Write property test: form state consistency after any action sequence
- [ ] 11.4 Write property test: validation determinism (same input = same output)
- [ ] 11.5 Write property test: error messages always non-empty when validation fails
- [ ] 11.6 Write property test: file size validation correctness for all sizes

## 12. Integration Testing

- [ ] 12.1 Install MSW (Mock Service Worker) for API mocking
- [ ] 12.2 Write test: successful form submission flow
- [ ] 12.3 Write test: client-side validation failure prevents submission
- [ ] 12.4 Write test: backend validation error displays correctly
- [ ] 12.5 Write test: network error handling
- [ ] 12.6 Write test: server error (500) handling
- [ ] 12.7 Write test: form reset after successful submission
- [ ] 12.8 Write test: form data preserved after validation error
- [ ] 12.9 Write test: toast notifications display correctly
- [ ] 12.10 Write test: submit button disabled during submission
- [ ] 12.11 Write test: keyboard navigation and accessibility


## 13. Error Handling

- [ ] 13.1 Implement error handling for client-side validation failures
- [ ] 13.2 Implement error handling for backend validation failures (400)
- [ ] 13.3 Implement error handling for network errors
- [ ] 13.4 Implement error handling for server errors (500, 503)
- [ ] 13.5 Implement error handling for file upload size exceeded
- [ ] 13.6 Implement error handling for invalid file types
- [ ] 13.7 Add error logging to console for debugging
- [ ] 13.8 Ensure submit button re-enabled after all error scenarios
- [ ] 13.9 Test all error scenarios produce correct user feedback

## 14. Accessibility

- [ ] 14.1 Add proper label associations (htmlFor and id) for all fields
- [ ] 14.2 Add aria-invalid attribute to fields with errors
- [ ] 14.3 Add aria-describedby to link fields with error messages
- [ ] 14.4 Add aria-busy to submit button during submission
- [ ] 14.5 Add role="alert" to error messages for screen reader announcements
- [ ] 14.6 Add aria-live="polite" to toast notifications
- [ ] 14.7 Implement focus management (focus on first error after validation)
- [ ] 14.8 Ensure all interactive elements are keyboard accessible
- [ ] 14.9 Test with keyboard navigation (Tab, Enter, Escape)
- [ ] 14.10 Test with screen reader (NVDA or JAWS)

## 15. Performance Optimization

- [ ] 15.1 Optimize validation functions to execute in under 10ms
- [ ] 15.2 Use React.memo for field components to prevent unnecessary re-renders
- [ ] 15.3 Implement debouncing for expensive validations if needed
- [ ] 15.4 Ensure file validation completes quickly (before user can click submit)
- [ ] 15.5 Batch state updates where possible
- [ ] 15.6 Profile component render performance with React DevTools


## 16. Security Considerations

- [ ] 16.1 Ensure all form submissions use HTTPS in production
- [ ] 16.2 Verify backend implements CSRF protection
- [ ] 16.3 Verify backend implements rate limiting
- [ ] 16.4 Verify backend independently validates all fields
- [ ] 16.5 Ensure no sensitive data stored in localStorage or sessionStorage
- [ ] 16.6 Review code for XSS vulnerabilities (React handles this by default)
- [ ] 16.7 Verify file uploads validated on both client and server
- [ ] 16.8 Document security requirements for backend team

## 17. Documentation

- [ ] 17.1 Add JSDoc comments to all validation functions
- [ ] 17.2 Add JSDoc comments to all component props
- [ ] 17.3 Create README for form component usage
- [ ] 17.4 Document validation rules and error messages
- [ ] 17.5 Document API contract (request/response format)
- [ ] 17.6 Document accessibility features
- [ ] 17.7 Document testing approach and coverage
- [ ] 17.8 Create usage examples for different scenarios

## 18. Browser Testing and QA

- [ ] 18.1 Test in Chrome (latest)
- [ ] 18.2 Test in Firefox (latest)
- [ ] 18.3 Test in Safari (latest)
- [ ] 18.4 Test in Edge (latest)
- [ ] 18.5 Test on iOS Safari (mobile)
- [ ] 18.6 Test on Chrome Android (mobile)
- [ ] 18.7 Test responsive layout on different screen sizes
- [ ] 18.8 Test file upload on mobile devices
- [ ] 18.9 Test date picker on mobile devices
- [ ] 18.10 Verify all validation scenarios work across browsers


## 19. Final Review and Refinement

- [ ] 19.1 Review code for adherence to React best practices
- [ ] 19.2 Review error messages for clarity and helpfulness
- [ ] 19.3 Review styling for consistency and polish
- [ ] 19.4 Verify all functional requirements are met (FR-1 through FR-18)
- [ ] 19.5 Verify all non-functional requirements are met (NFR-1 through NFR-10)
- [ ] 19.6 Run full test suite and ensure all tests pass
- [ ] 19.7 Check code coverage (aim for 90%+)
- [ ] 19.8 Perform end-to-end testing of complete user journeys
- [ ] 19.9 Address any remaining bugs or edge cases
- [ ] 19.10 Prepare for production deployment

## Dependencies

### Required
- React 19.2.7 (already installed)
- React DOM 19.2.7 (already installed)

### Development/Testing (to be installed)
- @testing-library/react
- @testing-library/jest-dom
- @testing-library/user-event
- fast-check (for property-based testing)
- msw (for API mocking)

### Optional
- TypeScript (for type safety, if not using PropTypes)
- ESLint with React plugins (already installed)

## Notes

- This implementation uses vanilla React with hooks, no external form libraries
- All code examples in design document use TypeScript syntax, but can be adapted to JavaScript with PropTypes
- Backend API must be implemented separately following the documented contract
- Country list for dropdown needs to be provided (can be hardcoded or fetched from API)
- Focus on completing validation and core functionality before optimization
- Prioritize accessibility and security throughout implementation
