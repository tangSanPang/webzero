import React, {Component} from 'react';

export default class navigationBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navigation: this._initButtonData(0)
        }
    };

    render() {
        let state = this.state;
        return (
            <div style={styles.container}>
                <div style={styles.header}>
                    {/*导航栏左侧logo*/}
                    <div style={styles.logo}>Qing Weibo</div>
                    {/*导航栏右侧按钮*/}
                    <ul style={styles.navButtonGroup}>
                        {state.navigation.map(this._renderNavButton)}
                    </ul>
                </div>
            </div>
        )
    }

    _renderNavButton = (item, index, all) => {
        let buttonStyle = {};
        if(item.type==='page'&&item.isSelected)buttonStyle={color:'#00aaff'};
        return (
            <li style={{...styles.navButton,...buttonStyle}} onClick={() => this._onClickButton(index)} key={'button_'+index}>
                {item.title}
                {this._renderModal(item)}
            </li>)
    };

    _renderModal = (item) => {
        if (item.type === 'modal') {
            if (item.isShowModal === true) {
                return (
                    <div style={styles.buttonModal}>

                    </div>
                )
            } else {
                return null
            }
        } else {
            return null
        }
    };

    _initButtonData = (index) => {
        let setValue = (i) => {
            return i === index ? true : false
        };

        return [
            {type: 'page', title: '主页', isSelected: setValue(0)},
            {type: 'page', title: '探索', isSelected: setValue(1)},
            {type: 'modal', title: '消息', isShowModal: setValue(2)},
            {type: 'modal', title: '通知', isShowModal: setValue(3)},
            {type: 'modal', title: '个人', isShowModal: setValue(4)},
            {type: 'modal', title: '写文章', isShowModal: setValue(5)},
        ]
    };

    _onClickButton = (i) => {
        let buttonData = this.state.navigation;
        if (buttonData[i].type === 'page') {
            if (buttonData[i].isSelected) {
                return
            } else {
                buttonData = this._initButtonData(i)
            }
        } else {
            if (buttonData[i].isShowModal) {
                buttonData[i].isShowModal = false
            } else {
                let pageButton = buttonData.filter(ele=>ele.type==='page');
                buttonData = pageButton.concat(this._initButtonData(i).filter(ele=>ele.type==='modal'));
            }
        }
        this.setState({navigation: buttonData})
    }
}


const styles = {
    container: {
        width: '100%',
        display: 'flex',
        backgroundColor: 'rgba(255,255,255,.3)',
        justifyContent: 'center'
    },
    header: {
        // maxWidth: 1000,
        // minWidth:400,
        // width: '100%',
        width: 1000,
        height: 50,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    logo: {
        fontFamily: 'LogoFont',
        fontSize: '2em',
        color: 'rgba(0,0,0,.4)',
        fontWeight: 'bold',
    },
    navButtonGroup: {
        display: 'flex',
        flexDirection: 'row',
    },
    navButton: {
        display: 'flex',
        justifyContent: 'center',
        position: 'relative',
        fontSize: 14,
        color: 'rgba(0,0,0,.5)',
        fontWeight: '500',
        marginLeft: 20,
        padding: '5px 10px',
        borderRadius: '3px',
        // backgroundColor: 'rgba(0,0,0,.5)',
        cursor: 'pointer',
    },
    buttonModal: {
        position: 'absolute',
        top: 30,
        width: 70,
        minHeight: 100,
        border: '1px solid #ddd',
    }
};