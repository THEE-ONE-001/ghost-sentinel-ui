import { logs } from "@/data/logs";
import {
  GSTable,
  GSTableBody,
  GSTableCaption,
  GSTableCell,
  GSTableHead,
  GSTableHeader,
  GSTableRow,
} from "@/components/GS-Table";

const getLevelBadge = (level: string) => {
  switch (level.toLowerCase()) {
    case "info":
      return <span className='px-2 py-1 text-xs font-semibold text-blue-300 bg-blue-800 rounded-full'>{level}</span>;
    case "warn":
      return <span className='px-2 py-1 text-xs font-semibold text-yellow-300 bg-yellow-800 rounded-full'>{level}</span>;
    case "error":
      return <span className='px-2 py-1 text-xs font-semibold text-red-300 bg-red-800 rounded-full'>{level}</span>;
    case "debug":
        return <span className='px-2 py-1 text-xs font-semibold text-gray-300 bg-gray-800 rounded-full'>{level}</span>;
    default:
      return <span className='px-2 py-1 text-xs font-semibold text-gray-300 bg-gray-800 rounded-full'>{level}</span>;
  }
};

export default function LogsViewer() {
  return (
    <div>
      <h1 className='text-3xl font-bold text-white mb-8'>Logs Viewer</h1>
      <GSTable>
        <GSTableCaption>A list of system logs.</GSTableCaption>
        <GSTableHeader>
          <GSTableRow>
            <GSTableHead>Timestamp</GSTableHead>
            <GSTableHead>Level</GSTableHead>
            <GSTableHead>Message</GSTableHead>
          </GSTableRow>
        </GSTableHeader>
        <GSTableBody>
          {logs.map((log) => (
            <GSTableRow key={log.id}>
              <GSTableCell>{log.timestamp}</GSTableCell>
              <GSTableCell>{getLevelBadge(log.level)}</GSTableCell>
              <GSTableCell>{log.message}</GSTableCell>
            </GSTableRow>
          ))}
        </GSTableBody>
      </GSTable>
    </div>
  );
}