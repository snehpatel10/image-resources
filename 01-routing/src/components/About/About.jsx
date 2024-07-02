import React from 'react'

function About() {
  return (
    <>
        <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center text-orange-500 mb-8">
          About Us
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed text-center mb-6">
          We are a passionate team dedicated to providing the best services for our clients. 
          Our mission is to deliver high-quality solutions that make a difference.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-6">
          <div className="max-w-xs bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold text-orange-500 mb-2">Our Mission</h3>
            <p className="text-gray-600">
              To innovate and lead in our industry, ensuring our customers always receive the best.
            </p>
          </div>
          <div className="max-w-xs bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold text-orange-500 mb-2">Our Vision</h3>
            <p className="text-gray-600">
              To be recognized as a top provider in our field, known for our commitment to excellence.
            </p>
          </div>
          <div className="max-w-xs bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold text-orange-500 mb-2">Our Values</h3>
            <p className="text-gray-600">
              Integrity, Innovation, and Customer Satisfaction are the core values that drive our work.
            </p>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default About
