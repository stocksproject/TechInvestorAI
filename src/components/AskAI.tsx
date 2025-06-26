import React, { useState } from 'react';
import { Send, BrainCircuit } from 'lucide-react';

const AskAI: React.FC = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!query.trim()) return;
    
    setLoading(true);
    setResponse(null);
    
    try {
      // Simulate AI response since we don't have the actual backend
      // In a real app, this would connect to your API
      setTimeout(() => {
        const responses = [
          "When investing in tech stocks, consider the company's growth potential, competitive advantage, and leadership team. Look for companies with strong financial health and sustainable business models.",
          "Diversification is key when building a stock portfolio. Don't put all your investments in a single sector or company, regardless of how promising it seems.",
          "P/E ratio (Price to Earnings) helps assess if a stock is overvalued or undervalued. A lower P/E might indicate an undervalued stock, but always look at industry averages for context.",
          "For beginners, consider starting with ETFs (Exchange Traded Funds) which offer instant diversification across many stocks.",
          "Dollar-cost averaging—investing fixed amounts regularly regardless of market conditions—can help reduce the impact of market volatility on your investments."
        ];
        
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        setResponse(randomResponse);
        setLoading(false);
      }, 1500);
      
    } catch (error) {
      setResponse("Sorry, I couldn't process your question. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="p-6 bg-gray-800 rounded shadow-lg transform transition-all hover:shadow-xl">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <BrainCircuit className="w-5 h-5 mr-2 text-purple-400" />
        Ask AI
      </h2>
      
      <div className="flex space-x-2">
        <input
          type="text"
          placeholder="Ask about stocks or investing..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-grow px-4 py-2 rounded bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          onKeyPress={(e) => e.key === 'Enter' && handleAsk()}
        />
        <button
          onClick={handleAsk}
          className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded flex items-center transition-colors"
        >
          <Send className="w-4 h-4" />
        </button>
      </div>
      
      {loading && (
        <div className="mt-4 p-3 bg-gray-700 rounded animate-pulse flex items-center">
          <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
          <div className="text-sm">AI is thinking...</div>
        </div>
      )}
      
      {response && (
        <div className="mt-4 p-4 bg-gray-900 rounded border border-purple-800 shadow-inner">
          <h3 className="font-semibold mb-2 text-purple-300">AI Response:</h3>
          <p className="text-white">{response}</p>
        </div>
      )}
    </div>
  );
};

export default AskAI;