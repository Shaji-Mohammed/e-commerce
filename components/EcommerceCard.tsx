export default function EcommerceCard() {
  return (
    <div className="w-96 bg-white/50 rounded-lg shadow-lg overflow-hidden">
      {/* Card Header / Image */}
      <div className="h-96 overflow-hidden ">
        <img
          src="1.png"
          alt="Apple AirPods"
          className="h-[90%] mt-6 w-[90%] m-auto rounded-xl object-cover"
        />
      </div>
      
      {/* Card Body */}
      <div className="p-6">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-blue-700 font-semibold text-lg">
            Apple AirPods
          </h3>
          <span className="text-blue-700 font-semibold text-lg">
            $95.00
          </span>
        </div>
        <p className="text-gray-600 text-sm font-normal opacity-75 leading-relaxed">
          With plenty of talk and listen time, voice-activated Siri access, and
          an available wireless charging case.
        </p>
      </div>
      
      {/* Card Footer */}
      <div className="px-6 pb-6">
        <button className="w-full bg-blue-900/10 text-blue-900 py-3 px-4 rounded-lg font-semibold transition-transform duration-200 hover:scale-105 focus:scale-105 active:scale-100 ">
          Add to Cart
        </button>
      </div>
    </div>
  );
}