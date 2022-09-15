import type { NextPage } from 'next'
import Link from 'next/link'
import { useContext, useEffect } from 'react'
import { postApi } from '../../../../lib/api'
import { getCookie } from '../../../../lib/cookie'
import CardAddItem from '../../../components/CardAddItem'
import Layout from '../../../components/Layout'
import { AuthContext } from '../../../context/auth'

const Home: NextPage = () => {


  return (
    <Layout>
    <div className="flex justify-center">
      <div  className="container bg-gray-200 w-xl p-5">
        <div className="flex">
          <input type="text" placeholder="Search" className="rounded-lg" />
          <button type="button" className="">Search</button>

          <Link href="/new">
            <a>New Notes</a>
          </Link>

        </div>
      </div>
    </div>
    
    <div className="flex justify-center">
      <div  className="default-grid">
        <CardAddItem key={1} notes={{id: 1, title:'total budget', description:'2420.10'}} />
      </div>
    </div>
  </Layout>
  )
}

export default Home


