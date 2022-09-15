import type { NextPage } from 'next'
import { useContext, useEffect, useState } from 'react'
import { postApi } from '../../../lib/api'
import { AuthContext } from '../../context/auth'

const Home: NextPage = () => {

  const { addAuthUser }:any = useContext(AuthContext)
  
  const { getAuthUser }:any = useContext(AuthContext)

  const [budgets, setBudget] = useState([])

  const [userGroup, setGroup] = useState('')

  // const handleBudgets = async() => {
  // const userAuth = await getAuthUser()


  //   console.log('userauth',userAuth)
  //   const data = await postApi('/api/auth/budget', {userAuth})
  //   console.log('data', data)
   
  //   // setBudget(data.budgets);
    
  // }

  const createGroup = async () => {
    const data = await postApi('/api/auth/createGroup', {userGroup})
    console.log('grupo', userGroup)
    console.log('retorno', data)
  }

  
  useEffect(()=>{

    (async () => {
      await addAuthUser()
      // await handleBudgets()
    })()

  },[])

  return (

    <div className="flex min-h-screen flex-col items-center justify-center py-2">

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{' '}
          <a className="text-blue-600" href="./app">
            I-Cost
          </a>
        </h1>

        <p className="mt-3 text-2xl">
          Chose a group{' '}
        </p>

        <button onClick={async()=>console.log(await getAuthUser())}>++</button>

        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          <div>

            <div className="flex aling-center justify-between aling-center mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600">
              <input  onChange={(e)=>{setGroup(e.target.value)}} className="text-2xl font-bold" value={userGroup}/>

              <button onClick={()=>createGroup()} className="self-end text-4xl font-bold text-center"> + </button>
            </div>

            <div className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600">
              <h3 className="text-2xl font-bold"> { } &rarr;</h3>
            </div>

          </div>

        </div>
      </main>







      <footer className="flex h-24 w-full items-center justify-center border-t">
      </footer>
    </div>
  )
}

export default Home
