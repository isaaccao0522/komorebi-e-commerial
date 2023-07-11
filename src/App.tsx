import { useState } from "react";
import Inspx from "inspx";

//Others
import Text from "./components/text";
import Button from "./components/button";
import Icon from "./components/icon";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  return (
    <div className="App">
      <Inspx>
        <div className="text-3x1 text-pink-400">App</div>
        <Text variant="heading-one">Customer reusable components</Text>
        <Text variant="body-one">Customer reusable components</Text>
        <Text variant="caption-two">Customer reusable components</Text>
        <Button size="large" className="">
          Proccess to Quit
        </Button>
        <Button size="small" disabled className="mx-1">
          Payment
        </Button>
        <Icon name="Arrow-Down-Icon" />
        <Icon name="Plus-Icon" />
      </Inspx>
    </div>
  );
}

export default App;
