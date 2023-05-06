import { useContext } from "react";
import { StockContext } from "../context/StockItemsContext";
export const useStockItemContext=()=>{

    const context=useContext(StockContext);
    if(!context){
        throw Error ("StockItemsContext can only be used in stockItemsContextProvider");
    }

    return context;
};