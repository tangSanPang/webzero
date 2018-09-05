import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        return (
            <div style={styles.app}>
                <div style={styles.header}>

                </div>
            </div>
        );
    }
}

const styles = {
    app: {
        textAlign: 'center'
    },
    header:{
        width:'100%',
        height:'80px',
        backgroundColor:'#ddd'
    }
};

export default App;
