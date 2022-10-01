import { NextPage } from "next"
import { useState } from "react"
import ArrowIcon from "../../components/icons/ArrowIcon"
import CloudCheckIcon from "../../components/icons/CloudCheckIcon"
import Sidebar from "../../components/sidebar/Sidebar"


const Teste:NextPage = () => {
    return (
        <>
        <div className="flex h-screen globalBackground p-3">
            <Sidebar/>
        </div>
        </>
    )
}

export default Teste