import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../store/authStore'
import { toast } from 'react-hot-toast'

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function Login() {

  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  })

  // Zustand Store
  const login = useAuth(state => state.login)
  const currentUser = useAuth(state => state.currentUser)
  const isAuthenticated = useAuth(state => state.isAuthenticated)
  const error = useAuth(state => state.error)

  const onLogin = async (userLoginObj) => {

    await login(userLoginObj)

    setTimeout(() => {

      const auth = useAuth.getState()

      if (auth.isAuthenticated && auth.currentUser) {
        toast.success('Login successful!')
      }
      else if (auth.error) {
        toast.error(
          auth.error.response?.data?.error ||
          auth.error.message ||
          'Login failed'
        )
      }

    }, 100)
  }

  // Redirect
  React.useEffect(() => {

    if (isAuthenticated && currentUser?.role) {

      if (currentUser.role === "USER") {
        navigate('/userdashboard')
      }

      else if (currentUser.role === "AUTHOR") {
        navigate('/authordashboard')
      }

      else if (currentUser.role === "ADMIN") {
        navigate('/admindashboard')
      }

    }

  }, [isAuthenticated, currentUser, navigate])

  return (

    <div className="
      min-h-screen
      flex items-center justify-center
      bg-gradient-to-br
      from-[#1a120b]
      via-[#2c1d14]
      to-[#1f140d]
      relative
      overflow-hidden
      px-6
    ">

      {/* Background Glow */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-[#c8a97e]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#8b5e3c]/10 rounded-full blur-3xl"></div>

      {/* Login Card */}
      <div className="
        relative
        w-full
        max-w-md
        backdrop-blur-2xl
        bg-white/5
        border border-[#c8a97e]/20
        shadow-2xl
        rounded-[32px]
        p-10
      ">

        {/* Heading */}
        <div className="text-center mb-10">

          <p className="uppercase tracking-[5px] text-[#c8a97e] text-sm mb-3">
            Welcome Back
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
            Sign In
          </h2>

          <p className="text-[#d6c2a1] mt-4">
            Continue your vintage blogging journey
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
            {
              error.response?.data?.error ||
              error.response?.data?.message ||
              error.message ||
              'Login failed'
            }
          </div>
        )}

        {/* Form */}
        <form
          onSubmit={handleSubmit(onLogin)}
          className="space-y-6"
        >

          {/* Email */}
          <div>

            <label className="
              block
              text-[#f5deb3]
              text-sm
              tracking-[3px]
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
                focus:border-[#c8a97e]
                focus:ring-2
                focus:ring-[#c8a97e]/30
                transition-all duration-300
              "
              {...register('email', {
                required: 'Email required',
                pattern: {
                  value: emailRegex,
                  message: 'Invalid email format'
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
              text-sm
              tracking-[3px]
              mb-3
            ">
              PASSWORD
            </label>

            <input
              type="password"
              placeholder="Enter password"
              className="
                w-full
                px-5 py-4
                rounded-2xl
                bg-[#2c1d14]/60
                border border-[#c8a97e]/20
                text-[#f5deb3]
                placeholder-[#bfa98a]
                outline-none
                focus:border-[#c8a97e]
                focus:ring-2
                focus:ring-[#c8a97e]/30
                transition-all duration-300
              "
              {...register('password', {
                required: 'Password required'
              })}
            />

            {errors.password?.message && (
              <p className="text-red-300 text-sm mt-2">
                {errors.password.message}
              </p>
            )}

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
            SIGN IN
          </button>

        </form>

        {/* Footer */}
        <div className="mt-8 text-center">

          <p className="text-[#d6c2a1]">
            Don't have an account?
          </p>

          <Link
            to="/register"
            className="
              inline-block
              mt-3
              text-[#f5deb3]
              hover:text-[#c8a97e]
              transition
            "
          >
            Create Account
          </Link>

        </div>

      </div>

    </div>

  )
}

export default Login