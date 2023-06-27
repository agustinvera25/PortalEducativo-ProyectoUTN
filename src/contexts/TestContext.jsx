import React, { useState } from "react";

export const TestContext = React.createContext({})

// eslint-disable-next-line react/prop-types
export const TestProvider = ({children}) =>{
    
    const [testEtapa, setTestEtapa] = useState(0)
    const [preguntaActual, setPreguntaActual] = useState(0)
    const [puntosTest, setPuntosTest] = useState(0)

    const nextEtapa = ()=>setTestEtapa(testEtapa+1)
    const nextQuestion = ()=>preguntaActual < 8 ? setPreguntaActual(preguntaActual+1) : nextEtapa()

    const handleResponse = (res)=>{
        if((preguntaActual === 0 || preguntaActual === 1 || preguntaActual === 2 || preguntaActual === 5) && res){
            setPuntosTest(puntosTest + 1)
        }else if ((preguntaActual === 4 || preguntaActual === 6) && res){
            setPuntosTest(puntosTest + 2)
        }else if (preguntaActual === 3 && res){
            setPuntosTest(puntosTest + 3)
        }else if ((preguntaActual === 7 || preguntaActual === 8 || preguntaActual === 9)&& res){
            setPuntosTest(puntosTest + 5)
        }
    }
    return(
    <TestContext.Provider value={{testEtapa, nextEtapa, preguntaActual, nextQuestion, handleResponse}}>
        {children}
    </TestContext.Provider>

    )
}