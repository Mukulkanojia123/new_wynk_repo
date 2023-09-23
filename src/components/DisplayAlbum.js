const DisplayAlbum = ({album}) => {
    return (
        <div className="m-4 p-4 w-[200px] rounded-lg text-yellow-200 hover:shadow-lg">
            <img className="rounded-lg" src={album.image} alt={album.title} />
            <h2 className="font-bold py-4 text-lg">{album.title}</h2>

        </div>
    )

}

export default DisplayAlbum;