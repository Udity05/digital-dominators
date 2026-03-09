import { Trash2 } from "lucide-react";

export default function EventCard({ id, title, date, img, link, isAdmin, onDelete }) {
  return (
    <div className="group relative min-w-[260px] h-[360px] rounded-2xl overflow-hidden shrink-0 transition-transform duration-300 hover:scale-[1.02]">

      <img
        src={`${import.meta.env.VITE_API_URL || ""}${img}`}
        alt={title}
        className="w-full h-full object-cover"
      />

      {/* Admin Delete Icon */}
      {isAdmin && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onDelete(id);
          }}
          className="absolute top-4 right-4 p-2.5 bg-transparent border border-white/20 hover:bg-white/10 text-white rounded-xl 
            opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-[-10px] group-hover:translate-y-0
            shadow-xl backdrop-blur-md z-10"
          title="Delete Event"
        >
          <Trash2 size={20} className="text-white/80 hover:text-red-500 transition-colors" />
        </button>
      )}

      <div className="absolute bottom-2 left-2 right-2 
        bg-black/40 backdrop-blur-md rounded-xl 
        px-3 py-2 flex justify-between items-center">

        <div>
          <p className="text-white text-sm font-semibold truncate max-w-[140px]">{title}</p>
          <p className="text-white/70 text-xs">{date}</p>
        </div>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-white bg-white/10 px-3 py-1 rounded-full hover:bg-white/20 transition-all duration-300"
        >
          View
        </a>

      </div>
    </div>
  );
}
