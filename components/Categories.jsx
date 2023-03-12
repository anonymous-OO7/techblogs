import React ,{useState , useEffect} from 'react'
import Link from 'next/link'

import { getCategories } from '../services'


const Categories = () => {

  const[categories,setCategories] = useState([]);



  useEffect(() => {
    getCategories().then((newCategories) => {

      console.log(newCategories,"CATERATGHJ");
      setCategories(newCategories);

    })
  },[])



  return (
   
    <div className='bg-white rounded-lg shadow-lg p-8 mb-8' >

    <h3 className='text-xl mb-8 font-semibold border-b pb-4'>  
      Categroies
    </h3>


    {
      categories.map((category) => {

        return(
          <Link 
          key={category.slug}
          href={`/category/${category.slug}`}
          >
  
            <span className='cursor-pointer block pb-3 mb-3 '>
              {category.name}
  
            </span>
          </Link>
        )

      })
    }

    </div>
  )
}

export default Categories