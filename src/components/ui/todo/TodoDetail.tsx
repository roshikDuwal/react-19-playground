import { useLoaderData } from "react-router-dom"


const TodoDetail = () => {
    const loaderByID=useLoaderData();
  return (
    <div>
      <h2>Title</h2>
      <p>{loaderByID.title}</p>
      <h2>Completed</h2>
      <p>{loaderByID.completed}</p>
    </div>
  )
}

export default TodoDetail
