import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { postApi } from '../../../lib/api'
import { useAuth } from '../../context/auth'

const Home: NextPage = () => {
  const {getAuthUser ,addAuthUser , authUser}:any = useAuth();

  const [groupName, setGroupName] = useState<string>('')
  
  addAuthUser()
  const { name } = getAuthUser();
  
  useEffect(() => {
    if(authUser.id) {
      console.log('usuario', authUser)
      
      // createGroup(authUser)

    }
  },[authUser])

  
  const getGroup = async (user:any, group:string) => {
    const data = await postApi('/api/auth/createGroup', {group, user})
    console.log('retorno', data)
  }
  const createGroup = async (user:any, group:string, ruler:boolean) => {
    const data = await postApi('/api/auth/group/createGroup', {group, user, ruler})
    if(data) {
      console.log('sdfkllsdaf', data)
    }
  }

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
        {name} Chose a group{' '}
        </p>

        <button onClick={async()=>console.log(authUser)}>++</button>

        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          <div>

            <div className="flex aling-center justify-between aling-center rounded-xl border p-6 text-center hover:text-blue-600 focus:text-blue-600">
              <input  onChange={(e)=>{setGroupName(e.target.value as any)}} className="font-bold rounded-lg w-4/5 text-center"  placeholder="New group . . ." value={groupName || ''}/>

              <button onClick={()=>createGroup(authUser, groupName, true)} className="self-end text-4xl font-bold text-center"> + </button>
            </div>
            {

            }
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
