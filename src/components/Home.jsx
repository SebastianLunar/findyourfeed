import React, { useEffect } from 'react'
import Header from "../containers/Header"
import List from "../containers/List"
import Map from "../containers/Map"
import Place from "../containers/Place"

const Home = () => {
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
            console.log(latitude, longitude)
        })
        
    }, [])

    return (
        <div>Home</div>
    )
}
export default Home