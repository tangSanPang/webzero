import React, {Component} from 'react';
import v from '../../public/images/v.svg'
import setting from '../../public/images/setting.svg'
import message from '../../public/images/message.svg'
import collect from '../../public/images/collect.svg'
import game from '../../public/images/game.svg'
import video from '../../public/images/video.svg'
import hot from '../../public/images/hot.svg'

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
                <div style={{...styles.header, ...styles.userNameAndIntroduce}}>
                    <h2 style={styles.userName}>甄子丹</h2>
                    <p style={styles.userIntroduce}>一个几近完美的动作明星</p>
                </div>
                <div style={{textAlign: 'center', marginTop: 10}}>
                    <span style={styles.vText}><img style={styles.vImg} src={v} alt='认证'/>轻呗认证</span>
                    <span style={{...styles.vText, ...styles.lvText}}>Lv22</span>
                </div>

                <div style={styles.showBox}>
                    <div style={styles.showItem}>
                        <p style={styles.title}>关注</p>
                        <p style={styles.value}>2321</p>
                    </div>
                    <div style={styles.showItem}>
                        <p style={styles.title}>粉丝</p>
                        <p style={styles.value}>42322</p>
                    </div>
                    <div style={styles.showItem}>
                        <p style={styles.title}>轻文</p>
                        <p style={styles.value}>122</p>
                    </div>
                </div>
                <ul style={styles.tabs}>
                    <li style={styles.tabName}><img style={styles.tabImage} src={message} alt="message style=styles.tabImage"/>消息</li>
                    <li style={styles.tabName}><img style={styles.tabImage} src={collect} alt="collect"/>收藏</li>
                    <li style={styles.tabName}><img style={styles.tabImage} src={setting} alt="setting"/>设置</li>
                    <li style={styles.tabName}><img style={styles.tabImage} src={video} alt="video"/>视频</li>
                    <li style={styles.tabName}><img style={styles.tabImage} src={hot} alt="hot"/>热门</li>
                    <li style={styles.tabName}><img style={styles.tabImage} src={game} alt="game"/>游戏</li>
                </ul>

            </div>
        )
    }

}

const styles = {
    container: {
        width: '100%'
    },
    header: {
        display: 'inline-block',
        verticalAlign: 'top',
        width: '50%',
        textAlign: 'center'
    },
    userHeader: {
        width: 70,
        height: 70,
        borderRadius: '100%'
    },
    userNameAndIntroduce: {
        textAlign: 'left',
        minHeight: 70
    },
    userName: {
        marginTop: 10
    },
    userIntroduce: {
        marginTop: 5,
        fontSize: 14,
        color: '#646464'
    },
    vImg: {
        width: 12,
        height: 12,
        marginRight: 3
    },
    vText: {
        display: 'inline-block',
        fontSize: 12,
        color: '#fff',
        padding: '3px 8px',
        borderRadius: 18,
        backgroundColor: '#1296db'
    },
    lvText: {
        backgroundColor: '#D5324A',
        marginLeft: 10
    },
    showBox: {
        width: '100%',
        marginTop: 10
    },
    showItem: {
        display: 'inline-block',
        width: '33%',
        textAlign: 'center',
        paddingBottom: 20,
        borderBottom: '2px solid #eee'
    },
    title: {
        fontSize: 14,
        fontWeight: 800,
        color: '#333',
        marginBottom: 8
    },
    value: {
        fontSize: 12,
        fontWeight: 600,
        color: '#1296db'
    },
    tabs:{
        textAlign:'center'
    },
    tabImage: {
        width: 14,
        marginRight: 10
    },
    tabName:{
        fontSize:14,
        fontWeight:600,
        marginTop:25,
        color:'#646464'
    }
};