import React, { useState, useEffect } from "react";

// Button Component
function Button(props) {

  return (
    <div>
        <button {...props} className="bg-rose-400 px-2 py-1 rounded border-2 font-Qwitcher text-2xl border-orange-500 hover:bg-red-600 " ></button>
    </div>
  )
}

export default Button;
