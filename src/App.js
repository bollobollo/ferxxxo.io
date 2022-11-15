import './App.css';
import Age from './Age.js'
import styled from 'styled-components';

const Text = styled.p`
color: ${props => props.color ? props.color : 'yellow'}`;


function App() {
  
  return (
  <div id='container'>
    <Age></Age>
    <Text color='pink' id='text'>F3RXXXO</Text>
  </div>
  )
}

export default App;
