import React from "react";
import Footer from "../components/footer/Footer";

function Contact() {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-black text-white py-16 text-center">
        <h1 className="text-5xl font-extrabold mb-4">Get In Touch</h1>
        <p className="text-lg">
          We'd love to hear from you. Reach out for inquiries, support, or feedback.
        </p>
      </section>

      {/* Contact Information */}
      <section className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Address */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:scale-105 transition">
          <h2 className="text-xl font-bold mb-2">Our Address</h2>
          <p className="text-gray-600">
            Sports Hub Headquarters<br />
            123 Fitness Street, Mumbai<br />
            Maharashtra, India - 400001
          </p>
        </div>

        {/* Phone */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:scale-105 transition">
          <h2 className="text-xl font-bold mb-2">Call Us</h2>
          <p className="text-gray-600">
            +91 95258 74518 <br />
            (Mon - Sat, 10am - 6pm)
          </p>
        </div>

        {/* Email */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:scale-105 transition">
          <h2 className="text-xl font-bold mb-2">Email Us</h2>
          <p className="text-gray-600">contact@sports_hub.in</p>
        </div>
      </section>

  {/* Contact Form  and Google Map */}
{/* Contact Form and Map */}
<section
  className="relative bg-[url('https://images.unsplash.com/photo-1508780709619-79562169bc64?auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center py-16 min-h-screen"
>
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>

  {/* Contact Form and Map Container */}
  <div className="relative container mx-auto px-6 z-10 grid grid-cols-1 md:grid-cols-2 gap-6">
    {/* Contact Form */}
   <div className="bg-white bg-opacity-10 backdrop-blur-lg  h-[600px] rounded-2xl shadow-xl p-1">
  <h2 className="text-4xl font-extrabold text-center text-black mb-8 drop-shadow-lg">
    Send Us a Message
  </h2>
  <form className="max-w-3xl mx-auto bg-white bg-opacity-70 rounded-2xl   mb-8 h-[500px] shadow-xl p-8">
    <div className="flex justify-between mb-4">
      <span className="text-gray-700 text-sm font-bold">Your Name</span>
      <input
        type="text"
        placeholder="Enter your name"
        className="border border-gray-300 rounded px-4 py-3 bg-white bg-opacity-70 focus:outline-none focus:ring-2 focus:ring-red-500 w-3/4"
        required
      />
    </div>
    <div className="flex justify-between mb-4">
      <span className="text-gray-700 text-sm font-bold">Your Email</span>
      <input
        type="email"
        placeholder="Enter your email"
        className="border border-gray-300 rounded px-4 py-3 bg-white bg-opacity-70 focus:outline-none focus:ring-2 focus:ring-red-500 w-3/4"
        required
      />
    </div>
    <div className="flex justify-between mb-4">
      <span className="text-gray-700 text-sm font-bold">Subject</span>
      <input
        type="text"
        placeholder="Enter your subject"
        className="border border-gray-300 rounded px-4 py-3 bg-white bg-opacity-70 focus:outline-none focus:ring-2 focus:ring-red-500 w-3/4"
        required
      />
    </div>
    <div className="flex justify-between mb-4">
      <span className="text-gray-700 text-sm font-bold">Your Message</span>
      <textarea
        placeholder="Enter your message"
        rows="5"
        className="border border-gray-300 rounded px-4 py-3 bg-white bg-opacity-70 focus:outline-none focus:ring-2 focus:ring-red-500 w-3/4"
        required
      ></textarea>
    </div>
    <button
      type="submit"
      className="bg-red-600 text-white py-3 rounded-lg font-bold hover:bg-red-700 transition shadow-lg w-full"
    >
      Send Message
    </button>
  </form>
</div>

    {/* Google Map */}
    <div className="w-full h-[400px]">
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609931228!2d72.741099!3d19.082197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63c6f7b72d9%3A0x5ccfef888d9bc95!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1655555444444!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
</section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Contact;
