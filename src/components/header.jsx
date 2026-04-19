export default function Header({ title }) {
  return (
    <div className="flex justify-between mb-6">
      <div>
        <h1 className="text-2xl font-semibold">
          {title || "Live Monitoring Dashboard"}
        </h1>
        <p className="text-gray-500 text-sm">
          Real-time pressure analysis across all zones
        </p>
      </div>

      <button className="bg-red-500 text-white px-4 py-2 rounded-lg">
        Trigger Anomaly
      </button>
    </div>
  );
}