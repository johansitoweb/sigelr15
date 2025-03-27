"use client"
import { useState } from "react";

export default function Practica ({initialCount}) {
    const [count, setcount] = useState(initialCount);
    const text = count? "Siguiendo" : "Seguir";
    const buttonClass = count? "bg-green-500 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full"
    : "bg-red-500 hover:bg-red-900 text-white font-bold py-2 px-4 rounded-full";

const handle = () => {
    setcount(!count)
}
    return (
        <div>
            <button className={buttonClass} onClick={handle}>
                {text}
            </button>
        </div>
    )
}