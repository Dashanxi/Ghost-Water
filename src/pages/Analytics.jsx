import Header from "../components/header";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

const monthlyData = [
  { name: "Jan", withAI: 65, withoutAI: 190 },
  { name: "Feb", withAI: 60, withoutAI: 210 },
  { name: "Mar", withAI: 55, withoutAI: 195 },
  { name: "Apr", withAI: 62, withoutAI: 205 },
];

const predictionData = [
  { name: "Now", value: 60 },
  { name: "+1h", value: 72 },
  { name: "+2h", value: 85 },
  { name: "+3h", value: 78 },
];

const zoneData = [
  { name: "Z1", loss: 5000, saved: 18000 },
  { name: "Z2", loss: 13000, saved: 25000 },
  { name: "Z3", loss: 4000, saved: 15000 },
  { name: "Z4", loss: 2000, saved: 12000 },
];

export default function Analytics() {
  return (
    <div className="flex-1 p-6 space-y-6 overflow-auto bg-[#f6f8fb]">

      <Header title="Impact & Analytics Dashboard" />

      <div className="grid grid-cols-4 gap-6">

        <Card title="Water Loss Today" value="23,158 L" sub="-68%" color="red" />
        <Card title="Water Saved" value="2.4M L" sub="+18%" color="green" />
        <Card title="Efficiency" value="96.8%" sub="+11%" color="blue" />
        <Card title="Response Time" value="4m 12s" sub="-72%" color="purple" />

      </div>

      <div className="grid grid-cols-3 gap-6">

        <div className="col-span-2 bg-white p-6 rounded-2xl border shadow-sm">
          <h2 className="font-semibold mb-4">
            With vs Without AquaMind
          </h2>

          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={monthlyData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />

              <Line dataKey="withoutAI" stroke="#ef4444" strokeWidth={3} />
              <Line dataKey="withAI" stroke="#22c55e" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-2xl border shadow-sm">
          <h2 className="font-semibold mb-3">💰 ROI Impact</h2>

          <h1 className="text-3xl text-green-600 font-bold">₹ 2.27 Cr</h1>
          <p className="text-gray-500">Cost Recovered</p>

          <div className="mt-4 text-sm space-y-2 text-gray-600">
            <p>💧 28.4M L saved</p>
            <p>🏠 11,360 households/day</p>
            <p>🌱 14.2 tonnes CO₂ reduced</p>
          </div>
        </div>

      </div>

      <div className="grid grid-cols-3 gap-6">

        <div className="col-span-2 bg-white p-6 rounded-2xl border shadow-sm">
          <h2 className="font-semibold mb-4">Top Affected Zones</h2>

          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={zoneData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />

              <Bar dataKey="loss" fill="#ef4444" />
              <Bar dataKey="saved" fill="#22c55e" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-2xl border shadow-sm">
          <h2 className="font-semibold mb-4">🔮 Future Prediction</h2>

          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={predictionData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />

              <Line
                dataKey="value"
                stroke="#6366f1"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>

          <p className="text-xs text-gray-500 mt-2">
            Predicted anomaly escalation (next 3 hours)
          </p>
        </div>

      </div>

      <div className="bg-white p-6 rounded-2xl border shadow-sm">

        <h2 className="font-semibold mb-4">🧠 AI Insights</h2>

        <div className="grid grid-cols-3 gap-4 text-sm text-gray-600">

          <div>✔ 32% reduction in leakage incidents</div>
          <div>✔ 45% faster anomaly detection</div>
          <div>✔ 60% faster response time</div>
          <div>✔ High-risk zones auto-identified</div>
          <div>✔ Peak-hour false positives reduced</div>
          <div>✔ Predictive alerts enabled</div>

        </div>
      </div>

    </div>
  );
}

function Card({ title, value, sub, color }) {
  const colors = {
    red: "text-red-500",
    green: "text-green-600",
    blue: "text-blue-600",
    purple: "text-purple-600",
  };

  return (
    <div className="bg-white p-5 rounded-2xl border shadow-sm">
      <p className="text-gray-500 text-sm">{title}</p>
      <h2 className={`text-2xl font-semibold mt-2 ${colors[color]}`}>
        {value}
      </h2>
      <p className="text-xs text-gray-400 mt-1">{sub}</p>
    </div>
  );
}