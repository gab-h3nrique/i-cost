import type { NextPage } from 'next'
import { useContext, useEffect } from 'react'
import { postApi } from '../../../lib/api'
import { getCookie } from '../../../lib/cookie'
import { AuthContext } from '../../context/auth'

const Home: NextPage = () => {
  const { userAuth }:any = useContext(AuthContext)
  const { addAuthUser }:any = useContext(AuthContext)

  const handleUser = async() => {
    const auth = await getCookie('auth')
    const data = await postApi('/api/auth/authUser', {auth});
    await addAuthUser(data.user)
  }

  useEffect(()=>{
    handleUser();
  },[])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      home cost
      <button onClick={()=>console.log('user auth', userAuth)} className="">click</button>
    </div>
  )
}

export default Home


