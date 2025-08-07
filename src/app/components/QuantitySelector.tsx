"use client";

import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";

interface QuantitySelectorProps {
  quantity: number;
  onQuantityChange: (quantity: number) => void;
  disabled?: boolean;
}

export default function QuantitySelector({
  quantity,
  onQuantityChange,
  disabled = false
}: QuantitySelectorProps) {
  const handleDecrement = () => {
    if (quantity > 1 && !disabled) {
      onQuantityChange(quantity - 1);
    }
  };

  const handleIncrement = () => {
    if (!disabled) {
      onQuantityChange(quantity + 1);
    }
  };

  return (
    <div className="flex items-center border border-gray-300 rounded-md">
      <button
        onClick={handleDecrement}
        disabled={disabled || quantity <= 1}
        className="p-2 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        <MinusIcon className="h-4 w-4" />
      </button>
      <span className="px-4 py-2 border-x border-gray-300 bg-gray-50 min-w-[60px] text-center">
        {quantity}
      </span>
      <button
        onClick={handleIncrement}
        disabled={disabled}
        className="p-2 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        <PlusIcon className="h-4 w-4" />
      </button>
    </div>
  );
}
