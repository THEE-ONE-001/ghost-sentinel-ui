import { processes } from "@/data/processes";
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

const getStatusBadge = (status: string) => {
  switch (status.toLowerCase()) {
    case "running":
      return <span className='px-2 py-1 text-xs font-semibold text-green-300 bg-green-800 rounded-full'>{status}</span>;
    case "idle":
      return <span className='px-2 py-1 text-xs font-semibold text-yellow-300 bg-yellow-800 rounded-full'>{status}</span>;
    default:
      return <span className='px-2 py-1 text-xs font-semibold text-gray-300 bg-gray-800 rounded-full'>{status}</span>;
  }
};

export default function Processes() {
  return (
    <div>
      <h1 className='text-3xl font-bold text-white mb-8'>Processes</h1>
      <GSTable>
        <GSTableCaption>A list of running processes.</GSTableCaption>
        <GSTableHeader>
          <GSTableRow>
            <GSTableHead>ID</GSTableHead>
            <GSTableHead>PID</GSTableHead>
            <GSTableHead>Name</GSTableHead>
            <GSTableHead>Score</GSTableHead>
            <GSTableHead>Status</GSTableHead>
            <GSTableHead>Actions</GSTableHead>
          </GSTableRow>
        </GSTableHeader>
        <GSTableBody>
          {processes.map((process) => (
            <GSTableRow key={process.id}>
              <GSTableCell>{process.id}</GSTableCell>
              <GSTableCell>{process.pid}</GSTableCell>
              <GSTableCell>{process.name}</GSTableCell>
              <GSTableCell>{process.score}</GSTableCell>
              <GSTableCell>{getStatusBadge(process.status)}</GSTableCell>
              <GSTableCell>
                <GSButton variant='secondary' size='sm' className='mr-2'>Terminate</GSButton>
                <GSButton variant='ghost' size='sm'>Details</GSButton>
              </GSTableCell>
            </GSTableRow>
          ))}
        </GSTableBody>
      </GSTable>
    </div>
  );
}