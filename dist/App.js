import React from 'react';
import logo from './logo.svg';
import './App.css';
import doToast from './components/Toast/index';
function App() {
    return (React.createElement("div", { className: "App", onClick: function () {
            console.log(1);
            doToast({ text: 'this is dotoast' });
        } },
        React.createElement("header", { className: "App-header" },
            React.createElement("img", { src: logo, className: "App-logo", alt: "logo" }),
            React.createElement("p", null,
                "Edit ",
                React.createElement("code", null, "src/App.tsx"),
                " and save to reload."),
            React.createElement("a", { className: "App-link", href: "https://reactjs.org", target: "_blank", rel: "noopener noreferrer" }, "Learn React"))));
}
export default App;
