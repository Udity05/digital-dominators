export default function EventCard({ title, date, img, link }) {
  return (
    <div className="relative min-w-[260px] h-[360px] rounded-2xl overflow-hidden shrink-0">

      <img
        src={img}
        alt={title}
        className="w-full h-full object-cover"
      />

      <div className="absolute bottom-2 left-2 right-2 
        bg-black/40 backdrop-blur-md rounded-xl 
        px-3 py-2 flex justify-between items-center">

        <div>
          <p className="text-white text-sm font-semibold">{title}</p>
          <p className="text-white/70 text-xs">{date}</p>
        </div>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-white bg-white/10 px-3 py-1 rounded-full hover:bg-white/20 transition"
        >
          View
        </a>

      </div>
    </div>
  );
}
