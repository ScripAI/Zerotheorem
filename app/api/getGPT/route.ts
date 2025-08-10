import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';
import { GoogleGenAI } from '@google/genai';

import GenratePrompt from '@/components/GenratePrompt';

const MODEL_NAME = 'gemini-2.5-flash';
const GOOGLE_API_KEY = process.env.NEXT_PUBLIC_GL_API_KEY;
const OPENAI_API_KEY = process.env.NEXT_PUBLIC_OPENAI_API_KEY;

const ai = new GoogleGenAI({
  apiKey: GOOGLE_API_KEY,
});

const openai = new OpenAI({
  apiKey: OPENAI_API_KEY,
});

interface RequestBody {
  prompt: {
    title: string;
    description?: string;
    language: string;
    keywords?: string;
    tone: string;
    time?: string;
    platform?: string;
  };
  slug: string;
}

function containsHashtag(url: string): boolean {
  return url.includes('hashtag');
}

export async function POST(request: NextRequest) {
  try {
    const body: RequestBody = await request.json();

    if (!body.prompt || !body.slug) {
      return NextResponse.json(
        { error: 'Missing required field: prompt or slug' },
        { status: 400 }
      );
    }

    const { prompt, slug } = body;
    const isHashtag = containsHashtag(slug);
    const userPrompt = GenratePrompt(prompt, slug);

    if (!userPrompt) {
      return NextResponse.json(
        { error: 'Something went wrong, please try again later' },
        { status: 500 }
      );
    }

    if (isHashtag) {
      try {
        if (!GOOGLE_API_KEY) {
          return NextResponse.json(
            { error: 'Google API key not configured. Please set NEXT_PUBLIC_GL_API_KEY environment variable.' },
            { status: 503 }
          );
        }

        const response = await ai.models.generateContent({
          model: MODEL_NAME,
          contents: userPrompt,
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
    } else {
      try {
        if (!OPENAI_API_KEY) {
          return NextResponse.json(
            { error: 'OpenAI API key not configured. Please set NEXT_PUBLIC_API_KEY environment variable.' },
            { status: 503 }
          );
        }

        const response = await openai.chat.completions.create({
          messages: [{ role: 'user', content: userPrompt }],
          model: 'gpt-4o-mini',
          temperature: 0.7,
          max_tokens: 850,
          top_p: 1,
          frequency_penalty: 0,
          presence_penalty: 0,
        });

        if (
          !response ||
          !response.choices ||
          !response.choices[0].message ||
          !response.choices[0].message.content
        ) {
          throw new Error('Invalid response from OpenAI');
        }

        return NextResponse.json({ result: response.choices[0].message.content });
      } catch (error) {
        console.error('OpenAI error:', error);
        return NextResponse.json(
          { error: 'Internal server error' },
          { status: 500 }
        );
      }
    }
  } catch (error) {
    console.error('Request parsing error:', error);
    return NextResponse.json(
      { error: 'Invalid request body' },
      { status: 400 }
    );
  }
}