export default function PressureDeviation() {
  const data = [
    { label: "Z1", value: 0.4 },
    { label: "Z2", value: 4.0 },
    { label: "Z3", value: -4.7 },
  ];

  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
      <h2 className="font-semibold mb-4">Pressure Deviation</h2>

      <div className="space-y-4">
        {data.map((item, index) => (
          <div key={index}>
            
            {/* LABEL + VALUE */}
            <div className="flex justify-between text-sm mb-1">
              <span>{item.label}</span>
              <span
                className={
                  item.value >= 0 ? "text-green-500" : "text-red-500"
                }
              >
                {item.value}%
              </span>
            </div>

            {/* BAR */}
            <div className="w-full h-2 bg-gray-200 rounded-full">
              <div
                className={`h-2 rounded-full ${
                  item.value >= 0 ? "bg-green-500" : "bg-red-500"
                }`}
                style={{
                  width: `${Math.min(Math.abs(item.value) * 10, 100)}%`,
                }}
              ></div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}