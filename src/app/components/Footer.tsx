import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">80s</h3>
            <p className="text-gray-300 mb-4">
              Every drop of our oil is a blend of tradition and
              innovation—infused with botanical extracts, essential nutrients,
              and zero harmful chemicals. Whether you&rsquo;re tackling hair fall,
              dryness, or just looking to elevate your hair care routine, we&rsquo;re
              here to support your journey to healthier, happier hair.
            </p>
          </div>

          {/* Quick Links */}
          <div className="justify-end ml-40">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/catalog"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Catalog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 80s Hair Oil. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
