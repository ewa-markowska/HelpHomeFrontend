import React from 'react'
import './TableView.css'
import Filter from './Filter';



function TableView() {
  return (
    <div className='tableMessage'>
      
      <div className='table-container'>
      <Filter/>
      </div>
     
      <div className='table-wrapper'></div>
    </div>
  )
}

export default TableView
