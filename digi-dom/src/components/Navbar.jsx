import { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { LogOut, User as UserIcon } from "lucide-react";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    // Check localStorage for user data
    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            try {
                setUser(JSON.parse(storedUser));
            } catch (error) {
                console.error("Failed to parse user data", error);
            }
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setUser(null);
        setOpen(false);
        navigate("/");
        window.location.reload(); // Hard reload to clear any remaining state
    };

    // Helper to get initials
    const getInitials = () => {
        if (!user) return "";
        const f = user.firstName ? user.firstName.charAt(0) : "";
        const l = user.lastName ? user.lastName.charAt(0) : "";
        return (f + l).toUpperCase() || "U";
    };

    return (
        <nav className='fixed top-0 left-0 w-full z-50 bg-black/100'>
            <div className='max-w-7xl mx-auto py-3 px-6 flex items-center justify-between'>

                <div className='flex items-center gap-2'>
                    <div className='w-10 h-10'>
                        <img
                            src="/logo.png"
                            alt="Digital Dominators"
                            className='w-full h-full object-contain'
                        />
                    </div>
                </div>

                <ul className="hidden md:flex items-center gap-10 text-white font-['GoogleSans'] text-sm">
                    <li><a href="/#home" className='text-white hover:text-[#f5a3ff] cursor-pointer transition'>HOME</a></li>
                    <li><a href="/#about" className='text-white hover:text-[#f5a3ff] cursor-pointer transition'>ABOUT US</a></li>
                    <li><a href="/#team" className='text-white hover:text-[#f5a3ff] cursor-pointer transition'>TEAM</a></li>
                    <li><a href="/#events" className='text-white hover:text-[#f5a3ff] cursor-pointer transition'>EVENTS</a></li>
                    <li><a href="/#testimonials" className='text-white hover:text-[#f5a3ff] cursor-pointer transition'>TESTIMONIALS</a></li>
                    <li><a href="/#faq" className='text-white hover:text-[#f5a3ff] cursor-pointer transition'>FAQs</a></li>
                </ul>

                <div className="hidden md:flex items-center gap-4">
                    {user ? (
                        <div className="flex items-center gap-4 group relative">
                            <div className="flex items-center gap-3">
                                <span className="text-sm text-zinc-300 font-['GoogleSans']">
                                    {[user.firstName, user.lastName].filter(Boolean).join(" ")}
                                </span>
                                <div className="w-10 h-10 rounded-full border-2 border-purple-500 overflow-hidden flex items-center justify-center bg-zinc-900 border-opacity-50">
                                    {user.avatar ? (
                                        <img src={user.avatar} alt="Profile" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                                    ) : (
                                        <span className="text-purple-400 font-semibold text-sm">{getInitials()}</span>
                                    )}
                                </div>
                            </div>

                            {/* Hover Dropdown for Logout */}
                            <div className="absolute right-0 top-full pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300" style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif' }}>
                                <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-2 w-48 shadow-xl">
                                    <div className="px-3 py-2 border-b border-zinc-800 mb-2">
                                        <p className="text-xs text-zinc-500 uppercase font-semibold">Role: {user.role}</p>
                                    </div>
                                    <button
                                        onClick={handleLogout}
                                        className="w-full flex items-center gap-2 px-3 py-2 text-sm text-red-500 hover:bg-red-500/10 rounded-lg transition-colors text-left"
                                    >
                                        <LogOut size={16} />
                                        Log Out
                                    </button>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <>
                            <Link to="/login" className="text-white hover:text-purple-400 font-['GoogleSans'] text-sm transition-all duration-300">
                                Login
                            </Link>
                            <Link to="/sign-up">
                                <button className="px-6 py-2 bg-purple-600 border border-purple-600 text-white rounded-full hover:bg-purple-700 hover:border-purple-700 transition duration-300 font-['GoogleSans'] text-sm shadow-lg shadow-purple-500/20">
                                    Register
                                </button>
                            </Link>
                        </>
                    )}
                </div>

                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden text-white text-2xl bg-black px-2"
                >
                    ☰
                </button>
            </div>

            {open && (
                <div className="md:hidden bg-black text-white px-6 pb-6 space-y-4 font-['GoogleSans'] border-b border-zinc-800">
                    <a href="/#home" onClick={() => setOpen(false)} className="block hover:text-[#f5a3ff]">HOME</a>
                    <a href="/#about" onClick={() => setOpen(false)} className="block hover:text-[#f5a3ff]">ABOUT US</a>
                    <a href="/#team" onClick={() => setOpen(false)} className="block hover:text-[#f5a3ff]">TEAM</a>
                    <a href="/#events" onClick={() => setOpen(false)} className="block hover:text-[#f5a3ff]">EVENTS</a>
                    <a href="/#testimonials" onClick={() => setOpen(false)} className="block hover:text-[#f5a3ff]">TESTIMONIALS</a>
                    <a href="/#faq" onClick={() => setOpen(false)} className="block hover:text-[#f5a3ff]">FAQs</a>

                    <div className="pt-4 flex flex-col gap-4 border-t border-zinc-800 mt-4">
                        {user ? (
                            <>
                                <div className="flex items-center gap-3 py-2">
                                    <div className="w-10 h-10 rounded-full border border-purple-500 overflow-hidden flex items-center justify-center bg-zinc-900">
                                        {user.avatar ? (
                                            <img src={user.avatar} alt="Profile" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                                        ) : (
                                            <span className="text-purple-400 font-semibold text-sm">{getInitials()}</span>
                                        )}
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold">{user.firstName} {user.lastName}</p>
                                        <p className="text-xs text-zinc-500">{user.email}</p>
                                    </div>
                                </div>
                                <button
                                    onClick={handleLogout}
                                    className="flex items-center justify-center gap-2 w-full px-6 py-2 border border-red-500 text-red-500 hover:bg-red-500 hover:text-white rounded-full text-center transition"
                                >
                                    <LogOut size={16} />
                                    Log Out
                                </button>
                            </>
                        ) : (
                            <>
                                <Link to="/login" onClick={() => setOpen(false)} className="block text-[#f5a3ff]">
                                    Login
                                </Link>
                                <Link to="/sign-up" onClick={() => setOpen(false)} className="inline-block px-6 py-2 bg-purple-600 text-white rounded-full text-center">
                                    Register
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            )}
        </nav>
    )
}
