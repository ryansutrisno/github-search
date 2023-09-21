import { Box, Flex, useColorModeValue, Text, Heading } from "@chakra-ui/react";
import DarkModeSwitch from "../DarkMode/DarkModeSwitch";

export default function Navbar() {
  return (
    <Box boxShadow="lg" bg={useColorModeValue("gray.100", "gray.900")} px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Heading size="md">
          <Text>Github Search</Text>
        </Heading>
        <DarkModeSwitch />
      </Flex>
    </Box>
  );
}
