import { useState } from "react";
import Sidebar from "./components/Sidebar";

import Dashboard from "./pages/Dashboard";
import Alerts from "./pages/Alerts";
import SmartMap from "./pages/SmartMap";
import Analytics from "./pages/Analytics";
import Insights from "./pages/Insights";
import Login from "./pages/Login";

export default function App() {
  const [page, setPage] = useState("dashboard");

  // 🔥 CHECK LOGIN
  const [isLoggedIn, setIsLoggedIn] = useState(
    !!localStorage.getItem("token")
  );

  // 🔥 IF NOT LOGGED IN → SHOW LOGIN
  if (!isLoggedIn) {
    return <Login onLogin={() => setIsLoggedIn(true)} />;
  }

  // 🔥 AFTER LOGIN → SHOW YOUR UI
  return (
    <div className="flex h-screen bg-[#f6f8fb]">

      <Sidebar setPage={setPage} activePage={page} />

      {page === "dashboard" && <Dashboard />}
      {page === "alerts" && <Alerts />}
      {page === "smartmap" && <SmartMap />}
      {page === "analytics" && <Analytics />}
      {page === "insights" && <Insights />}

    </div>
  );
}


// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// import Login from "./pages/Login";
// import Dashboard from "./pages/Dashboard";
// import Alerts from "./pages/Alerts";
// import SmartMap from "./pages/SmartMap";
// import Analytics from "./pages/Analytics";
// import Insights from "./pages/Insights";

// export default function App() {
//   const token = localStorage.getItem("token");

//   return (
//     <Router>
//       <Routes>

//         {/* LOGIN */}
//         <Route path="/" element={<Login />} />

//         {/* PROTECTED ROUTES */}
//         <Route
//           path="/dashboard"
//           element={token ? <Dashboard /> : <Navigate to="/" />}
//         />

//         <Route
//           path="/alerts"
//           element={token ? <Alerts /> : <Navigate to="/" />}
//         />

//         <Route
//           path="/map"
//           element={token ? <SmartMap /> : <Navigate to="/" />}
//         />

//         <Route
//           path="/analytics"
//           element={token ? <Analytics /> : <Navigate to="/" />}
//         />

//         <Route
//           path="/insights"
//           element={token ? <Insights /> : <Navigate to="/" />}
//         />

//       </Routes>
//     </Router>
//   );
// }







// import Alerts from "./pages/Alerts";
// import SmartMap from "./pages/SmartMap";
// import Analytics from "./pages/Analytics";

// export default function App() {
//   const [page, setPage] = useState("dashboard");

//   console.log("CURRENT PAGE:", page); // 👈 DEBUG

//   return (
//     <div className="flex h-screen bg-[#f6f8fb]">

//       <Sidebar setPage={setPage} activePage={page} />

//       <div className="flex-1 bg-red-100">
//         {page === "dashboard" && <Dashboard />}
//         {page === "alerts" && <Alerts />}
//         {page === "smartmap" && <SmartMap />}
//         {page === "analytics" && <Analytics />}
//       </div>

//     </div>
//   );
// }


// import { useState } from "react";
// import Sidebar from "./components/Sidebar";

// import Dashboard from "./pages/Dashboard";
// import Alerts from "./pages/Alerts";
// import SmartMap from "./pages/SmartMap";


// export default function App() {
//   const [page, setPage] = useState("dashboard");

//   return (
//     <div className="flex h-screen bg-[#f6f8fb]">
      
//       {/* Sidebar */}
//       <Sidebar setPage={setPage} activePage={page} />

//       {/* Main Content */}
//       <div className="flex-1 overflow-auto">
        
//         {page === "dashboard" && <Dashboard />}
//         {page === "alerts" && <Alerts />}
//         {page === "map" && <SmartMap />}

//       </div>
//     </div>
//   );
// }


// export default function App() {
//   return (
//    <div className="flex min-h-screen bg-[#f6f8fb]">
      
//       {/* SIDEBAR */}
//       <Sidebar />

//       {/* MAIN CONTENT */}
//       <div className="flex-1 p-6 overflow-y-auto">

//         {/* HEADER */}
//         <Header />

//         {/* ZONE CARDS */}
//         <div className="grid grid-cols-3 gap-6 mb-6">
//           <ZoneCard
//             id="Z1"
//             title="Zone 1 - North District"
//             value="47.2"
//             status="NORMAL"
//           />
//           <ZoneCard
//             id="Z2"
//             title="Zone 2 - Central Hub"
//             value="48.9"
//             status="NORMAL"
//           />
//           <ZoneCard
//             id="Z3"
//             title="Zone 3 - East Sector"
//             value="44.8"
//             status="NORMAL"
//           />
//         </div>

//         {/* CHART */}
//         <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
//           <h2 className="font-medium mb-4">
//             Real-Time Pressure Monitoring
//           </h2>
//           <PressureChart />
//         </div>

//         {/* ✅ BOTTOM SECTION */}
//         <div className="grid grid-cols-2 gap-6 mt-6">
//           <PressureDeviation />
//           <SystemHealth />
//         </div>

//       </div>
//     </div>
//   );
// }