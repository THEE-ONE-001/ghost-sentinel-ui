import { rules } from "@/data/rules";
import {
  GSTable,
  GSTableBody,
  GSTableCaption,
  GSTableCell,
  GSTableHead,
  GSTableHeader,
  GSTableRow,
} from "@/components/GS-Table";
import { GSButton } from "@/components/GS-Button";

const getSeverityBadge = (severity: string) => {
  switch (severity.toLowerCase()) {
    case "high":
      return <span className='px-2 py-1 text-xs font-semibold text-red-300 bg-red-800 rounded-full'>{severity}</span>;
    case "medium":
      return <span className='px-2 py-1 text-xs font-semibold text-yellow-300 bg-yellow-800 rounded-full'>{severity}</span>;
    case "low":
      return <span className='px-2 py-1 text-xs font-semibold text-blue-300 bg-blue-800 rounded-full'>{severity}</span>;
    default:
      return <span className='px-2 py-1 text-xs font-semibold text-gray-300 bg-gray-800 rounded-full'>{severity}</span>;
  }
};

const getStatusToggle = (status: string) => {
    return status.toLowerCase() === 'enabled' ? 
        <GSButton variant='secondary' size='sm'>Disable</GSButton> : 
        <GSButton variant='primary' size='sm'>Enable</GSButton>
}

export default function RulesManager() {
  return (
    <div>
      <h1 className='text-3xl font-bold text-white mb-8'>Rules Manager</h1>
      <GSTable>
        <GSTableCaption>A list of detection rules.</GSTableCaption>
        <GSTableHeader>
          <GSTableRow>
            <GSTableHead>ID</GSTableHead>
            <GSTableHead>Name</GSTableHead>
            <GSTableHead>Severity</GSTableHead>
            <GSTableHead>Status</GSTableHead>
            <GSTableHead>Actions</GSTableHead>
          </GSTableRow>
        </GSTableHeader>
        <GSTableBody>
          {rules.map((rule) => (
            <GSTableRow key={rule.id}>
              <GSTableCell>{rule.id}</GSTableCell>
              <GSTableCell>{rule.name}</GSTableCell>
              <GSTableCell>{getSeverityBadge(rule.severity)}</GSTableCell>
              <GSTableCell>{rule.status}</GSTableCell>
              <GSTableCell>
                {getStatusToggle(rule.status)}
                <GSButton variant='ghost' size='sm' className='ml-2'>Edit</GSButton>
              </GSTableCell>
            </GSTableRow>
          ))}
        </GSTableBody>
      </GSTable>
    </div>
  );
}