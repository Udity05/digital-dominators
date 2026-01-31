import {Link} from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white px-12 pt-20 pb-10 font-['GoogleSans']">

      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

        
        <div>
          <p className="text-2xl md:text-3xl leading-relaxed max-w-lg">
            We’re more than a group — <br />
            we’re a community that grows through creativity,
            curiosity, and connection.
          </p>
        </div>

        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-sm ">

          
          <div>
            <h4 className="font-semibold mb-3">Let’s Talk</h4>
            <p>
  <a href="mailto:digitaldominators@gmail.com" className="text-gray-400 hover:text-purple-400">
    digitaldominators@gmail.com
  </a>
</p>

<p>
  <a href="tel:+918695967882" className="text-gray-400 hover:text-purple-400">
    +91 8695967882
  </a>
</p>
          </div>

         
          <div>
            <h4 className="font-semibold mb-3">Navigate</h4>
           <ul className="space-y-2 ">
            <li><a href="#home" className="text-gray-400 hover:text-purple-400">Homepage</a></li>
            <li><a href="#about" className="text-gray-400 hover:text-purple-400">About Us</a></li>
            <li><a href="#team" className="text-gray-400 hover:text-purple-400">Team</a></li>
            <li><a href="#events" className="text-gray-400 hover:text-purple-400">Events</a></li>
            <li><a href="#testimonials" className="text-gray-400 text-gray-400 hover:text-purple-400">Testimonials</a></li>
          </ul>

          </div>

          
          <div>
            <h4 className="font-semibold mb-3">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#faq" className="text-gray-400 hover:text-purple-400">FAQs</a></li>
              <li>Contact Us</li>
            </ul>
          </div>

<div>
  <h4 className="font-semibold mb-3">Social Media</h4>
  <ul className="space-y-2 text-gray-400">
    <li>
      <a href="https://www.linkedin.com/company/digital-dominators-in" target="_blank" className="text-gray-400 hover:text-purple-400 transition">
        LinkedIn
      </a>
    </li>
    <li>
      <a href="https://www.instagram.com/digital_dominators" target="_blank" className="text-gray-400 hover:text-purple-400 transition">
        Instagram
      </a>
    </li>
    <li>
      <a href="https://x.com/digital_domi45" target="_blank" className="text-gray-400 hover:text-purple-400 transition">
        X
      </a>
    </li>
    <li>
      <a href="https://chat.whatsapp.com/J0o1beFGCHfJ8ZHGKjcqkd" target="_blank" className="text-gray-400 hover:text-purple-400 transition">
        WhatsApp
      </a>
    </li>
    <li>
      <a href="https://www.whatsapp.com/channel/0029VbAarnbGehEHzTfWnG1t" target="_blank" className="text-gray-400 hover:text-purple-400 transition">
        WhatsApp Channel
      </a>
    </li>
    <li>
      <a href="https://www.commudle.com/communities/digital-dominators" target="_blank" className="text-gray-400 hover:text-purple-400 transition">
        Commudle
      </a>
    </li>
    <li>
      <a href="https://youtube.com/@qwiklabexplorers?si=mMzHkyfEcTLT-xwA" target="_blank" className="text-gray-400 hover:text-purple-400 transition">
        YouTube
      </a>
    </li>
  </ul>
</div>


        </div>
      </div>

      
      <div className="flex flex-col md:flex-row justify-between items-center mt-16 text-gray-400 text-sm border-t border-white/10 pt-6">
        <p>© 2026 Digital Dominators. All rights reserved</p>

        <div className="flex gap-6 mt-4 md:mt-0">
          <span>Privacy</span>
          <span>Terms & Conditions</span>
        </div>
      </div>

      
      <div className="mt-10">
        <h1 className="text-[4rem] md:text-[6rem] font-extrabold text-purple-500 leading-none">
          Digital Dominators
        </h1>
      </div>
    </footer>
  );
}
