import React from 'react';
import './App.css';
//import UseeffectHook from './components/Useeffecthook1';
// import Classcounter from './components/Classcounter';
// import Hookcounter from './components/Hookcounter';
// import Hookcounter2 from './components/Hookcounter2';
// import Hookcounter3 from './components/Hookcounter3';
// import Hookcounter4 from './components/Hookcounter4';
//import UseeffectHook1 from './components/Useeffecthook1';
// import UseeffectHook2 from './components/Useeffecthook2';
//import Useeffecthook3 from './components/Useeffecthook3';
//import UseeffectHook4 from './components/Useeffecthook4';
// import UseeffectHook5 from './components/Useeffecthook5';
// import ExU from './components/exU';
import CompA from './components/CompA';

export const Usercontext = React.createContext()
export const Channelcontext = React.createContext()

function App() {

  return (
    <div className="App">
      <h2>react hook</h2>
      {/* <Classcounter/>
      <Hookcounter/>
      <Hookcounter2/>
      <Hookcounter3/>
      <Hookcounter4/> */}
      {/* <UseeffectHook1/> */}
      {/* <UseeffectHook2/> */}
      {/* <Useeffecthook3/> */}
      {/* <UseeffectHook4/> */}
      {/* <UseeffectHook5/>
      <ExU/> */}
      <Usercontext.Provider value={'bhavik'}>
        <Channelcontext.Provider value={'react hook'}>
          <CompA />
        </Channelcontext.Provider>
      </Usercontext.Provider>

    </div>
  );
}

export default App;
