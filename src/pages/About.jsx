import React from "react";
import Header from "../components/header/Header";
import Navbar from "../components/nav/Nav";
import Footer from "../components/footer/Footer";

// Example image collection (replace with your own relevant assets)
const images = [
  "https://c8.alamy.com/comp/2R66XAH/laakdal-07-june-2023-prime-minister-alexander-de-croo-places-a-parcel-on-a-conveyor-belt-during-a-visit-to-nike-european-logistics-campus-in-laakdal-wednesday-07-june-2023-nike-is-the-worlds-largest-supplier-of-athletic-shoes-and-apparel-and-a-major-manufacturer-of-sports-equipment-nike-european-logistics-campus-elc-is-impressive-area-of-45-football-pitches-is-at-the-forefront-of-innovation-and-sustainable-growth-and-employs-nearly-7000-people-in-belgium-it-is-nikes-first-logistics-center-in-the-world-and-one-of-the-most-important-e-commerce-platforms-in-europe-in-other-words-7-2R66XAH.jpg",
  "https://intrepidsourcing.com/wp-content/uploads/2019/01/STARTERMANUFACTURING7.jpg",
  "https://mecaluxcom.cdnwm.com/img/case-studies/sportisimo-ecommerce-warehouse-czechia-sporting-goods.1.2.jpg?imwidth=1280&imdensity=1",
];

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Navbar />

      <main className="flex-grow bg-white text-gray-800">
        {/* Hero Section */}
        <section className="relative bg-[url('https://cdn.pixabay.com/photo/2016/12/14/15/25/f1-1906648_1280.jpg')] bg-cover bg-center h-64 md:h-96 flex items-center justify-center">
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
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxcADAuF2Q2R-RwzZ88zFR8uQbUSX1ccbW5Q&s"
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
