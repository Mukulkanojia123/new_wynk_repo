import React, { useState, useEffect, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faStar } from "@fortawesome/free-solid-svg-icons";
import UserContext from './UserContext';


const DisplaySong = ({ song }) => {
    const [songPlay, setSongPlay] = useState(false);
    const [audio] = useState(new Audio(song.audio_url))
    const { favList, setFav } = useContext(UserContext);
    const [star, setStar] = useState(true);
    // const token = localStorage.getItem("jwtToken");

    useEffect(() => {
        if (songPlay) {
            audio.play();
        } else {
            audio.pause();
        }
    }, [songPlay]);
    const handlePlay = () => {
        setSongPlay(!songPlay)
    };
    //   console.log(song)

    const handelFavourite = () => {
        // const songimg = song.thumbnail;
        // const title = song.title;
        // const id = song._id;
        // const url = song.audio_url
        // const temp = [...favList, {img:{songimg},title:{title},id:{id},url:{url}}];
        // const temp = [...favList, song];
        // setFav(temp);
        // console.log(temp);
        const songId = song._id;
        const temp = favList.filter((fav) => fav._id !== songId);
        if (temp.length === favList.length) {
            favList.push(song);
            setStar(false)
        }else{
        setFav(temp);
        setStar(true);
        }
            // console.log(favList)
            // console.log(temp);
    }
    return (
        <div className="m-4 p-4 w-[200px] rounded-lg  hover:shadow-white" >
            <img className="rounded-lg" src={song.thumbnail} alt={song.title} />
            <div>
                <h2 className="font-bold py-4 text-lg text-yellow-200" >{song.title}</h2>
                <div>
                    {
                        star ?
                        (<FontAwesomeIcon icon={faStar} className="font-semibold text-yellow-200 cursor-pointer" onClick={handelFavourite} 
                        />) :( 
                        <FontAwesomeIcon icon={faStar} className="font-semibold text-red-600 cursor-pointer" onClick={handelFavourite}
                         />)
                    }
                    
                    

                </div>
            </div>
            <div className="flex justify-center items-center">
                <button onClick={handlePlay} className="px-4 py-2">
                    {songPlay ? <FontAwesomeIcon icon={faPause} className="font-semibold text-yellow-200" /> : <FontAwesomeIcon icon={faPlay} className="font-semibold text-yellow-200" />}
                </button>
            </div>


        </div>
    )
}
export default DisplaySong;
