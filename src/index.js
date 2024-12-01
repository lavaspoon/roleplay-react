import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // 전역 스타일
import App from './App'; // App 컴포넌트
import reportWebVitals from './reportWebVitals'; // 성능 측정

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

// 성능 측정을 원할 경우 reportWebVitals 호출
reportWebVitals();
