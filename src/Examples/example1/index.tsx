import React from "react";
import Button from "../../components/Button";

interface AppState {
    count: number;
}

class Example1 extends React.Component<any, any> {
    state: AppState = {
        count: 0
    }

    increment = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        const {count} = this.state;
        console.log(count);

        //good
        // return (
        //     <div>
        //         <Button onClick={this.increment}/>
        //     </div>
        // )

        //bad
        return (
            <div>
                <Button onClick={() => this.increment()}/>
            </div>
        )
    };
}

export default Example1
