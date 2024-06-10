

const Header = () => {
    return (
        <header className="bg-blue-400 py-4 flex justify-center px-6">
            <nav className="flex justify-between items-center max-w-7xl w-full">
                <div className="logo">
                    <span className="text-white">ScoreBebe</span>
                </div>
                <div className="derecha">
                    <ul className="flex justify-center items-center text-white">
                        <li className="mr-4">Uno</li>
                        <li className="mr-4">Dos</li>
                        <li>tres</li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header
