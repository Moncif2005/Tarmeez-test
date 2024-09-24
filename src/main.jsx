import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './Componnets/Header'
import Table from './Componnets/Table'
import ButtonTable from './Componnets/ButtonTable'

createRoot(document.getElementById('root')).render(
  
  <div>

    <Header />
      <div className='main-body'> 
        <div>
           <Table />
           <Table />
           <Table />
           <Table />
           <Table />
        </div>
        <ButtonTable />
      </div>

  </div>
)
