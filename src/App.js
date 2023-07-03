import Home from './components/Home/Home';
import StyledGlobal from './styledGlobal';
import { CorFundo } from "./styledGlobal";

function App() {
  return (
   <>
   <CorFundo>
      <StyledGlobal/>
      <Home/>
    </CorFundo>
   </>
  );
}

export default App;
