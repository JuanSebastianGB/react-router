import { useNavigate, Route, Routes, Link } from "react-router-dom"

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
            <Routes>
                <Route path='welcome' element={<p>Welcome!!!!!</p>}></Route>
            </Routes>
        </div>
    )
}
