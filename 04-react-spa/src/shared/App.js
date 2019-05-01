import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, About, Posts } from 'pages';
import Menu from 'components/menu';
// react-router-dom: 브라우저에서 사용되는 리액트 라우터 입니다.
// cross-env: 프로젝트에서 NODE_PATH 를 사용하여 절대경로로 파일을 불러오기 위하여 환경 변수를 설정 할 때 운영체제마다 방식이 다르므로 공통적인 방법으로 설정 할 수 있게 해주는 라이브러리입니다.

class App extends Component {
    render() {
        return (
            <div>
                <Menu />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about/:name" component={About} />
                    <Route path="/about" component={About} />
                    <Route path="/posts" component={Posts} />
                </Switch>
            </div>
        );
    }
}


export default App;