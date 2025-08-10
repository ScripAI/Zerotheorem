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
      <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] px-3 py-2 shadow-sm  transition-colors duration-200">
        <div className="text-sm font-medium text-[hsl(var(--text-secondary))] transition-colors duration-200">
          Saved: <span className="font-bold text-[hsl(var(--text-primary))] transition-colors duration-200">${dollers}</span>
        </div>
      </div>

      {/* Tokens Used */}
      <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] px-3 py-2 shadow-sm  transition-colors duration-200">
        <div className="text-sm font-medium text-[hsl(var(--text-secondary))] transition-colors duration-200">
          Tokens Consumed: <span className="font-bold text-[hsl(var(--text-primary))] transition-colors duration-200">{formatNumber(numberOfWords)}</span>
        </div>
      </div>
    </div>
  );
};

export default Stats;
