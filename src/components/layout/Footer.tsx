import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Linkedin, Youtube, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative h-8 w-8">
                <Image
                  src="/logo-white.svg"
                  alt="ByteLearn Logo"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold text-white">ByteLearn</span>
            </Link>
            <p className="mt-4 text-gray-400 text-sm max-w-md">
              ByteLearn is a complete learning platform for students from Class 1 to undergraduate level.
              We provide comprehensive study materials, notes, video lectures, and live classes.
            </p>
            <div className="mt-6 flex space-x-4">
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook className="h-5 w-5 text-gray-400 hover:text-blue-500 transition-colors" />
              </Link>
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter className="h-5 w-5 text-gray-400 hover:text-blue-400 transition-colors" />
              </Link>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5 text-gray-400 hover:text-blue-600 transition-colors" />
              </Link>
              <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <Youtube className="h-5 w-5 text-gray-400 hover:text-red-600 transition-colors" />
              </Link>
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="h-5 w-5 text-gray-400 hover:text-pink-500 transition-colors" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-gray-400 hover:text-white transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/faculty" className="text-gray-400 hover:text-white transition-colors">
                  Faculty
                </Link>
              </li>
              <li>
                <Link href="/notes" className="text-gray-400 hover:text-white transition-colors">
                  Notes
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Study Material */}
          <div>
            <h3 className="text-white font-semibold mb-4">Study Material</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/elementary" className="text-gray-400 hover:text-white transition-colors">
                  Elementary (Class 1-5)
                </Link>
              </li>
              <li>
                <Link href="/middle-school" className="text-gray-400 hover:text-white transition-colors">
                  Middle School (Class 6-8)
                </Link>
              </li>
              <li>
                <Link href="/high-school" className="text-gray-400 hover:text-white transition-colors">
                  High School (Class 9-12)
                </Link>
              </li>
              <li>
                <Link href="/entrance-prep" className="text-gray-400 hover:text-white transition-colors">
                  Entrance Exam Preparation
                </Link>
              </li>
              <li>
                <Link href="/bachelor" className="text-gray-400 hover:text-white transition-colors">
                  Bachelor Level Courses
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-4">Subscribe</h3>
            <p className="text-gray-400 text-sm mb-4">
              Join our newsletter to get updates on new courses and study materials.
            </p>
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 border-gray-700 text-gray-300 placeholder:text-gray-500"
              />
              <Button className="w-full">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} ByteLearn. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 space-x-6 text-sm text-gray-500">
            <Link href="/privacy-policy" className="hover:text-gray-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-gray-300 transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/sitemap" className="hover:text-gray-300 transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
