import React, { useState } from "react";

export const TestContext = React.createContext({})

// eslint-disable-next-line react/prop-types
export const TestProvider = ({children}) =>{
    
    const [testEtapa, setTestEtapa] = useState(0)
    const [preguntaActual, setPreguntaActual] = useState(0)

    const nextEtapa = ()=>setTestEtapa(testEtapa+1)
    const nextQuestion = ()=>preguntaActual < 8 ? setPreguntaActual(preguntaActual+1) : nextEtapa()

    return(
    <TestContext.Provider value={{testEtapa, nextEtapa, preguntaActual, nextQuestion}}>
        {children}
    </TestContext.Provider>

    )
}