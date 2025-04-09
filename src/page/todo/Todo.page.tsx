import { NavLink, useLoaderData } from 'react-router-dom';

const Todo = () => {
  const todoData = useLoaderData();

  console.log("key", import.meta.env.VITE_API_KEY);

  return (
    <div className='flex-center gap-4 flex-wrap h-[70%] overflow-y-scroll p-4'>
      {
        todoData?.map((item: any, index: number) => (
          <div key={index} className=' flex-center flex-col gap-2 w-[300px] p-2 dark:bg-white dark:text-black bg-black text-white rounded-sm'>
            <h1 className='text-xl dark:text-black text-white'>{item.title}</h1>
            <h1 className='text-xl dark:text-black text-white'>{item.completed ? "Completed" : "Not Completed"}</h1>
            <h1 className='text-xl dark:text-black text-white'>{item.userId}</h1>
            <NavLink to={`/movies/${item.id}`} >
              <button className='dark:bg-white dark:text-black bg-white text-black'>Show More</button>
            </NavLink>

          </div>
        ))
      }
    </div>
  )
}

export default Todo
