import { NextResponse } from 'next/server';
import { getPageImage, getPageImageUrl } from '@/sanity/lib/pageImages';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ key: string }> }
) {
  const { key } = await params;
  
  try {
    const image = await getPageImage(key);
    
    if (!image) {
      return NextResponse.json(
        { error: 'Image not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(image);
  } catch (error) {
    console.error('Error fetching page image:', error);
    return NextResponse.json(
      { error: 'Failed to fetch image' },
      { status: 500 }
    );
  }
}