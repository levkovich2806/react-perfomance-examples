import React from 'react';
import Item from "../../components/Item";

class Example2 extends React.Component {
    state = {
        items: [
            {id: 1, title: "Item 1"},
            {id: 2, title: "Item 2"},
            {id: 3, title: "Item 3"},
            {id: 4, title: "Item 4"},
            {id: 5, title: "Item 5"},
        ]
    }

    handleDelete = (e: unknown, id: number) => {
        console.log("handleDelete", id);
        this.setState({items: this.state.items.filter(i => i.id !== id)});
    }

    render() {
        const {items} = this.state;
        return (
            <div>
                {items.map((item, index) => {
                    // bad with "index" as key
                    return <Item key={index} item={item} onDelete={this.handleDelete}/>
                    // return <Item key={item.id} item={item} onDelete={this.handleDelete}/>
                })}
            </div>
        )
    }
}

export default Example2
