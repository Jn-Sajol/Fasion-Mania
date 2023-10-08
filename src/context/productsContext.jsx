import { createContext, useState } from "react";
import PRODUCTS from '../shopData.json'

export const productsContext = createContext({
  products: [],
});

export const productContextProvidor = ({children}) =>{
    const [products,setProducts] = useState(PRODUCTS);
    const value = {products}
return<productsContext.Provider value={value}></productsContext.Provider>
}