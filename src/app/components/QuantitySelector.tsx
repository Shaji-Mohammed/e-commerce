"use client";

import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";

interface QuantitySelectorProps {
  quantity: number;
  onQuantityChange: (quantity: number) => void;
  disabled?: boolean;
  minQuantity?: number; // Optional prop for min quantity
  maxQuantity?: number; // Optional prop for max quantity
}

export default function QuantitySelector({
  quantity,
  onQuantityChange,
  disabled = false,
  minQuantity = 1, // Default min quantity to 1
  maxQuantity = 99, // Default max quantity to 99
}: QuantitySelectorProps) {
  const handleDecrement = () => {
    if (quantity > minQuantity && !disabled) {
      onQuantityChange(quantity - 1);
    }
  };

  const handleIncrement = () => {
    if (quantity < maxQuantity && !disabled) {
      onQuantityChange(quantity + 1);
    }
  };

  return (
    <div className="flex h-10items-center border border-gray-300 rounded-md overflow-hidden">
      {/* Decrement Button */}
      <button
        onClick={handleDecrement}
        disabled={disabled || quantity <= minQuantity}
        className="p-3 bg-gray-200 hover:bg-gray-500 disabled:bg-gray-100 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
      >
        <MinusIcon className="h-5 w-5 text-gray-700  hover:text-white" />
      </button>

      {/* Quantity Display */}
      <span className="px-6 py-3 bg-gray-50 text-gray-800 font-medium text-lg">
        {quantity}
      </span>

      {/* Increment Button */}
      <button
        onClick={handleIncrement}
        disabled={disabled || quantity >= maxQuantity}
        className="p-3 bg-gray-200  hover:bg-gray-500 disabled:bg-gray-100 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
      >
        <PlusIcon className="h-5 w-5 text-gray-700  hover:text-white" />
      </button>
    </div>
  );
}
