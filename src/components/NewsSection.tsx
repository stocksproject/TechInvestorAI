import React, { useEffect, useState } from 'react';
import { Newspaper, ExternalLink } from 'lucide-react';

interface NewsItem {
  id: string;
  title: string;
  url: string;
  source: string;
}

const NewsSection: React.FC = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock news fetch - in a real app this would call your API
    const fetchNews = () => {
      setLoading(true);
      
      // Simulate network delay
      setTimeout(() => {
        const mockNews = [
          {
            id: '1',
            title: 'Tech Stocks Rally on Positive Earnings Reports',
            url: '#',
            source: 'Financial Times'
          },
          {
            id: '2',
            title: 'What the Latest Fed Decision Means for Your Portfolio',
            url: '#',
            source: 'Bloomberg'
          },
          {
            id: '3',
            title: 'Top 5 Undervalued Tech Stocks to Watch in 2024',
            url: '#',
            source: 'CNBC'
          },
          {
            id: '4',
            title: 'Market Analysis: Is Another Bull Run Coming?',
            url: '#',
            source: 'Wall Street Journal'
          },
          {
            id: '5',
            title: 'How AI is Transforming Investment Strategies',
            url: '#',
            source: 'Reuters'
          }
        ];
        
        setNews(mockNews);
        setLoading(false);
      }, 1000);
    };
    
    fetchNews();
  }, []);

  return (
    <div className="p-6 bg-gray-800 rounded shadow-lg transform transition-all hover:shadow-xl">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <Newspaper className="w-5 h-5 mr-2 text-blue-400" />
        Market News
      </h2>
      
      {loading ? (
        <div className="space-y-3">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="animate-pulse flex space-x-4">
              <div className="flex-1 space-y-2 py-1">
                <div className="h-4 bg-gray-700 rounded w-3/4"></div>
                <div className="h-3 bg-gray-700 rounded w-1/3"></div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <ul className="space-y-3 text-white text-sm max-h-[400px] overflow-y-auto">
          {news.map((item) => (
            <li key={item.id} className="p-3 bg-gray-700 rounded hover:bg-gray-600 transition-colors">
              <a href={item.url} target="_blank" rel="noopener noreferrer" className="flex justify-between group">
                <div>
                  <p className="text-blue-400 group-hover:text-blue-300 font-medium mb-1">{item.title}</p>
                  <p className="text-gray-400 text-xs">{item.source}</p>
                </div>
                <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-400 transition-colors" />
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NewsSection;