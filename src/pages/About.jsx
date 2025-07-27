import React from "react";
import Header from "../components/header/Header";
import Navbar from "../components/nav/Nav";
import Footer from "../components/footer/Footer";

// Example image collection (replace with your own relevant assets)
const images = [
  "/images/factory1.jpg",
  "/images/factory2.jpg",
  "/images/factory3.jpg",
];

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Navbar />

      <main className="flex-grow bg-white text-gray-800">
        {/* Hero Section */}
        <section className="relative bg-[url('/images/about-hero.jpg')] bg-cover bg-center h-64 md:h-96 flex items-center justify-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white bg-black bg-opacity-50 px-4 py-2 rounded">
            About Us
          </h1>
        </section>

        {/* Founder & Story -- */}
        <section className="max-w-5xl mx-auto px-4 py-10 space-y-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
            The Founder’s Story
          </h2>
          <div className="md:flex items-start gap-8">
            <div className="md:w-1/3">
              <img
                src="/images/nihil-kharabanda.jpg"
                alt="Mr. Nihal Chand Kharabanda"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-2/3 space-y-4">
              <p>
                Mr. Nihal Chand Kharabanda (born 1908) came from humble
                beginnings but nurtured a dream to build quality sports goods
                in India. After learning the ropes at Uberoi & Co, he founded
                Freewill & Co in 1934, later establishing the brand NIVIA in
                1962 based out of Jalandhar.
              </p>
              <p>
                Today, free-will spirit continues to guide the brand's ethos:
                empowering athletes via innovation and affordability. NIVIA's
                journey from hand-stitched balls to FIFA‑Pro certified
                footballs is a testament to that enduring legacy.
              </p>
            </div>
          </div>
        </section>

        {/* Image Gallery */}
        <section className="bg-gray-50 py-10">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
              In Our Factory
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {images.map((src, idx) => (
                <img
                  key={idx}
                  src={src}
                  alt={`Factory view ${idx + 1}`}
                  className="w-full h-60 object-cover rounded-lg shadow"
                />
              ))}
            </div>
          </div>
        </section>

        {/* Philosophy & Mission */}
        <section className="max-w-5xl mx-auto px-4 py-10 space-y-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
            Our Philosophy & Purpose
          </h2>
          <p>
            Under the mantra “Step Out and Play”, NIVIA aims to support every
            athlete—from beginners to professionals—by democratizing access
            to superior sports gear. The brand thrives on innovation,
            affordability, and inclusivity, grounded in over 90 years of
            heritage rooted in Jalandhar.
          </p>
          <div className="bg-black text-white p-8 rounded-lg shadow-lg text-center">
            <p className="italic text-xl">“Step Out and Play”</p>
          </div>
          <p>
            With FIFA and FIBA certified products, and millions of athletes
            reached across 1200+ outlets, NIVIA's legacy continues under
            Rajesh Kharabanda, pushing Next‑Gen Indian sports forward. The
            brand constantly challenges the norms—pioneering shoes, building
            communities, and transforming lives.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
