import { NextRequest, NextResponse } from 'next/server';

// YouTube Data API v3
// Get your API key from: https://console.cloud.google.com/apis/credentials
const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const channelId = searchParams.get('channelId');

  if (!channelId) {
    return NextResponse.json(
      { error: 'channelId parameter is required' },
      { status: 400 }
    );
  }

  if (!YOUTUBE_API_KEY) {
    return NextResponse.json(
      { error: 'YouTube API key not configured' },
      { status: 500 }
    );
  }

  try {
    // Search for live broadcasts on the channel
    const searchUrl = new URL('https://www.googleapis.com/youtube/v3/search');
    searchUrl.searchParams.set('part', 'id,snippet');
    searchUrl.searchParams.set('channelId', channelId);
    searchUrl.searchParams.set('eventType', 'live');
    searchUrl.searchParams.set('type', 'video');
    searchUrl.searchParams.set('key', YOUTUBE_API_KEY);

    const response = await fetch(searchUrl.toString());
    const data = await response.json();

    if (!response.ok) {
      console.error('YouTube API error:', data);
      return NextResponse.json(
        { error: 'YouTube API error', details: data },
        { status: response.status }
      );
    }

    // Check if there's a live video
    if (data.items && data.items.length > 0) {
      const liveVideo = data.items[0];
      return NextResponse.json({
        videoId: liveVideo.id.videoId,
        title: liveVideo.snippet.title,
        thumbnail: liveVideo.snippet.thumbnails.high.url,
        channelTitle: liveVideo.snippet.channelTitle,
        isLive: true,
      });
    }

    // No live video found
    return NextResponse.json({
      isLive: false,
      message: 'No live stream currently active on this channel',
    });
  } catch (error) {
    console.error('Error fetching live video:', error);
    return NextResponse.json(
      { error: 'Failed to fetch live video' },
      { status: 500 }
    );
  }
}
