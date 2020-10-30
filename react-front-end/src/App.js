import React from "react";
import { BrowserRouter } from "react-router-dom";
import Frame from "./components/Frame";
import useColor from "./hooks/useColor";

const App = () => {
  //this logic is located in hook folder useColor
  const { color, setColor } = useColor("green");
  //setColor is a state setter that's being passed down (App->Frame->ChooseChar->Character) and called in Character when a user clicks on an image of a sprite

  // const [state, setState] = useState("Message");

  // const fetchData = () => {
  //   return axios
  //     .get("/api/dialogue") // You can simply make your requests to "/api/whatever you want"
  //     .then((response) => {
  //       setState(response.data);
  //     });
  // };

  return (
    <BrowserRouter>
      <Frame currentColor={color} setColor={setColor} />
      {/* <div className="App">
        <Navbar />
        <Route path="/scene/:id" component={Content} />
      </div>
      <h1>{state}</h1>
      <button onClick={() => fetchData()}>Fetch Data</button> */}
    </BrowserRouter>
  );
};

export default App;
