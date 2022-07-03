import React from 'react'
import {GridComponent,ColumnDirective,ColumnsDirective,Page,
  Inject,Search,Toolbar} from '@syncfusion/ej2-react-grids'

import {employeesData,employeesGrid} from '../data/dummy'
import { Header } from '../component'



const Employee = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
    <Header category='Page' title='Employees'/>
    <GridComponent
    dataSource={employeesData}
    allowPaging
    toolbar={['Search']}
    width='auto'
    >
    <ColumnsDirective>
      {employeesGrid.map((item,idx)=>(
        <ColumnDirective key={idx} {...item} />
      ))}
    </ColumnsDirective>
    <Inject services={[Page,Search,Toolbar]}/>
    </GridComponent>
    </div>
  )
}

export default Employee