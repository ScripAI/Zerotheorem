import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenAI } from '@google/genai';

const MODEL_NAME = 'gemini-2.5-flash';
const GOOGLE_API_KEY = process.env.NEXT_PUBLIC_GL_API_KEY;

const ai = new GoogleGenAI({
  apiKey: GOOGLE_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
    const { tag } = await request.json();

    if (!tag) {
      return NextResponse.json(
        { error: 'Missing required field: tag' },
        { status: 400 }
      );
    }

    if (!GOOGLE_API_KEY) {
      return NextResponse.json(
        { error: 'Google API key not configured. Please set NEXT_PUBLIC_GL_API_KEY environment variable.' },
        { status: 503 }
      );
    }

    // Extract the hashtag from the request body
    const hashtag = tag;

    // Define the prompt for generating hashtags based on the input tag
    const prompt = `Write a minimum of 30 hashtags based on the hashtag "#${hashtag}" for Instagram. Give the response in string format in one line.`;

    if (!prompt) {
      throw new Error('Something went wrong please try again after sometime');
    }

    try {
      const response = await ai.models.generateContent({
        model: MODEL_NAME,
        contents: prompt,
      });

      if (response && response.text) {
        return NextResponse.json({ result: response.text });
      } else {
        return NextResponse.json({ error: 'No valid output found' }, { status: 404 });
      }
    } catch (error) {
      console.error('Google GenAI error:', error);
      return NextResponse.json(
        { error: 'Internal server error' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Request parsing error:', error);
    return NextResponse.json(
      { error: 'Invalid request body' },
      { status: 400 }
    );
  }
}
