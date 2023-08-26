import React from 'react'
import { GenreMood } from './GenreMood'
import { Link } from 'react-router-dom'

export const GenreButton = () => {
  return (
    <div className='bg-black p-3 flex justify-evenly text-white font-bold'>
      <Link to={"/genre/excited"}>  <h1 className='hover:text-blue-600'>Excited</h1></Link>
      <Link to={"/genre/happy"}> <h1 className='hover:text-blue-600'>Happy</h1></Link>
      <Link to={"/genre/romantic"}> <h1 className='hover:text-blue-600'>Romantic</h1></Link>
      <Link to={"/genre/sad"}> <h1 className='hover:text-blue-600'>Sad</h1></Link>

    </div>
  )
}
