import React, {Component} from 'react';

export default class mainContent extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return(
            <div style={styles.container}></div>
        )
    }
}

const styles = {
    container: {
        display: 'inline-block',
        padding: '15px',
        width: '55%',
        minHeight: 700,
        borderLeft: '2px solid #eee',
        borderRight: '2px solid #eee',
        marginBottom: 10,
        verticalAlign:'top'
    },
};