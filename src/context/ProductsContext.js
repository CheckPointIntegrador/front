import React, { createContext, useState } from 'react'
import DATA from './DATA'

export const ProductsContext = createContext();

export default function ProductsContextProvider ({children}) {
    const [products] = useState(DATA)
    
    return (
        <ProductsContext.Provider value={{products}}>
            {
                children
            }
        </ProductsContext.Provider>
    )
}

