import { createContext,useEffect,useReducer } from "react";

export const AuthContext= createContext()


export const authReducer=(action,state )=>{
    switch(action.type){
        case 'ADDUSER':
            return{
                user:[action.payload,...state.user]
            }
            case 'GETUSERS':
                return{
                    user: action.payload
                }
              case 'UPDATEUSER':
                const updatedUser=action.payload.user;
                const userId=action.payload.userId;
                const updatedUsers=state.users.map((user)=>
                    user._id === userId ? updatedUser :user
                );
                return {
                    ...state,user:updatedUser
                }
                case "LOGOUT":
                  return{
                     user:null
                  }
              
                default :
                return{
                    user:state
                }
              
    }

}
export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, { 
      user: null
    })
  
    useEffect(() => {
      const user = JSON.parse(localStorage.getItem('user'))
  
      if (user) {
        dispatch({ type: 'LOGIN', payload: user }) 
      }
    }, [])
  
    // console.log('AuthContext state:', state)
    
    return (
      <AuthContext.Provider value={{ ...state, dispatch }}>
        { children }
      </AuthContext.Provider>
    )
}