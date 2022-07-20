import Home from "./components/home";
import { FunctionInSfc } from "./components/functionInSfc";
import FnWithArgInCc from "./components/fnWithArgInCC";
import FnWithArgSfc from "./components/fnWithArgSfc";
import PassingEventtoFn from "./components/passingEventtoFn";
import FatherCompSFC from "./components/fatherSfc";
import FatherCompCC from "./components/fatherCC";

function App() {
  return (
    <div className="app">
      <Home />
      <FunctionInSfc />
      <FnWithArgInCc />
      <FnWithArgSfc />
      <PassingEventtoFn />

      <FatherCompSFC/>
      <FatherCompCC />
    </div>
  );
}

export default App;
