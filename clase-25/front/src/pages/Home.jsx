import { useNavigate } from "react-router-dom"

function Home() {

    const navigate = useNavigate()

    const goProjects = () => {
        navigate('/projects')
    }   

    return (
        <>
            <h1>Home</h1>
            <button onClick={goProjects}>Go Projects</button>
        </>
    )
}
export default Home