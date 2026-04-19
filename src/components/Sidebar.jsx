// import { Home, Map, Bell, MessageSquare, BarChart3, Cpu } from "lucide-react";

// export default function Sidebar() {
//   return (
//     <div className="w-64 bg-white border-r h-screen flex flex-col justify-between p-4">

//       {/* Logo */}
//       <div>
//         <div className="flex items-center gap-2 mb-8">
//           <div className="bg-purple-100 p-2 rounded-lg">💧</div>
//           <div>
//             <h1 className="font-bold text-lg">AquaMind</h1>
//             <p className="text-xs text-gray-500">Smart Water Monitor</p>
//           </div>
//         </div>

//         {/* Menu */}
//         <div className="space-y-2">
//           <Item text="Live Dashboard" icon={<Home size={18} />} active />
//           <Item text="Smart Map" icon={<Map size={18} />} />
//           <Item text="Alerts & AI" icon={<Bell size={18} />} />
//           <Item text="Command Center" icon={<MessageSquare size={18} />} />
//           <Item text="Analytics" icon={<BarChart3 size={18} />} />
//           <Item text="AI Insights" icon={<Cpu size={18} />} />
//         </div>
//       </div>

//       {/* Bottom Status */}
//       <div className="bg-gray-100 p-3 rounded-xl text-sm">
//         <p className="text-green-600 font-medium">● System Online</p>
//         <p className="text-gray-500">247/250 Sensors Active</p>
//         <p className="text-gray-400 text-xs">Last Update: 2s ago</p>
//       </div>

//     </div>
//   );
// }

// function Item({ text, icon, active }) {
//   return (
//     <div
//       className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer ${
//         active
//           ? "bg-black text-white"
//           : "text-gray-600 hover:bg-gray-100"
//       }`}
//     >
//       {icon}
//       {text}
//     </div>
//   );
// }

// import { Home, Map, Bell, MessageSquare, BarChart3, Cpu } from "lucide-react";

// export default function Sidebar() {
//   return (
//     <div className="w-64 bg-white border-r p-5 flex flex-col justify-between">

//       <div>
//         {/* Logo */}
//         <div className="flex items-center gap-3 mb-10">
//           <div className="bg-purple-100 p-2 rounded-lg">💧</div>
//           <div>
//             <h1 className="font-semibold">AquaMind</h1>
//             <p className="text-xs text-gray-500">Smart Water Monitor</p>
//           </div>
//         </div>

//         {/* Menu */}
//         <div className="space-y-2">
//           <Item icon={<Home size={18} />} text="Live Dashboard" active />
//           <Item icon={<Map size={18} />} text="Smart Map" />
//           <Item icon={<Bell size={18} />} text="Alerts & AI" />
//           <Item icon={<MessageSquare size={18} />} text="Command Center" />
//           <Item icon={<BarChart3 size={18} />} text="Analytics" />
//           <Item icon={<Cpu size={18} />} text="AI Insights" />
//         </div>
//       </div>

//       {/* Status */}
//       <div className="bg-gray-100 p-3 rounded-xl text-sm">
//         <p className="text-green-600 font-medium">● System Online</p>
//         <p className="text-gray-500">247/250 Sensors Active</p>
//         <p className="text-gray-400 text-xs">Last Update: 2s ago</p>
//       </div>
//     </div>
//   );
// }

// function Item({ icon, text, active }) {
//   return (
//     <div className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer ${
//       active ? "bg-black text-white" : "text-gray-600 hover:bg-gray-100"
//     }`}>
//       {icon}
//       {text}
//     </div>
//   );
// }

// export default function Sidebar({ setPage, activePage }) {
//   return (
//     <div className="w-64 bg-white border-r border-gray-200 p-5 flex flex-col justify-between shadow-sm">
      
//       <div>
//         <h1 className="text-xl font-semibold mb-6">💧 AquaMind</h1>

//         <nav className="space-y-2">
//           <SidebarItem
//             text="Live Dashboard"
//             active={activePage === "dashboard"}
//             onClick={() => setPage("dashboard")}
//           />
//           <SidebarItem
//             text="Smart Map"
//             active={activePage === "map"}
//             onClick={() => setPage("map")}
//           />
//           <SidebarItem
//             text="Alerts & AI"
//             active={activePage === "alerts"}
//             onClick={() => setPage("alerts")}
//           />
//           <SidebarItem
//             text="Analytics"
//             active={activePage === "analytics"}
//             onClick={() => setPage("analytics")}
//           />
//           <SidebarItem
//             text="AI Insights"
//             active={activePage === "ai"}
//             onClick={() => setPage("ai")}
//           />
//         </nav>
//       </div>

