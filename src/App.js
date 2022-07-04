import './App.css';

import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {FiSettings} from 'react-icons/fi';
import {TooltipComponent} from '@syncfusion/ej2-react-popups';
import {Navbar,Sidebar, Themesettings} from './component';
import {Calendar,Colorpicker,Customer,Ecommerce,Editor,Orders,Financial,Line,
  Bar,Employee,Arial,Kaban,Colormaping,Stalked,Pryamid} from './pages';
import {useStateContext} from './context/ContextProvider'




function App() {
  const {activeMenu,themesettings,setthemesettings,currentColor,currentmode}= useStateContext();
  return (
    <div className={currentmode==='Dark' ?  'dark' : ''}>
    <BrowserRouter>
    <div className='flex relative dark:bg-main-dark-bg'>
    <div className='fixed right-4 bottom-4' style={{zIndex:'1000'}}>
    <TooltipComponent content='Settiings'position='Top'>
    <button type='button' className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white' 
    style={{background:currentColor, borderRadius:'50%'}}
    onClick={()=>{setthemesettings(true)}}>
    <FiSettings/>
    </button>
    </TooltipComponent>
    </div>
    {
      activeMenu ? (
        <div className='dark:bg-secondary-dark-bg bg-white w-72 fixed sidebar'>
        <Sidebar/>
        </div>
      ):(
        <div className='w-0 dark:bg-secondary-dark-bg'>
        <Sidebar/>
        </div>
      )
    }
    <div className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${activeMenu? 'md:ml-72' : 'flex-2'}`}>
    <div className='fixed md:static bg-main-bg dark:bg-main-bg navbar w-full'>
    <Navbar/>
    </div>
    
    <div>
    {themesettings && <Themesettings/> }
    
    <Routes>
    {/*Dashboard*/}

    <Route path='/ecommerce' element={<Ecommerce />}/>
    <Route path='/' element={<Ecommerce />}/>
    {/*pages*/}
    <Route path='/orders' element={<Orders />}/>
    <Route path='/employees' element={<Employee/>}/>
    <Route path='/customer' element={<Customer />}/>
    {/*App*/}
    <Route path='/kanban' element={<Kaban />}/>
    <Route path='/calendar' element={<Calendar />}/>
    <Route path='/editor' element={<Editor />}/>
    <Route path='/color-picker' element={<Colorpicker />}/>
    {/*App*/}
    <Route path='/line' element={<Line />}/>
    <Route path='/area' element={<Arial />}/>
    <Route path='/bar' element={<Bar />}/>
    <Route path='/financial' element={<Financial />}/>
    <Route path='/color-mapping' element={<Colormaping/>}/>
    <Route path='/pyramid' element={<Pryamid />}/>
    <Route path='/stacked' element={<Stalked />}/>
    </Routes>
    </div>
    </div>
    </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
