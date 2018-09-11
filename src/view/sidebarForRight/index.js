import React, {Component} from 'react';

export default class sidebarForRight extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div style={styles.container}></div>
        )
    }
}

const styles = {
    container: {
        display: 'inline-block',
        padding: '15px',
        width: '20%',
        height: '100%',
    },
};