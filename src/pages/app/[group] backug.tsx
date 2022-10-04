import type { NextPage } from 'next'
import Router from 'next/router';
import { useEffect, useState } from 'react'
import { postApi } from '../../../lib/api'
import { Budget } from '../../../types/budgetType'
import { useAuth } from '../../context/auth'

import { GetServerSideProps } from 'next'

interface Props {
  group: string;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { group } = context.query
  
  return { 
    props: { group }
  }
  
}


const Group: NextPage<Props> = (props) => {

  const { group:pageName } = props

  const {getAuthUser ,addAuthUser , authUser}:any = useAuth()

  const [budgetName, setBudgetpName] = useState<string>('')
  const [arrayBudget, setArrayBudget] = useState<Budget[]>()
  
  addAuthUser()
  const { name } = getAuthUser();
  
  useEffect(() => {
    if(authUser.id) {

      getAllBudget(pageName)

    }
  },[authUser])

  const getAllBudget = async (pageName:string) => {
    const data = await postApi('/api/auth/budget/getAllBudget', {budgetName: pageName})
    console.log('data', data)
    if(data.budgets.length > 0) {
      setArrayBudget(data.budgets)
    }
  }
  const createBudget = async (name:string, groupName:string, description?:string) => {
    const data = await postApi('/api/auth/budget/createBudget', {name, groupName, description})
    if(data.budget) {
      getAllBudget(pageName)
    }
  }
  
  const redirectToBudgetSelected = (budgetName:string) => {
    Router.push(`/app/${budgetName}`);
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
         {''}
          <a className="text-blue-600" href="./app">
            I-Cost
          </a>
        </h1>

        <p className="mt-3 text-2xl"> select a Budget </p>


        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          <div>

            <div className="flex aling-center justify-between aling-center rounded-xl border p-6 text-center hover:text-blue-600 focus:text-blue-600">
              <input  onChange={(e)=>{setBudgetpName(e.target.value as any)}} className="font-bold rounded-lg w-4/5 text-center"  placeholder="New budget . . ." value={budgetName || ''}/>

              <button onClick={()=>createBudget(budgetName, pageName, '')} className="self-end text-4xl font-bold text-center"> + </button>
            </div>
            {
              arrayBudget !== undefined && arrayBudget.map(({id, name}, key)=>{
                return (
                  <>
                    <div id={`${key}`}  onClick={()=>redirectToBudgetSelected(name) } className="mt-6 w-96 rounded-xl border p-6 text-center hover:text-blue-600 focus:text-blue-600">
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

export default Group

