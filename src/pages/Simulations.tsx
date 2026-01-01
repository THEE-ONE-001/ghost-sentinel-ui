import { simulations } from "@/data/simulations";
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
import { PlusCircle } from 'lucide-react';

const getStatusBadge = (status: string) => {
  switch (status.toLowerCase()) {
    case "completed":
      return <span className='px-2 py-1 text-xs font-semibold text-green-300 bg-green-800 rounded-full'>{status}</span>;
    case "running":
      return <span className='px-2 py-1 text-xs font-semibold text-blue-300 bg-blue-800 rounded-full'>{status}</span>;
    case "scheduled":
      return <span className='px-2 py-1 text-xs font-semibold text-yellow-300 bg-yellow-800 rounded-full'>{status}</span>;
    default:
      return <span className='px-2 py-1 text-xs font-semibold text-gray-300 bg-gray-800 rounded-full'>{status}</span>;
  }
};

export default function Simulations() {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-white">Simulations</h1>
        <GSButton variant="primary">
            <PlusCircle className="mr-2 h-4 w-4" />
            New Simulation
        </GSButton>
      </div>
      <GSTable>
        <GSTableCaption>A list of threat simulations.</GSTableCaption>
        <GSTableHeader>
          <GSTableRow>
            <GSTableHead>ID</GSTableHead>
            <GSTableHead>Name</GSTableHead>
            <GSTableHead>Status</GSTableHead>
            <GSTableHead>Started</GSTableHead>
            <GSTableHead>Completed</GSTableHead>
            <GSTableHead>Actions</GSTableHead>
          </GSTableRow>
        </GSTableHeader>
        <GSTableBody>
          {simulations.map((sim) => (
            <GSTableRow key={sim.id}>
              <GSTableCell>{sim.id}</GSTableCell>
              <GSTableCell>{sim.name}</GSTableCell>
              <GSTableCell>{getStatusBadge(sim.status)}</GSTableCell>
              <GSTableCell>{sim.started}</GSTableCell>
              <GSTableCell>{sim.completed}</GSTableCell>
              <GSTableCell>
                <GSButton variant="secondary" size="sm" className="mr-2">Stop</GSButton>
                <GSButton variant="ghost" size="sm">Details</GSButton>
              </GSTableCell>
            </GSTableRow>
          ))}
        </GSTableBody>
      </GSTable>
    </div>
  );
}