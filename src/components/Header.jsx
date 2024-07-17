import { useNavigate } from "react-router-dom"


const Header = () => {
    const navigate = useNavigate();
    const handleNavigate = ()=>{
        navigate('/paso-uno')
    }
    return (
        <header className="bg-blue-400 py-4 flex justify-center px-6" id="header">
            <nav className="flex justify-between items-center max-w-7xl w-full">
                <div className="logo" onClick={handleNavigate}>
                    <img className="w-full max-w-20" src="/03-scorebebe_logo.webp" alt="Score Bebé" />
                </div>
                <div className="derecha flex justify-between items-center gap-3 ">
                    <img className="w-full max-w-20" src="/02-PUCE-Blanco-V.webp" alt="Universidad Católica" />
                    <img className="w-full max-w-20" src="/04-isp-horizontal_blanco.webp" alt="Instituto de salud pública" />
                    <a href="mailto:igduenase@puce.edu.ec" className="tracking-wide text-sm font-bold text-white ">Contacto</a>
                </div>
            </nav>
        </header>
    )
}

export default Header
