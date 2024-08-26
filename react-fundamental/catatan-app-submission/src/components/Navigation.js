const { Link } = require("react-router-dom");

function Navigation() {
    return (
        <nav className="bg-white shadow-md shadow-slate-200 flex px-16 py-4">
            <h1 className="mr-8 font-semibold text-lg">Catatan-App</h1>
            <ul className="flex gap-8" >
                <li className="underline"><Link to={'/'} >Home</Link></li>
                <li className="underline"><Link to={'/archive'} >Arsip</Link></li>
            </ul>
        </nav>
    )
}

export default Navigation;