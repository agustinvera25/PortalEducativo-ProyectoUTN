import React, { useState } from "react";

export const TestContext = React.createContext({})

// eslint-disable-next-line react/prop-types
export const TestProvider = ({children}) =>{
    
    const [testEtapa, setTestEtapa] = useState(0)

    const nextEtapa = ()=>setTestEtapa(testEtapa+1)

    return(
    <TestContext.Provider value={{testEtapa, nextEtapa}}>
        {children}
    </TestContext.Provider>

    )
}