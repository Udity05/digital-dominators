import { Link } from "react-router-dom";

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

        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-sm">

         
<div className="max-w-[240px]">
  <h4 className="font-semibold mb-3">Let’s Talk</h4>

  
  <p className="break-words">
    <a
      href="mailto:digitaldominators@gmail.com"
      className="text-gray-400 hover:text-purple-400 block"
    >
      digitaldominators@gmail.com
    </a>
  </p>

  <p className="mt-1 break-words">
    <a
      href="mailto:cotact.dd@gmail.com"
      className="text-gray-400 hover:text-purple-400 block"
    >
      cotact.dd@gmail.com
    </a>
  </p>

  
<p className="mt-3">
  <a
    href="tel:+918695967882"
    className="text-gray-400 hover:text-purple-400 block whitespace-nowrap"
  >
    +91 8695967882
  </a>
</p>

<p className="mt-1">
  <a
    href="tel:+919064303017"
    className="text-gray-400 hover:text-purple-400 block whitespace-nowrap"
  >
    +91 9064303017
  </a>
</p>
</div>


          
          <div>
            <h4 className="font-semibold mb-3">Navigate</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-purple-400">Homepage</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-purple-400">About Us</a></li>
              <li><a href="#team" className="text-gray-400 hover:text-purple-400">Team</a></li>
              <li><a href="#events" className="text-gray-400 hover:text-purple-400">Events</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-purple-400">Testimonials</a></li>
            </ul>
          </div>

          
          <div>
            <h4 className="font-semibold mb-3">Support</h4>
            <ul className="space-y-2">
              <li>
                <a href="#faq" className="text-gray-400 hover:text-purple-400">
                  FAQs
                </a>
              </li>
              <li className="text-gray-400">Contact Us</li>
            </ul>
          </div>

          
          <div>
            <h4 className="font-semibold mb-3">Social Media</h4>
            <ul className="space-y-2">
              <li><a className="text-gray-400 hover:text-purple-400" href="https://www.linkedin.com/company/digital-dominators-in" target="_blank">LinkedIn</a></li>
              <li><a className="text-gray-400 hover:text-purple-400" href="https://www.instagram.com/digital_dominators" target="_blank">Instagram</a></li>
              <li><a className="text-gray-400 hover:text-purple-400" href="https://x.com/digital_domi45" target="_blank">X</a></li>
              <li><a className="text-gray-400 hover:text-purple-400" href="https://chat.whatsapp.com/J0o1beFGCHfJ8ZHGKjcqkd" target="_blank">WhatsApp</a></li>
              <li><a className="text-gray-400 hover:text-purple-400" href="https://www.whatsapp.com/channel/0029VbAarnbGehEHzTfWnG1t" target="_blank">WhatsApp Channel</a></li>
              <li><a className="text-gray-400 hover:text-purple-400" href="https://www.commudle.com/communities/digital-dominators" target="_blank">Commudle</a></li>
              <li><a className="text-gray-400 hover:text-purple-400" href="https://youtube.com/@qwiklabexplorers?si=mMzHkyfEcTLT-xwA" target="_blank">YouTube</a></li>
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