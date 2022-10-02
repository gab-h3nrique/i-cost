import { NextPage } from "next"
import { useState } from "react"
import CloudCheckIcon from "../../components/icons/CloudCheckIcon"
import CloudConfig from "../icons/CloudConfig"
import CloudPlus from "../icons/CloudPlus"
import DashboardIcon from "../icons/DashboardIcon"
import IconMenu from "./IconMenu"
import Menus from "./Menus"


const Sidebar = () => {
    const [open, setOpen] = useState<boolean>(true)
    return (
        <div className={`flex flex-col gap-5 neumorphism ${open ? 'w-52' : 'w-24'} duration-500 px-3 py-8 borderRadius`}>
            <div className="mb-10">
                <div onClick={() => setOpen(!open)} className={`flex justify-start  gap-2 items-center  hoverPointer cursor-pointer h-16 rounded-2xl px-3 duration-500`}>

                <div className={`flex cursor-pointer duration-500 ${open && "rotate-[360deg]"} duration-500 border-2 bg-blue-600 border-white w-fit h-fit rounded-lg p-2 cursor-pointer`}>
                    <div className={`cursor-pointer duration-500 ${open && "rotate-[-360deg]"} duration-500`}>
                        <CloudCheckIcon width={28} height={28} fill={'white'}/>
                    </div>
                </div>
                <h1 className={`text-blue-600 text-xl font-semibold ${!open && "scale-0 w-0 "} duration-500`}>iCost</h1>
                </div>
            </div>

            <div className="flex flex-col gap-4">
                <Menus>
                    <IconMenu>
                        <DashboardIcon width={32} height={32} fill={'rgb(37 99 235'}/>
                    </IconMenu>
                    <h1 className={`text-blue-600 text-sm font-semibold ${!open && "scale-0 w-0 "} duration-500`}>
                        Dashboard
                    </h1>
                </Menus>
               <Menus>
                    <IconMenu>
                        <CloudConfig width={32} height={32} fill={'rgb(37 99 235'}/>
                    </IconMenu>
                    <h1 className={`text-blue-600 text-sm font-semibold ${!open && "scale-0 w-0 "} duration-500`}>
                        Budgets
                    </h1>
                </Menus>
               <Menus>
                    <IconMenu>
                        <CloudPlus width={32} height={32} fill={'rgb(37 99 235'}/>
                    </IconMenu>
                    <h1 className={`text-blue-600 text-sm font-semibold ${!open && "scale-0 w-0 "} duration-500`}>
                        Expense
                    </h1>
                </Menus>


            </div>
        </div>
       
    )
}

export default Sidebar