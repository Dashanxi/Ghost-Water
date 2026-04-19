import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Circle,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png",
  iconUrl:
    "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png",
});

const anomalies = [
  {
    id: 1,
    type: "Pipe Burst",
    level: "HIGH",
    zone: "Z2 - SEG_570",
    loss: "12,768 L",
    confidence: 94,
    coords: [23.0225, 72.5714],
  },
  {
    id: 2,
    type: "Leakage",
    level: "MEDIUM",
    zone: "Z1 - SEG_234",
    loss: "3,420 L",
    confidence: 78,
    coords: [23.03, 72.58],
  },
];

export default function SmartMap() {
  return (
    <div className="flex-1 p-6 space-y-4 overflow-auto">

      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold">Smart Map</h1>

        <div className="flex gap-2">
          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
            ● AI Active
          </span>

          <span className="bg-green-50 text-green-600 px-2 py-1 rounded text-xs">
            WhatsApp Enabled
          </span>
        </div>
      </div>

      <div className="bg-blue-50 text-blue-700 px-3 py-2 rounded text-xs">
        🧠 AI Filter Active: Morning peak demand (6–9 AM) excluded
      </div>

      <div className="grid grid-cols-4 gap-4">

        <div className="col-span-3 h-[520px] rounded-xl overflow-hidden border">
          <MapContainer
            center={[23.0225, 72.5714]}
            zoom={13}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

            {anomalies.map((a) => (
              <div key={a.id}>
                <Marker position={a.coords}>
                  <Popup>
                    <div className="text-sm space-y-2">
                      <h3 className="font-semibold text-red-500">
                        🚨 {a.type}
                      </h3>

                      <p>{a.zone}</p>

                      <div className="bg-gray-50 p-2 rounded text-xs">
                        <p>📍 Location: {a.zone}</p>
                        <p>🚨 Priority: {a.level}</p>
                        <p>🛠 Type: {a.type}</p>
                      </div>

                      <p>Loss: {a.loss}</p>
                      <p>Confidence: {a.confidence}%</p>

                      <p className="text-xs text-gray-500">
                        Instruction: Immediate inspection required
                      </p>

                      <a
                        href={`https://wa.me/919999999999?text=${encodeURIComponent(
                          `🚨 AquaMind Work Order

Location: ${a.zone}
Issue: ${a.type}
Priority: ${a.level}
Loss: ${a.loss}`
                        )}`}
                        target="_blank"
                        rel="noreferrer"
                        className="block bg-green-500 text-white text-center py-1 rounded"
                      >
                        WhatsApp Crew
                      </a>
                    </div>
                  </Popup>
                </Marker>

                <Circle
                  center={a.coords}
                  radius={200}
                  pathOptions={{
                    color: a.level === "HIGH" ? "red" : "orange",
                    fillOpacity: 0.2,
                  }}
                />
              </div>
            ))}
          </MapContainer>
        </div>

        <div className="space-y-4">

          <div className="bg-white p-4 rounded-xl border shadow-sm">
            <h2 className="font-semibold mb-2">🚨 Active Alert</h2>

            <p className="text-sm font-medium text-red-500">
              Pipe Burst (Z2)
            </p>
            <p className="text-xs text-gray-500">
              Segment: SEG_570
            </p>

            <div className="mt-3 text-sm">
              <p>Loss: <b>12,768 L</b></p>
              <p>Confidence: <b>94%</b></p>
            </div>

            <button className="mt-3 w-full bg-black text-white py-2 rounded-lg">
              Dispatch Crew
            </button>
          </div>

          <div className="bg-white p-4 rounded-xl border shadow-sm">
            <h2 className="font-semibold mb-2">🧠 AI Insights</h2>

            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Pressure dropped 40%</li>
              <li>• Pattern matches burst signature</li>
              <li>• Downstream flow increased</li>
            </ul>
          </div>

          <div className="bg-white p-3 rounded border text-xs">
            📈 Pressure Trend (Last 30 min)
            <div className="flex gap-1 mt-2">
              <div className="w-2 h-6 bg-green-400"></div>
              <div className="w-2 h-8 bg-yellow-400"></div>
              <div className="w-2 h-10 bg-red-500"></div>
              <div className="w-2 h-8 bg-yellow-400"></div>
              <div className="w-2 h-6 bg-green-400"></div>
            </div>
          </div>

          <div className="bg-green-50 p-4 rounded-xl border">
            <h2 className="font-semibold mb-2">⚡ Quick Action</h2>

            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noreferrer"
              className="block w-full bg-green-500 text-white text-center py-2 rounded-lg"
            >
              Send WhatsApp Alert
            </a>
          </div>

        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">

        <div className="bg-white p-4 rounded-xl border text-sm">
          <h2 className="font-semibold mb-3">System Metrics</h2>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <p className="text-gray-500 text-xs">Active</p>
              <p className="text-red-500 font-semibold">2</p>
            </div>

            <div>
              <p className="text-gray-500 text-xs">Loss</p>
              <p className="font-semibold">16,188 L</p>
            </div>

            <div>
              <p className="text-gray-500 text-xs">AI Accuracy</p>
              <p className="text-green-600 font-semibold">98.7%</p>
            </div>

            <div>
              <p className="text-gray-500 text-xs">Response</p>
              <p className="font-semibold">12 min</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border text-sm">
          <h2 className="font-semibold mb-3">Pressure Trend</h2>

          <div className="flex items-end gap-2 h-20">
            <div className="w-2 bg-green-400 h-[40%]"></div>
            <div className="w-2 bg-green-400 h-[60%]"></div>
            <div className="w-2 bg-yellow-400 h-[50%]"></div>
            <div className="w-2 bg-red-400 h-[80%]"></div>
            <div className="w-2 bg-red-500 h-[90%]"></div>
          </div>

          <p className="text-xs text-gray-400 mt-2">
            Last 30 min anomaly trend
          </p>
        </div>

        <div className="bg-white p-4 rounded-xl border text-sm">
          <h2 className="font-semibold mb-3">Recent Alerts</h2>

          <div className="space-y-2 text-xs text-gray-600">
            <div className="flex justify-between">
              <span> Pipe Burst (Z2)</span>
              <span className="text-red-500">HIGH</span>
            </div>

            <div className="flex justify-between">
              <span>⚠ Leakage (Z1)</span>
              <span className="text-yellow-500">MED</span>
            </div>
          </div>

          <button className="mt-3 w-full bg-black text-white py-1 rounded">
            View All Alerts
          </button>
        </div>

      </div>
    </div>
  );
}