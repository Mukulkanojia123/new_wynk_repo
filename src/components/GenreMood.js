import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import DisplaySong from './DisplaySong';
import UserContext from './UserContext';

// let filterData = (userSearchText, genre) => {
//     if (!genre) {
//         return [];
//     }

//     let searchtext = userSearchText.toLowerCase();
//     return genre.filter((song) => {
//         let newsong = song?.title.toLowerCase();
//         return newsong.includes(searchtext);
//     });
// };

export const GenreMood = () => {
    const { resId } = useParams();
    const [genre, setGenre] = useState(null);
    const [filterMusic, setFilterMusic] = useState(null);
    const { userSearchText } = useContext(UserContext);
    console.log(userSearchText);

    const fetchgenre = async () => {
        const data = await fetch(`https://academics.newtonschool.co/api/v1/music/song?filter={"mood":"${resId}"}`, {
            headers: {
                'projectId': 'd5qpkle1fta5'
            }
        });

        const json = await data.json();
        // console.log(json.data);
        setGenre(json.data);
        setFilterMusic(json.data);
    };

    // filter search item
    // useEffect(() => {
    //     if (genre) {
    //         let data = filterData(userSearchText, genre);
    //         setFilterMusic(data);
    //     }
    // }, [userSearchText, genre]);

    useEffect(() => {
        fetchgenre();
    }, [resId]);

    return (
        <div className="flex flex-wrap justify-evenly">
            {filterMusic === null ? (
                <h1>Loading...</h1>
            ) : filterMusic.length === 0 ? (
                <h1 className='text-white font-bold max-h-40'>NOT FOUND...........!!!!!</h1>
            ) : (
                filterMusic.map((song) => (
                    <DisplaySong key={song._id} song={song} />
                ))
            )}
        </div>
    );
};
