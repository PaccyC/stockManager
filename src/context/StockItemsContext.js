import {createContext,useReducer} from 'react';

export const StockContext=createContext();


const stockReducer=(state,action)=>{
    switch(action.type){
        case "GET_STOCKITEMS":
            return {stockItems:action.payload}

            case "ADD_STOCKITEMS":
              return {
                    stockItems:[...state.stockItems,action.payload]
                }

                case "UPDATE_STOCKITEMS":
                    const updatedItem = action.payload;
                    const updatedItems = state.stockItems.map(item =>
                      item.id === updatedItem.id ? updatedItem : item
                    );
              
                    return {
                      ...state,
                      stockItems: updatedItems
                    };
             
               case "DELETE_ITEM":
                return {
                    stockItems: state.stockItems.filter((item)=>item._id !==action.payload._id)
                } 
                default :
                return {stockItems:state}
    }

}
export const StockContextProvider=({children})=>{

    const [state,dispatch]=useReducer(stockReducer,{
        stockItems:null
    })
    return(
        <StockContext.Provider value={{...state,dispatch}}>
            {children}
        </StockContext.Provider>
    )
}