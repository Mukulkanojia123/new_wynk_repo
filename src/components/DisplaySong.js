import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";


const DisplaySong = ({ song }) => {
    const [songPlay, setSongPlay] = useState(false);
    const [audio] = useState(new Audio(song.audio_url))

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
    return (
        <div className="m-4 p-4 w-[350px] rounded-lg bg-gray-100 hover:bg-gray-200" >
            <img className="rounded-lg" src={song.thumbnail} alt={song.title} />
            <h2 className="font-bold py-4 text-lg" >{song.title}</h2>
            {/* <h2> Artist :-{song.artist[0].name}</h2> */}
            <div className="flex justify-center items-center">
                <button onClick={handlePlay} className="px-4 py-2">
                    {songPlay ? <FontAwesomeIcon icon={faPause} className="font-semibold" /> : <FontAwesomeIcon icon={faPlay} className="font-semibold" />}
                </button>
            </div>


        </div>
    )
}
export default DisplaySong;
// {listOfMusic.map(song => (
//     <li key={song.id}>
//       <img src={song.thumbnail} alt={song.title} />
//       {song.title}
//     </li>
//   ))
//   }