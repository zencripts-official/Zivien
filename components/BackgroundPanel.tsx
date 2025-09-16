/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState } from 'react';

interface BackgroundPanelProps {
  onApplyBackgroundEdit: (prompt: string) => void;
  isLoading: boolean;
}

const BackgroundPanel: React.FC<BackgroundPanelProps> = ({ onApplyBackgroundEdit, isLoading }) => {
  const [color, setColor] = useState('#FFFFFF');

  const handleRemoveTransparent = () => {
    onApplyBackgroundEdit('transparent');
  };
  
  const handleApplyColor = () => {
    onApplyBackgroundEdit(`solid ${color}`);
  };

  return (
    <div className="flex flex-col gap-4 animate-fade-in">
      <h3 className="text-md font-semibold text-center text-gray-300">Background Tools</h3>
      <p className="text-sm text-center text-gray-400 -mt-2">
        Automatically remove the background or replace it with a solid color.
      </p>

      <button
        onClick={handleRemoveTransparent}
        disabled={isLoading}
        className="w-full bg-white/10 border border-white/20 text-gray-200 font-semibold py-3 px-5 rounded-lg transition-all duration-200 ease-in-out hover:bg-white/20 hover:border-white/30 active:scale-95 text-base disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Remove Background (Transparent)
      </button>

      <div className="flex flex-col gap-3 pt-2">
        <label htmlFor="color-picker" className="text-sm font-medium text-gray-400">Replace with color:</label>
        <div className="flex items-center gap-2">
            <div className="relative h-10 w-16">
                <input
                  type="color"
                  id="color-picker"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  disabled={isLoading}
                  className="absolute inset-0 w-full h-full p-0 border-none rounded-md cursor-pointer disabled:cursor-not-allowed"
                  style={{'--color-swatch-fallback': color} as React.CSSProperties}
                />
            </div>
            <input 
                type="text"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                className="w-full bg-gray-800 border border-gray-600 text-gray-200 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none transition disabled:cursor-not-allowed disabled:opacity-60 text-base"
                disabled={isLoading}
            />
        </div>
        <button
          onClick={handleApplyColor}
          disabled={isLoading}
          className="w-full bg-gradient-to-br from-blue-600 to-blue-500 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 ease-in-out shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-px active:scale-95 active:shadow-inner text-base disabled:from-blue-800 disabled:to-blue-700 disabled:shadow-none disabled:cursor-not-allowed disabled:transform-none"
        >
          Apply Color Background
        </button>
      </div>
    </div>
  );
};

export default BackgroundPanel;
