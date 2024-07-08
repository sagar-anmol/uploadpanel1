// components/VideoCard.tsx

interface VideoCardProps {
  title: string;
  thumbnailUrl: string;
  views: number;
  date_uploaded: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ title, thumbnailUrl, views, date_uploaded }) => {
  return (
    <div className="max-w-xs border border-green-800 rounded-lg overflow-hidden m-0 ">
      <div className="relative">
        <img src={thumbnailUrl} alt={title} className="w-full h-48 object-contain " />
        
      </div>
      <div className="p-2">
        <p className="text-gray-500 font-semibold tracking-wide text-xs">{date_uploaded}</p>
        <p className="mt-1 font-semibold text-sm">{title}</p>
        <p className="mt-1 text-gray-600 text-xs">{views} views</p>
      </div>
    </div>
  );
};

export default VideoCard;
