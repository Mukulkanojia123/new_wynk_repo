import React, { useEffect } from 'react'

 const Buttons = () => {

    const fetchDetails = async() =>{
            const data = await fetch('https://academics.newtonschool.co/api/v1/music/song?filter={"mood":"sad"}', {
              headers: {
                  'projectId': 'd5qpkle1fta5'
              }
          })
            const json = await data.json();
            // console.log(json.data)
    }
    useEffect(() =>{
        fetchDetails()
    },[])
  return (
    <div>SideBar</div>
  )
}

export default Buttons;
