import { useNavigate, Link, Outlet } from "react-router-dom"

export default function Dashboard() {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/');
    }
    return (
        <div>
            <h1>Dashboard</h1>
            <button onClick={handleClick}>
                Logout
            </button>
            <Link to='welcome'>
                Say welcome
            </Link>
            <Link to='goodbye'>
                Bye Bye
            </Link>

            <Outlet></Outlet>
        </div>
    )
}
