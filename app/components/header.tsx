"use client";
import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-serif text-rose-600">
            Eternal Moments
          </Link>
          <div className="hidden md:flex space-x-4">
            <Link href="#features" className="text-gray-600 hover:text-rose-600">特徴</Link>
            <Link href="#gallery" className="text-gray-600 hover:text-rose-600">ギャラリー</Link>
            <Link href="#booking" className="text-gray-600 hover:text-rose-600">予約</Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

