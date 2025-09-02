import Link from "next/link";
import Image from "next/image";
import { products } from "../lib/data";

export default function CatalogPage() {
  // For demo purposes, we'll duplicate the product to show a catalog layout
  const product = [...products];

  return (
    <div>
      {/* Header */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Product Catalog
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our premium collection of hair care products designed to
              give you the voluminous, healthy hair you deserve.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {product.map((prod) => (
              <div
                key={prod.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-90 bg-gray-100">
                  <Image
                    src={prod.images[0]}
                    alt={prod.name}
                    fill
                    className="object-cover w-auto h-auto"
                  />
                  {!prod.inStock && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                      <span className="bg-red-600 text-white px-4 py-2 rounded-md font-medium">
                        Sold Out
                      </span>
                    </div>
                  )}

                  {prod.id !== "3" && (
                    <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Sale!
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {prod.name}
                  </h3>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-orange-600">
                        Rs.{prod.salePrice.toLocaleString()}
                      </span>
                      {prod.id !== "3" && (
                        <span className="text-lg text-gray-500 line-through">
                          Rs.{prod.originalPrice.toLocaleString()}
                        </span>
                      )}
                    </div>
                    {prod.id !== "3" && (
                      <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">
                        Save Rs.
                        {(prod.originalPrice - prod.salePrice).toFixed(2)}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-col space-y-2">
                    <Link
                      href={`/product/${prod.id}`}
                      className="bg-gray-900 text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors text-center font-medium"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* If we only have one product, show a message */}
          {products.length === 1 && (
            <div className="text-center mt-12">
              <p className="text-gray-600">
                More products coming soon! Stay tuned for our expanded
                collection.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
