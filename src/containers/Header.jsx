import { Flex, Input, InputGroup, InputRightElement, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react'
import { Rating } from '@material-ui/lab'
import React, { useState } from 'react'
import { BiChevronDown, BiCurrentLocation, BiHistory, BiLogOut, BiSearch, BiStar } from 'react-icons/bi'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { actionLogoutAsync } from '../redux/actions/loginActions'
import History from './History'

const Header = ({ setRatings, setCoordinates }) => {
    const dispatch = useDispatch()
    const [busqueda, setBusqueda] = useState("")
    const [busquedas, setBusquedas] = useState([])

    const handleInputChange = ({ target }) => {
        setBusqueda(target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const options = {
            method: 'GET',
            url: 'https://opentripmap-places-v1.p.rapidapi.com/en/places/geoname',
            params: { name: busqueda },
            headers: {
                'X-RapidAPI-Key': '8f44de0108msh5d779779a81ce47p16771bjsn2682715a0b03',
                'X-RapidAPI-Host': 'opentripmap-places-v1.p.rapidapi.com'
            }
        };
        axios.request(options).then(function ({ data }) {
            setCoordinates({ lat: data.lat, lon: data.lon })
            busquedas.push(data)
        }).catch(function (error) {
            console.error(error);
        });
    }

    return <Flex
        position="absolute"
        top="0"
        left="0"
        width="full"
        px={4}
        py={2}
        zIndex={101}
        justifyContent="space-between"
    >
        <InputGroup
            width={"35vw"}
            shadow="lg"
        >
            <InputRightElement
                pointerEvents={"none"}
                children={<BiSearch color='gray' fontSize={20} />}
            />
            <form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    placeholder="Type your city"
                    variant={'filled'}
                    fontSize={18}
                    bg={'white'}
                    color={'gray.700'}
                    _hover={{ bg: 'whiteAlpha.800' }}
                    _focus={{ bg: 'whiteAlpha.800' }}
                    _placeholder={{ color: 'gray.700' }}
                    onChange={handleInputChange}
                >
                </Input>
            </form>
        </InputGroup>
        <Flex
            alignItems={'center'}
            justifyContent={"center"}
        >
            <Flex
                alignItems={'center'}
                justifyContent={"center"}
                px={4}
                py={2}
                bg={'white'}
                rounded={'full'}
                ml={4}
                shadow="lg"
                cursor={"pointer"}
            >
                <Menu>
                    <BiCurrentLocation fontSize={25} onClick={() =>
                        navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
                            setCoordinates({ lat: latitude, lon: longitude })
                        })
                    } />
                    <MenuButton mx={2} transitions={'all 0.2s'} borderRadius={'md'} onClick={() =>
                        navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
                            setCoordinates({ lat: latitude, lon: longitude })
                        })
                    }>
                        Track my Location
                    </MenuButton>

                    <BiStar fontSize={25} />
                    <MenuButton mx={2} transitions={'all 0.2s'} borderRadius={'md'}>
                        Choose Ratings
                    </MenuButton>

                    <MenuList>
                        <MenuItem display={"flex"} alignItems={"center"} justifyContent="space-around" onClick={() => setRatings("")}>
                            <Text fontSize={20} fontWeight={500} color={"gray.700"}>
                                All Rates
                            </Text>
                        </MenuItem>

                        <MenuItem display={"flex"} alignItems={"center"} justifyContent="space-around" onClick={() => setRatings(2)}>
                            <Text fontSize={20} fontWeight={500} color={"orange.500"}>
                                2.0
                            </Text>
                            <Rating size="small" value={2} readOnly />
                        </MenuItem>

                        <MenuItem display={"flex"} alignItems={"center"} justifyContent="space-around" onClick={() => setRatings(3)}>
                            <Text fontSize={20} fontWeight={500} color={"orange.500"}>
                                3.0
                            </Text>
                            <Rating size="small" value={3} readOnly />
                        </MenuItem>

                        <MenuItem display={"flex"} alignItems={"center"} justifyContent="space-around" onClick={() => setRatings(4)}>
                            <Text fontSize={20} fontWeight={500} color={"orange.500"}>
                                4.0
                            </Text>
                            <Rating size="small" value={4} readOnly />
                        </MenuItem>

                        <MenuItem display={"flex"} alignItems={"center"} justifyContent="space-around" onClick={() => setRatings(5)}>
                            <Text fontSize={20} fontWeight={500} color={"orange.500"}>
                                5.0
                            </Text>
                            <Rating size="small" value={5} readOnly />
                        </MenuItem>
                    </MenuList>
                </Menu>
                <BiChevronDown fontSize={25} />

                <BiLogOut fontSize={25}
                    onClick={() => dispatch(actionLogoutAsync())}
                />
            </Flex>
        </Flex>
        <Flex
            direction={"column"}
            bg={"whiteAlpha.900"}
            width={"25vw"}
            height="50vh"
            position={"fixed"}
            right={0}
            bottom={0}
            zIndex={1}
            overflow="hidden"
            px={2}
        >
            <Flex justifyContent={"center"} alignItems={"center"} py={2}>
                <BiHistory fontSize={25} />
                <Text fontSize={20} fontWeight={500} color={"gray.700"}>
                    Search history
                </Text>
            </Flex>
            <Flex flex={1} overflowY={"scroll"} direction={"column"}>
                {busquedas &&
                    busquedas.map((busqueda, i) => <History busqueda={busqueda} key={i} />)}
            </Flex>
        </Flex>
    </Flex>
}

export default Header