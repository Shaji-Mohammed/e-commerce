import Link from "next/link";
import Image from "next/image";
import { products } from "./lib/data";

export default function Home() {
  const product = products[1];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 to-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Transform Your Hair with
                <span className="text-orange-600"> 80s Hair Oil</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Crafted with nature's finest, our essential oils embody pure ingridients and pure intentions for your well-being.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/product/2"
                  className="bg-gray-900 text-white px-8 py-3 rounded-md hover:bg-gray-800 transition-colors text-center font-medium"
                >
                  Shop Now
                </Link>
                <Link
                  href="/catalog"
                  className="border border-gray-900 text-gray-900 px-8 py-3 rounded-md hover:bg-gray-50 transition-colors text-center font-medium"
                >
                  View Catalog
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={"/200ml_5.webp"}
                  alt="80s Hair Oil Hero Image"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Floating elements for visual interest */}
              <div className="absolute -top-4 -right-4 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                Sale!
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Product Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Featured Product
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our signature hair oil that's been transforming hair since the 80s
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src={product.images[1]}
                alt={product.name}
                width={500}
                height={500}
                className="rounded-2xl shadow-lg"
              />
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {product.name}
              </h3>
              <div className="flex items-center space-x-3 mb-6">
                <span className="text-3xl font-bold text-orange-600">
                  Rs.{product.salePrice.toLocaleString()}
                </span>
                <span className="text-xl text-gray-500 line-through">
                  Rs. {product.originalPrice.toLocaleString()}
                </span>
                <span className="bg-red-100 text-red-800 text-sm px-3 py-1 rounded-full">
                  Save Rs.{" "}
                  {(product.originalPrice - product.salePrice).toFixed(2)}
                </span>
              </div>

              <p className="text-gray-600 mb-8">{product.description}</p>

              <div className="mb-8">
                <h4 className="font-semibold text-gray-900 mb-3">
                  Key Benefits:
                </h4>
                <ul className="space-y-2">
                  {product.benefits.slice(0, 3).map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-gray-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href={`/product/${product.id}`}
                className="bg-gray-900 text-white px-8 py-3 rounded-md hover:bg-gray-800 transition-colors inline-block font-medium"
              >
                View Product Details
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose 80s Hair Oil?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌿</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Natural Ingredients
              </h3>
              <p className="text-gray-600">
                Made with premium natural oils and extracts for the healthiest
                hair care experience.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Proven Results
              </h3>
              <p className="text-gray-600">
                Thousands of satisfied customers have transformed their hair
                with our proven formula.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚚</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Fast Shipping
              </h3>
              <p className="text-gray-600">
                Quick and reliable shipping so you can start your hair
                transformation journey immediately.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
