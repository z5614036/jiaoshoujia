/**
 * Created by zll on 2017/10/9.
 */
import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {applyMiddleware} from "redux";
import { BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';
import { Layout } from 'antd';
import {qsMenu,analysisMenu,deviceMenu,reportMenu,systemMenu,MonitorMenu} from '../../utils/menu';
import Login from '../../react/pages/login';
import mainPage from '../../react/pages';
import Seeing from "../pages/seeing/Seeing";
import  './index.css';
const {Content} = Layout;
export default class Routes extends Component {
    componentDidMount(){

    }
    render() {
        return (
                <BrowserRouter >
                    <div style={{width:'100%',height:'100%'}}>
                        <Switch>
                            <Route exact strict path="/login" component={Login} />
                            <Route path="/main" component={mainPage} />
                            <Redirect from='*' to='/login' />
                        </Switch>
                    </div>
                </BrowserRouter>

        )
    }
};

export  class SideRoute extends React.Component {

    render() {
        return (
            <ul style={{ width:'200px',height:'100%',overflow:'auto'}} className="menu">
                <Switch>
                    <Route path="/main/monitor" component={MonitorMenu}/>
                    <Route path="/main/qs" component={qsMenu} />
                    <Route path="/main/analysis" component={analysisMenu} />
                    <Route path="/main/device" component={deviceMenu} />
                    <Route path="/main/report" component={reportMenu}/>
                    <Route path="/main/system" component={systemMenu}/>
                    <Route path="/main" component={MonitorMenu}/>
                </Switch>
            </ul>
        );
    }
}

export  class ContentRoute extends React.Component {
    render() {
        return (
            <Content style={{ width:'100%',height:'100%',backgroundColor:"#ebf8f2",overflow:'auto'}}>
                        <Switch>
                            <Route path="/main/monitor" component={monitorRoute}/>
                            <Route path="/main/monitor/record" component={monitorRoute}/>
                        </Switch>
            </Content>
        )
    }
}
export class monitorRoute extends React.Component{
        render(){
              return(
                  <Content className="content">
                      <Switch>
                          <Route path="/main/monitor/record" component={Seeing}/>
                          <Route path="/main/monitor" component={Seeing}/>

                      </Switch>
                  </Content>
              )
        }

}

export  class qsRoute extends React.Component {

    render() {
        return (
            <Content className="content">
                <Switch>

                </Switch>
            </Content>
        );
    }
}

export  class analysisRoute extends React.Component {

    render() {
        return (
            <Content className="content">
                <Switch>

                </Switch>
            </Content>
        );
    }
}

export  class reportRoute extends React.Component {

    render() {
        return (
            <Content className="content">
                <Switch>

                </Switch>
            </Content>
        );
    }
}

export  class deviceRoute extends React.Component {

    render() {
        return (
            <Content className="content">
                <Switch>

                </Switch>
            </Content>
        );
    }
}

export  class systemRoute extends React.Component {

    render() {
        return (
            <Content className="content">
                <Switch>

                </Switch>
            </Content>
        );
    }
}