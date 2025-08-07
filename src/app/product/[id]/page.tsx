"use client";

import { useState, use } from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { product } from "@/app/lib/data";
import ImageCarousel from "@/app/components/ImageCarousel";
import QuantitySelector from "@/app/components/QuantitySelector";
import BuyNowButton from "@/app/components/BuyButton";
import { InteractiveHoverButton } from "@/app/components/InteractiveBtn";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function ProductPage({ params }: PageProps) {
  const { id } = use(params);
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = () => {
    if (product.inStock) {
      setAddedToCart(true);
      setTimeout(() => setAddedToCart(false), 3000);
    }
  };

  return (
    <div>
      {/* Product Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div>
              <ImageCarousel images={product.images} alt={product.name} />
            </div>

            {/* Product Details */}
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>

              {/* Pricing */}
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-4xl font-bold text-orange-600">
                  Rs.{product.salePrice.toLocaleString()}
                </span>
                <span className="text-2xl text-gray-500 line-through">
                  Rs.{product.originalPrice.toLocaleString()}
                </span>
                <span className="bg-red-100 text-red-800 text-sm px-3 py-1 rounded-full font-medium">
                  Save Rs.{(product.originalPrice - product.salePrice).toFixed(2)}
                </span>
              </div>

              {/* Stock Status */}
              <div className="mb-6">
                {product.inStock ? (
                  <span className="text-green-600 font-medium">✓ In Stock</span>
                ) : (
                  <span className="text-red-600 font-medium">
                    ✗ Currently Sold Out
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-8 leading-relaxed">
                {product.description}
              </p>

              {/* Quantity and Add to Cart */}
              <div className="mb-8">
                <div className="flex items-center space-x-4 mb-4">
                  <label className="text-sm font-medium text-gray-900">
                    Quantity:
                  </label>
                  <QuantitySelector
                    quantity={quantity}
                    onQuantityChange={setQuantity}
                    disabled={!product.inStock}
                  />
                </div>
                {addedToCart ? (
                  <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                    Added to cart successfully!
                  </div>
                ) : null}

                <div className="relative justify-center">
                  <InteractiveHoverButton
                    productName="80s Hair Oil"
                    quantity={quantity}
                  />
                </div>
              </div>

              {/* Quick Benefits */}
              <div className="border-t border-gray-200 pt-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Key Benefits
                </h3>
                <ul className="space-y-2">
                  {product.benefits.slice(0, 4).map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✓</span>
                      <span className="text-gray-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details Tabs */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Ingredients */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Premium Ingredients
              </h3>
              <ul className="space-y-2">
                {product.ingredients.map((ingredient, index) => (
                  <li key={index} className="text-gray-600 flex items-center">
                    <span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>
                    {ingredient}
                  </li>
                ))}
              </ul>
            </div>

            {/* All Benefits */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Hair Benefits
              </h3>
              <ul className="space-y-2">
                {product.benefits.map((benefit, index) => (
                  <li key={index} className="text-gray-600 flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Instructions */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                How to Use
              </h3>
              <ol className="space-y-2">
                {product.instructions.map((instruction, index) => (
                  <li key={index} className="text-gray-600 flex items-start">
                    <span className="bg-orange-100 text-orange-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium mr-3 mt-0.5 flex-shrink-0">
                      {index + 1}
                    </span>
                    <span>{instruction}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
