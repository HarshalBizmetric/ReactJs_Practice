import React from 'react'
import ReactDOM from 'react-dom/client'
//import Button from './Button'
import EmpList from './EmployeeList'
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
   {/* <Button></Button> */}
   <EmpList></EmpList>
  </React.StrictMode>,
)
