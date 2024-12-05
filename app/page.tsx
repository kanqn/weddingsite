import Header from './components/header'
import HeroSection from './components/hero-section'
import FeaturesSection from './components/features-section'
import GallerySection from './components/gallery-section'
import BookingForm from './components/booking-form'
import Footer from './components/footer'

export default function WeddingVenueLandingPage() {
  return (
    <div className="min-h-screen bg-rose-50">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <GallerySection />
        <BookingForm />
      </main>
      <Footer />
    </div>
  )
}

