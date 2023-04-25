import React from "react";
import { Box, Button, Heading, Select, Stack } from "@chakra-ui/react";

const Translator = () => {
  const [val, setip] = React.useState("");
  const [opval, setop] = React.useState("oh");
  const handleip = (e) => {
    setip(e.target.value);
    console.log("val", val);
  };
  return (
    <Box>
      <Heading
        margin="auto"
        marginTop={'10px'}
        p={5}
        color="teal.400"
        border="3px dashed teal"
        width={"fit-content"}
      >
        {/* TRANSLATOR 🔁 */}
        अनुवादक 🔁
      </Heading>
      <Box
        rounded="lg"
        width={"fit-content"}
        margin="auto"
        marginTop="5%"
        border={"2px solid teal"}
        p={5}
        boxShadow="teal 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
      >
        <Stack
          direction={{ base: "column", md: "row" }}
          justifyContent="center"
          // alignItems="center"
          margin="auto"
        >
          <Box>
            <Select
              id="input-select"
              variant="filled"
              bg="tomato"
              borderColor="tomato"
              size="lg"
              marginTop="20px"
            >
              <option value="">Select Language</option>
              <option value="en" selected>
                English
              </option>
              <option value="ar">Arabic</option>
              <option value="az">Azerbaijani</option>
              <option value="zh">Chinese</option>
              <option value="cs">Czech</option>
              <option value="da">Dutch</option>
              <option value="eo">Esperanto</option>
              <option value="fi">Finnish</option>
              <option value="de">German</option>
              <option value="el">Greek</option>
              <option value="he">Hebrew</option>
              <option value="hi">Hindi</option>
              <option value="hu">Hungarian</option>
              <option value="id">Indonesian</option>
              <option value="ga">Irish</option>
              <option value="it">Italian</option>
              <option value="ja">Japanese</option>
              <option value="ko">Korean</option>
              <option value="fa">Persian</option>
              <option value="pl">Polish</option>
              <option value="pt">Portuguese</option>
              <option value="ru">Russian</option>
              <option value="sk">Slovak</option>
              <option value="es">Spanish</option>
              <option value="sv">Swedish</option>
              <option value="tr">Turkish</option>
              <option value="uk">Ukranian</option>
            </Select>
            <br></br>
            <textarea
              focusbordercolor="tomato"
              // placeholder="✍️Enter Text..."
              placeholder="✍️ट्रांसलेट करने वाला वाक्य लिखें..."
              variant="filled"
              name="input-text"
              id="input-text"
              value={val}
              onInput={(e) => handleip(e)}
              // oninput="Debounce(Translate,1000)"
              // onInput={() => Translate()}
            ></textarea>

            {/* <Button onClick={() => Translate(setop)}>SUBMIT</Button> */}
          </Box>
          <Box>
            <Select
              id="output-select"
              variant="filled"
              bg="tomato"
              borderColor="tomato"
              // color="white"
              size="lg"
              marginTop="20px"
            >
              <option value="">Select Language</option>
              <option value="en">English</option>
              <option value="ar">Arabic</option>
              <option value="az">Azerbaijani</option>
              <option value="zh">Chinese</option>
              <option value="cs">Czech</option>
              <option value="da">Dutch</option>
              <option value="eo">Esperanto</option>
              <option value="fi">Finnish</option>
              <option value="de">German</option>
              <option value="el">Greek</option>
              <option value="he">Hebrew</option>
              <option value="hi" selected>
                Hindi
              </option>
              <option value="hu">Hungarian</option>
              <option value="id">Indonesian</option>
              <option value="ga">Irish</option>
              <option value="it">Italian</option>
              <option value="ja">Japanese</option>
              <option value="ko">Korean</option>
              <option value="fa">Persian</option>
              <option value="pl">Polish</option>
              <option value="pt">Portuguese</option>
              <option value="ru">Russian</option>
              <option value="sk">Slovak</option>
              <option value="es">Spanish</option>
              <option value="sv">Swedish</option>
              <option value="tr">Turkish</option>
              <option value="uk">Ukranian</option>
            </Select>
            <br></br>
            <Box
              focusbordercolor="tomato"
              placeholder="Enter Text"
              // marginTop="50px"
              variant="filled"
              id="output-text"
              name="output-text"
              width={'180px'}
            ></Box>
          </Box>
        </Stack>
        <Stack
          direction={{ base: "column", md: "row" }}
          justifyContent="center"
          // alignItems="center"
          margin="auto"
          marginTop={'25px'}
        >
          <Box justifyContent={"center"}>
            {opval.length ? (
              <Button
                backgroundColor="teal.300"
                onClick={() => Translate(setop, val)}
              >
                {/* SUBMIT✔️ */}
                खोजें ✔️ 
              </Button>
            ) : (
              <Button
                isLoading
                colorScheme="blue"
                // spinner={<BeatLoader size={8} color="white" />}
              >
                Click me⬅️
              </Button>
            )}
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default Translator;

async function Translate(setop, val) {
  // console.log("*", setop);
  setop("");
  // let ip = document.getElementById("input-text").value;
  let op = document.getElementById("output-text");
  let ip_lang = document.getElementById("input-select").value;
  let op_lang = document.getElementById("output-select").value;
  try {
    const res = await fetch("https://libretranslate.de/translate", {
      // method:'GET', //default
      method: "POST",
      body: JSON.stringify({
        q: val,
        source: ip_lang,
        target: op_lang,
        format: "text",
      }),
      // additional info about our request that server might need to know
      headers: {
        "Content-Type": "application/json",
      },
    });
    const ans = await res.json();
    if (ans.translatedText !== undefined) {
      setop(ans.translatedText);
      op.innerText = ans.translatedText;
      console.log("ans", ans, setop);
    }
    // setop("")
  } catch (err) {
    console.log(err);
  }
}
