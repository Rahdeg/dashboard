import React from 'react';
import {GoPrimitiveDot } from 'react-icons/go';
import {Sparked,Button, Sparkline} from '../component'
import { earningData,SparklineAreaData } from '../data/dummy';
import {useStateContext} from '../context/ContextProvider'

const Ecommerce = () => {
  const {currentColor} = useStateContext();
  return (
    <div className="mt-12">
    <div className='flex flex-wrap lg:flex-nowrap justify-center'>
      <div className="bg-white dark:text-gray-200 dark:bg-secndary-dark-bg h-44 rounded-xl
      w-full lg:w-80 p-8 pt-9 m-3 xl:pl-2 bg-hero-pattern bg-no-repeat bg-cover bg-center ">
      <div className='flex justify-between items-center'>
      <div>
      <p className='font-bold text-gray-400'>Earnings</p>
      <p className='text-2xl'>$2,000,000</p>
      </div>
      </div>
      <div className='mt-6 '>
      <Button
      color='white'
      bgColor={currentColor}
      text='download'
      borderRadius="10px"
      size='md'
      />
      </div>
      </div>
      <div className='flex m-3 flex-wrap justify-center  gap-1 items-center'>
      {earningData.map((data,idx)=>(
        <div key={idx} className='bg-white dark:text-gray-200 
        dark:bg-secondary-dark-bg md:w-56 p-4 pt-9  rounded-2xl'>
         <button type='button' 
         style={{color:data.iconColor,backgroundColor:data.iconBg}}
         className='text-2xl opacity-0.5 rounded-full p-4 hover:drop-shadow-xl'>
         {data.icon}
         </button>
         <p className='mt-3'>
         <span className='text-lg font-semibold'>
         {data.amount}
         </span>
         <span className={`text-sm text-${data.pcColor} ml-2`}>
         {data.percentage}
         </span>
         </p>
         <p className='text-sm text-gray-400 mt-1'>
         {data.title}
         </p>
        </div>
      ))}
      </div>
    </div>
    <div className='flex gap-10 flex-wrap justify-center'>
    <div className='bg-white dark:text-gray-200
     dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780'>
    <div className='flex justify-between'>
        <p className='font-semibold text-xl'>Revenue Update</p>
        <div className='flex items-center gap-4'>
       <p className='flex items-center gap-2 text-grey-600 hover:drop-shadow-xl'>
       <span><GoPrimitiveDot/> </span>
       <span>Expense </span>
       </p>
       <p className='flex items-center gap-2 text-green-600 hover:drop-shadow-xl'>
       <span><GoPrimitiveDot/> </span>
       <span>Budget </span>
       </p>
        </div>
    </div>
    <div className='mt-10 flex gap-10 flex-wrap justify-center'>
    <div className='border-r-1 border-color m-4 pr-10'>
        <div>
        <p >
        <span className='text-3xl font-semibold'>$6o,ooo</span>
        <span className='p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full
         bg-green-400 ml-3 text-white text-xs '>20%</span>
        </p>
        <p className=' text-gray-500 mt-1'>Budget</p>
        </div>
        <div className='mt-8'>
        <p >
        <span className='text-3xl font-semibold'>$48,ooo</span>
        </p>
        <p className=' text-gray-500 mt-1'>Expense</p>
        </div>
        <div className='mt-5'>
        <Sparkline
        currentColor={currentColor}
        id='line-Sparkline'
        type='Line'
        height='80px'
        width='250px'
        data={SparklineAreaData}
        color={currentColor}
        />
        </div>
        <div className='mt-10'>
          <Button
          color='white'
          bgColor={currentColor}
          text='Download Report'
          borderRadius='10px'
          />
        </div>
    </div>
    <div>
    <Sparked 
    width='320px'
    height='360px'
    />
    </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Ecommerce