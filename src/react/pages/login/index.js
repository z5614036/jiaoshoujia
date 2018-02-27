/**
 * Created by zll on 2017/10/11.
 */
import React from 'react';
import { connect } from 'react-redux';
import { message} from 'antd';
import styles from './login.css';
import LoginForm from '../../components/loginForm/loginForm';

class Login extends React.Component {
    componentWillReceiveProps(nextProps) {
        if(nextProps.msgTip!==this.props.msgTip){
            message.error(nextProps.msgTip);
         }
    }
    render(){
        return (
            <div className={styles.login}>

                <LoginForm {...this.props} />
                <div className={styles.footer}>
                    <div className={styles.footerTitle}>
                        <div className={styles.footerFont}>
                            支持谷歌和360浏览器 版权所有 @安徽蓝盾光电子股份有限公司
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}



function mapStateToProps(state) {
    return {
        loginRet: state.Login.loginRet,
        userInfo: state.Login.userInfo,

    }
}




export default connect(mapStateToProps,null)(Login);