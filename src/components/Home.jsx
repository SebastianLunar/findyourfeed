import { Flex } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Header from "../containers/Header"
import List from "../containers/List"
import Place from "../containers/Place"

const places = [
    {name: 'place1'}
]

const Home = () => {
    const [coordinates, setCoordinates] = useState({lat: 0, lng: 0})
    const [type, setType] = useState('restaurants')
    const [ratings, setRatings] = useState("")
    const [isLoading, setIsLoading] = useState(true)

    
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
            console.log(latitude, longitude)
        })
        
    }, [])

    return <Flex
        justifyContent={"center"}
        alignItems={"center"}
        width={"100vw"}
        height={"100vh"}
        maxWidth={"100vw"}
        maxHeight={"100vh"}
        position={"relative"}
    >
      <Header 
        type={setType}
        setCoordinates={setCoordinates}
        setRatings={setRatings}
      />
      <List places= {places} isLoading={isLoading}/>
    </Flex>
}
export default Home