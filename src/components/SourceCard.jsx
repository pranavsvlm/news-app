import React from 'react';

export default function SourceCard({ source }) {
  if (!source) return <div>No data</div>;

  const { name = 'Untitled', description = '', url = '#', category } = source;
  const cats = Array.isArray(category) ? category.join(', ') : category || '';

  return (
    <div className="flex gap-4 p-4 border bg-white border-gray-300 rounded items-center">
      {source.icon && (
        <img src={source.icon} alt={name} className="w-24 h-24 object-cover rounded" />
      )}
      <div className="flex-1">
        <a href={url} target="_blank" rel="noreferrer" className="text-lg font-semibold text-blue-600">
          {name}
        </a>
        {description && <p className="text-sm text-gray-700 mt-1">{description}</p>}
        {cats && <div className="mt-2 text-xs text-gray-500">{cats}</div>}
      </div>
    </div>
  );
}
