import { DataGrid, GridToolbar } from "@mui/x-data-grid"
import { columns, rows } from "./data"

const Invoice = () => {
  return (
    <div >
         <div style={{ height: "auto", width: '100%' }}>
      <DataGrid 
      checkboxSelection
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

export default Invoice
