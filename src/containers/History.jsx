import React from 'react'
import { Flex, Text } from "@chakra-ui/react";

const History = ({ busqueda }) => {
    return (
        <Flex bg={"whiteAlpha.900"} px={4} py={2} mb={2} shadow="lg" direction={"column"} alignItems={"end"} justifyContent="space-between">
            <Flex justifyContent={"space-between"} width="full">
                <Flex direction={"column"} justifyContent={"start"} alignItems={"start"} width="full" px={2}>
                    <Flex alignItems={"center"} width={"full"} justifyContent={"space-between"}>
                        <Text textTransform={"capitalize"} fontSize={"lg"} fontWeight={"500"} isTruncated>
                            {busqueda.name} , {busqueda.country}
                        </Text>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default History;