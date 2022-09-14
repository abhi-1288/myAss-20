import React from "react";
import { Link } from 'react-router-dom'

function Err404 (){
    return (
        <div className="mx-2 text-center md:p-8 grow">
            <div className="flex justify-center">
                <img src="https://cdn.discordapp.com/attachments/998621481934270566/1016379335105585262/OOPs-removebg-preview.png" className="w-fit h-fit" />
            </div>    
            <h2 className="font-Dancing text-2xl font-black text-center">404 Page Not Found</h2>
            <p className="font-Caveat text-2xl text-sky-500 text-center">Think That the Page/Document You Are Looking Is <span className="font-Shadows text-3xl text-red-400 font-medium">NO MORE</span> or Has <span className="font-Shadows text-3xl text-red-400 font-medium">A BROKEN LINK</span>. </p>
            <div className="my-6">
                <Link to='/' className="rounded-full text-3xl p-2 bg-sky-500 hover:bg-red-400 font-Qwitcher font-black ">Back To Home</Link>
            </div>
        </div>
    )
}

export default Err404