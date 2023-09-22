import './App.css';
import Resources from './components/resources'

const App = () =>{
  return (
    <div className='App'>
      <header>
        <img class="header" src="/hub header.jpg" alt="pic" height={'100px'} width={'100%'}/>
      </header>
      <h1>STUDENT HUB RESOURCES</h1>
      <Resources />
    </div>
  )
};

export default App;