import React, { useEffect } from 'react';
var Toast = function (props) {
    useEffect(function () {
    }, []);
    return (React.createElement("div", { className: "toast_content" },
        React.createElement("div", { className: "toast_inner" },
            props.text,
            "aa")));
};
export default Toast;
