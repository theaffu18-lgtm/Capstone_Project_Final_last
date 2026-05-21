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
      bg-[radial-gradient(circle_at_top,#3b2a1f_0%,#1a120b_60%)]
      relative
      overflow-hidden
      px-6
    ">

      <div className="absolute top-20 left-20 w-72 h-72 bg-[#c8a97e]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#8b5e3c]/10 rounded-full blur-3xl"></div>

      <div className="
        relative
        w-full
        max-w-md
        bg-[#24180f]/95
        border border-[#c8a97e]/20
        shadow-[0_10px_50px_rgba(0,0,0,0.7)]
        rounded-[32px]
        p-10
      ">

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

        </div>

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

        <form
          onSubmit={handleSubmit(onLogin)}
          className="space-y-6"
        >

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
                bg-[#2c1d14]/80
                border border-[#c8a97e]/20
                text-[#f5deb3]
                placeholder-[#bfa98a]
                outline-none
                focus:border-[#c8a97e]
                focus:ring-2
                focus:ring-[#c8a97e]/30
              "
              {...register('email', {
                required: 'Email required',
                pattern: {
                  value: emailRegex,
                  message: 'Invalid email format'
                }
              })}
            />

          </div>

        </form>

      </div>

    </div>

  )
}

export default Login