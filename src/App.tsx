import { Form } from "./Components/Form"
import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body{
        font-family: 'Montserrat', sans-serif;
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
