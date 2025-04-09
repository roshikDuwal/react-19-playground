import { Outlet, useNavigation } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'

const AppLayout = () => {

  const navigation = useNavigation();

  if (navigation.state === "loading")
    return (
      <div className='h-[100vh] flex-center'>
        <h1>Loading...</h1>
      </div>
    )



  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default AppLayout
