import React, { useState, useEffect } from 'react';
import SourceCard from './SourceCard';

const NewsList = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const url = "https://newsdata.io/api/1/sources?apikey=pub_e9c36e1e7ce54b74b7d10007c7c606ce";

    const fetchSources = async () => {
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error('Network response was not ok');
        const json = await res.json();
        setItems(Array.isArray(json.results) ? json.results : []);
      } catch (e) {
        setError(e.message || 'Unable to fetch');
      } finally {
        setLoading(false);
      }
    };

    fetchSources();
  }, []);

  return (
    <div className="space-y-3  p-5">
      {loading ? (
        <div className="flex items-center justify-center mx-auto p-8">
          <svg
            className="animate-spin h-8 w-8 text-blue-600"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            ></path>
          </svg>
        </div>
      ) : error ? (
        <div className="text-red-600">Error: {error}</div>
      ) : !items || items.length === 0 ? (
        <div>No data.</div>
      ) : (
        items.map((item, i) => (
          <SourceCard key={item.id || item.name || i} source={item} />
        ))
      )}
    </div>
  );
};

export default NewsList;