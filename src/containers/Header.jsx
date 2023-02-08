import { Flex, Input, InputGroup, InputRightElement, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react'
import { Rating } from '@material-ui/lab'
import React, { useState } from 'react'
import { BiChevronDown, BiCurrentLocation, BiLogOut, BiSearch, BiStar } from 'react-icons/bi'
import axios from 'axios'

const url = "https://opentripmap-places-v1.p.rapidapi.com/en/places/geoname";

const Header = ({ setRatings, setCoordinates }) => {
    const [busqueda, setBusqueda] = useState("")

    const handleLocation = () => {
        // navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
        //     setCoordinates({ lat: latitude, lon: longitude })
        // })
    }

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
            console.log(data);
            setCoordinates({ lat: data.lat, lon: data.lon })
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
                    <BiCurrentLocation fontSize={25} onClick={handleLocation()} />
                    <MenuButton mx={2} transitions={'all 0.2s'} borderRadius={'md'} onClick={handleLocation()}>
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

                <BiLogOut fontSize={25} />
            </Flex>
        </Flex>
    </Flex>
}

export default Header