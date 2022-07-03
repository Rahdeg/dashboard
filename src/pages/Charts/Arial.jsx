import React from 'react'
import { ChartComponent,SeriesCollectionDirective,SeriesDirective,
  Inject,DateTime,Legend,SplineAreaSeries} from '@syncfusion/ej2-react-charts'
  
  import {lineCustomSeries,LinePrimaryYAxis,LinePrimaryXAxis} from '../../data/dummy'
  import { useStateContext } from '../../context/ContextProvider'
import { Header } from '../../component'
  

const Arial = () => {
  const {currentmode}=useStateContext();
  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
    <Header category='Chart' title='Inflation Rate'/>
    

    </div>
  )
}

export default Arial