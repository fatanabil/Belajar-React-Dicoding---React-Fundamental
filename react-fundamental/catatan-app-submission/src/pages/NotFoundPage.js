import { Link } from "react-router-dom";

function NotFoundPage() {
    return (
        <div className="flex flex-col gap-4 h-screen justify-center items-center">
            <h1 className="text-3xl font-semibold text-slate-400">404 Not Found</h1>
            <Link to="/" className="underline">Go Back To Home</Link>
        </div>
    )
}

export default NotFoundPage;