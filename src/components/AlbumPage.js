import React, {useState , useEffect } from 'react'
import { useParams } from 'react-router-dom';
import DisplaySong from './DisplaySong';
 import { Link } from 'react-router-dom';
 import ArtishsName from './ArtishsName';
import  ArtistDetails  from './ArtistDetails';

 const AlbumPage = () => {
    const {resId} = useParams();
    // console.log(resId);
    const [albumData , setAlbumData] = useState(null);

    const fetchSong = async() =>{
        const data = await fetch(`https://academics.newtonschool.co/api/v1/music/album/${resId}`, {
            headers: {
                'projectId': 'd5qpkle1fta5'
            }
        })
        // console.log(data)
        const json = await data.json();
        setAlbumData(json.data);
        // console.log(json.data);
    //      console.log(albumData.songs)
    // console.log(albumData.artists)
    }
    useEffect(()=>{
        fetchSong();
    },[])

    // const artist = albumData?.artists
   
  return (
    <div className='bg-black' >
       {/* <div className='flex flex-row-reverse text-blue-400 font-extrabold'>
      
      </div> */}
     <div> <h1  className='text-yellow-200  font-bold m-5 text-5xl max-h-64 md:text-7xl'>{albumData?.title}</h1></div>
           <div className='md:flex md:m-5'>
            <img className='m-10 rounded-lg' src={albumData?.image}/>
            <div>
            <p className='m-10 text-5xl text-white'>{albumData?.description}</p>
                <p className='m-10 text-3xl text-white'>Artist :  
                  {
                    albumData?.artists.map(artist => artist.name).join(', ')
                  }
                </p>
            </div>
          </div>
          <div className="flex flex-wrap justify-evenly">
            {
              albumData?.songs.map(song =>(
                <DisplaySong  key={song._id} song={song} />
            ))
            }
          </div>
          <div className="flex flex-wrap justify-evenly text-yellow-200">
            {
                albumData?.artists.map(artist =>(
                <Link to={"/artistdetails/" + artist._id}  key={artist._id} > <ArtishsName artish={artist}/></Link> 
                ))

            }
          </div>
      </div>
  )
}

export default AlbumPage;
//  <p>Artists: {song.artist.map(artist => artist.name).join(', ')}</p>