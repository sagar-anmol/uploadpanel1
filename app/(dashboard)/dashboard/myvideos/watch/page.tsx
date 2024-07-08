// pages/videos.tsx
"use client"
import React, { useEffect, useState } from 'react';
import VideoCard from './videocard/page';

interface VideoData {
  id: string;
  title: string;
  thumbnailUrl: string;
  views: number;
  date_uploaded: string;
  embedLink: string;
}

const VideosPage: React.FC = () => {
  const [videos, setVideos] = useState<VideoData[]>([]);
  const [currentVideo, setCurrentVideo] = useState<VideoData | null>(null);

  useEffect(() => {
    const data = sessionStorage.getItem('myVideosData');
    if (data) {
      const parsedData = JSON.parse(data);
      const videoData = parsedData.map((video: any, index: number) => ({
        id: video.video_id || index.toString(), // Use video_id or fallback to index as id
        title: video.title,
        thumbnailUrl: video.poster,
        views: video.view,
        date_uploaded: video.date_uploaded,
        embedLink: video.embedLink,
      }));
      setVideos(videoData);
    }
  }, []);

  const handleVideoClick = (video: VideoData) => {
    setCurrentVideo(video);
  };

  const closePopover = () => {
    setCurrentVideo(null);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      alert('Embed code copied to clipboard');
    });
  };
  const posterUrl = sessionStorage.getItem('myPosterPath') || '';
  return (
    <div className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {videos.map((video) => (
          <div key={video.id} className="relative">
            <VideoCard
              title={video.title}
              thumbnailUrl={posterUrl}
              views={video.views}
              date_uploaded={video.date_uploaded}
            />
            <button
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 text-white"
              onClick={() => handleVideoClick(video)}
            >
              <svg
                className="w-10 h-10"
                fill="red"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M4.5 3.5A1.5 1.5 0 0 0 3 5v10a1.5 1.5 0 0 0 1.5 1.5h11A1.5 1.5 0 0 0 17 15V5a1.5 1.5 0 0 0-1.5-1.5h-11zM14 10l-5.5 3V7l5.5 3z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        ))}
      </div>
      {currentVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative w-3/4 h-3/4 bg-white p-4">
            <button
              className="absolute top-2 right-2 flex items-center justify-center bg-red-500 rounded-full w-10 h-10"
              onClick={closePopover}
            >
              <svg className="text-white feather feather-x" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <button
              className="absolute top-2 right-12 text-black bg-gray-200 px-2 py-1 rounded"
              onClick={() => copyToClipboard(currentVideo.embedLink)}
            >
              Copy Embed Code
            </button>
            <iframe
              className="w-full h-full"
              src={currentVideo.embedLink}
              title={currentVideo.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideosPage;
