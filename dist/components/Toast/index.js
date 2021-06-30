import ReactDOM from 'react-dom';
import React from 'react';
import Toast from "./Toast";
var doToast = (function () {
    var timer = null;
    return function (options) {
        var toastWrapperDiv = document.getElementById('toast_wrapper');
        if (toastWrapperDiv) {
            toastWrapperDiv.remove();
        }
        var toastWrapper = document.createElement('div');
        toastWrapper.className = 'toast_wrapper';
        toastWrapper.id = 'toast_wrapper';
        document.body.append(toastWrapper);
        ReactDOM.render(React.createElement(Toast, { text: options.text }), document.getElementById('toast_wrapper'));
        if (timer) {
            clearInterval(timer);
        }
        timer = setInterval(function () {
            var _a;
            (document === null || document === void 0 ? void 0 : document.getElementById('toast_wrapper')) && ((_a = document === null || document === void 0 ? void 0 : document.getElementById('toast_wrapper')) === null || _a === void 0 ? void 0 : _a.remove());
        }, options.dealy || 2000);
    };
})();
export default doToast;
