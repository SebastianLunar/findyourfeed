import React from 'react'
import { Flex, Image, Text } from "@chakra-ui/react";
import { Rating } from "@material-ui/lab";
import { IoLocation } from "react-icons/io5";

const Place = ({ place }) => {
    if (place.name) 
    return (
        <Flex bg={"whiteAlpha.900"} px={4} py={2} mb={2} shadow="lg" direction={"column"} alignItems={"start"} justifyContent="space-between">
            <Flex justifyContent={"space-between"} width="full">
                <Flex direction={"column"} justifyContent={"start"} alignItems={"start"} width="full" px={2}>
                    <Flex alignItems={"center"} width={"full"} justifyContent={"space-between"}>
                        <Text textTransform={"capitalize"} fontSize={"lg"} fontWeight={"500"} isTruncated>
                            {place.name}
                        </Text>
                    </Flex>

                    <Flex alignItems={"center"} width={"full"}>
                        <Rating size="small" value={Number(place.rating)} readOnly />
                        <Text fontSize={"sm"} fontWeight={"500"} color={"gray.500"}>
                            {`(${place.num_reviews})`}
                        </Text>
                    </Flex>

                    <Text fontSize={"sm"} fontWeight={"500"} color={"gray.400"}>
                        {place.ranking}
                    </Text>

                    <Text fontSize={"sm"} fontWeight={"500"} color={"gray.600"}>
                        {place.open_now_text}
                    </Text>
                </Flex>
                <Image objectFit={"cover"} width={"120px"} height={"120px"} rounded="lg"
                    src={
                        place.photo
                            ? place.photo.images.large.url
                            : "https://explorelompoc.com/wp-content/uploads/2021/06/food_placeholder.jpg"
                    }
                />
            </Flex>

            {place?.address && (
                <Flex alignItems={"center"} width={"full"} px={1} my={2}>
                    <IoLocation fontSize={20} color="gray" />
                    <Text
                        isTruncated
                        fontSize={"small"}
                        fontWeight={500}
                        color={"gray.700"}
                        ml={1}
                    >
                        {place.address}
                    </Text>
                </Flex>
            )}
        </Flex>
    );
};

export default Place;