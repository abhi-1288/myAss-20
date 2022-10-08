import React, { useState, useEffect } from "react";
import { VscCheck, VscClose,  } from "react-icons/vsc";
import { BiErrorAlt  } from "react-icons/bi";
import { WithAlert } from "./WithProvider";


const styles = {
  success: {
    color: "bg-green-500 text-white text-xl text-center p-4 rounded rounded-tr-none rounded-br-none",
    Icon: VscCheck, 
    heading: "Success",
  },
  error: {
    color: "bg-red-500 text-white text-xl text-center p-4 rounded rounded-tr-none rounded-br-none",
    Icon: BiErrorAlt,
    heading: "Error",
  }
}
// myAllert.jsx
function Allert({alert, removeAlert}) {

  useEffect(() => {
    if(alert){
      const timer = setTimeout(removeAlert, 5 * 1000)

      return () => {
        clearTimeout(timer)
      }
    }
  }, [alert])

  if(!alert){
    return null;
  }
  

  const {type, message} = alert;
  const {heading, Icon, color} = styles[type]

  return (
    <div>
        <div className="md:flex grid  bg-slate-800 mx-2 items-center w-auto md:space-x-4 space-y-3 rounded-md">
            <div className={color }>
                <Icon/>
            </div>
            <h2 className="text-xl font-bold text-rose-200 font-mono p-2">{heading}:</h2>
            <div className="text-lg text-white"><li>{message}</li></div>
            <button onClick={removeAlert}>
                <VscClose className="text-white text-lg font-bold mr-2 text-center "/>
            </button>
        </div>
    </div>
  )
}


export default WithAlert(Allert);
