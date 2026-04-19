import { useState } from "react";
import Header from "../components/header";
import AlertCard from "../components/AlertCard";
import StatCard from "../components/StatCard";

export default function Alerts() {
  const [showWhatsApp, setShowWhatsApp] = useState(false);
  const [selectedAlert, setSelectedAlert] = useState(null);

  const openDispatch = (alert) => {
    setSelectedAlert(alert);
    setShowWhatsApp(true);
  };

  return (
    <div className="flex-1 p-6 overflow-auto bg-gray-50">

      <Header title="AI Decision Command Panel" />

      <div className="bg-white p-4 rounded-xl border mt-4">
        <h2 className="font-semibold mb-3">Decision Flow</h2>

        <div className="flex justify-between text-sm text-gray-600">
          <Step label="Detect" active />
          <Step label="Classify" active />
          <Step label="Localize" active />
          <Step label="Quantify" active />
          <Step label="Dispatch" />
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6 mt-6">
        <StatCard title="High Priority" value="2" color="red" />
        <StatCard title="Total Loss Today" value="25.1k L" color="blue" />
        <StatCard title="Resolved Today" value="0" color="green" />
        <StatCard title="Avg Confidence" value="87%" color="purple" />
      </div>

      <div className="mt-4 text-sm text-gray-500">
        Sorted by: <span className="font-medium">Priority + Loss Impact</span>
      </div>

      <div className="mt-4 space-y-6">

        <EnhancedAlert
          title="Pipe Burst"
          level="HIGH"
          zone="Z2 - SEG_570"
          loss="12,768 Litres"
          confidence={94}
          status="DISPATCHED"
          time="Detected 2 min ago"
          onDispatch={() =>
            openDispatch({
              type: "Pipe Burst",
              zone: "Z2",
              segment: "SEG_570",
              loss: "12,768 L",
            })
          }
          points={[
            "Pressure dropped 40%",
            "Non-peak anomaly",
            "Flow spike downstream",
          ]}
          action="Immediate shutdown required"
        />

        <EnhancedAlert
          title="Illegal Tap"
          level="HIGH"
          zone="Z3 - SEG_892"
          loss="8,950 Litres"
          confidence={88}
          status="PENDING"
          time="Detected 5 min ago"
          onDispatch={() =>
            openDispatch({
              type: "Illegal Tap",
              zone: "Z3",
              segment: "SEG_892",
              loss: "8,950 L",
            })
          }
          points={[
            "Irregular flow pattern",
            "Unauthorized consumption",
          ]}
          action="Inspection required"
        />

        <EnhancedAlert
          title="Leakage"
          level="MEDIUM"
          zone="Z1 - SEG_234"
          loss="3,420 Litres"
          confidence={78}
          status="PENDING"
          time="Detected 15 min ago"
          onDispatch={() =>
            openDispatch({
              type: "Leakage",
              zone: "Z1",
              segment: "SEG_234",
              loss: "3,420 L",
            })
          }
          points={[
            "Gradual decline",
            "Underground seepage",
          ]}
          action="Schedule maintenance"
        />

      </div>

      {showWhatsApp && selectedAlert && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl w-96">

            <h2 className="font-semibold mb-3">📲 Dispatch Work Order</h2>

            <div className="text-sm bg-gray-50 p-3 rounded">
              🚨 WORK ORDER <br/>
              Type: {selectedAlert.type} <br/>
              Zone: {selectedAlert.zone} <br/>
              Segment: {selectedAlert.segment} <br/>
              Loss: {selectedAlert.loss} <br/>
              Priority: HIGH <br/>
              📍 Location: Map Link <br/>
              Reply DONE after fixing
            </div>

            <div className="flex gap-2 mt-4">
              <button className="flex-1 bg-green-500 text-white py-2 rounded">
                Send via WhatsApp
              </button>

              <button
                onClick={() => setShowWhatsApp(false)}
                className="flex-1 border py-2 rounded"
              >
                Cancel
              </button>
            </div>

          </div>
        </div>
      )}

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

function EnhancedAlert({
  title,
  level,
  zone,
  loss,
  confidence,
  status,
  time,
  points,
  action,
  onDispatch,
}) {
  return (
    <div className="bg-white p-6 rounded-xl border shadow-sm">

      <div className="flex justify-between">
        <div>
          <h2 className="font-semibold">{title} ({level})</h2>
          <p className="text-sm text-gray-500">{zone}</p>
          <p className="text-xs text-gray-400">{time}</p>
        </div>

        <div className="text-right">
          <p className="text-red-500 font-semibold">{loss}</p>
          <p className="text-xs text-gray-500">{confidence}% confidence</p>
          <p className="text-xs mt-1">{status}</p>
        </div>
      </div>

      <ul className="mt-3 text-sm text-gray-600">
        {points.map((p, i) => (
          <li key={i}>• {p}</li>
        ))}
      </ul>

      <div className="mt-3 bg-blue-50 p-2 rounded text-sm">
        ⚡ {action}
      </div>

      <button
        onClick={onDispatch}
        className="mt-4 w-full bg-black text-white py-2 rounded"
      >
        Dispatch via WhatsApp
      </button>

    </div>
  );
}