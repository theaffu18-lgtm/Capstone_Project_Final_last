import { NavLink, useNavigate } from 'react-router'
import logo from '../assets/logo.png'
import { useAuth } from '../store/authStore'
import { toast } from 'react-hot-toast'

function Header() {
    const { currentUser, isAuthenticated, logout } = useAuth()
    const navigate = useNavigate()

    const onLogout = async () => {
        try {
            await logout()
            toast.success('Logged out successfully!')
            navigate('/login')
        } catch (err) {
            toast.error('Logout failed!')
        }
    }

    return (
        <header className="sticky top-0 z-50 backdrop-blur-md bg-[#1a120b]/90 border-b border-[#5c4033] shadow-[0_8px_30px_rgb(0,0,0,0.35)]">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* Logo Section */}
                <NavLink
                    to="/"
                    className="flex items-center gap-4 group"
                >
                    <div className="relative">
                        <img
                            className="w-12 h-12 rounded-full object-cover border-2 border-[#c8a97e] shadow-lg group-hover:scale-110 transition duration-500"
                            src={logo}
                            alt="Blog App"
                        />

                        <div className="absolute inset-0 rounded-full border border-[#f5deb3] opacity-40 animate-pulse"></div>
                    </div>

                    <div>
                        <h1 className="text-2xl font-serif tracking-widest text-[#f5deb3] group-hover:text-[#e6c79c] transition duration-300">
                            Affu Blogs
                        </h1>

                        <p className="text-xs uppercase tracking-[4px] text-[#c8a97e]">
                            Vintage Stories
                        </p>
                    </div>
                </NavLink>

                {/* Navigation */}
                <nav className="flex items-center gap-8">

                    <ul className="hidden md:flex items-center gap-8 text-sm tracking-wide">

                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `transition duration-300 ${
                                        isActive
                                            ? 'text-[#f5deb3] border-b border-[#c8a97e] pb-1'
                                            : 'text-[#d6c2a1] hover:text-[#f5deb3]'
                                    }`
                                }
                            >
                                Home
                            </NavLink>
                        </li>

                        {!isAuthenticated && (
                            <>
                                <li>
                                    <NavLink
                                        to="/register"
                                        className={({ isActive }) =>
                                            `transition duration-300 ${
                                                isActive
                                                    ? 'text-[#f5deb3] border-b border-[#c8a97e] pb-1'
                                                    : 'text-[#d6c2a1] hover:text-[#f5deb3]'
                                            }`
                                        }
                                    >
                                        Register
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink
                                        to="/login"
                                        className={({ isActive }) =>
                                            `transition duration-300 ${
                                                isActive
                                                    ? 'text-[#f5deb3] border-b border-[#c8a97e] pb-1'
                                                    : 'text-[#d6c2a1] hover:text-[#f5deb3]'
                                            }`
                                        }
                                    >
                                        Login
                                    </NavLink>
                                </li>
                            </>
                        )}

                        {isAuthenticated && (
                            <>
                                {currentUser?.role === 'USER' && (
                                    <li>
                                        <NavLink
                                            to="/userdashboard"
                                            className={({ isActive }) =>
                                                `transition duration-300 ${
                                                    isActive
                                                        ? 'text-[#f5deb3] border-b border-[#c8a97e] pb-1'
                                                        : 'text-[#d6c2a1] hover:text-[#f5deb3]'
                                                }`
                                            }
                                        >
                                            Dashboard
                                        </NavLink>
                                    </li>
                                )}

                                {currentUser?.role === 'AUTHOR' && (
                                    <li>
                                        <NavLink
                                            to="/authordashboard"
                                            className={({ isActive }) =>
                                                `transition duration-300 ${
                                                    isActive
                                                        ? 'text-[#f5deb3] border-b border-[#c8a97e] pb-1'
                                                        : 'text-[#d6c2a1] hover:text-[#f5deb3]'
                                                }`
                                            }
                                        >
                                            Author Panel
                                        </NavLink>
                                    </li>
                                )}

                                {currentUser?.role === 'ADMIN' && (
                                    <li>
                                        <NavLink
                                            to="/admindashboard"
                                            className={({ isActive }) =>
                                                `transition duration-300 ${
                                                    isActive
                                                        ? 'text-[#f5deb3] border-b border-[#c8a97e] pb-1'
                                                        : 'text-[#d6c2a1] hover:text-[#f5deb3]'
                                                }`
                                            }
                                        >
                                            Admin Panel
                                        </NavLink>
                                    </li>
                                )}
                            </>
                        )}
                    </ul>

                    {/* User Section */}
                    {isAuthenticated && (
                        <div className="flex items-center gap-4 border-l border-[#5c4033] pl-6">

                            {(currentUser?.profileImageUrl || currentUser?.profileImage) ? (
                                <img
                                    className="w-11 h-11 rounded-full object-cover border-2 border-[#c8a97e] shadow-md"
                                    src={currentUser?.profileImageUrl || currentUser?.profileImage}
                                    alt="user"
                                />
                            ) : (
                                <div className="w-11 h-11 rounded-full bg-[#3b2a1f] border border-[#c8a97e] flex items-center justify-center font-bold text-[#f5deb3]">
                                    {currentUser?.name?.charAt(0)}
                                </div>
                            )}

                            <button
                                onClick={onLogout}
                                className="
                                    px-5 py-2.5
                                    rounded-full
                                    bg-gradient-to-r
                                    from-[#8b5e3c]
                                    to-[#5c4033]
                                    text-[#f5deb3]
                                    font-medium
                                    tracking-wide
                                    shadow-lg
                                    hover:scale-105
                                    hover:shadow-[#c8a97e]/30
                                    transition-all
                                    duration-300
                                "
                            >
                                Logout
                            </button>
                        </div>
                    )}
                </nav>
            </div>
        </header>
    )
}

export default Header