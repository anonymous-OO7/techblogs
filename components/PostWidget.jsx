import React, { useEffect, useState } from 'react'
import moment from 'moment'
import Link from 'next/link'



import { getRecentPost ,getSimilarPosts } from '../services'




const PostWidget = ({categories , slug}) => {

  const [relatedPosts , setRelatedPosts] = useState([]);


useEffect(()=> {

  if(slug){
    getSimilarPosts(categories , slug).then((result) => {
      // console.log(result , "result of categories similarpost");
      setRelatedPosts(result);
    }).catch((error) => {

      console.log(error , "Error of get similar posts");

    })
  }else{
    getRecentPost().then((result) => {
      setRelatedPosts(result);
    }).catch((error)=> {

      console.log(error , "Error of get recentpost");

    })
  }

},[slug]) 


  return (
    <div className='bg-white rounded-lg shadow-lg p-8 mb-8' >

      <h3 className='text-xl mb-8 font-semibold border-b pb-4'>  
        {slug ? 'Related_post' : 'Recent_post'}
      </h3>
      {
        relatedPosts.map((post) => {

          console.log(post , "POST IN MAP");

          return(
            <div key={post.title} className='flex items-center w-full'>
            <div className='w-16 flex-none '>

              <img height="60px" width="60px" src={post.featuredImage.url} alt={post.title}  className="align-middle rounded-full"/>

            </div>

            <div className='flex-grow ml-4'>

              <p className='text-grey-500 font-xs'>
                {moment(post.createdAt).format('MMM DD , YYYY')}
              </p>

              <Link href={`/post/${post.slug}`} key={post.title} className='text-md' >
                {post.title}
              </Link>

            </div>
          </div>
          
          )
     
        })
      }
    </div>
  )
}

export default PostWidget