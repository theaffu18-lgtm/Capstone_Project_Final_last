import React from 'react'
import { Link } from 'react-router-dom'

function Home() {

  return (

    <div className="min-h-screen bg-[#f5f7fb] overflow-hidden">

      {/* HERO SECTION */}

      <section className="relative">

        <div className="absolute inset-0 bg-linear-to-br from-[#0066cc] via-[#4d94ff] to-[#8ec5ff] opacity-95"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-28">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT CONTENT */}

            <div>

              <span className="inline-block px-5 py-2 rounded-full bg-white/15 backdrop-blur-md text-white text-sm tracking-wide border border-white/20 shadow-lg mb-8">
                ✨ Discover stories that inspire
              </span>

              <h1 className="text-5xl md:text-7xl font-black leading-tight text-white mb-8">
                Share Ideas.
                <br />
                Inspire People.
              </h1>

              <p className="text-white/90 text-lg md:text-xl leading-9 max-w-2xl mb-12">
                Blog App is a modern platform where authors publish
                meaningful stories and readers discover knowledge,
                creativity, and fresh perspectives from around the world.
              </p>

              <div className="flex flex-wrap gap-5">

                <Link
                  to="/signin"
                  className="px-8 py-4 rounded-2xl bg-white text-[#0066cc] font-bold text-lg shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  Start Reading
                </Link>

                <Link
                  to="/signup"
                  className="px-8 py-4 rounded-2xl border border-white/40 text-white font-semibold text-lg backdrop-blur-md hover:bg-white/10 transition-all duration-300"
                >
                  Become an Author
                </Link>

              </div>

            </div>

            {/* RIGHT SIDE DESIGN */}

            <div className="relative hidden lg:block">

              <div className="absolute top-0 left-0 w-72 h-72 bg-white/20 rounded-full blur-3xl"></div>

              <div className="relative bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[40px] p-10 shadow-2xl">

                <div className="space-y-8">

                  <div className="bg-white rounded-3xl p-6 shadow-lg">

                    <div className="flex items-center gap-4 mb-4">

                      <div className="w-14 h-14 rounded-full bg-[#0066cc]"></div>

                      <div>
                        <h3 className="font-bold text-[#1d1d1f]">
                          Modern Web Development
                        </h3>

                        <p className="text-sm text-[#6e6e73]">
                          Explore MERN & React
                        </p>
                      </div>

                    </div>

                    <p className="text-[#4a4a4f] leading-7">
                      Learn frontend, backend, deployment,
                      responsive design, and modern UI practices.
                    </p>

                  </div>

                  <div className="bg-[#1d1d1f] rounded-3xl p-6 shadow-lg">

                    <span className="text-[#4d94ff] text-sm font-semibold">
                      TRENDING
                    </span>

                    <h3 className="text-2xl font-bold text-white mt-3 mb-4">
                      Dynamic Programming Simplified
                    </h3>

                    <p className="text-white/70 leading-7">
                      Improve your DSA skills with beginner-friendly
                      explanations and practical coding examples.
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* FEATURES SECTION */}

      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-28">

        <div className="text-center mb-20">

          <span className="text-[#0066cc] font-bold tracking-widest uppercase text-sm">
            Why Choose Us
          </span>

          <h2 className="text-4xl md:text-5xl font-black text-[#1d1d1f] mt-5 mb-6">
            Built for Readers & Writers
          </h2>

          <p className="text-[#6e6e73] text-lg max-w-3xl mx-auto leading-8">
            Experience a clean, modern blogging platform designed
            for creativity, readability, and community engagement.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* CARD 1 */}

          <div className="bg-white rounded-[32px] p-10 shadow-lg border border-[#eef0f5] hover:-translate-y-3 transition-all duration-300">

            <div className="w-16 h-16 rounded-2xl bg-[#0066cc] text-white flex items-center justify-center text-3xl mb-8">
              ✍️
            </div>

            <h3 className="text-2xl font-bold text-[#1d1d1f] mb-5">
              Create Stories
            </h3>

            <p className="text-[#6e6e73] leading-8">
              Authors can publish beautiful articles and share
              knowledge with readers across the platform.
            </p>

          </div>

          {/* CARD 2 */}

          <div className="bg-white rounded-[32px] p-10 shadow-lg border border-[#eef0f5] hover:-translate-y-3 transition-all duration-300">

            <div className="w-16 h-16 rounded-2xl bg-[#ff7a59] text-white flex items-center justify-center text-3xl mb-8">
              📚
            </div>

            <h3 className="text-2xl font-bold text-[#1d1d1f] mb-5">
              Explore Articles
            </h3>

            <p className="text-[#6e6e73] leading-8">
              Discover programming, design, productivity,
              technology, and many more engaging topics.
            </p>

          </div>

          {/* CARD 3 */}

          <div className="bg-white rounded-[32px] p-10 shadow-lg border border-[#eef0f5] hover:-translate-y-3 transition-all duration-300">

            <div className="w-16 h-16 rounded-2xl bg-[#111827] text-white flex items-center justify-center text-3xl mb-8">
              💬
            </div>

            <h3 className="text-2xl font-bold text-[#1d1d1f] mb-5">
              Community Interaction
            </h3>

            <p className="text-[#6e6e73] leading-8">
              Readers can comment, engage with authors,
              and participate in meaningful discussions.
            </p>

          </div>

        </div>

      </section>

      {/* CTA SECTION */}

      <section className="max-w-6xl mx-auto px-6 lg:px-12 pb-28">

        <div className="bg-gradient-to-r from-[#0066cc] to-[#4d94ff] rounded-[40px] p-14 text-center shadow-2xl">

          <h2 className="text-4xl md:text-5xl font-black text-white mb-8">
            Start Your Blogging Journey Today
          </h2>

          <p className="text-white/90 text-lg max-w-3xl mx-auto leading-8 mb-12">
            Join our growing community of readers and authors.
            Share your thoughts, learn new skills, and inspire others.
          </p>

          <Link
            to="/signup"
            className="inline-block px-10 py-5 bg-white text-[#0066cc] rounded-2xl font-bold text-lg shadow-xl hover:scale-105 transition-all duration-300"
          >
            Get Started
          </Link>

        </div>

      </section>

    </div>
  )
}

export default Home