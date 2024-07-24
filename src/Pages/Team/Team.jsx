import { DataGrid } from '@mui/x-data-grid'
import { columns, rows } from './data'

const Team = () => {



  return (
    <div>
        <div style={{ height: "auto", width: '100%' }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
    </div>
  )
}

export default Team
