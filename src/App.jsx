import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth'
import { login, logout } from './store/authSlice'
import { Header, Footer } from './components/index'
import { Outlet } from 'react-router-dom'

const App = () => {

  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getcurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      }
      else {
        dispatch(logout())
      }
    })
    .catch(error => {
      console.error(error)
    })
    .finally(() => setLoading(false))
  }, [])

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
          {/* <Outlet /> */}
        </main>
        <Footer />
      </div>
    </div>
  ) : (
    <div className='font-bold text-5xl text-center w-full min-h-screen bg-green-400'>
      Loading...
    </div>
  )
}

export default App