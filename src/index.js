import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import todos from "./redux/todos";

// provider는 react-redux라이브러리에 내장되어있는,
//리액트 앱에 store를 손쉽게 연동 할수 있도록 도와주는 컴포넌트 입니다
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";

const rootStore = combineReducers({
  todos, //모듈 연결하기
});
//리덕스는 action->dispatch-> reducer 순으로 동작
//combineReducers은 여러 개의 독립적인 reducer의 반환 값을 하나의 상태 객체 만듬
const store = createStore(rootStore);
//리덕스의 가장 핵심이 되는 스토어를 만드는 메소드(함수)
//리덕스 사용할 시 createStore를 호출할 일은 한번뿐!

export default store;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //App을 Provider로 감싸주고, configStore에서 export default 한 store를 넣어줍니다.
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();
