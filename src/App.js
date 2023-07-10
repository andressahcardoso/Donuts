import StyledGlobal, { CorFundo } from './styledGlobal';
import { useState } from 'react';
import Home from './components/page/Home/Home'
import Details from './components/page/Details/Details'

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