//       <div className="bg-gray-100 p-3 rounded-lg text-sm">
//         <p className="text-green-600 font-medium">● System Online</p>
//         <p className="text-gray-500">247 Sensors Active</p>
//       </div>
//     </div>
//   );
// }

// function SidebarItem({ text, active, onClick }) {
//   return (
//     <div
//       onClick={onClick}
//       className={`px-3 py-2 rounded-lg cursor-pointer transition ${
//         active
//           ? "bg-black text-white"
//           : "text-gray-500 hover:bg-gray-100 hover:text-black"
//       }`}
//     >
//       {text}
//     </div>
//   );
// }

// export default function Sidebar({ setPage, activePage }) {
//   return (
//     <div className="w-64 bg-white border-r border-gray-200 p-5 flex flex-col justify-between shadow-sm">
      
//       <div>
//         <h1 className="text-xl font-semibold mb-6">💧 AquaMind</h1>

//         <nav className="space-y-2">
//           <SidebarItem
//             text="Live Dashboard"
//             active={activePage === "dashboard"}
//             onClick={() => setPage("dashboard")}
//           />
//           <SidebarItem
//             text="Smart Map"
//             active={activePage === "map"}
//             onClick={() => setPage("map")}
//           />
//           <SidebarItem
//             text="Alerts & AI"
//             active={activePage === "alerts"}
//             onClick={() => setPage("alerts")}
//           />
//           <SidebarItem
//             text="Analytics"
//             active={activePage === "analytics"}
//             onClick={() => setPage("analytics")}
//           />
//           <SidebarItem
//             text="AI Insights"
//             active={activePage === "ai"}
//             onClick={() => setPage("ai")}
//           />
//         </nav>
//       </div>

//       <div className="bg-gray-100 p-3 rounded-lg text-sm">
//         <p className="text-green-600 font-medium">● System Online</p>
//         <p className="text-gray-500">247 Sensors Active</p>
//       </div>
//     </div>
//   );
// }

// function SidebarItem({ text, active, onClick }) {
//   return (
//     <div
//       onClick={onClick}
//       className={`px-3 py-2 rounded-lg cursor-pointer transition ${
//         active
//           ? "bg-black text-white"
//           : "text-gray-500 hover:bg-gray-100 hover:text-black"
//       }`}
//     >
//       {text}
//     </div>
//   );
// }

export default function Sidebar({ setPage, activePage }) {
  return (
    <div className="w-64 bg-white border-r border-gray-200 p-5 flex flex-col justify-between shadow-sm">

      {/* TOP */}
      <div>
        <h1 className="text-xl font-semibold mb-6">💧 AquaMind</h1>

        <nav className="space-y-2">

          <SidebarItem
            text="Live Dashboard"
            active={activePage === "dashboard"}
            onClick={() => setPage("dashboard")}
          />

          {/* <SidebarItem
            text="Smart Map"
            active={activePage === "smartmap"}
            onClick={() => setPage("map")}
          /> */}
          <SidebarItem
            text="Smart Map"
            active={activePage === "smartmap"}
            onClick={() => setPage("smartmap")} 
            />

          <SidebarItem
            text="Alerts & AI"
            active={activePage === "alerts"}
            onClick={() => setPage("alerts")}
          />

          <SidebarItem
            text="Analytics"
            active={activePage === "analytics"}
            onClick={() => setPage("analytics")}
          />

          <SidebarItem
            text="AI Insights"
            active={activePage === "insights"}
            onClick={() => setPage("insights")}
          />

        </nav>
      </div>

      {/* BOTTOM STATUS */}
      <div className="bg-gray-100 p-3 rounded-lg text-sm">
        <p className="text-green-600 font-medium">● System Online</p>
        <p className="text-gray-500">247 Sensors Active</p>
        <button
  onClick={() => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if (confirmLogout) {
      localStorage.clear();
      window.location.reload();
    }
  }}
  className="mt-4 w-full border border-red-400 text-red-500 py-2 rounded-lg text-sm hover:bg-red-50 transition"
>
  Logout
</button>
      </div>
    </div>
  );
}


function SidebarItem({ text, active, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`px-4 py-2 rounded-lg cursor-pointer transition font-medium ${
        active
          ? "bg-black text-white"
          : "text-gray-500 hover:bg-gray-100 hover:text-black"
      }`}
    >
      {text}
    </div>
  );
}