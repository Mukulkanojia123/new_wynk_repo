import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import DisplaySong from './DisplaySong';

 const ArtistDetails = () => {
    const {resId} = useParams();
    const [detail , setDetails] = useState(null);


    console.log(resId)

    const fetchartist = async() =>{
            const data = await fetch(`https://academics.newtonschool.co/api/v1/music/artist/${resId}`, {
                headers: {
                    'projectId': 'd5qpkle1fta5'
                }
            })

            const json = await data.json();
            console.log(json.data);
            setDetails(json.data);
    }

    useEffect(()=>{
        fetchartist();
    },[]);
  return (
    <div  className='bg-black mt-0'>
         <div> <h1  className='text-yellow-200  font-bold m-5 max-h-64 text-7xl'>{detail?.name}</h1></div>
           <div className='md:flex md:m-5'>
            <img className='m-10 rounded-full' src={detail?.image}/>
            <div>
            <p className='m-10 text-5xl text-white'>{detail?.description}</p>
                <p className='m-10 text-3xl text-white'>language :  
                  {
                    detail?.languages
                    .map(language => language).join(', ')
                  }
                </p>
            </div>
          </div>
          <div className="flex flex-wrap justify-evenly">
            {
                detail && detail.songs.map((song) => (
                    <DisplaySong key={song._id} song={song} />
                ))
            }
          </div>
    </div>
  )
}
export default ArtistDetails;
