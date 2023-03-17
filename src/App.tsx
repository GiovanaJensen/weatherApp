import { Form } from "./Components/Form"
import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body{
        font-family: 'Montserrat', sans-serif;
        background: url("https://images.unsplash.com/photo-1678911020402-650375a7776a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80") no-repeat center center;
        background-size: cover;
        color: #fefefe;
    }
`

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Form />
    </div>
  )
}

export default App
