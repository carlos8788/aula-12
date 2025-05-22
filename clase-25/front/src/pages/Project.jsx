import { useNavigate, useParams } from "react-router-dom"

function Project() {
    const { id } = useParams();
    const navigate = useNavigate()
    const goProjects = () => {
        navigate(`/projects`)
    }
    return (
        <>
            <h1>Project {id}</h1>
            <button onClick={goProjects}>Back</button>
        </>
    )
}
export default Project