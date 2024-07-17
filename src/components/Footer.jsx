const Footer = () => {
    return (
        <footer className="border-t border-stone-200 py-4 flex justify-center px-6">
            <nav className="flex justify-between items-center max-w-7xl w-full">
                <div className="logo flex justify-center items-center">
                    <span className="text-gray-500">PUCE Derechos reservados ®</span>
                    <img  className="w-full max-w-20" src="/01-PUCE-COLOR-H.webp" alt="PUCE" />
                </div>
                <div className="derecha">
                    <ul className="flex justify-center items-center text-white">
                        <li className="mr-4">Uno</li>
                        <li className="mr-4">Dos</li>
                        <li>tres</li>
                    </ul>
                </div>
            </nav>
        </footer>
    )
}

export default Footer
