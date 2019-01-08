import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';

class App extends React.Component{

    render() {
        return (
            <div className="Catch of the day">
               <div className="menu">
                   <Header tagline={"Fresh sea food market"} />
               </div>
                <Inventory />
                <Order />
            </div>

        );

    }
}

export default App;