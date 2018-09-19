import React, {Component} from 'react';
import SidebarForLeft from './sidebarForLeft';
import SidebarForRight from './sidebarForRight'
import MainContent from './mainContent'


export default class App extends Component {

    render() {
        return (
            <div style={styles.app}>
                <SidebarForLeft/>
                <MainContent/>
                <SidebarForRight/>
            </div>
        );
    }
}


const styles = {
    app: {
        width: 1200,
        backgroundColor: 'rgba(255,255,255,.7)',
        borderRadius: 10,
        margin: '50px auto'
    },


};