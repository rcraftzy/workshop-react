import { useState, useEffect } from "react";
import {LaunchItem} from "./LaunchItem";
import * as API from "../services/launches" ;
import { Heading } from "@chakra-ui/react";

function LaunchList(){
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    API.getAllLaunches().then(setLaunches).catch(console.log);
  }, []);

  return(
    <>
      <Heading align="center" as="h1" size="lg" m={4}>SpaceX Launches</Heading>
      {launches === 0 ? (<div>Loading...</div>) : (
        <section>
          {launches.map(launch => (
            <LaunchItem  
              key={launch.flight_number} 
              {...launch}
            />
          ))}
        </section>
      )}
    </>
  )
}
export default LaunchList;
