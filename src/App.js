import { useState } from 'react';
import Home from './components/Home/Home';
import StyledGlobal from './styledGlobal';
import { CorFundo } from "./styledGlobal";

function App() {

  const [trocarDePagina, setTrocardePagina] = useState("0")

  const changePage = (change) => {
    setTrocardePagina(change)
  }

  return (
   <>
   <CorFundo>
      <StyledGlobal/>
      {trocarDePagina === "0" ? (
        <Home pagina={() => changePage("0")}/>
      ) : (
        <Details pagina={() => changePage("1")}/>
      )}
    </CorFundo>
   </>
  );
}

export default App;
