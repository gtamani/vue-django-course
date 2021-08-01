import logo from './logo.svg';
import './App.css';
import FirstComponent from './components/FirstComponent';
import Properties from './components/Properties';
import State from './components/State';
import ConditionalRender from './components/ConditionalRender';
import ElementsRender from './components/ElementsRender';
import {EventsES6,EventsES7} from './components/Events';

function App() {
  const weathers = ["Spring","Winter","Autumn","Summer"]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul>
          {weathers.map((el,index) => (<li key={index}>{el}</li>))}
        </ul>
        <p>
          Sabelo perri <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <section>
        <FirstComponent name="Giuliano"/>
        <Properties 
        string="string" 
        number={10} 
        boolean={true}
        array={[1,2,3,4]}
        object={{blog:"projects.gtamani",user:"gtamani"}}
        reactElement={<p><i>This is an italic JSX element from a prop.</i></p>}
        function={num=>num**2}
        component={<FirstComponent name="Roberto"/>}/>
        <State/>
        <ConditionalRender/>
        <ElementsRender/>
        <EventsES6/>
        <EventsES7/>
      </section>
    </div>
  );
}

export default App;
