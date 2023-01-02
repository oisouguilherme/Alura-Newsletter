import { MoonIcon } from '@heroicons/react/solid'
import TogleTheme from './TogleTheme/TogleTheme'

const Header = ()=> {
    return(
        <div className="flex h-20 bg-alura-200 dark:bg-dark-200 justify-between items-center px-5 sm:rounded-xl sm:m-5 ">
            <span className="text-gray-100">Olá, Usuário</span>
            <h1 className="text-gray-100 text-xl">Alura Newsletter</h1>
            <TogleTheme />
        </div>
    )
}

export default Header