import { NextPage } from "next"
import { useState } from "react"
import CloudCheckIcon from "../../components/icons/CloudCheckIcon"


const Sidebar = () => {
    const [open, setOpen] = useState<boolean>(true)
    return (
       
        <div className={`neumorphism ${open ? 'w-64' : 'w-24'} duration-500 px-4 py-6 borderRadius`}>

            <div onClick={() => setOpen(!open)} className={`flex justify-start items-center ${open && "gap-3 "} hoverPointer cursor-pointer h-16 rounded-2xl px-3 duration-500`}>

                <div className={`flex cursor-pointer duration-500 ${open && "rotate-[360deg]"} duration-500 border-2 bg-blue-600 border-white w-fit h-fit rounded-lg p-2 cursor-pointer`}>
                    <div className={`cursor-pointer duration-500 ${open && "rotate-[-360deg]"} duration-500`}>
                        <CloudCheckIcon width={25} height={25} fill={'white'}/>
                    </div>
                </div>

                <h1 className={`text-blue-600 text-xl font-semibold ${!open && "scale-0 w-0 "} duration-300`}>iCost</h1>
                {/* 
                <div className={`${!open && 'rotate-180'} duration-500 border-2 border-white w-fit h-fit rounded-full p-1 cursor-pointer`} >
                    <ArrowIcon width={10} strokeWidth={1} height={10} fill={'white'}/>
                </div> */}

            </div>
            </div>
       
    )
}

export default Sidebar