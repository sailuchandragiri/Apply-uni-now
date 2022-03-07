import {createContext,useState} from 'react'

export const AppContext = createContext();

export const AppContextProvider = ({children})=>{
    const[token1,setToken] = useState("");
    const[dataStore,setData] = useState([]);

    const handleToken = (newToken) =>{
      setToken(newToken)
    }

    const setFetchedData = (newData) =>{
      setData(newData)
    }


return(
    <AppContext.Provider value = {{handleToken,token1,dataStore,setFetchedData}}>
    {children}
    </AppContext.Provider>
)
}