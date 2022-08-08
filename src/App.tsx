import React from 'react';
import './App.css';
import Example1 from "./Examples/example1";
// import Example2 from "./Examples/example2";
// import Example3 from "./Examples/example3";

class App extends React.Component<any, any> {
    render() {
        return (
            <>
            <Example1 />
            {/*<Example2 />*/}
                {/*<Example3 />*/}
            </>
        )
    }
}

export default App;
