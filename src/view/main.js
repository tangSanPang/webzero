import React, {Component} from 'react';
import NavigationBar from '../public/components/navigationBar'
export default class main extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    };

    render() {
        return (
            <div style={styles.appContainer}>
                <NavigationBar/>
            </div>
        )
    }

}


const styles = {
    appContainer: {
        width:'100%',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
    }
};