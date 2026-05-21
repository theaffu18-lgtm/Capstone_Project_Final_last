import React from 'react'
import { Link } from 'react-router-dom'

function Home() {

  return (

    <div className="
      min-h-screen
      bg-gradient-to-br
      from-[#1a120b]
      via-[#3b2a1f]
      to-[#1f140d]
      text-[#f5deb3]
      overflow-hidden
      relative
    ">

      {/* Background Glow */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-[#c8a97e]/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#8b5e3c]/10 blur-3xl rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-24">

        <div className="grid md:grid-cols-2 gap-20 items-center">

          {/* LEFT */}
          <div>

            <p className="uppercase tracking-[6px] text-[#c8a97e] text-sm mb-5">
              Timeless Blogging Experience
            </p>

            <h1 className="
              text-6xl md:text-7xl
              font-serif
              leading-tight
              mb-8
            ">

              Welcome to

              <span className="
                block mt-3
                text-transparent
                bg-clip-text
                bg-gradient-to-r
                from-[#f5deb3]
                to-[#c8a97e]
              ">
                Blog Sphere
              </span>

            </h1>

            <p className="
              text-[#d6c2a1]
              text-lg
              leading-9
              mb-10
              max-w-xl
            ">
              Discover stories, ideas, and knowledge from passionate writers
              around the world in a beautifully crafted vintage-inspired space.
            </p>

            <div className="flex flex-wrap gap-5">

              <Link
                to="/login"
                className="
                  px-8 py-4
                  rounded-full
                  bg-gradient-to-r
                  from-[#c8a97e]
                  to-[#8b5e3c]
                  text-[#1a120b]
                  font-semibold
                  tracking-wide
                  shadow-xl
                  hover:scale-105
                  hover:shadow-[#c8a97e]/30
                  transition-all duration-300
                "
              >
                Explore Blogs
              </Link>

              <Link
                to="/register"
                className="
                  px-8 py-4
                  rounded-full
                  border border-[#c8a97e]
                  text-[#f5deb3]
                  hover:bg-[#c8a97e]/10
                  transition-all duration-300
                "
              >
                Get Started
              </Link>

            </div>

          </div>

          {/* RIGHT */}
          <div className="
            bg-[#24180f]/95
            border border-[#c8a97e]/20
            rounded-[32px]
            shadow-[0_10px_50px_rgba(0,0,0,0.7)]
            p-10
            backdrop-blur-xl
          ">

            <div className="space-y-8">

              {/* Card */}
              <div className="
                bg-[#2c1d14]/80
                border border-[#c8a97e]/10
                rounded-2xl
                p-6
                hover:translate-x-2
                hover:border-[#c8a97e]/40
                transition-all duration-300
              ">

                <div className="flex items-center gap-4 mb-4">

                  <div className="
                    w-14 h-14
                    rounded-xl
                    bg-gradient-to-br
                    from-[#c8a97e]
                    to-[#8b5e3c]
                    flex items-center justify-center
                    text-2xl
                  ">
                    💻
                  </div>

                  <h3 className="text-2xl font-serif text-[#f5deb3]">
                    Web Development
                  </h3>

                </div>

                <p className="text-[#d6c2a1] leading-7">
                  Master React, Node.js, backend systems,
                  and modern frontend technologies.
                </p>

              </div>

              {/* Card */}
              <div className="
                bg-[#2c1d14]/80
                border border-[#c8a97e]/10
                rounded-2xl
                p-6
                hover:translate-x-2
                hover:border-[#c8a97e]/40
                transition-all duration-300
              ">

                <div className="flex items-center gap-4 mb-4">

                  <div className="
                    w-14 h-14
                    rounded-xl
                    bg-gradient-to-br
                    from-[#c8a97e]
                    to-[#8b5e3c]
                    flex items-center justify-center
                    text-2xl
                  ">
                    ⚡
                  </div>

                  <h3 className="text-2xl font-serif text-[#f5deb3]">
                    Dynamic Programming
                  </h3>

                </div>

                <p className="text-[#d6c2a1] leading-7">
                  Improve coding logic, algorithms,
                  and advanced problem-solving techniques.
                </p>

              </div>

              {/* Card */}
              <div className="
                bg-[#2c1d14]/80
                border border-[#c8a97e]/10
                rounded-2xl
                p-6
                hover:translate-x-2
                hover:border-[#c8a97e]/40
                transition-all duration-300
              ">

                <div className="flex items-center gap-4 mb-4">

                  <div className="
                    w-14 h-14
                    rounded-xl
                    bg-gradient-to-br
                    from-[#c8a97e]
                    to-[#8b5e3c]
                    flex items-center justify-center
                    text-2xl
                  ">
                    🎨
                  </div>

                  <h3 className="text-2xl font-serif text-[#f5deb3]">
                    UI/UX Design
                  </h3>

                </div>

                <p className="text-[#d6c2a1] leading-7">
                  Explore elegant interfaces, responsive layouts,
                  and premium vintage-inspired experiences.
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