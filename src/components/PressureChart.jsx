// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";

// const data = [
//   { time: "10:00", z1: 45, z2: 47, z3: 44 },
//   { time: "10:05", z1: 46, z2: 48, z3: 45 },
//   { time: "10:10", z1: 47, z2: 49, z3: 46 },
//   { time: "10:15", z1: 45, z2: 47, z3: 45 },
// ];

// export default function PressureChart() {
//   return (
//     <div className="w-full h-[300px]">
//       <ResponsiveContainer>
//         <LineChart data={data}>
//           <XAxis dataKey="time" />
//           <YAxis />
//           <Tooltip />
//           <Line dataKey="z1" stroke="#22c55e" />
//           <Line dataKey="z2" stroke="#3b82f6" />
//           <Line dataKey="z3" stroke="#a855f7" />
//         </LineChart>
//       </ResponsiveContainer>
//     </div>
//   );
// }

// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";

// const data = [
//   { time: "10:00", z1: 47, z2: 48, z3: 45 },
//   { time: "10:05", z1: 48, z2: 49, z3: 46 },
//   { time: "10:10", z1: 49, z2: 50, z3: 47 },
//   { time: "10:15", z1: 48, z2: 49, z3: 46 },
// ];

// export default function ChartComp() {
//   return (
//     <div className="glass p-5">
//       <h2 className="font-semibold mb-4">Real-Time Pressure Monitoring</h2>

//       <div className="h-64">
//         <ResponsiveContainer width="100%" height="100%">
//           <LineChart data={data}>
//             <XAxis dataKey="time" />
//             <YAxis />
//             <Tooltip />
//             <Line type="monotone" dataKey="z1" stroke="#22c55e" />
//             <Line type="monotone" dataKey="z2" stroke="#3b82f6" />
//             <Line type="monotone" dataKey="z3" stroke="#a855f7" />
//           </LineChart>
//         </ResponsiveContainer>
//       </div>
//     </div>
//   );
// }

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { time: "10:00", z1: 47, z2: 48, z3: 45 },
  { time: "10:05", z1: 48, z2: 49, z3: 46 },
  { time: "10:10", z1: 49, z2: 50, z3: 47 },
  { time: "10:15", z1: 47, z2: 48, z3: 45 },
];

export default function PressureChart() {
  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <LineChart data={data}>
          <XAxis dataKey="time" stroke="#888" />
          <YAxis stroke="#888" />
          <Tooltip />

          <Line type="monotone" dataKey="z1" stroke="#10b981" strokeWidth={2} />
          <Line type="monotone" dataKey="z2" stroke="#3b82f6" strokeWidth={2} />
          <Line type="monotone" dataKey="z3" stroke="#a855f7" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}