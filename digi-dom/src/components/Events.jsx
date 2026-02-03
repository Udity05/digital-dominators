import EventCard from "./EventCard";

const newEvents = [
  {
    title: "Upcoming Event",
    img: "/Luma.jpeg",
    link: "https://luma.com/digital-dominators?k=c",
  },
];

const events = [
  {
    title: "Google Arcade Facilitator Program",
    date: "2024",
    img: "/Facilitator.jpeg",
    link: "https://rsvp.withgoogle.com/events/arcade-facilitator/home",
  },
  {
    title: "Gen AI with Pieces",
    date: "13th July, 7PM",
    img: "/AliMustafa.jpeg",
    link: "https://luma.com/699zvici",
  },
  {
    title: "React Caching: From useMemo to Server Components",
    date: "12th August, 7:30 PM",
    img: "/Sulagna.jpeg",
    link: "https://lu.ma/tktsoytq",
  },
  {
    title: "Design Smarter: UI/UX Basics to Industry-Ready",
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
    title: "SIH & Beyond",
    date: "14th September, 8PM",
    img: "/Souradip.jpeg",
    link: "https://luma.com/ct3kpr96",
  },
  {
    title: "Building AI-Powered Apps with Gemini & Firebase",
    date: "19th October, 6PM",
    img: "/Deb.jpeg",
    link: "https://luma.com/783237t7",
  },
  {
    title: "30 Days DSA Challenge",
    date: "1st Nov - 30th Nov",
    img: "/DSA.jpeg",
    link: "https://luma.com/990pdla5",
  },
  {
    title: "Beyond Boundaries: Azure AI for Next-Gen Applications",
    date: "10th January, 7PM",
    img: "/Harsh.jpeg",
    link: "https://luma.com/7qzpy95q",
  },
];

export default function Events() {
  return (
    <section id="events" className="w-full bg-black py-24 overflow-hidden text-white">

      {/* UPCOMING EVENTS */}
      <div className="mb-32">
        <div className="flex items-center justify-between px-12 mb-14">

          <div className="flex items-center h-[120px]">
            <button className="px-10 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 font-['GoogleSans']">
              Upcoming Events
            </button>
          </div>

          <div className="mr-10 flex flex-col justify-center max-w-xl text-right">
            <h2 className="mb-16 text-2xl md:text-3xl leading-relaxed font-['GoogleSans']">
              The next chapter is about to begin — bigger ideas,
              bolder collaborations, and unforgettable experiences.
            </h2>

            <div className=" relative w-full h-full overflow-hidden">
              <div className="flex gap-8 font-['GoogleSans']">
                {newEvents.map((event, i) => (
                  <EventCard
                    key={`upcoming-${i}`}
                    title={event.title}
                    img={event.img}
                    link={event.link}
                  />
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* PAST EVENTS */}
      <div className="flex items-center justify-between px-12 mb-14">
        <div className="flex items-center h-[120px]">
          <button className="px-10 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 font-['GoogleSans']">
            Past Events
          </button>
        </div>

        <div className="flex items-center h-[120px] max-w-xl text-right">
          <h2 className="text-2xl md:text-3xl leading-relaxed font-['GoogleSans']">
            Every past event reflects our commitment to learning,
            collaboration, and meaningful community impact.
          </h2>
        </div>
      </div>

      <div className="relative  overflow-hidden">
        <div className="flex w-max gap-8 animate-events-scroll font-['GoogleSans']">
          {[...events, ...events].map((event, i) => (
            <EventCard
              key={`past-${i}`}
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
