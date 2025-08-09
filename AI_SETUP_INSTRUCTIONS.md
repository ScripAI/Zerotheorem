# AI API Setup Instructions

## ✅ Dependencies Installed

The following packages have been successfully installed:

### 1. Google GenAI (for hashtag-related routes) ✅
- Package: `@google/genai`
- Model: `gemini-2.5-flash`

### 2. OpenAI (for general AI content generation) ✅
- Package: `openai` 
- Model: `gpt-4o-mini`

## Environment Variables

Make sure you have the following environment variables set in your `.env.local` file:

```env
# Google GenAI API Key
NEXT_PUBLIC_GL_API_KEY=your_google_genai_api_key_here

# OpenAI API Key
NEXT_PUBLIC_API_KEY=your_openai_api_key_here
```

## ✅ Configuration Complete

The API route has been fully configured and is ready to use:

1. ✅ Import statements are active
2. ✅ Client initialization is complete
3. ✅ API call logic is implemented for both branches
4. ✅ Proper error handling for missing API keys

## API Usage

The API expects a POST request with the following structure:

```json
{
  "prompt": {
    "title": "Your content title",
    "description": "Optional description",
    "language": "English",
    "keywords": "Optional keywords",
    "tone": "Professional",
    "time": "Optional time constraint",
    "platform": "Optional platform"
  },
  "slug": "content-type-slug"
}
```

The API will automatically choose between Google GenAI (for hashtag-related content) and OpenAI (for other content types) based on the slug.
