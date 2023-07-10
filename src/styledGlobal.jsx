import styled, {createGlobalStyle} from "styled-components";


export default createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background-color: pink;
    }
  
`

export const CorFundo = styled.div`
    background: linear-gradient(130deg, green -80% black 30%);
    height: 100%;
`