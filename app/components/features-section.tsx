"use client";
import { Heart, Calendar, Utensils } from 'lucide-react'


export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-serif text-center text-gray-800 mb-12">私たちの特徴</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <FeatureCard
            icon={<Heart className="w-12 h-12 text-rose-600" />}
            title="美しい会場"
            description="自然光あふれる広々とした空間で、思い出に残る式を"
          />
          <FeatureCard
            icon={<Calendar className="w-12 h-12 text-rose-600" />}
            title="柔軟な日程"
            description="あなたの希望に合わせて、最適な日取りをご提案"
          />
          <FeatureCard
            icon={<Utensils className="w-12 h-12 text-rose-600" />}
            title="こだわりの料理"
            description="地元の食材を使用した、心のこもったお料理をご用意"
          />
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="text-center">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

