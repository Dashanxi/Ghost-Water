// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
//   CartesianGrid,
// } from "recharts";

// const data = [
//   { name: "Jan", withAI: 45, withoutAI: 45 },
//   { name: "Feb", withAI: 40, withoutAI: 42 },
//   { name: "Mar", withAI: 35, withoutAI: 38 },
//   { name: "Apr", withAI: 30, withoutAI: 34 },
// ];

// export default function AnalyticsChart() {
//   return (
//     <ResponsiveContainer width="100%" height={300}>
//       <LineChart data={data}>
//         <CartesianGrid strokeDasharray="3 3" />

//         <XAxis dataKey="name" />
//         <YAxis />

//         <Tooltip />

//         <Line
//           type="monotone"
//           dataKey="withAI"
//           stroke="#10b981"
//           strokeWidth={3}
//           dot={{ r: 4 }}
//         />

//         <Line
//           type="monotone"
//           dataKey="withoutAI"
//           stroke="#ef4444"
//           strokeWidth={3}
//           strokeDasharray="5 5"
//           dot={{ r: 4 }}
//         />
//       </LineChart>
//     </ResponsiveContainer>
//   );
// }

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { name: "Jan", withAI: 45, withoutAI: 45 },
  { name: "Feb", withAI: 40, withoutAI: 42 },
  { name: "Mar", withAI: 35, withoutAI: 38 },
  { name: "Apr", withAI: 30, withoutAI: 34 },
];

export default function AnalyticsChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />

        <Line type="monotone" dataKey="withAI" stroke="#10b981" />
        <Line type="monotone" dataKey="withoutAI" stroke="#ef4444" />
      </LineChart>
    </ResponsiveContainer>
  );
}