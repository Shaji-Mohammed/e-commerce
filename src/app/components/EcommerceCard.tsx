import Image from "next/image";

export default function EcommerceCard() {
  return (
    <div className="w-full max-w-sm mx-auto bg-white/50 rounded-lg shadow-lg overflow-hidden">
      {/* Card Header / Image */}
      <div className="aspect-square overflow-hidden px-4 pt-3 sm:px-5 sm:pt-4">
        <Image
          fill
          src="1.png"
          alt="Apple AirPods"
          className="h-full w-full rounded-xl object-cover"
        />
      </div>
      
      {/* Card Body */}
      <div className="px-5 sm:py-2">
        <div className="mb-1 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-0">
          <h3 className="text-blue-700 font-semibold text-lg sm:text-xl">
            Apple AirPods
          </h3>
          <span className="text-blue-700 font-semibold text-lg sm:text-xl">
            $95.00
          </span>
        </div>
        <p className="text-gray-600 text-sm sm:text-base font-normal opacity-75 leading-relaxed">
          With plenty of talk and listen time, voice-activated Siri access, and
          an available wireless charging case.
        </p>
      </div>
      
      {/* Card Footer */}
      <div className="px-5 pb-4 sm:px-5 *:py-3 sm:pb-4">
        <button className="w-full bg-blue-900/10 text-blue-900 py-3 px-4 rounded-lg font-semibold transition-all duration-200 hover:scale-105 hover:bg-blue-900/20 focus:scale-105 focus:bg-blue-900/20 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:scale-100">
          Add to Cart
        </button>
      </div>
    </div>
  );
}