"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  return (
    <div className="flex flex-col items-center p-4">
      <div
        className={
          isMenuOpen
            ? "flex items-center justify-between w-full max-w-6xl p-4 bg-white border-b border-gray-300"
            : "flex items-center justify-between w-full max-w-6xl p-4 bg-white rounded-lg shadow-md"
        }
      >
        <div className="flex items-center space-x-5">
          <Link href="/" onClick={() => setIsMenuOpen(false)}>
            <span className="text-2xl font-bold">Buzz N Finds</span>
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <span onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <MenuDown className="w-6 h-6 cursor-pointer" />
            ) : (
              <MenuUp className="w-6 h-6 cursor-pointer" />
            )}
          </span>
        </div>
      </div>

      {/* Dropdown menu for mobile */}
      {isMenuOpen && (
        <div className="flex flex-col items-center w-full max-w-6xl p-4 mt-2 bg-white rounded-lg shadow-md ">
          <Link
            href="/"
            className="block py-2 text-xl hover:text-gray-400  border-b border-gray-150 shadow-sm"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/technology"
            className="block py-2 text-xl hover:text-gray-400  border-b border-gray-150 shadow-sm"
            onClick={() => setIsMenuOpen(false)}
            prefetch={false}
          >
            Technology
          </Link>
          <Link
            href="/artificial-intelligence"
            className="block py-2 text-xl hover:text-gray-400 border-b border-gray-150 shadow-sm"
            onClick={() => setIsMenuOpen(false)}
            prefetch={false}
          >
            Artificial Intelligence
          </Link>
          <Link
            href="/entertainment-technology"
            className="block py-2 text-xl hover:text-gray-400  border-b border-gray-150 shadow-sm"
            onClick={() => setIsMenuOpen(false)}
            prefetch={false}
          >
            Entertainment Technology
          </Link>
          <Link
            href="/blockchain-technology"
            className="block py-2 text-xl hover:text-gray-400 shadow-sm"
            onClick={() => setIsMenuOpen(false)}
            prefetch={false}
          >
            Blockchain Technology
          </Link>
          {/* Add more links here */}
        </div>
      )}
    </div>
  );
}

function MenuUp(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 17H13M5 12H19M11 7H19" />
    </svg>
  );
}

function MenuDown(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 17H19M5 12H19M5 7H19" />
    </svg>
  );
}
