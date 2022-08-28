import { Box, Button, Flex, Spacer, Tag, Text, Icon } from "@chakra-ui/react";
import {HiCalendar} from "react-icons/hi"
import { Link } from "react-router-dom";
import dayjs from "dayjs"
import "dayjs/locale/es"

export function LaunchItem(launch) {
  return(
    <Box 
      bg="gray.100" 
      p={4} 
      m={4} 
      borderRadius="lg"
    >
      <Flex>
        <Text>
          Missions <strong>{launch.mission_name}</strong> ({launch.launch_year})
        </Text>
        <Spacer />
        <Tag p={2} colorScheme={launch.launch_success ? "green" : "red"}>
          {launch.launch_success ? "Success" : "Failure"}
        </Tag>
      </Flex>

      <Flex align="center" ml={1}>
        <Icon as={HiCalendar} color="gray.500" />
        <Text fontSize="sm" color="gray.500">
          {dayjs(launch.launch_date_local).locale("es").format("D MMMM, YYYY")}
        </Text>
      </Flex>

      <Link to={`/launch/${launch.flight_number}`}>
        <Button mt={2} colorScheme="purple">More Details</Button>
      </Link>
    </Box>
  )
}
