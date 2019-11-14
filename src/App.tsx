import React from "react";
import Button from "./Button";

type AppProps = {};

const App: React.FunctionComponent<AppProps> = () => {
  return (
    <div>
      <Button config={{ foo: { bar: "baz" } }}>Hello, World!</Button>
    </div>
  );
};

export default App;
