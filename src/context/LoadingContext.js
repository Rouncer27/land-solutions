import React, { createContext, useReducer } from "react"
export const LoadingContext = createContext()

const initialState = { initLoad: true }

const reducer = (state, action) => {
  switch (action.type) {
    case "INIT_LOAD_DONE":
      return {
        ...state,
        initLoad: false,
      }

    default:
      return state
  }
}

export const LoadingContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <LoadingContext.Provider value={[state, dispatch]}>
      {props.children}
    </LoadingContext.Provider>
  )
}
