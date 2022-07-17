import Home from "./components/home";
import { FunctionInSfc } from "./components/functionInSfc";
import FnWithArgInCc from "./components/fnWithArgInCC";
import FnWithArgSfc from "./components/fnWithArgSfc";
import PassingEventtoFn from "./components/passingEventtoFn";
function App() {
  return (
    <div className="app">
      <Home />
      <FunctionInSfc />
      <FnWithArgInCc />
      <FnWithArgSfc />
      <PassingEventtoFn/>
    </div>
  );
}

export default App;
