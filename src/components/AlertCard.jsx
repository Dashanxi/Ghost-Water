export default function AlertCard({
  title,
  level,
  zone,
  loss,
  confidence,
  points,
  action,
}) {
  const borderColor =
    level === "HIGH" ? "border-red-500" : "border-yellow-400";

  const buttonStyle =
    level === "HIGH"
      ? "bg-red-500 hover:bg-red-600"
      : "bg-black hover:bg-gray-800";

  return (
    <div
      className={`border-l-4 ${borderColor} bg-white rounded-2xl p-6 shadow-sm`}
    >
      <div className="flex justify-between items-start">

        <div>
          <h2 className="text-lg font-semibold flex items-center gap-2">
            {title}
            <span
              className={`text-xs px-2 py-1 rounded-full ${
                level === "HIGH"
                  ? "bg-red-100 text-red-600"
                  : "bg-yellow-100 text-yellow-600"
              }`}
            >
              {level}
            </span>
          </h2>

          <p className="text-sm text-gray-500 mt-1">{zone}</p>

          <div className="mt-2 flex items-center gap-3 text-sm">
            <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded-full">
              AI Type: {title.toUpperCase()}
            </span>

            <span className="text-gray-500">
              Confidence: {confidence}%
            </span>
          </div>

          <h3 className="mt-4 font-medium text-gray-700">
            Explainable AI Reasoning
          </h3>

          <ul className="mt-2 text-sm text-gray-600 space-y-1">
            {points.map((p, i) => (
              <li key={i}>• {p}</li>
            ))}
          </ul>

          <div className="mt-4 text-sm bg-gray-50 p-3 rounded-lg">
            <p>📍 Location: {zone}</p>
            <p>🚨 Priority: {level}</p>
            <p>🛠 Type: {title}</p>
          </div>

          <div className="mt-4 bg-blue-50 p-3 rounded-lg text-sm text-gray-700">
            <p className="font-medium">⚡ Recommended Action</p>
            <p>{action}</p>
          </div>
        </div>

        <div className="text-right w-64">
          <p className="text-red-500 font-semibold">{loss}</p>

          <div className="mt-6">
            <p className="text-sm text-gray-500">Confidence Score</p>

            <div className="h-2 bg-gray-200 rounded-full mt-2">
              <div
                className="h-2 bg-black rounded-full"
                style={{ width: `${confidence}%` }}
              />
            </div>

            <p className="text-xs text-gray-400 mt-1">
              {confidence > 90
                ? "Very High Certainty"
                : confidence > 80
                ? "High Certainty"
                : "Moderate Certainty"}
            </p>
          </div>

          <button
            className={`${buttonStyle} text-white px-4 py-2 rounded-lg w-full mt-4`}
          >
            Send Alert
          </button>

          <button className="border border-gray-300 px-4 py-2 rounded-lg w-full mt-2 text-sm">
            Mark as Resolved
          </button>
        </div>
      </div>
    </div>
  );
}