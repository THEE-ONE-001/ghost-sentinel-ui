import { GSTextInput, GSYamleDitor } from "@/components/GS-Form";
import { GSButton } from "@/components/GS-Button";
import { GSCard } from "@/components/GS-Card";

const defaultYaml = `
- name: Phishing Simulation
  type: email
  target: all_employees
  template: standard_phishing_template.html
  schedule:
    start_time: "2024-08-01 09:00:00"
    end_time: "2024-08-01 17:00:00"
`;

export default function Sandbox() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-8">Sandbox</h1>
      <GSCard title="Run a New Simulation">
        <div className="space-y-4">
            <div>
                <label htmlFor="simulationName" className="block text-sm font-medium text-gray-300 mb-2">Simulation Name</label>
                <GSTextInput id="simulationName" placeholder="e.g., Q3 Phishing Test" />
            </div>
            <div>
                <label htmlFor="simulationConfig" className="block text-sm font-medium text-gray-300 mb-2">Simulation Configuration (YAML)</label>
                <GSYamleDitor id="simulationConfig" defaultValue={defaultYaml} />
            </div>
            <div className="flex justify-end">
                <GSButton variant="primary">Run Simulation</GSButton>
            </div>
        </div>
      </GSCard>
    </div>
  );
}