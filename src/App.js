import logo from './logo.svg';
import './App.css';
// import {Greet} from './components/Greet'

import Greet from './components/Greet'
import Welcome from './components/Welcome';

import Hello from './components/Hello'
import Message from './components/Message';

import St from './components/St'
import FunctionClick from './components/FunctionClick';
import Classclick from './components/Classclick';
import Eventbind from './components/Eventbind';
import ParentComponent from './components/ParentComponent'

import UserGreeting from './components/UserGreeting'
import Counter from './components/Counter'
import NameList from './components/NameList'
import Stylesheet from './components/Stylesheet'
import Inlinestyle from './components/Inlinestyle'
import Form from './components/Form'
import LifecycleA from './components/LifecycleA'
import Table from './components/Table';
import ParentCompo from './components/ParentCompo'
import RefDemo from './components/RefDemo'

import Input from './components/Input'
import FragmentDemo from './components/FragmentDemo';

import FocusInput from './components/FocusInput'
import Clickcounter from './components/Clickcounter'
import Hovercounter from './components/Hovercounter'
import ClickcounterTwo from './components/ClickcounterTwo'
import HovercounterTwo from './components/HovercounterTwo'
import User from './components/User'
import Counter1 from './components/Counter1';



import ComponentC from './components/ComponentC'
import { UserProvider } from './components/UserContext';

//import PostListHTTPget from './components/PostListHTTPget'

function App() {
  return (
    <div className="App">

      {/* <Withcounter/> */}

      {/* <St Name="" Location=""/> */}
      
        <Hello/>

        {/* <Greet name="abc" address='Hyd'><p>children props</p></Greet>
        <Greet name="xyz"/>

        <Message/> */}
        {/* <Welcome/> */}
        {/* <FunctionClick/> */}
        {/* <Classclick/> */}

        {/* <Eventbind/> */}

        {/* <ParentComponent/> */}

        {/* <UserGreeting/> */}

        {/* <Counter/> */}

        {/* <NameList/> */}
        {/* <Stylesheet primary={true}/> */}
        {/* <Inlinestyle/> */}

        {/* <Form/> */}

        {/* <LifecycleA/> */}

        {/* <Table/> */}

        {/* <ParentCompo/> */}

        {/* <RefDemo/> */}

        {/* <Input/> */}
        {/* <FragmentDemo/> */}

        {/* <FocusInput/> */}
        
         {/* <Clickcounter name='abc'/>  */}
        {/* <Hovercounter/> */} 

        {/* <ClickcounterTwo/>
        <HovercounterTwo/>
        {/* <User name={(loggedIn)=>loggedIn?'xyz':'bchbf'}/> */}
        {/* <User render={(loggedIn)=>loggedIn?'xyz':'bchbf'}/> */} 

        {/* <Counter1 render={(count,incrementCount)=>(
          <ClickcounterTwo count={count} incrementCount={incrementCount}/>
        )}/>

        <Counter1 render={(count,incrementCount)=>(
          <HovercounterTwo count={count} incrementCount={incrementCount}/>
        )}/> */}

        {/* <UserProvider value='abcd'>
            <ComponentC/>
        </UserProvider> */}

      {/* <ComponentC/>   */}

      {/* <PostListHTTPget/> */}


      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
