import React, { useContext } from 'react';
import { useEffect, useState } from "react";
import DisplayAlbum from "./DisplayAlbum";
import DisplaySong from "./DisplaySong";
import { Shimmer } from "./Shimmer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeftLong, faRightLong } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import UserContext from './UserContext';
import Footer from './Footer';

let filterData = (userSearchText, ListOfMusic) => {
    if (!ListOfMusic) {
        return [];
    }

    let searchtext = userSearchText.toLowerCase();
    return ListOfMusic.filter((song) => {
        let newsong = song?.title.toLowerCase();

        return newsong.includes(searchtext);
    });
}


const Body = () => {

    const [ListOfMusic, setListOfMusic] = useState(null);
    const [filterMusic, setFilterMusic] = useState(null);
    const [ListOfAlbum, setListOfAlbum] = useState(null);
    const [currPage, setCurrPage] = useState(1);

    const { userSearchText } = useContext(UserContext);
    


    const getListOfMusic = async () => {
        const data = await fetch(`https://academics.newtonschool.co/api/v1/music/song?page=${currPage}&limit=8`, {
            headers: {
                'projectId': 'd5qpkle1fta5'
            }
        })
        const json = await data.json();
        // console.log(json.data);
        setListOfMusic(json.data);
        // setFilterMusic(json.data);

    }

    const getListOfAlbum = async () => {
        const data = await fetch(`https://academics.newtonschool.co/api/v1/music/album?page=${currPage}&limit=8`, {
            headers: {
                'projectId': 'd5qpkle1fta5'
            }
        })

        const json = await data.json();
        // console.log(json.data);
        setListOfAlbum(json.data);
    }
    useEffect(() => {
        let data = filterData(userSearchText, ListOfMusic);
        setFilterMusic(data);
    }, [userSearchText]);

    useEffect(() => {
        getListOfMusic();
        getListOfAlbum();
    }, [currPage])



    const handleNextpage = () => {
        setCurrPage(currPage + 1);
        // console.log(currPage);
    }
    const handlePreviouspage = () => {
        if (currPage > 1) {
            setCurrPage(currPage - 1);

        }

    }

    if (!ListOfAlbum && !ListOfMusic) {
        return <Shimmer />
    }

    return (
        <div className='bg-black'>
            {/* <GenreButton/> */}
            <div className='flex justify-evenly'>
                <h1 className='text-5xl text-white'>SONGS</h1>
            </div>
            <div className="flex flex-wrap justify-evenly">
                {
                    ListOfMusic.length === 0 ? (
                        <h1 className='text-white font-bold max-h-40'>NOT FOUND...........!!!!!</h1>
                    ) : (
                        ListOfMusic && ListOfMusic.map((song) => (
                            <DisplaySong key={song._id} song={song} />
                        ))
                    )
                }

            </div>
            <div className='flex justify-evenly'>
                <h1 className='text-5xl text-white'>ALBUM</h1>
            </div>
            <div className="flex flex-wrap justify-evenly">
                {
                    ListOfAlbum && ListOfAlbum.map(album => (
                        <Link to={"/album/" + album._id} key={album._id} > <DisplayAlbum album={album} /></Link>
                    ))
                }

            </div>
            <div className='bg-black flex items-center justify-center'>
                <button className='bg-black shadow-xl rounded-lg border border-solid-white p-3 hover:bg-blue-600 transition' onClick={handlePreviouspage}><FontAwesomeIcon icon={faLeftLong} className='text-white' /></button>
                <h1 className='p-5 font-bold text-base text-white'>{currPage}</h1>
                <button className='bg-black shadow-lg rounded-lg border border-solid-white p-3 hover:bg-blue-600 transition' onClick={handleNextpage}><FontAwesomeIcon icon={faRightLong} className='text-white'/></button>
            </div>
            <Footer/>
        </div>
    )
}

export default Body;