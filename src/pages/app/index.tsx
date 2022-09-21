import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { postApi } from '../../../lib/api'
import { Group } from '../../../types/groupType'
import { useAuth } from '../../context/auth'


// type Group = {
//   id: number;
//   name: string;
//   userId?: string;
//   ruler?: boolean;
// };
const Home: NextPage = () => {
  const {getAuthUser ,addAuthUser , authUser}:any = useAuth();

  const [groupName, setGroupName] = useState<string>('')
  const [arrayGroup, setArrayGroup] = useState<Group[]>()
  
  addAuthUser()
  const { name } = getAuthUser();
  
  useEffect(() => {
    if(authUser.id) {

      console.log('usuario', authUser)
      getAllGroup(authUser)

    }
  },[authUser])

  
  const getAllGroup = async (user:any) => {
    const data = await postApi('/api/auth/group/getAllGroup', {user})
    if(data.groups.length > 0) {
      setArrayGroup(data.groups)
    }
  }
  const createGroup = async (user:any, groupName:string, ruler:boolean) => {
    const data = await postApi('/api/auth/group/createGroup', {groupName, user, ruler})
    if(data.group) {
      getAllGroup(authUser)
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
              arrayGroup !== undefined && arrayGroup.map(({id, name}, key)=>{
                return (
                  <>
                    <div id={`${key}`} className="mt-6 w-96 rounded-xl border p-6 text-center hover:text-blue-600 focus:text-blue-600">
                     <h3 className="text-2xl font-bold"> { name } &rarr;</h3>
                    </div>
                  </>
                )
              })
            }

          </div>

        </div>
      </main>







      <footer className="flex h-24 w-full items-center justify-center border-t">
      </footer>
    </div>
  )
}

export default Home
