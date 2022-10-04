import type { GetStaticPaths, GetServerSideProps, NextPage } from 'next'
import Layout from '../../../components/Layout'
import Sidebar from '../../../components/sidebar/Sidebar'



interface Props {
  budget: string;
}

// export const getStaticPaths = async () => {

//   return { 
//     paths: [{
//       param: {
//         budget: "a"
//       }
//     }],
//     fallback: false
//   }
// }

// export const getStaticProps = async (context:any) => {
//   const { budget } = context.query
  
//   return { 
//     props: { budget }
//   }
  
// }



const Home: NextPage<Props> = (props) => {
  const { budget:budgetName } = props
  console.log('sdfsdf', budgetName)
  return (

    <Layout>
      <Sidebar/>

    </Layout>

  )
}

export default Home


