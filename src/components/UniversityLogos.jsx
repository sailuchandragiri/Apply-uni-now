import React from 'react'


import { uniLogos } from "../universitylogos"

console.log(uniLogos)

export const UniversityLogos = () => {
    return (
        <div className=" border-2 border-red-900 grid grid-cols-10 gap-y-4 ">

            {
                uniLogos.map((item) => {
                    return (
                        <img className="" src={item.img} alt="logo" />
                    )
                })
            }

        </div>
    )
}
