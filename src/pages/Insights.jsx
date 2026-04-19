import Header from "../components/header";

export default function Insights() {
  return (
    <div className="flex-1 p-6 overflow-auto bg-gray-50">

      <Header title="Explainable AI & Prediction Engine" />

      <div className="bg-white p-4 rounded-xl border mt-4">
        <h2 className="font-semibold mb-3">AI Decision Loop</h2>

        <div className="flex justify-between text-sm text-gray-600">
          <Step label="Detect" active />
          <Step label="Predict" active />
          <Step label="Explain" active />
          <Step label="Recommend" active />
          <Step label="Dispatch" />
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 p-3 rounded-xl mt-4 text-sm text-blue-700">
        🧠 Peak Demand Filter Active: Morning usage (6–9 AM) excluded from anomaly detection
      </div>

      <div className="bg-yellow-50 border border-yellow-300 p-4 rounded-xl mt-4">
        <h2 className="font-semibold">
          ⚠ Predicted Leakage Risk (Z3)
        </h2>
        <p className="text-sm mt-1">
          Probability: 78% — gradual pressure decline detected
        </p>
      </div>

      <div className="grid grid-cols-3 gap-6 mt-6">

        <div className="bg-white p-4 rounded-xl border">
          <h2 className="font-semibold mb-3">Prediction Timeline</h2>

          <div className="space-y-2 text-sm text-gray-600">
            <p>Now → Stable</p>
            <p>+1 hr → Pressure drop</p>
            <p>+2 hr → Leakage likely</p>
            <p>+3 hr → High loss risk</p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border col-span-2">
          <h2 className="font-semibold mb-3">Explainable AI Reasoning</h2>

          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Pressure decreased 18% from baseline</li>
            <li>• Flow inconsistency detected in isolated segment</li>
            <li>• Pattern matches historical leakage cases</li>
            <li>• No peak-hour demand detected</li>
          </ul>

          <div className="mt-3 bg-blue-50 p-2 rounded text-sm">
            ✅ Classified as: Slow Leakage (Confidence: 78%)
          </div>
        </div>

      </div>

      <div className="grid grid-cols-2 gap-6 mt-6">

        <div className="bg-white p-6 rounded-2xl border">
          <h2 className="font-semibold mb-4">Recommended Action</h2>

          <p className="text-sm text-gray-600">
            Increase monitoring frequency and prepare maintenance crew
          </p>

          <div className="mt-3 bg-green-100 p-2 rounded text-sm">
            💧 Potential Saving: 45,000 Litres
          </div>

          <button className="mt-4 w-full bg-black text-white py-2 rounded">
            Dispatch Crew
          </button>
        </div>

        <div className="bg-white p-6 rounded-2xl border text-center">
          <h2 className="font-semibold mb-4">AI Confidence</h2>

          <div className="text-4xl text-green-600 font-bold">94%</div>

          <div className="mt-4 text-sm text-gray-600 space-y-1">
            <p>Model Accuracy: 98.7%</p>
            <p>Data Quality: 96.2%</p>
            <p>Coverage: 99.1%</p>
          </div>
        </div>

      </div>

      <div className="bg-white p-6 rounded-2xl border mt-6">
        <h2 className="font-semibold mb-4">Ask AquaMind</h2>

        <div className="space-y-2 text-sm text-gray-600">
          <p className="border p-2 rounded">
            "Where is the highest loss predicted?"
          </p>
          <p className="border p-2 rounded">
            "Which zone has maximum risk?"
          </p>
        </div>

        <button className="mt-4 w-full bg-purple-500 text-white py-2 rounded-lg">
          Start Voice Query
        </button>
      </div>

    </div>
  );
}

function Step({ label, active }) {
  return (
    <div className="flex flex-col items-center">
      <div className={`w-6 h-6 rounded-full ${active ? "bg-green-500" : "bg-gray-300"}`} />
      <p className="text-xs mt-1">{label}</p>
    </div>
  );
}