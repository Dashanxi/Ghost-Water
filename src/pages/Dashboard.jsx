import Header from "../components/header";
import ZoneCard from "../components/ZoneCard";
import PressureChart from "../components/PressureChart";
import PressureDeviation from "../components/PressureDeviation";
import SystemHealth from "../components/SystemHealth";

export default function Dashboard() {
  return (
    <div className="flex-1 p-6 overflow-auto bg-gray-50">

      <Header />

      <div className="flex justify-between items-center bg-white p-3 rounded-xl border mb-6">
        <div className="flex gap-4 text-sm">
          <span className="text-green-600 font-medium">
            ● AI Detection Active
          </span>
          <span className="text-blue-600">
            Peak Filter ON (6–9 AM excluded)
          </span>
        </div>

        <div className="text-xs text-gray-500">
          Last Updated: 2 sec ago
        </div>
      </div>

      <div className="bg-white p-4 rounded-xl border mb-6">
        <h2 className="font-semibold mb-3">AI Decision Pipeline</h2>

        <div className="flex justify-between text-sm text-gray-600">
          <Step label="Detect" active />
          <Step label="Classify" active />
          <Step label="Localize" active />
          <Step label="Quantify Loss" active />
          <Step label="Dispatch" />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 mb-6">
        <ZoneCard id="Z1" title="Zone 1 - North District" value="47.2" status="NORMAL" />
        <ZoneCard id="Z2" title="Zone 2 - Central Hub" value="48.9" status="NORMAL" />
        <ZoneCard id="Z3" title="Zone 3 - East Sector" value="44.8" status="NORMAL" />
      </div>

      <div className="bg-red-50 border border-red-200 p-4 rounded-xl mb-6">
        <h2 className="font-semibold text-red-600 mb-2">
          🚨 Active Anomaly Detected
        </h2>

        <div className="flex justify-between items-center text-sm">
          <div>
            <p className="font-medium">Pipe Burst (Z2)</p>
            <p className="text-gray-600">Segment: SEG_570 | Confidence: 94%</p>
          </div>

          <div className="text-right">
            <p className="text-red-600 font-semibold">12,768 L Loss</p>
            <button className="mt-1 bg-black text-white px-3 py-1 rounded">
              View on Map
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-2xl border shadow-sm">
        <h2 className="font-medium mb-4">
          Real-Time Pressure Monitoring
        </h2>
        <PressureChart />
      </div>

      <div className="bg-white p-4 rounded-xl border mt-6">
        <h2 className="font-semibold mb-3">Daily Water Loss Impact</h2>

        <div className="flex items-center gap-4">
          <div className="flex-1 bg-gray-200 h-3 rounded-full">
            <div className="bg-red-500 h-3 rounded-full w-[65%]" />
          </div>

          <span className="text-sm font-medium">
            16,188 Litres Lost Today
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 mt-6">
        <PressureDeviation />
        <SystemHealth />
      </div>

    </div>
  );
}

function Step({ label, active }) {
  return (
    <div className="flex flex-col items-center">
      <div
        className={`w-6 h-6 rounded-full ${
          active ? "bg-green-500" : "bg-gray-300"
        }`}
      ></div>
      <p className="text-xs mt-1">{label}</p>
    </div>
  );
}