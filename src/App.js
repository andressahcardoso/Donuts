// import './App.css';
import Header from "../../donuts/src/components/Header/Header"
import StyledGlobal from './styledGlobal';
import { CorFundo } from "./styledGlobal";

function App() {
  return (
   <>
   <CorFundo>
      <StyledGlobal/>
      <Header/>
    </CorFundo>
   </>
  );
}

export default App;
