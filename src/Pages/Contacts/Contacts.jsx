import { columns, rows } from './data'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'

const Contacts = () => {
  return (
    <div>
        <div style={{ height: "auto", width: '100%' }}>
      <DataGrid 
      slots={{ toolbar: GridToolbar }}
      slotProps={{
        toolbar: {
          showQuickFilter: true,
        },
      }}
      rows={rows} columns={columns} />
    </div>
    </div>
  )
}

export default Contacts
