import React from 'react'
import { Link } from 'react-router-dom'

function Home() {

  return (

    <div className="min-h-screen bg-gray-50 flex items-center">

      <div className="max-w-6xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}

          <div>

            <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-6">
              Welcome to
              <span className="text-blue-600"> Blog Sphere</span>
            </h1>

            <p className="text-gray-600 text-lg leading-8 mb-8">
              Read articles, share ideas, and connect with
              readers and authors from around the world.
            </p>

            <div className="flex gap-4">

              <Link
                to="/login"
                className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
              >
                Explore
              </Link>

              <Link
                to="/login"
                className="border border-gray-300 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition"
              >
                Get Started
              </Link>

            </div>

          </div>

          {/* RIGHT CONTENT */}

          <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100">

            <div className="space-y-6">

              <div className="border-b pb-4">

                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Web Development
                </h3>

                <p className="text-gray-600">
                  Learn React, Node.js, and frontend development.
                </p>

              </div>

              <div className="border-b pb-4">

                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Dynamic Programming
                </h3>

                <p className="text-gray-600">
                  Improve problem solving and coding skills.
                </p>

              </div>

              <div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  UI/UX Design
                </h3>

                <p className="text-gray-600">
                  Explore responsive and modern web design ideas.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  )
}

export default Home