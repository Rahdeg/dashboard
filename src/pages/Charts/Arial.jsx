import React from 'react'
import { ChartComponent,SeriesCollectionDirective,SeriesDirective,
  Inject,DateTime,Legend,SplineAreaSeries} from '@syncfusion/ej2-react-charts'
  
  import {areaCustomSeries,areaPrimaryXAxis,areaPrimaryYAxis} from '../../data/dummy'
  import { useStateContext } from '../../context/ContextProvider'
import { Header } from '../../component'
  

const Arial = () => {
  const {currentmode}=useStateContext();
  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
    <Header category='Chart' title='Inflation Rate in Percentage'/>
    <ChartComponent
    id='area-chart'
    height='420px'
    primaryXAxis={areaPrimaryXAxis}
    primaryYAxis={areaPrimaryYAxis}
    chartArea={{border:{width:0}}}
    tooltip={{enable: true}}
    background={currentmode === 'Dark' ? '#33373E' :''}
    >
    <Inject services={[SplineAreaSeries,DateTime,Legend]}/>
    <SeriesCollectionDirective>
    {areaCustomSeries.map((item,idx)=>(
      <SeriesDirective key={idx} {...item}/>
    ))}
    </SeriesCollectionDirective>
    </ChartComponent>
    

    </div>
  )
}

export default Arial