export default function ZoneCard({ id, title, value, status }) {
  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all">

      <div className="flex justify-between items-center mb-2">
        <span className="text-green-500 text-sm font-medium">● {id}</span>
        <span className="text-gray-400">~</span>
      </div>

      <p className="text-gray-500 text-sm">{title}</p>

      <h2 className="text-3xl font-semibold mt-1">
        {value} <span className="text-sm text-gray-400">PSI</span>
      </h2>

      <span className="mt-3 inline-block bg-green-100 text-green-600 text-xs px-3 py-1 rounded-full">
        {status}
      </span>
    </div>
  );
}