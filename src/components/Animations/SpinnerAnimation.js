import React from "react"

import PropagateLoader from "react-spinners/PropagateLoader"

const SpinnerAnimation = () => {
  return (
    <>
      <PropagateLoader size={15} color={"#1F527F"} loading={true} />
    </>
  )
}

export default SpinnerAnimation
