import React, {Component} from 'react';
import SidebarForLeft from './view/sidebarForLeft';
import SidebarForRight from './view/sidebarForRight'
import MainContent from './view/mainContent'


class App extends Component {

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
        backgroundColor: 'rgba(255,255,255,.8)',
        borderRadius: 10,
        margin: '50px auto'
    },


};

export default App;
