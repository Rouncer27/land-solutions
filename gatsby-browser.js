import React from "react"
import { LoadingContextProvider } from "./src/context/LoadingContext"

export const wrapRootElement = ({ element }) => {
  return <LoadingContextProvider>{element}</LoadingContextProvider>
}
