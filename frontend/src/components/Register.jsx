import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'
import API_BASE from '../config/api'

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function Register() {

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      role: 'USER',
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      profileImageUrl: '',
    },
  })

  const navigate = useNavigate()

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [preview, setPreview] = useState(null)

  const onRegister = async (newUser) => {

    const formData = new FormData()

    let { role, profileImageUrl, ...userObj } = newUser

    Object.keys(userObj).forEach((key) => {
      formData.append(key, userObj[key])
    })

    if (profileImageUrl && profileImageUrl[0]) {
      formData.append("profileImageUrl", profileImageUrl[0])
    }

    try {

      setLoading(true)

      if (newUser.role === "USER") {

        let res = await axios.post(
          `${API_BASE}/user-api/users`,
          formData,
          { withCredentials: true }
        )

        if (res.status === 201) navigate('/login')
      }

      if (newUser.role === "AUTHOR") {

        let res = await axios.post(
          `${API_BASE}/author-api/users`,
          formData,
          { withCredentials: true }
        )

        if (res.status === 201) navigate('/login')
      }

    }
    catch (err) {

      setError(
        err.response?.data?.error ||
        "Registration Failed"
      )

    }
    finally {
      setLoading(false)
    }
  }

  useEffect(() => {

    return () => {
      if (preview) URL.revokeObjectURL(preview)
    }

  }, [preview])

  if (loading) {
    return (
      <div className="
        min-h-screen
        flex items-center justify-center
        bg-[#1a120b]
        text-[#f5deb3]
        text-2xl
        tracking-[4px]
      ">
        Creating your account...
      </div>
    )
  }

  return (

    <div className="
      min-h-screen
      flex items-center justify-center
      bg-gradient-to-br
      from-[#1a120b]
      via-[#2c1d14]
      to-[#1f140d]
      px-6 py-16
      relative
      overflow-hidden
    ">

      {/* Background Glow */}
      <div className="absolute top-20 left-10 w-80 h-80 bg-[#c8a97e]/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#8b5e3c]/10 blur-3xl rounded-full"></div>

      {/* Register Card */}
      <div className="
        relative
        w-full
        max-w-2xl
        backdrop-blur-2xl
        bg-white/5
        border border-[#c8a97e]/20
        rounded-[36px]
        shadow-2xl
        p-10
      ">

        {/* Header */}
        <div className="text-center mb-10">

          <p className="
            uppercase
            tracking-[5px]
            text-[#c8a97e]
            text-sm
            mb-3
          ">
            Join Blog Sphere
          </p>

          <h2 className="
            text-5xl
            font-serif
            text-transparent
            bg-clip-text
            bg-gradient-to-r
            from-[#f5deb3]
            to-[#c8a97e]
          ">
            Create Account
          </h2>

          <p className="text-[#d6c2a1] mt-4">
            Begin your luxury blogging journey
          </p>

        </div>

        {/* Error */}
        {error && (
          <div className="
            bg-red-500/10
            border border-red-400/20
            text-red-300
            px-4 py-3
            rounded-2xl
            mb-6
            text-sm
          ">
            {error}
          </div>
        )}

        {/* FORM */}
        <form
          onSubmit={handleSubmit(onRegister)}
          className="space-y-6"
        >

          {/* Role Selection */}
          <div className="
            flex items-center justify-center gap-10
            pb-6 border-b border-[#c8a97e]/10
          ">

            <label className="
              flex items-center gap-3
              text-[#f5deb3]
              cursor-pointer
            ">
              <input
                type="radio"
                value="USER"
                className="accent-[#c8a97e]"
                {...register('role')}
              />

              <span>User</span>
            </label>

            <label className="
              flex items-center gap-3
              text-[#f5deb3]
              cursor-pointer
            ">
              <input
                type="radio"
                value="AUTHOR"
                className="accent-[#c8a97e]"
                {...register('role')}
              />

              <span>Author</span>
            </label>

          </div>

          {/* Name Fields */}
          <div className="grid md:grid-cols-2 gap-5">

            <div>

              <label className="
                block
                text-[#f5deb3]
                tracking-[3px]
                text-sm
                mb-3
              ">
                FIRST NAME
              </label>

              <input
                type="text"
                placeholder="John"
                className="
                  w-full
                  px-5 py-4
                  rounded-2xl
                  bg-[#2c1d14]/60
                  border border-[#c8a97e]/20
                  text-[#f5deb3]
                  placeholder-[#bfa98a]
                  outline-none
                  focus:ring-2
                  focus:ring-[#c8a97e]/30
                "
                {...register('firstName', {
                  required: 'Required'
                })}
              />

              {errors.firstName?.message && (
                <p className="text-red-300 text-sm mt-2">
                  {errors.firstName.message}
                </p>
              )}

            </div>

            <div>

              <label className="
                block
                text-[#f5deb3]
                tracking-[3px]
                text-sm
                mb-3
              ">
                LAST NAME
              </label>

              <input
                type="text"
                placeholder="Doe"
                className="
                  w-full
                  px-5 py-4
                  rounded-2xl
                  bg-[#2c1d14]/60
                  border border-[#c8a97e]/20
                  text-[#f5deb3]
                  placeholder-[#bfa98a]
                  outline-none
                  focus:ring-2
                  focus:ring-[#c8a97e]/30
                "
                {...register('lastName')}
              />

            </div>

          </div>

          {/* Email */}
          <div>

            <label className="
              block
              text-[#f5deb3]
              tracking-[3px]
              text-sm
              mb-3
            ">
              EMAIL ADDRESS
            </label>

            <input
              type="email"
              placeholder="name@example.com"
              className="
                w-full
                px-5 py-4
                rounded-2xl
                bg-[#2c1d14]/60
                border border-[#c8a97e]/20
                text-[#f5deb3]
                placeholder-[#bfa98a]
                outline-none
                focus:ring-2
                focus:ring-[#c8a97e]/30
              "
              {...register('email', {
                required: 'Required',
                pattern: {
                  value: emailRegex,
                  message: 'Invalid format'
                }
              })}
            />

            {errors.email?.message && (
              <p className="text-red-300 text-sm mt-2">
                {errors.email.message}
              </p>
            )}

          </div>

          {/* Password */}
          <div>

            <label className="
              block
              text-[#f5deb3]
              tracking-[3px]
              text-sm
              mb-3
            ">
              PASSWORD
            </label>

            <input
              type="password"
              placeholder="Minimum 8 characters"
              className="
                w-full
                px-5 py-4
                rounded-2xl
                bg-[#2c1d14]/60
                border border-[#c8a97e]/20
                text-[#f5deb3]
                placeholder-[#bfa98a]
                outline-none
                focus:ring-2
                focus:ring-[#c8a97e]/30
              "
              {...register('password', {
                required: 'Required'
              })}
            />

          </div>

          {/* Upload */}
          <div>

            <label className="
              block
              text-[#f5deb3]
              tracking-[3px]
              text-sm
              mb-3
            ">
              PROFILE PHOTO
            </label>

            <div className="flex items-center gap-5">

              <label className="flex-1">

                <input
                  type="file"
                  className="hidden"
                  accept="image/png, image/jpeg"
                  {...register("profileImageUrl", {

                    onChange: (e) => {

                      const file = e.target.files[0]

                      if (file) {

                        if (
                          !["image/jpeg", "image/png"]
                          .includes(file.type)
                        ) {
                          setError("Only JPG or PNG allowed")
                          return
                        }

                        if (file.size > 2 * 1024 * 1024) {
                          setError("File size must be less than 2MB")
                          return
                        }

                        setPreview(URL.createObjectURL(file))
                        setError(null)
                      }
                    }
                  })}
                />

                <div className="
                  text-center
                  py-4
                  rounded-2xl
                  border-2 border-dashed border-[#c8a97e]/30
                  text-[#d6c2a1]
                  hover:border-[#c8a97e]
                  hover:bg-[#c8a97e]/5
                  transition-all duration-300
                  cursor-pointer
                ">
                  {preview ? 'Change Photo' : 'Upload Photo'}
                </div>

              </label>

              {preview && (
                <img
                  src={preview}
                  alt="Preview"
                  className="
                    w-16 h-16
                    rounded-full
                    object-cover
                    border-2 border-[#c8a97e]
                  "
                />
              )}

            </div>

          </div>

          {/* Button */}
          <button
            type="submit"
            className="
              w-full
              py-4
              rounded-2xl
              bg-gradient-to-r
              from-[#c8a97e]
              to-[#8b5e3c]
              text-[#1a120b]
              font-semibold
              tracking-[2px]
              shadow-xl
              hover:scale-[1.02]
              hover:shadow-[#c8a97e]/30
              transition-all duration-300
            "
          >
            CREATE ACCOUNT
          </button>

        </form>

        {/* Footer */}
        <div className="text-center mt-8">

          <p className="text-[#d6c2a1]">
            Already have an account?
          </p>

          <Link
            to="/login"
            className="
              inline-block
              mt-3
              text-[#f5deb3]
              hover:text-[#c8a97e]
              transition
            "
          >
            Sign In
          </Link>

        </div>

      </div>

    </div>

  )
}

export default Register