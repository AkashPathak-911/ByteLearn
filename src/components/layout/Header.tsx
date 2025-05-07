"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full bg-white border-b shadow-sm">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative h-8 w-8">
                <Image
                  src="/logo.svg"
                  alt="ByteLearn Logo"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold text-primary">ByteLearn</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
            >
              Home
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center text-sm font-medium text-gray-700 hover:text-primary transition-colors">
                  Courses <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem>
                  <Link href="/courses/elementary" className="w-full">
                    Elementary (Class 1-5)
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/courses/middle" className="w-full">
                    Middle School (Class 6-8)
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/courses/high" className="w-full">
                    High School (Class 9-12)
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/courses/entrance" className="w-full">
                    Entrance Preparation
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/courses/bachelor" className="w-full">
                    Bachelor Level
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              href="/notes"
              className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
            >
              Notes
            </Link>

            <Link
              href="/faculty"
              className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
            >
              Faculty
            </Link>

            <Link
              href="/contact"
              className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
            >
              Contact Us
            </Link>
          </nav>

          {/* Authentication Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/login">
              <Button variant="outline" size="sm">
                Log in
              </Button>
            </Link>
            <Link href="/signup">
              <Button size="sm">Sign up</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-primary focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
                onClick={toggleMenu}
              >
                Home
              </Link>

              <div className="space-y-2">
                <div className="text-sm font-medium text-gray-700">Courses</div>
                <div className="pl-4 space-y-2">
                  <Link
                    href="/courses/elementary"
                    className="block text-sm text-gray-600 hover:text-primary transition-colors"
                    onClick={toggleMenu}
                  >
                    Elementary (Class 1-5)
                  </Link>
                  <Link
                    href="/courses/middle"
                    className="block text-sm text-gray-600 hover:text-primary transition-colors"
                    onClick={toggleMenu}
                  >
                    Middle School (Class 6-8)
                  </Link>
                  <Link
                    href="/courses/high"
                    className="block text-sm text-gray-600 hover:text-primary transition-colors"
                    onClick={toggleMenu}
                  >
                    High School (Class 9-12)
                  </Link>
                  <Link
                    href="/courses/entrance"
                    className="block text-sm text-gray-600 hover:text-primary transition-colors"
                    onClick={toggleMenu}
                  >
                    Entrance Preparation
                  </Link>
                  <Link
                    href="/courses/bachelor"
                    className="block text-sm text-gray-600 hover:text-primary transition-colors"
                    onClick={toggleMenu}
                  >
                    Bachelor Level
                  </Link>
                </div>
              </div>

              <Link
                href="/notes"
                className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
                onClick={toggleMenu}
              >
                Notes
              </Link>

              <Link
                href="/faculty"
                className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
                onClick={toggleMenu}
              >
                Faculty
              </Link>

              <Link
                href="/contact"
                className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
                onClick={toggleMenu}
              >
                Contact Us
              </Link>

              <div className="pt-2 space-y-2">
                <Link href="/login" onClick={toggleMenu}>
                  <Button variant="outline" className="w-full">
                    Log in
                  </Button>
                </Link>
                <Link href="/signup" onClick={toggleMenu}>
                  <Button className="w-full">Sign up</Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
