"use client";

import Image from 'next/image'

export default function GallerySection() {
  return (
    <section id="gallery" className="py-20 bg-rose-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-serif text-center text-gray-800 mb-12">ギャラリー</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <GalleryImage src="/gallery1.png?height=400&width=600" alt="Wedding ceremony" />
          <GalleryImage src="/gallery2.png?height=400&width=600" alt="Reception hall" />
          <GalleryImage src="/gallery3.png?height=400&width=600" alt="Wedding cake" />
          <GalleryImage src="/gallery4.png?height=400&width=600" alt="Bride and groom" />
          <GalleryImage src="/gallery5.png?height=400&width=600" alt="Table setting" />
          <GalleryImage src="/gallery6.png?height=400&width=600" alt="Wedding bouquet" />
        </div>
      </div>
    </section>
  )
}

function GalleryImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative h-64 overflow-hidden rounded-lg shadow-md">
      <Image src={src} alt={alt} layout="fill" objectFit="cover" className="transition-transform duration-300 hover:scale-110" />
    </div>
  )
}

