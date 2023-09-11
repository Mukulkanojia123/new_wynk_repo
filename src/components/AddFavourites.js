import React,{useContext } from 'react'
import UserContext from './UserContext';
// import FavCard from './favCard';
import DisplaySong from './DisplaySong';

const AddFavourites = () => {

    const { favList } = useContext(UserContext);
    console.log(favList);

  return favList.length === 0?(<div>

                <h1 className='text-yellow-300  font-bold m-5 max-h-64 text-5xl'>No Card Add to favourite yet....!!</h1>
  
  </div>):(
    <div className="flex flex-wrap justify-evenly">
        {
            favList.map((song)=>(
                <DisplaySong key={song._id} song={song} />

            ))
        }
    </div>
  )
}

export default AddFavourites