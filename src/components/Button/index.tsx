import React, {PureComponent} from 'react'

interface OwnProps {
    onClick: () => void
}

export default class Button extends PureComponent<OwnProps, any> {
    static whyDidYouRender = true

    render(): JSX.Element {
        console.log("render button");

        return (
            <button onClick={this.props.onClick}>Button</button>
        )
    }
}
