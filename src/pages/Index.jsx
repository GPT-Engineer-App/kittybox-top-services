import { Container, Text, VStack, Box, Heading, List, ListItem, ListIcon, Link } from "@chakra-ui/react";
import { FaCrown, FaKey, FaBan, FaVolumeMute, FaDiscord } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8}>
        <Heading as="h1" size="2xl">
          KittyBox.top
        </Heading>

        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Paslaugos
          </Heading>
          <List spacing={3}>
            <ListItem>
              <ListIcon as={FaCrown} color="yellow.500" />
              VIP - 1€
            </ListItem>
            <ListItem>
              <ListIcon as={FaCrown} color="yellow.500" />
              VIP+ - 2€
            </ListItem>
            <ListItem>
              <ListIcon as={FaCrown} color="yellow.500" />
              MVP - 3€
            </ListItem>
            <ListItem>
              <ListIcon as={FaCrown} color="yellow.500" />
              MVP+ - 4€
            </ListItem>
            <ListItem>
              <ListIcon as={FaCrown} color="yellow.500" />
              MVP++ - 5€
            </ListItem>
          </List>
        </Box>

        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Kitos Paslaugos
          </Heading>
          <List spacing={3}>
            <ListItem>
              <ListIcon as={FaBan} color="red.500" />
              Unban - 1€
            </ListItem>
            <ListItem>
              <ListIcon as={FaVolumeMute} color="blue.500" />
              Unmute - 0.50€
            </ListItem>
            <ListItem>
              <ListIcon as={FaKey} color="green.500" />
              /raktas - 2€
            </ListItem>
          </List>
        </Box>

        <Box>
          <Text>Savininkas: Lenvx</Text>
          <Text>Website Kūrėjas: sorybas</Text>
          <Text>
            Serverio Discord:{" "}
            <Link href="https://discord.gg/hb9VXJSC" isExternal color="teal.500">
              <ListIcon as={FaDiscord} color="teal.500" />
              https://discord.gg/hb9VXJSC
            </Link>
          </Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
