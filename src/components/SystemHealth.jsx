export default function SystemHealth() {
  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
      <h2 className="font-semibold mb-4">System Health</h2>

      <div className="space-y-3 text-sm">
        
        <div className="flex justify-between">
          <span className="text-gray-500">Active Sensors</span>
          <span className="font-medium">247 / 250</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">Data Accuracy</span>
          <span className="text-green-500 font-medium">98.7%</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">Last Update</span>
          <span>2 sec ago</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">Anomalies Today</span>
          <span className="text-yellow-500 font-medium">3</span>
        </div>

      </div>
    </div>
  );
}