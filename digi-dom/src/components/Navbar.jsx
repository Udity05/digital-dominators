import { useState } from 'react';
import { Link } from "react-router-dom";
import Home from './Home.jsx'

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className='fixed top-0 left-0 w-full z-50 bg-black/100'>
            <div className='max-w-7xl mx-auto  py-3 flex items-center justify-between'>

                <div className='flex items-center gap-2'>
                    <div className='w-10 h-10'>
                        <img
                            src="/logo.png"
                            alt="Digital Dominators"
                            className='w-full h-full object-contain'
                        />
                    </div>
                </div>

                <ul className="hidden md:flex items-center gap-24 text-white font-['GoogleSans'] text-sm">
                    <li><a href="#home" className='text-white hover:text-[#f5a3ff] cursor-pointer transition href={Home}'>HOME</a></li>
                    <li><a href="#team" className='text-white hover:text-[#f5a3ff] cursor-pointer transition'>TEAM</a></li>
                    <li><a href="#events" className='text-white hover:text-[#f5a3ff] cursor-pointer transition'>EVENTS</a></li>
                    <li><a href="#faq" className='text-white hover:text-[#f5a3ff] cursor-pointer transition'>FAQs</a></li>
                </ul>

                <div className="hidden md:flex items-center gap-4">
                    <Link to="/login" className="text-white hover:text-purple-400 font-['GoogleSans'] text-sm transition transition-all duration-300">
                        Login
                    </Link>
                    <Link to="/sign-up">
                        <button className="px-6 py-2 bg-purple-600 border border-purple-600 text-white rounded-full hover:bg-purple-700 hover:border-purple-700 transition duration-300 font-['GoogleSans'] text-sm shadow-lg shadow-purple-500/20">
                            Register
                        </button>
                    </Link>
                    <button className="px-6 py-2 border bg-black border-white text-white rounded-full hover:bg-white hover:text-black transition duration-300 font-['GoogleSans'] text-sm">
                        <a href="https://chat.whatsapp.com/J0o1beFGCHfJ8ZHGKjcqkd" target="_blank" className="hover:text-inherit">
                            JOIN
                        </a>
                    </button>
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
                    <a href="#home" onClick={() => setOpen(false)} className="block hover:text-[#f5a3ff]">HOME</a>
                    <a href="#team" onClick={() => setOpen(false)} className="block hover:text-[#f5a3ff]">TEAM</a>
                    <a href="#events" onClick={() => setOpen(false)} className="block hover:text-[#f5a3ff]">EVENTS</a>
                    <a href="#faq" onClick={() => setOpen(false)} className="block hover:text-[#f5a3ff]">FAQs</a>

                    <div className="pt-4 flex flex-col gap-4">
                        <Link to="/login" onClick={() => setOpen(false)} className="block text-[#f5a3ff]">
                            Login
                        </Link>
                        <Link to="/sign-up" onClick={() => setOpen(false)} className="inline-block px-6 py-2 bg-purple-600 text-white rounded-full text-center">
                            Register
                        </Link>
                        <a
                            href="https://chat.whatsapp.com/J0o1beFGCHfJ8ZHGKjcqkd"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-6 py-2 border border-white rounded-full text-center hover:bg-white hover:text-black transition"
                        >
                            JOIN
                        </a>
                    </div>
                </div>
            )}

        </nav>
    )
}

