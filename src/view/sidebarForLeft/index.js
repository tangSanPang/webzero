import React, {Component} from 'react';
import logo from '../../public/images/logo.svg';
import UserHeader from './userHeader'


export default class sidebarForLeft extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div style={styles.container}>
                <div style={styles.logoBox}>
                    <img src={logo} style={styles.logo} alt='乐乐'/>
                    <span style={styles.logoTitle}>Qing bei</span>
                </div>
                <UserHeader/>

            </div>
        )
    }
}

const styles = {
    container: {
        display: 'inline-block',
        padding: '20px 15px',
        width: '25%',
        height: '100%',
    },
    logoBox:{
        marginBottom:20
    },
    logo: {
        width: 50
    },
    logoTitle: {
        display: 'inline-block',
        fontSize: 28,
        // fontFamily:'LogoFont',
        fontFamily: 'LogoFont1',
        // marginBottom: 10,
        fontStyle: 'italic',
        fontWeight: 'bold',
        color: '#1296db',
        verticalAlign: 'bottom'
    },

};