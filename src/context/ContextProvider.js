import React,{createContext,useState,useContext} from 'react';
const StateContext=createContext();
const initialState={
    chat: false,
    cart: false,
    notification:false,
    userprofile:false,
}

export const ContextProvider = ({children})=>{
const [isClicked, setIsClicked] = useState(initialState);
const [activeMenu, setActiveMenu] = useState(true);
const [screenSize, setScreenSize] = useState(undefined);
const handleClick=(clicked)=>{
    setIsClicked({...initialState, [clicked]: true});
}
    return(
        <StateContext.Provider value={{activeMenu,setActiveMenu,isClicked,setIsClicked,handleClick,screenSize,setScreenSize }}>
        {children}
        </StateContext.Provider>
    )
}

export const useStateContext=()=>useContext(StateContext)