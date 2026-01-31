export default function Stats() {
  return (
    <section className="w-full bg-black border-t border-gray-700">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 font-['GoogleSans']">

        {/* Stat 1 */}
        <div className="flex flex-col items-center justify-center py-12 border-b md:border-b-0 md:border-r border-gray-700">
          <h2 className="text-3xl md:text-4xl text-white font-semibold">
            1600+
          </h2>
          <p className="mt-2 text-gray-300 tracking-wide">
            Members
          </p>
        </div>

        {/* Stat 2 */}
        <div className="flex flex-col items-center justify-center py-12 border-b md:border-b-0 md:border-r border-gray-700">
          <h2 className="text-3xl md:text-4xl text-white font-semibold">
            10+
          </h2>
          <p className="mt-2 text-gray-300 tracking-wide">
            Events Conducted
          </p>
        </div>

        {/* Stat 3 */}
        <div className="flex flex-col items-center justify-center py-12">
          <h2 className="text-3xl md:text-4xl text-white font-semibold">
            24/7
          </h2>
          <p className="mt-2 text-gray-300 tracking-wide">
            Active
          </p>
        </div>

      </div>
    </section>
  );
}
