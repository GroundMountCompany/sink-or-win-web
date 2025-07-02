# Email Setup for Sink or Win

This project uses Resend to handle contact form submissions. Here's how to set it up:

## Environment Variables

Create a `.env.local` file in the root directory with the following:

```
RESEND_API_KEY=your_resend_api_key_here
```

## Getting a Resend API Key

1. Go to [Resend](https://resend.com) and create an account
2. Navigate to the API Keys section
3. Create a new API key specifically for this Sink or Win project
4. Copy the API key and add it to your `.env.local` file

## Email Configuration

The email system is configured to:
- **From:** no-reply@sinkorwin.com
- **To:** erik@sinkorwin.com
- **Subject:** Host Inquiry – [Course Name]

## Form Fields

The contact form includes:
- Name (required)
- Course Name (optional)
- Email (required)
- Phone (optional)
- Message (required)

## API Endpoint

The form submits to `/api/send-email` which:
- Validates required fields
- Sends email via Resend
- Returns JSON response with success/error status
- Includes proper error handling

## Deployment

Make sure to add the `RESEND_API_KEY` environment variable to your deployment platform (Vercel, Netlify, etc.).

## Security Notes

- This API key is scoped only to this Sink or Win project
- It will not interfere with other Ground Mount Company repositories
- The API route only accepts POST requests
- Input validation is implemented for required fields 