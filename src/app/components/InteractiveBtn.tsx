import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

interface InteractiveHoverButtonProps {
  text?: string;
  className?: string;
  phoneNumber?: string; // WhatsApp number
  productName?: string;
  quantity?: number;
}

export function InteractiveHoverButton({
  text = "Buy Now",
  className,
  phoneNumber = "9028090243",
  productName = "Product",
  quantity,
}: InteractiveHoverButtonProps = {}) {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    if (loading) return; // Prevent multiple clicks during delay
    setLoading(true);

    const message = `Hi, I would like to order ${quantity} unit(s) of ${productName}.`;
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    setTimeout(() => {
      window.open(whatsappLink, "_blank");
      setLoading(false);
    }, 1000);

  };
  return (
    <div
      onClick={handleClick}
      className={`group relative w-38 cursor-pointer overflow-hidden rounded-full border border-gray-400 bg-white px-4 py-2 text-center font-semibold text-black ${className}`}
    >
      <span className="inline-block translate-x-1 transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
        {text}
      </span>
      <div className="absolute  top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-white opacity-0 transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100">
        {
            loading ? "Loading..." : text
        }
        <ArrowRight />
      </div>
      <div className="absolute left-[20%] top-[40%] h-2 w-2 scale-[1] rounded-lg bg-black transition-all duration-300 group-hover:left-[0%] group-hover:top-[0%] group-hover:h-full group-hover:w-full group-hover:scale-[1.8] group-hover:bg-[#43c175] dark:group-hover:bg-[#45a86c]"></div>
    </div>
  );
}
