import { useNavigate } from "react-router-dom"

function Projects() {
    const navigate = useNavigate()
    const goProject = (param) => {
        navigate(`/project/${param}`)
    }
  return (
    <>
    <h1>Projects</h1>
    <button onClick={() => goProject(1)}>Go project 1</button>
    <button onClick={() => goProject(2)}>Go project 2</button>
    <button onClick={() => goProject(3)}>Go project 3</button>
    <button onClick={() => goProject(4)}>Go project 4</button>
    <button onClick={() => goProject(5)}>Go project 5</button>
    <button onClick={() => goProject(6)}>Go project 6</button>
    </>
  )
}
export default Projects