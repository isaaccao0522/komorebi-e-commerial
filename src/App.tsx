import { useState } from "react";
import Inspx from "inspx";

//Others
import Text from "./components/text";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Inspx>
        <div className="text-3x1 text-pink-400">App</div>
        <Text variant="heading-one">Customer reusable components</Text>
        <Text variant="body-one">Customer reusable components</Text>
        <Text variant="caption-two">Customer reusable components</Text>
      </Inspx>
    </div>
  );
}

export default App;
