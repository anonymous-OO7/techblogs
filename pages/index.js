import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import {Categories , Layout, PostCard ,PostWidget} from '../components';
 
import {getPosts}  from '../services'






const Home = (props) => {

const [posts , setPosts] = useState([]);



async function asyncCall() {

  let response =  getPosts();

  response.then((res) =>{
    // console.log(res , "Result of fulfilled response");
    setPosts(res)
  }, (error) => {
    console.log(error , "ERRor");
  })
}

useEffect(() => {
  asyncCall();
},[]);



  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Blog App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>



      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 bg-gray-400'>

        <div className='lg:col-span-8 col-span-1'>
        {
          posts.map((post ,index) => {

            return(
              <PostCard post={post}  key={post.title}/>

              )
          }
          )
        }
        </div>



        <div className='lg:col-span-4 col-span-1'>

          <div className='lg:sticky relative top-8'>

          <PostWidget />
          <Categories/>

          </div>

        </div>


     
      </div>

 


    </div>
  )
}

export default Home



// export async function getStaticProps(){
//   const posts = (await getPosts()) || [];

//   return {
//     props:{posts}
//   }
//




//   const posts = [{title:"React Testing", excerpt: 'Learn React Testing'},
//   {title:"React App", excerpt: 'Learn React App'},
//   {title:"React  with tailwind", excerpt: 'Learn React with tailwind'}
// ]