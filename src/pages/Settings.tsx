import { GSCard } from "@/components/GS-Card";
import { GSTextInput } from "@/components/GS-Form";
import { GSButton } from "@/components/GS-Button";

export default function Settings() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-8">Settings</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <GSCard title="API Keys">
            <div className="space-y-4">
                <div>
                    <label htmlFor="apiKey" className="block text-sm font-medium text-gray-300 mb-2">Your API Key</label>
                    <GSTextInput id="apiKey" defaultValue="********************" readOnly />
                </div>
                <GSButton variant="secondary">Generate New Key</GSButton>
            </div>
        </GSCard>
        <GSCard title="Notifications">
            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <span className="text-gray-300">Email Notifications</span>
                    <GSButton variant="primary" size="sm">Enable</GSButton>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-gray-300">Slack Notifications</span>
                    <GSButton variant="secondary" size="sm">Disable</GSButton>
                </div>
            </div>
        </GSCard>
      </div>
    </div>
  );
}