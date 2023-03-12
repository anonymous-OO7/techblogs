import React from 'react'
import Link from 'next/link';
import Calender from '../public/calender.svg';
import moment from 'moment';



    
const PostCard = ({post}) => {

  const postTemp = post.node;
  console.log(post, "post");


  return (
    <div className='bg-white  shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-18'>

      <div className='relative overflow-hidden shadow-md pb-80 mb-6'>

          <img src={postTemp.featuredImage.url} alt={postTemp.title}  className="object-top absolute  h-80 w-fill object-cover shadow-lg rounded-t-lg  lg:rounded-lg"  />

      </div>

      <h1 className="transition duration-700 text-center mb-8 cursor-pointer 
        hover:text-pink-600 text-3xl font-semibold 
      ">
        <Link href={`/post/${postTemp.slug}`}>
          {postTemp.title}
        </Link>
      </h1>

      <div className='block lg:flex text-center items-center justify-center mb-8 w-full'>

        <div className='flex items-center justify-center mb-8  lg:mb-0 w-full lg:width-auto  mr-8'>
          <img  src={postTemp.author.photo.url} className='align-middle rounded-full' height="30px" width="30px" alt={postTemp.author.name }>
          </img>
          <p className=" inline align-middle text-gray-700 ml-2 text-lg">{postTemp.author.name}</p>
        </div>

        <div className='font-medium text-gray-700'>

          {/* <Calender/> */}
          
          <span>
            {moment(postTemp.createdAt).format('MMM DD,YYYY')}
            {/* {postTemp.createdAt} */}
          </span>

        </div>
      </div>

      <p className='text-center text-lg text-gray-700 font-normal px-4 lg:px-20 mb-8'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam incidunt necessitatibus iste debitis nobis recusandae modi quas aspernatur optio ut.</p>

        <div className='text-center'>

          <Link href={`/post/${postTemp.slug}`}>
            <span className='transition duration-700  transform hover:-translate-y-1 inline-block bg-pink-600 font-medium rounded-full text-white px-8 py-2 cursor-pointer'>
               Continue reading
            </span>
          </Link>
          
        </div>


      </div>

    // {/* </div> */}
  )
}

export default PostCard