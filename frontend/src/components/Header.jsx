import { NavLink, useNavigate } from 'react-router'
import logo from '../assets/logo.png'
import {
    navbarClass,
    navContainerClass,
    navBrandClass,
    navLinksClass,
    navLinkClass,
    navLinkActiveClass,
    primaryBtn
} from '../styles/common'

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
        <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-gray-200 shadow-sm">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* Logo Section */}
                <NavLink
                    to="/"
                    className="flex items-center gap-3 group"
                >
                    <img
                        className="w-11 h-11 rounded-full object-cover shadow-md group-hover:scale-105 transition duration-300"
                        src={logo}
                        alt="Blog App"
                    />

                    <div>
                        <h1 className="text-xl font-bold text-gray-900 tracking-tight">
                            BlogSphere
                        </h1>
                        <p className="text-xs text-gray-500">
                            Share your stories
                        </p>
                    </div>
                </NavLink>

                {/* Navigation */}
                <nav className="flex items-center gap-8">

                    <ul className="hidden md:flex items-center gap-7">

                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive
                                        ? 'text-black font-semibold'
                                        : 'text-gray-600 hover:text-black transition'
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
                                            isActive
                                                ? 'text-black font-semibold'
                                                : 'text-gray-600 hover:text-black transition'
                                        }
                                    >
                                        Register
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink
                                        to="/login"
                                        className={({ isActive }) =>
                                            isActive
                                                ? 'text-black font-semibold'
                                                : 'text-gray-600 hover:text-black transition'
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
                                                isActive
                                                    ? 'text-black font-semibold'
                                                    : 'text-gray-600 hover:text-black transition'
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
                                                isActive
                                                    ? 'text-black font-semibold'
                                                    : 'text-gray-600 hover:text-black transition'
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
                                                isActive
                                                    ? 'text-black font-semibold'
                                                    : 'text-gray-600 hover:text-black transition'
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
                        <div className="flex items-center gap-4 border-l border-gray-200 pl-6">

                            {(currentUser?.profileImageUrl || currentUser?.profileImage) ? (
                                <img
                                    className="w-10 h-10 rounded-full object-cover border-2 border-gray-200 shadow-sm"
                                    src={currentUser?.profileImageUrl || currentUser?.profileImage}
                                    alt="user"
                                />
                            ) : (
                                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center font-semibold text-gray-600">
                                    {currentUser?.name?.charAt(0)}
                                </div>
                            )}

                            <button
                                onClick={onLogout}
                                className="bg-black text-white px-5 py-2 rounded-full hover:bg-gray-800 transition duration-300 text-sm font-medium"
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