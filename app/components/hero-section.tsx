"use client";
import Image from 'next/image'


export default function HeroSection() {
  return (
    <section className="relative h-screen">
      <Image
        src="/wedding.png"
        alt="Wedding venue"
        layout="fill"
        objectFit="cover"
        className="z-0"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <div className="text-center text-white">
          <h1 className="text-5xl md:text-6xl font-serif mb-4">永遠の瞬間を、ここで</h1>
          <p className="text-xl md:text-2xl mb-8">あなたの夢のウェディングを実現します</p>
          <a
            href="#booking"
            className="bg-rose-600 text-white px-8 py-3 rounded-full text-lg hover:bg-rose-700 transition duration-300"
          >
            今すぐ予約
          </a>
        </div>
      </div>
    </section>
  )
}

