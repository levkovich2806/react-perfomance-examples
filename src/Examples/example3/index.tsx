import React from "react";
import Image from "../../components/Image";
import classnames from 'classnames';
import styles from './index.module.css';
import DeleteButton from "../../components/DeleteButton";

interface ExampleState {
    withBorder: boolean;
}

class Example3 extends React.Component<any, any> {
    state: ExampleState = {
        withBorder: false
    }

    handleChangeBorderState = () => {
        this.setState((state: ExampleState) => {
            return {
                withBorder: !state.withBorder
            }
        })
    }

    getContentWithDifferentStructure = () => {
        const {withBorder} = this.state;
        const imageContent = <Image />

        return withBorder ?
            <div className={styles.withBorder}>
                <div className={styles.img}>
                    {imageContent}
                </div>
            </div>
            :
            <div className={styles.img}>
                {imageContent}
            </div>;
    }

    getContentWithSimilarStructure = () => {
        const {withBorder} = this.state;
        const imageContent = <Image />

        return withBorder ?
            <div className={classnames(styles.withBorder, styles.img)}>
                {imageContent}
            </div>
            :
            <div className={styles.img}>
                {imageContent}
            </div>;
    }

    getContentWithSimilarStructureDivSpan = () => {
        const {withBorder} = this.state;
        const imageContent = <Image />

        return withBorder ?
            <span className={classnames(styles.withBorder, styles.img)}>
                {imageContent}
            </span>
            :
            <div className={styles.img}>
                {imageContent}
            </div>;
    }

    getContentWithSimilarStructureWithDelete = () => {
        const {withBorder} = this.state;

        const imageContent = <Image />

        return withBorder ?
            <div className={classnames(styles.withBorder, styles.img)}>
                <DeleteButton />
                {imageContent}
            </div>
            :
            <div className={styles.img}>
                {imageContent}
            </div>;
    }


    getContentWithSimilarStructureWithDeleteInCondition = () => {
        const {withBorder} = this.state;

        const imageContent = <Image />

        return (
            <div className={classnames(styles.withBorder, styles.img)}>
                {withBorder && <DeleteButton />}
                {imageContent}
            </div>
        )
    }

    getContentWithSimilarStructureWithDeleteWithKey = () => {
        const {withBorder} = this.state;

        const imageContent = <Image key={'image'} />

        return withBorder ?
            <div className={classnames(styles.withBorder, styles.img)}>
                <DeleteButton />
                {imageContent}
            </div>
            :
            <div className={styles.img}>
                {imageContent}
            </div>;
    }

    render() {
        return (
            <div>
                {this.getContentWithDifferentStructure()}
                {/*{this.getContentWithSimilarStructure()}*/}
                {/*{this.getContentWithSimilarStructureDivSpan()}*/}
                {/*{this.getContentWithSimilarStructureWithDelete()}*/}
                {/*{this.getContentWithSimilarStructureWithDeleteInCondition()}*/}
                {/*{this.getContentWithSimilarStructureWithDeleteWithKey()}*/}
                <button onClick={this.handleChangeBorderState}>toggle</button>
            </div>
        )
    }
}

export default Example3
