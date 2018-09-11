import React, {Component} from 'react';

const header = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536669252789&di=d2312cdc29e806cd61ef4b27c9fa93c9&imgtype=0&src=http%3A%2F%2Fwww.qqzhi.com%2Fuploadpic%2F2014-12-21%2F084155274.jpg';
export default class userHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div style={styles.container}>
                <div style={styles.header}>
                    <img src={header} style={styles.userHeader} alt="userHeader"/>
                </div>
                <div style={{...styles.header}}>

                </div>

            </div>
        )
    }

}

const styles = {
    container: {
        width: '100%'
    },
    header: {
        display:'inline-block',
        width: '50%',
        textAlign:'center'
    },
    userHeader: {
        width: 70,
        height: 70,
        borderRadius: '100%'
    }
};