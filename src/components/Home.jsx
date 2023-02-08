import { Flex } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Header from "../containers/Header"
import List from "../containers/List"
import Place from "../containers/Place"
import { GetPlaces } from '../helpers/GetPlaces'

const Home = () => {
    const [places, setPlaces] = useState([])
    const [filtered, setFiltered] = useState([])
    const [coordinates, setCoordinates] = useState({})
    const [ratings, setRatings] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [bounds, setBounds] = useState(null)

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
            console.log(latitude, longitude)
            setCoordinates({ lat: latitude, lon: longitude })
            console.log(coordinates)
            setBounds({
                ne:
                {
                    lat: coordinates?.lat + 0.514,
                    lon: coordinates?.lon + 0.905
                },
                sw:
                {
                    lat: coordinates?.lat - 0.514,
                    lon: coordinates?.lon - 0.905
                },
            })
        })
    }, [])

    const handleLocation = () =>{
        navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
            console.log(latitude, longitude)
            setCoordinates({ lat: latitude, lon: longitude })
            console.log(coordinates)
            setBounds({
                ne:
                {
                    lat: coordinates?.lat + 0.514,
                    lon: coordinates?.lon + 0.905
                },
                sw:
                {
                    lat: coordinates?.lat - 0.514,
                    lon: coordinates?.lon - 0.905
                },
            })
        })
    }

    useEffect(() => {
        setIsLoading(true)
        console.log(bounds)
        GetPlaces(bounds?.sw, bounds?.ne).then((data) => {
            console.log(data)
            setPlaces(data)
            setIsLoading(false)
        })
    }, [coordinates, bounds])

    useEffect(() => {
        const filteredData = places?.filter((place) => place.rating == ratings)
        setFiltered(filteredData)
    }, [ratings])


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
            setCoordinates={setCoordinates}
            setRatings={setRatings}
        />
        <List places={filtered.length ? filtered : places} isLoading={isLoading} />
    </Flex>
}
export default Home