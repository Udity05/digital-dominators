import { useEffect, useState } from "react";
import { Star, User, Quote, MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import FeedbackModal from "./ui/FeedbackModal";

const avatars = [
  {
    imageUrl: "https://avatars.githubusercontent.com/u/16860528",
    profileUrl: "https://github.com/dillionverma",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/20110627",
    profileUrl: "https://github.com/tomonarifeehan",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/106103625",
    profileUrl: "https://github.com/BankkRoll",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/59228569",
    profileUrl: "https://github.com/safethecode",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/59442788",
    profileUrl: "https://github.com/sanjay-mali",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/89768406",
    profileUrl: "https://github.com/itsarghyadas",
  },
]

function AvatarCircles({ numPeople, avatarUrls }) {
  return (
    <div className="flex flex-row items-center justify-center">
      {avatarUrls.map((item, idx) => (
        <a key={idx} href={item.profileUrl} target="_blank" rel="noopener noreferrer" className="relative group -ml-4 first:ml-0 hover:z-50 transition-transform hover:scale-110" style={{ zIndex: avatarUrls.length - idx }}>
          <img
            src={item.imageUrl || "/placeholder.svg"}
            className="w-10 h-10 rounded-full border-2 border-black object-cover"
            alt={`Avatar ${idx}`}
          />
        </a>
      ))}
      <a className="relative -ml-4 flex h-10 w-10 items-center justify-center rounded-full border-2 border-black bg-purple-500/10 text-center text-xs font-medium text-purple-400 hover:z-50 hover:bg-purple-500/20" style={{ zIndex: 0 }}>
        +{numPeople}
      </a>
    </div>
  )
}

function TestimonialCard({ testimonial }) {
  return (
    <div className="relative group transition-all duration-500 h-full border border-white/5 bg-[#171717] hover:border-purple-500/30 hover:shadow-[0_0_30px_rgba(168,85,247,0.25)] rounded-3xl overflow-hidden backdrop-blur-sm" style={{ minHeight: "280px" }}>
      <div className="absolute top-0 right-0 p-6 text-white/5 group-hover:text-purple-500/10 transition-colors">
        <Quote className="w-12 h-12 rotate-180" />
      </div>

      <div className="p-8 flex flex-col h-full relative z-10">
        <div className="flex items-center space-x-4 mb-6">
          <div className="relative">
            {testimonial.avatar ? (
              <img
                src={testimonial.avatar?.startsWith('/uploads') ? `${import.meta.env.VITE_API_URL || ""}${testimonial.avatar}` : testimonial.avatar || "/placeholder.svg"}
                alt={testimonial.name}
                className="w-14 h-14 rounded-full border border-white/10 object-cover transition-all duration-500"
              />
            ) : (
              <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                <User className="w-7 h-7 text-white/50" />
              </div>
            )}
            {/* Live Indicator Circle */}
            <div className="absolute bottom-0 right-0 w-4 h-4 bg-[#69E300] rounded-full border-[2.5px] border-[#171717]" />
          </div>
          <div>
            <h4 className="font-bold text-white text-lg tracking-tight font-['GoogleSans']">{testimonial.name}</h4>
            <p className="text-xs font-medium uppercase tracking-widest text-purple-400 font-['GoogleSans']">{testimonial.country}</p>
          </div>
        </div>

        <p className="text-white/60 text-base leading-relaxed text-pretty flex-grow mb-6 group-hover:text-white/90 transition-colors italic font-['GoogleSans']">
          "{testimonial.feedback}"
        </p>

        <div className="flex justify-between items-center mt-auto pt-6 border-t border-white/5 font-['GoogleSans']">
          <div className="flex space-x-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`h-4 w-4 ${star <= (testimonial.rating || 5) ? "fill-purple-500 text-purple-500" : "fill-none text-white/10"}`}
              />
            ))}
          </div>
          <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full bg-white/5 text-white/40 border border-white/10 group-hover:border-purple-500/30 group-hover:text-purple-500 transition-all">
            {testimonial.type}
          </span>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([])
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isCheckingAuth, setIsCheckingAuth] = useState(true)
  const [showFeedbackModal, setShowFeedbackModal] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    // Check local storage since frontend auth relies on localStorage token
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    }
    setIsCheckingAuth(false);
  }, [])

  const fetchFeedbacks = async () => {
    try {
      const API_URL = import.meta.env.VITE_API_URL || "";
      const res = await fetch(`${API_URL}/api/testimonials`)

      if (!res.ok) {
        console.error("Feedback fetch failed:", res.status)
        return
      }

      const data = await res.json()

      if (data.success && data.testimonials) {
        const formatted = data.testimonials.map((f) => ({
          name: f.name,
          country: f.role || "Community Member",
          type: "Member",
          avatar: f.avatar || null,
          feedback: f.text,
          rating: f.rating || 5,
        }))
        setTestimonials(formatted)
      }
    } catch (err) {
      console.error("Failed to fetch feedbacks:", err)
    }
  }

  useEffect(() => {
    fetchFeedbacks()
  }, [])

  const handleShareFeedback = () => {
    if (!isAuthenticated) {
      navigate("/login")
    } else {
      setShowFeedbackModal(true);
    }
  }

  const allTestimonials = [...testimonials, ...testimonials];

  if (testimonials.length === 0) {
    return null; // Or a loading spinner
  }

  return (
    <section id="testimonials" className="relative py-24 bg-black overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 mb-16 text-center space-y-4">
        <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-purple-400 font-['GoogleSans']">
          <MessageCircle className="w-4 h-4 text-purple-400" />
          <span>Community Voices</span>
        </div>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white font-['GoogleSans']">
          What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Community Says</span>
        </h2>
        <p className="text-lg text-white/50 max-w-2xl mx-auto text-pretty font-['GoogleSans']">
          Hear from students, developers, and innovators who have grown,
          collaborated, and built amazing things with Digital Dominators.
        </p>

        {/* Avatars Section */}
        <div className="flex flex-col items-center gap-4 mt-8">
          <div className="flex flex-row items-center justify-center w-full">
            <AvatarCircles numPeople={30} avatarUrls={avatars} />
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden w-full py-4 mb-2">
        {/* Gradients for fade effect on edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

        <div
          className="flex animate-marquee"
          style={{ width: "max-content" }}
        >
          {allTestimonials.map((testimonial, index) => (
            <div key={`idx-${index}`} className="px-4 flex-shrink-0" style={{ width: "450px" }}>
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button
            onClick={handleShareFeedback}
            disabled={isCheckingAuth}
            className="h-14 px-8 !rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white hover:opacity-90 font-bold text-base shadow-xl shadow-purple-500/20 font-['GoogleSans'] border-none"
          >
            {isCheckingAuth ? "Syncing..." : "Share Your Experience"}
          </Button>
        </div>
      </div>

      <FeedbackModal
        isOpen={showFeedbackModal}
        onClose={() => setShowFeedbackModal(false)}
        onAuthRequired={() => navigate("/login")}
      />

      <style>{`
        @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
        }
        .animate-marquee {
            animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
            animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}