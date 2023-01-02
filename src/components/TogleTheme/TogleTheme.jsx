import { MoonIcon, SunIcon } from "@heroicons/react/solid"
import { useEffect } from "react"

const TogleTheme= ()=> {
    const systemPreference= window.matchMedia('(prefers-color-scheme: dark)').matches
    const pageClasses = document.documentElement.classList
    useEffect(()=>{
        systemPreference && pageClasses.add('dark')
    })
    const toggle = ()=> {
        pageClasses.toggle('dark')
    }
    return(
        <div className="hidden sm:block">
            <MoonIcon className="cursor-pointer h-8 text-gray-100 block dark:hidden" onClick={toggle} />
            <SunIcon className="cursor-pointer h-8 text-gray-100 hidden dark:block" onClick={toggle} />
        </div>
    )
}

export default TogleTheme