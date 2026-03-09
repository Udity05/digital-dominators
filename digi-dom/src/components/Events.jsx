import { useState, useEffect } from "react";
import EventCard from "./EventCard";
import EventModal from "./ui/EventModal";
import DeleteConfirmModal from "./ui/DeleteConfirmModal";
import { Plus } from "lucide-react";

export default function Events() {
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [pastEvents, setPastEvents] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Delete State
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [eventToDelete, setEventToDelete] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    // Check if user is admin
    const userJson = localStorage.getItem("user");
    if (userJson) {
      const user = JSON.parse(userJson);
      setIsAdmin(user.role === "Admin");
    }

    // Fetch events from backend
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await fetch("/api/events");
      const data = await response.json();
      if (data.success) {
        const upcoming = data.events.filter(e => e.type === "upcoming");
        const past = data.events.filter(e => e.type === "past");
        setUpcomingEvents(upcoming);
        setPastEvents(past);
      }
    } catch (err) {
      console.error("Failed to fetch events:", err);
    }
  };

  const handleAddEvent = (newEvent) => {
    if (newEvent.type === "upcoming") {
      setUpcomingEvents([newEvent, ...upcomingEvents]);
    } else {
      setPastEvents([newEvent, ...pastEvents]);
    }
  };

  const handleDeleteClick = (id) => {
    setEventToDelete(id);
    setIsDeleteModalOpen(true);
  };

  const handleConfirmDelete = async () => {
    if (!eventToDelete) return;
    setIsDeleting(true);

    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`/api/events/${eventToDelete}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();
      if (data.success) {
        setUpcomingEvents(upcomingEvents.filter((e) => e._id !== eventToDelete));
        setPastEvents(pastEvents.filter((e) => e._id !== eventToDelete));
        setIsDeleteModalOpen(false);
      } else {
        alert(data.message || "Failed to delete event");
      }
    } catch (err) {
      console.error("Delete error:", err);
      alert("Error deleting event");
    } finally {
      setIsDeleting(false);
      setEventToDelete(null);
    }
  };

  return (
    <section
      id="events"
      className="w-full bg-black py-24 overflow-hidden text-white"
    >
      <EventModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAdd={handleAddEvent}
      />

      <DeleteConfirmModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleConfirmDelete}
        loading={isDeleting}
      />

      {/* ================= UPCOMING EVENTS ================= */}
      <div className="mb-28">

        {/* HEADER ROW */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between px-12 mb-12 gap-8">

          <div className="flex items-center gap-6">
            <button className="px-10 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 font-['GoogleSans'] whitespace-nowrap">
              Upcoming Events
            </button>

            {isAdmin && (
              <button
                onClick={() => setIsModalOpen(true)}
                className="flex items-center gap-2 px-6 py-3 rounded-full border border-purple-500/50 hover:bg-purple-500/10 text-purple-400 font-['GoogleSans'] transition group"
              >
                <Plus size={20} className="group-hover:rotate-90 transition-transform duration-300" />
                Add new events
              </button>
            )}
          </div>

          <div className="flex flex-col justify-center max-w-xl md:text-right">
            <h2 className="text-2xl md:text-3xl leading-relaxed font-['GoogleSans']">
              The next chapter is about to begin — bigger ideas,
              bolder collaborations, and unforgettable experiences.
            </h2>
          </div>
        </div>

        {/* UPCOMING CARD ROW */}
        <div className="relative px-12">
          {upcomingEvents.length > 0 ? (
            <div className="flex flex-wrap gap-8 font-['GoogleSans']">
              {upcomingEvents.map((event, i) => (
                <EventCard
                  key={event._id || `upcoming-${i}`}
                  id={event._id}
                  title={event.title}
                  img={event.img}
                  link={event.link}
                  date={event.date}
                  isAdmin={isAdmin}
                  onDelete={handleDeleteClick}
                />
              ))}
            </div>
          ) : (
            <div className="text-zinc-500 font-['GoogleSans'] italic">
              Stay tuned! New chapters are being written...
            </div>
          )}
        </div>

      </div>

      {/* ================= PAST EVENTS ================= */}
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

      {/* PAST EVENTS CAROUSEL */}
      <div className="relative overflow-hidden">
        {pastEvents.length > 0 ? (
          <div className="flex w-max gap-8 animate-events-scroll font-['GoogleSans']">
            {[...pastEvents, ...pastEvents].map((event, i) => (
              <EventCard
                key={event._id || `past-${i}`}
                id={event._id}
                title={event.title}
                date={event.date}
                img={event.img}
                link={event.link}
                isAdmin={isAdmin}
                onDelete={handleDeleteClick}
              />
            ))}
          </div>
        ) : (
          <div className="px-12 text-zinc-500 font-['GoogleSans'] italic">
            Reliving our milestones soon...
          </div>
        )}
      </div>

    </section>
  );
}
