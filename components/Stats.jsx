import React from 'react';

const Stats = ({ numberOfWords, dollers }) => {
  // Function to format large numbers with k/m abbreviations
  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'm';
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'k';
    }
    return num.toString();
  };

  return (
    <div className="flex justify-center gap-2">
      {/* Money Saved */}
      <div className="bg-white border border-gray-300 px-3 py-2 shadow-sm">
        <div className="text-sm font-medium text-gray-600">
          Saved: <span className="font-bold text-gray-900">${dollers}</span>
        </div>
      </div>

      {/* Tokens Used */}
      <div className="bg-white border border-gray-300 px-3 py-2  shadow-sm">
        <div className="text-sm font-medium text-gray-600">
          Tokens Consumed: <span className="font-bold text-gray-900">{formatNumber(numberOfWords)}</span>
        </div>
      </div>
    </div>
  );
};

export default Stats;
