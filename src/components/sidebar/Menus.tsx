import { useState } from "react"
import CloudCheckIcon from "../../components/icons/CloudCheckIcon"


const Menus = ({children}:any) => {
    const [open, setOpen] = useState<boolean>(true)
    return (
        <div onClick={() => setOpen(!open)} className={`neumorphism-1 flex justify-start items-center gap-2 cursor-pointer h-16 rounded-2xl px-3 duration-500 neumorphism-1`}>
            {children}
        </div>
    )
}

export default Menus