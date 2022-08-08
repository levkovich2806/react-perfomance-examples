import React from 'react';

class Image extends React.PureComponent<any, any> {
    // static whyDidYouRender = true
    componentDidMount() {
        console.log("Image Mount")
    }

    componentWillUnmount() {
        console.log("Image Unmount")
    }


    render() {
        console.log("render Image");
        return (
            <img src={'https://www.bluestonepim.com/hs-fs/hubfs/raw_assets/public/Bluestone_October_2021/images/header-logo.png?width=3000&name=header-logo.png'} alt={'BluestonePIM'} />
        )
    }
}

export default Image
