import { Flex } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Header from "../containers/Header"
import List from "../containers/List"
import { GetPlaces } from '../helpers/GetPlaces'

const Home = () => {
    const [places, setPlaces] = useState([])
    const [filtered, setFiltered] = useState([])
    const [coordinates, setCoordinates] = useState({})
    const [ratings, setRatings] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [bounds, setBounds] = useState(null)

    useEffect(() => {
        setIsLoading(true)
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
    }, [coordinates])
    useEffect(() => {
        GetPlaces(bounds?.sw, bounds?.ne).then((data) => {
            setPlaces(data)
            setIsLoading(false)
        })
    }, [bounds])

    useEffect(() => {
        const filteredData = places?.filter((place) => place.rating == ratings)
        setFiltered(filteredData)
    }, [ratings])


    return <Flex justifyContent={"center"} alignItems={"center"} width={"100vw"} height={"100vh"} maxWidth={"100vw"} maxHeight={"100vh"} position={"relative"}
    bgImage="url('https://www.aviatur.com/source/contenidos/blog/gastronomia-al-viajar.jpg')" bgSize={"cover"}>
        <Header
            setCoordinates={setCoordinates}
            setRatings={setRatings}
        />
        <List places={filtered.length ? filtered : places} isLoading={isLoading} />
    </Flex>
}
export default Home