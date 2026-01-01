import { GSCard } from '@/components/GS-Card';
import { GSButton } from '@/components/GS-Button';
import { PlusCircle } from 'lucide-react';

export default function Dashboard() {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-white">Dashboard</h1>
        <GSButton variant="primary">
          <PlusCircle className="mr-2 h-4 w-4" />
          New Simulation
        </GSButton>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <GSCard title="Active Threats">
          <p className="text-4xl font-bold text-red-500">3</p>
          <p className="text-gray-400">High-priority alerts</p>
        </GSCard>
        <GSCard title="System Health">
          <p className="text-4xl font-bold text-green-500">99.8%</p>
          <p className="text-gray-400">Uptime</p>
        </GSCard>
        <GSCard title="Simulations Run">
          <p className="text-4xl font-bold text-blue-500">142</p>
          <p className="text-gray-400">Last 24 hours</p>
        </GSCard>
        <GSCard title="Rules Active">
          <p className="text-4xl font-bold text-yellow-500">1,287</p>
          <p className="text-gray-400">Detection rules</p>
        </GSCard>
      </div>
      <div className="mt-8">
        <GSCard title="Recent Activity">
          <div className="text-gray-300 space-y-2">
            <p><span className="font-mono text-gray-500 mr-2">[20:45:12]</span>- Simulation 'Phishing Campaign X' completed.</p>
            <p><span className="font-mono text-gray-500 mr-2">[20:42:01]</span>- Rule 'Suspicious PowerShell' triggered by process ID 7812.</p>
            <p><span className="font-mono text-gray-500 mr-2">[20:30:55]</span>- New device 'DEV-PC-015' connected to network.</p>
            <p><span className="font-mono text-gray-500 mr-2">[20:15:30]</span>- User 'j.doe' logged in from unusual location.</p>
          </div>
        </GSCard>
      </div>
    </div>
  );
}
