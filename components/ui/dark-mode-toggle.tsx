"use client";

import React from "react";

interface DarkModeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

const DarkModeToggle: React.FC<DarkModeToggleProps> = ({ isDark, onToggle }) => {
  return (
    <>
      {/* Mobile - Icon Only */}
      <button
        onClick={onToggle}
        className="md:hidden relative inline-flex items-center justify-center w-[2.5em] h-[2em] rounded-[8px] border-2 border-slate-700 bg-slate-800/80 hover:border-blue-500 transition-all duration-300 overflow-hidden group"
      >
        <div className="relative z-10 transition-all duration-300">
          {isDark ? (
            <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          ) : (
            <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
            </svg>
          )}
        </div>
      </button>

      {/* Desktop - Slider */}
      <label className="hidden md:inline-block relative w-[3.5em] h-[2em] cursor-pointer">
        <input 
          type="checkbox" 
          className="peer opacity-0 w-0 h-0" 
          checked={isDark}
          onChange={onToggle}
        />
        <span
          className="absolute inset-0 cursor-pointer rounded-[30px] transition duration-500 bg-slate-700 peer-checked:bg-slate-800 border-2 border-slate-700 peer-checked:border-slate-700 hover:border-blue-500 before:content-[''] before:absolute before:h-[1.4em] before:w-[1.4em] before:rounded-full before:left-[0.2em] before:top-1/2 before:-translate-y-1/2 before:shadow-[inset_8px_-4px_0px_0px_#fbbf24] peer-checked:before:shadow-[inset_15px_-4px_0px_15px_#fbbf24] before:bg-slate-700 peer-checked:before:bg-slate-800 before:transition before:duration-500 peer-checked:before:translate-x-[1.6em]"
        />
      </label>
    </>
  );
};

export default DarkModeToggle;