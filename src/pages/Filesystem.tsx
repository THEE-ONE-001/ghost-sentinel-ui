import { files } from "@/data/files";
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

export default function Filesystem() {
  return (
    <div>
      <h1 className='text-3xl font-bold text-white mb-8'>Filesystem</h1>
      <GSTable>
        <GSTableCaption>A list of files in the system.</GSTableCaption>
        <GSTableHeader>
          <GSTableRow>
            <GSTableHead>Name</GSTableHead>
            <GSTableHead>Size</GSTableHead>
            <GSTableHead>Last Modified</GSTableHead>
            <GSTableHead>Permissions</GSTableHead>
            <GSTableHead>Actions</GSTableHead>
          </GSTableRow>
        </GSTableHeader>
        <GSTableBody>
          {files.map((file) => (
            <GSTableRow key={file.id}>
              <GSTableCell>{file.name}</GSTableCell>
              <GSTableCell>{file.size}</GSTableCell>
              <GSTableCell>{file.modified}</GSTableCell>
              <GSTableCell className='font-mono'>{file.permissions}</GSTableCell>
              <GSTableCell>
                <GSButton variant='secondary' size='sm' className='mr-2'>Scan</GSButton>
                <GSButton variant='ghost' size='sm'>Details</GSButton>
              </GSTableCell>
            </GSTableRow>
          ))}
        </GSTableBody>
      </GSTable>
    </div>
  );
}