import React, { useContext } from 'react';
import { useEffect, useState } from "react";
import DisplayAlbum from "./DisplayAlbum";
import DisplaySong from "./DisplaySong";
import { Shimmer } from "./Shimmer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeftLong, faRightLong } from "@fortawesome/free-solid-svg-icons";
import ArtishsName from './ArtishsName';
import { Link } from 'react-router-dom';
import UserContext from './UserContext';
import Footer from './Footer';

// let filterData = (userSearchText, ListOfMusic) => {
//     if (!ListOfMusic) {
//         return [];
//     }

//     let searchtext = userSearchText.toLowerCase();
//     return ListOfMusic.filter((song) => {
//         let newsong = song?.title.toLowerCase();

//         return newsong.includes(searchtext);
//     });
// }


const Body = () => {

    const [ListOfMusic, setListOfMusic] = useState(null);
    const [newRelease, setNewRelease] = useState(null);
    const [toptrand, setTopTrand] = useState(null);
    const [ListOfAlbum, setListOfAlbum] = useState(null);
    const [currPage, setCurrPage] = useState(1);





    const getListOfMusic = async () => {
        const data = await fetch(`https://academics.newtonschool.co/api/v1/music/song?page=${currPage}&limit=15`, {
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
        const data = await fetch(`https://academics.newtonschool.co/api/v1/music/album?page=${currPage}&limit=10`, {
            headers: {
                'projectId': 'd5qpkle1fta5'
            }
        })

        const json = await data.json();
        // console.log(json.data);
        setListOfAlbum(json.data);
    }





    useEffect(() => {
        getListOfMusic();
        getListOfAlbum();
        // getListOfArtist()

    }, [currPage])

    useEffect(() => {
        ListOfMusic && funfilter()
    }, [ListOfMusic])


    function funfilter() {
        //  if(ListOfMusic){
        let toptrend = ListOfMusic.filter((s) => (
            s.mood === "excited"
        ))
        setNewRelease(toptrend)
        //  console.log(toptrend)

        let romanticSong = ListOfMusic.filter((s) => (
            s.mood === "romantic"
        ))
        setTopTrand(romanticSong);
        //  }

    }

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
            <div className='ml-10'>
                <h1 className='md:text-5xl text-2xl text-white'>New Release</h1>
            </div>
            {/**new Release */}
            <div className="flex flex-wrap justify-evenly">
                {

                    newRelease && newRelease.map((song) => (
                        <DisplaySong key={song._id} song={song} />
                    ))

                }

            </div>
            <div className='ml-10'>
                <h1 className='md:text-5xl text-2xl text-white'>top trending</h1>
            </div>
            {/**top trend */}
            <div className="flex flex-wrap justify-evenly">
                {

                    toptrand && toptrand.map((song) => (
                        <DisplaySong key={song._id} song={song} />
                    ))

                }

            </div>
            <div className='ml-10'>
                <h1 className='md:text-5xl text-2xl text-white'>Artists</h1>
            </div>

            <div className="flex flex-wrap justify-evenly text-white">
                {
                    ListOfMusic?.map(song => (
                        <Link to={"/artistdetails/" + song.artist[0]._id} key={song._id} > <ArtishsName artish={song.artist[0]} /></Link>
                    ))

                }
            </div>

            <div className='ml-10'>
                <h1 className='md:text-5xl text-2xl text-white'>ALBUM</h1>
            </div>
            <div className="flex flex-wrap justify-evenly">
                {
                    ListOfAlbum && ListOfAlbum.map(album => (
                        <Link to={"/album/" + album._id} key={album._id} > <DisplayAlbum album={album} /></Link>
                    ))
                }

            </div>
            <div className='bg-black flex items-center justify-center'>
                <button className='bg-black shadow-xl rounded-lg border border-solid-white p-3 hover:bg-blue-600 transition duration-400' onClick={handlePreviouspage}><FontAwesomeIcon icon={faLeftLong} className='text-white' /></button>
                <h1 className='p-5 font-bold text-base text-white'>{currPage}</h1>
                <button className='bg-black shadow-lg rounded-lg border border-solid-white p-3 hover:bg-blue-600 transition duration-400' onClick={handleNextpage}><FontAwesomeIcon icon={faRightLong} className='text-white' /></button>
            </div>
            <Footer />
        </div>
    )
}

export default Body;