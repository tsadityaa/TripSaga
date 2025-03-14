import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-600 dark:text-gray-300">
              TripSaga Travel is your trusted partner for unforgettable travel
              experiences. We specialize in crafting perfect journeys tailored
              to your dreams.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/packages"
                  className="text-gray-600 dark:text-gray-300 hover:text-primary"
                >
                  Travel Packages
                </Link>
              </li>
              <li>
                <Link
                  href="/guide"
                  className="text-gray-600 dark:text-gray-300 hover:text-primary"
                >
                  Travel Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/vlogs"
                  className="text-gray-600 dark:text-gray-300 hover:text-primary"
                >
                  Travel Vlogs
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 dark:text-gray-300 hover:text-primary"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>123 Travel Street</li>
              <li>Adventure City, AC 12345</li>
              <li>Phone: +1 234 567 8900</li>
              <li>Email: info@tripsaga.com</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-gray-600 dark:text-gray-300 hover:text-primary"
              >
                <Facebook className="h-6 w-6" />
              </Link>
              <Link
                href="#"
                className="text-gray-600 dark:text-gray-300 hover:text-primary"
              >
                <Instagram className="h-6 w-6" />
              </Link>
              <Link
                href="#"
                className="text-gray-600 dark:text-gray-300 hover:text-primary"
              >
                <Twitter className="h-6 w-6" />
              </Link>
              <Link
                href="#"
                className="text-gray-600 dark:text-gray-300 hover:text-primary"
              >
                <Youtube className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-center text-gray-600 dark:text-gray-300">
            © {new Date().getFullYear()} TripSaga Travel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
