import "./App.css";
import { Animals } from "./Component/Animals";
import { Data } from "./Data";
import { Box, Text, Image, Link, HStack } from "@chakra-ui/react";
import livestock from "./icons/livestock.png";

function App() {
  console.log("data:", Data);

  return (
    <Box background={"rgb(100, 182, 196)"}>
      <HStack
        justifyContent="center"
        alignItems="center"
        p={3}
        backgroundColor="teal"
      >
        <Image src={livestock} alt="animals" className='animalIcon'/>
        <Text color="beige" fontWeight={"bold"} className='title'>
          {/* Animal Husbandry */}
          पशुपालन 
        </Text>
      </HStack>
      <Box textAlign={"center"} p={2} background="skyblue">
        <Link
          href="https://www.toppr.com/ask/content/story/amp/animal-husbandry-66241/"
          target={"_blank"}
          p={3}
          className="link"
        >
          {/* To know more about animal husbandry 👉🏻Click Here👈🏻 */}
          पशुपालन के बारे में अधिक जानने के लिए 👉🏻यहां क्लिक करें👈🏻
        </Link>
      </Box>
      <Box
        textAlign={"center"}
        margin="auto"
        marginTop="20px"
        width="90%"
        display="grid"
        gridTemplateRows="auto"
        className="data"
      >
        {Data.map((e) => {
          return (
            <div key={e.Id}>
              <Animals name={e.Name} link={e.Url} />
            </div>
          );
        })}
      </Box>
    </Box>
  );
}

export default App;
