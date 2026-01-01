import { GSChart } from '@/components/GS-Chart';
import { threatsOverTime, threatTypes, ruleHits } from '@/data/reports';

export default function Reports() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-8">Reports</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <GSChart type="line" data={threatsOverTime} title="Threats Over Time" />
        <GSChart type="pie" data={threatTypes} title="Threat Types Distribution" />
        <div className="lg:col-span-2">
            <GSChart type="bar" data={ruleHits} title="Top 5 Rule Hits" />
        </div>
      </div>
    </div>
  );
}