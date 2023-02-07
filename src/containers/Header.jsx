import { Flex, Input, InputGroup, InputRightElement, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react'
import { Rating } from '@material-ui/lab'
import { Autocomplete } from '@react-google-maps/api'
import React from 'react'
import { BiChevronDown, BiSearch, BiStar } from 'react-icons/bi'

const Header = ({ setType, setRatings, setCoordinates }) => {
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
        {/* <Autocomplete> */}
        <InputGroup
            width={"35vw"}
            shadow="lg"
        >
            <InputRightElement
                pointerEvents={"none"}
                children={<BiSearch color='gray' fontSize={20} />}
            />

            <Input
                type="text"
                placeholder="Search for"
                variant={'filled'}
                fontSize={18}
                bg={'white'}
                color={'gray.700'}
                _hover={{ bg: 'whiteAlpha.800' }}
                _focus={{ bg: 'whiteAlpha.800' }}
                _placeholder={{ color: 'gray.700' }}
            >
            </Input>
        </InputGroup>
        {/* </Autocomplete> */}
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
                    <BiStar fontSize={25} />
                    <MenuButton mx={2} transitions={'all 0.2s'} borderRadius={'md'}>
                        Choose Ratings
                    </MenuButton>

                    <MenuList>
                        <MenuItem
                            display={"flex"}
                            alignItems={"center"}
                            justifyContent="space-around"
                            onClick={() => setRatings("")}
                        >
                            <Text fontSize={20} fontWeight={500} color={"gray.700"}>
                                All Rates
                            </Text>
                        </MenuItem>

                        <MenuItem
                            display={"flex"}
                            alignItems={"center"}
                            justifyContent="space-around"
                            onClick={() => setRatings(2)}
                        >
                            <Text fontSize={20} fontWeight={500} color={"orange.500"}>
                                2.0
                            </Text>

                            <Rating size="small" value={2} readOnly />
                        </MenuItem>

                        <MenuItem
                            display={"flex"}
                            alignItems={"center"}
                            justifyContent="space-around"
                            onClick={() => setRatings(3)}
                        >
                            <Text fontSize={20} fontWeight={500} color={"orange.500"}>
                                3.0
                            </Text>

                            <Rating size="small" value={3} readOnly />
                        </MenuItem>

                        <MenuItem
                            display={"flex"}
                            alignItems={"center"}
                            justifyContent="space-around"
                            onClick={() => setRatings(4)}
                        >
                            <Text fontSize={20} fontWeight={500} color={"orange.500"}>
                                4.0
                            </Text>

                            <Rating size="small" value={4} readOnly />
                        </MenuItem>

                        <MenuItem
                            display={"flex"}
                            alignItems={"center"}
                            justifyContent="space-around"
                            onClick={() => setRatings(5)}
                        >
                            <Text fontSize={20} fontWeight={500} color={"orange.500"}>
                                5.0
                            </Text>

                            <Rating size="small" value={5} readOnly />
                        </MenuItem>
                    </MenuList>
                </Menu>
                <BiChevronDown fontSize={25} />
            </Flex>
        </Flex>
    </Flex>
}

export default Header