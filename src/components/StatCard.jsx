export default function StatCard({ title, value, subtitle, color }) {
  const colors = {
    red: "bg-red-50 text-red-600",
    green: "bg-green-50 text-green-600",
    blue: "bg-blue-50 text-blue-600",
    purple: "bg-purple-50 text-purple-600",
  };

  return (
    <div className={`p-5 rounded-2xl border border-gray-200 ${colors[color]}`}>
      <p className="text-sm text-gray-500">{title}</p>
      <h2 className="text-2xl font-semibold mt-2">{value}</h2>
      <p className="text-xs mt-1">{subtitle}</p>
    </div>
  );
}