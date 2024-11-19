import { News } from "@/interfaces";

interface NewsCardProps {
    news: News;
    onReadMore: () => void;
  }
  
  const NewsCard = ({ news, onReadMore }: NewsCardProps) => {
    return (
      <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition">
        <h2 className="text-lg font-bold">{news.topic}</h2>
        <p className="text-gray-500 text-sm">
          Publicado el {new Date(news.date).toLocaleDateString()}
        </p>
        <p className="text-gray-700 mt-2 line-clamp-3">{news.content}</p>
        <button
          onClick={onReadMore}
          className="mt-4 text-blue-600 hover:underline text-sm"
        >
          Leer más →
        </button>
      </div>
    );
  };
  
  export default NewsCard;
  