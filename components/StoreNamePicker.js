import React from "react";

class StoreNamePicker extends React.Component{
    //custom button on click handler
    handleClick(){
        alert("hey!!");
    }
    //  <!--button onClick={this.handleClick}>Click Me!</button-->

    myInput = React.createRef();

    // declare a property on the component
    goToStore = (event)=>{
        // 1.stop the form from submitting
        event.preventDefault();
        // 2.get text from input
        console.log(this.myInput.current.value);
        // 3.change the page to the store user entered, change the url
        // use react router
        this.props.history.push(`/store/${this.myInput.current.value}`);
    };

    //render method needed builtin method
    render(){
        return (//for multiple sibling tags use fragment tag
            <form className="store-selector" onSubmit={this.goToStore}>
                <h2> Please enter a store</h2>
                <input type={"text"}
                       ref ={this.myInput}
                       required placeholder="store name" />
                <button type= "submit">Visit Store -></button>
            </form>
        );
    }
}

export default StoreNamePicker;