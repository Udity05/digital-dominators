import EventCard from "./EventCard";

const events = [
   {
    title: "Google Arcade Facilitator Program",
    date: "2024",
    img: "/Facilitator.jpeg",
    link: "https://rsvp.withgoogle.com/events/arcade-facilitator/home"
  }, 
  {
    title: "Gen AI with Pieces",
    date: "13th July, 7PM",
    img: "/AliMustafa.jpeg",
    link: "https://luma.com/699zvici"
  },
  {
    title: "BIT BANTER 01",
    date: "12th August, 7:30 PM",
    img: "/Sulagna.jpeg",
    link: "https://lu.ma/tktsoytq",
  },
  {
    title: "BIT BANTER 02",
    date: "31st August, 7PM",
    img: "/Rahul.jpeg",
    link: "https://lu.ma/gablitiv",
  },
  {
    title: "Google Arcade Facilitator Program",
    date: "2025",
    img: "/Facilitator.jpeg",
    link: "https://rsvp.withgoogle.com/events/arcade-facilitator/home",
  }, 
  {
    title: "BIT BANTER 03",
    date: "14th September, 8PM",
    img: "/Souradip.jpeg",
    link: "https://luma.com/ct3kpr96",
  },
  {
    title: "BIT BANTER 05",
    date: "19th October, 6PM",
    img: "/Deb.jpeg",
    link:"https://luma.com/783237t7",
  },
  {
    title: "30 Days DSA Challenge",
    date: "1st Nov - 30th Nov",
    img: "/DSA.jpeg",
    link: "https://luma.com/990pdla5",
  },
  {
    title: "BIT BANTER 06",
    date: "10th January, 7PM",
    img: "/Harsh.jpeg",
    link: "https://luma.com/7qzpy95q"
  },
];

export default function Events() {
  return (
    <section id="events" className="w-full bg-black py-20 overflow-hidden text-white">

      
      <div className="flex items-center justify-between px-12 mb-12">
        <button className="px-10 mt-24 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 font-['GoogleSans']">
          Past Events
        </button>

        <h2 className="mt-10 mb-24 text-2xl md:text-3xl max-w-xl text-right leading-relaxed font-['GoogleSans']">
          Every past event reflects our commitment to learning,
          collaboration, and meaningful community impact.
        </h2>
      </div>

      
      <div className="relative w-full h-full overflow-hidden">
        <div className="flex gap-8 animate-events-scroll font-['GoogleSans'] animate-events-scroll">

          
          {[...events, ...events].map((event, i) => (
            <EventCard 
              key={i}
              title={event.title}
              date={event.date}
              img={event.img}
              link={event.link} 
            />
          ))}

        </div>
      </div>
    </section>
  );
}
