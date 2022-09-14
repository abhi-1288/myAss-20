import React from "react";
import { ImSpinner2} from 'react-icons/im'

function Loading(){
    return(
        <div className="flex justify-center items-center grow p-4">
            <h1 className=' text-6xl text-rose-400 font-Satisfy italic '>Loading...</h1>
            <div className=" text-rose-400 text-3xl flex justify-center"> <ImSpinner2 className="animate-spin"/> </div>
        </div>
    )
}

export default Loading
