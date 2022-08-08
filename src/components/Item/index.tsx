import React from 'react';

interface ItemProps {
    item: {
        id: number;
        title: string;
    }
    onDelete: (e: unknown, id: number) => void
}

class Item extends React.PureComponent<ItemProps> {
    componentDidMount() {
        console.log("componentDidMount", this.props.item.id)
    }

    componentWillUnmount() {
        console.log("componentWillUnmount", this.props.item.id)
    }

    componentDidUpdate(prevProps: ItemProps) {
        console.log("componentDidUpdate", {
            prevId: prevProps.item.id,
            nextId: this.props.item.id
        })
    }


    render() {
        const {item: {id, title}} = this.props;
        console.log("Item render", id);
        return (
            <div onClick={(e) => this.props.onDelete(e, id)}>
                id: {id}. title: {title}
            </div>
        )
    }
}

export default Item
