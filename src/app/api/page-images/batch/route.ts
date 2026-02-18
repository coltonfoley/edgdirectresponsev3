import { NextResponse } from 'next/server';
import { getPageImagesByKeys } from '@/sanity/lib/pageImages';

export async function POST(request: Request) {
  try {
    const { keys } = await request.json();
    
    if (!Array.isArray(keys)) {
      return NextResponse.json(
        { error: 'Keys must be an array' },
        { status: 400 }
      );
    }
    
    const images = await getPageImagesByKeys(keys);
    
    return NextResponse.json(images);
  } catch (error) {
    console.error('Error fetching page images:', error);
    return NextResponse.json(
      { error: 'Failed to fetch images' },
      { status: 500 }
    );
  }
}