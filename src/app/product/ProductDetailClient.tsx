"use client";

import { Key, useState } from "react";
import ImageCarousel from "@/app/components/ImageCarousel";
import QuantitySelector from "@/app/components/QuantitySelector";
import { InteractiveHoverButton } from "@/app/components/InteractiveBtn";
import { Product } from "../lib/data";

export default function ProductDetailClient({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1);

  return (
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
              {product.id !== "3" && (
                <div className=" flex flex-row items-center gap-2">
                  <span className="text-2xl text-gray-500 line-through">
                    Rs.{product.originalPrice.toLocaleString()}
                  </span>
                  <span className="bg-red-100 text-red-800 text-sm px-3 py-1 rounded-full font-medium">
                    Save Rs.
                    {(product.originalPrice - product.salePrice).toFixed(2)}
                  </span>
                </div>
              )}
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
            {product?.description && (
              <p className="text-gray-600 mb-8 leading-relaxed">
                {product.description}
              </p>
            )}

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

              <div className="relative justify-center">
                <InteractiveHoverButton
                  productName="80s Hair Oil"
                  quantity={quantity}
                />
              </div>

              <p className="my-3 text-black font-semibold">Free Delivery</p>
            </div>

            {/* Quick Benefits */}
            {product?.benefits && (
              <div className="border-t border-gray-200 pt-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Key Benefits
                </h3>
                <ul className="space-y-2">
                  {product.benefits.slice(0, 4).map((benefit: string | number, index: Key ) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✓</span>
                      <span className="text-gray-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
