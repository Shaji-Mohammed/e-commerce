// app/page.tsx
"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@heroui/react";

import {
  ArrowRightIcon,
  CodeBracketIcon,
  CogIcon,
  CubeIcon,
  FingerPrintIcon,
  ServerStackIcon,
} from "@heroicons/react/24/outline";
import EcommerceCard from "../../components/EcommerceCard";

export default function Home() {
  return (
    <div>
      <Navbar isBordered isBlurred className="py-4 sticky top-0 z-50 px-5">
        <NavbarBrand>
          <p className="font-bold text-inherit">KAMRAN</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link color="foreground" href="#">
              Features
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link aria-current="page" href="#">
              Customers
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Integrations
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className=" px-3 py-1 rounded-md bg-white/80 lg:flex">
            <Link className="text-gray-800" href="#">
              Contact Us
            </Link>
          </NavbarItem>
        </NavbarContent>
      </Navbar>

      {/* Product Cards */}
      <div className="bg-gray-100 py-6">
        <div className="max-w-[1650px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center mb-6">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-30">
            {[...Array(4)].map((_, i) => (
              <EcommerceCard key={i} />
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-indigo-600">
              Build faster
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need for modern commerce
            </p>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Medusa provides all the commerce features you need out-of-the-box
              while giving you complete control over your stack.
            </p>
          </div>
          <div className="mt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature) => (
                <div
                  key={feature.name}
                  className="bg-white p-8 rounded-xl shadow-sm"
                >
                  <div className="bg-gray-100 border border-gray-200 h-12 w-12 rounded-lg flex items-center justify-center">
                    <feature.icon
                      className="h-6 w-6 text-gray-700"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="mt-6 text-lg font-semibold text-gray-900">
                    {feature.name}
                  </h3>
                  <p className="mt-2 text-base text-gray-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      
      {/* Footer */}
      <footer className="bg-white">
        
      </footer>
    </div>
  );
}

const features = [
  {
    name: "Flexible APIs",
    description: "REST and GraphQL APIs with complete control over your data",
    icon: CodeBracketIcon,
  },
  {
    name: "Modular Architecture",
    description: "Easily extend or replace any component to fit your needs",
    icon: CubeIcon,
  },
  {
    name: "Admin Dashboard",
    description: "Beautiful admin interface for managing your store",
    icon: CogIcon,
  },
  {
    name: "Authentication",
    description: "Built-in customer authentication and JWT support",
    icon: FingerPrintIcon,
  },
  {
    name: "Order Management",
    description: "Complete order processing workflow",
    icon: ServerStackIcon,
  },
  {
    name: "Custom Workflows",
    description: "Create custom business logic with our workflow engine",
    icon: CogIcon,
  },
];
