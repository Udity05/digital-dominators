import { useState } from 'react';
import {Link} from "react-router-dom";
import Home from './Home.jsx'

export default function Navbar(){
    const [open, setOpen] = useState(false);

    return(
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

                <div className="hidden md:block">
                   <button className="px-6 py-2 border bg-black border-white text-white rounded-full hover:bg-purple-500 hover:text-white transition duration-300 font-['GoogleSans']">
                        <a href="https://chat.whatsapp.com/J0o1beFGCHfJ8ZHGKjcqkd" target="_blank" className='text-white hover:text-white'>
                            JOIN
                        </a>
                    </button>
                </div>
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden text-white text-2xl bg-black"
                >
                    ☰
                </button>
            </div>

            {open && (
        <div className="md:hidden bg-black text-white px-6 pb-6 space-y-4 font-['GoogleSans']">
          <a href="#home" onClick={() => setOpen(false)} className="block hover:text-[#f5a3ff]">HOME</a>
          <a href="#team" onClick={() => setOpen(false)} className="block hover:text-[#f5a3ff]">TEAM</a>
          <a href="#events" onClick={() => setOpen(false)} className="block hover:text-[#f5a3ff]">EVENTS</a>
          <a href="#faq" onClick={() => setOpen(false)} className="block hover:text-[#f5a3ff]">FAQs</a>

          <a
            href="https://chat.whatsapp.com/J0o1beFGCHfJ8ZHGKjcqkd"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-6 py-2 border border-white rounded-full hover:bg-purple-500 transition"
          >
            JOIN
          </a>
        </div>
            )}

        </nav>
    )
}

