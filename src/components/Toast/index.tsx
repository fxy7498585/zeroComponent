import ReactDOM from 'react-dom';
import React from 'react';
import Toast from "./Toast";

interface ToastOption {
    text: string,
    dealy?: number,
}

const doToast = (() => {
    let timer: any | Function = null
    return (options: ToastOption) => {
        const toastWrapperDiv = document.getElementById('toast_wrapper')
        if (toastWrapperDiv) {
            toastWrapperDiv.remove();
        }
        const toastWrapper = document.createElement('div')
        toastWrapper.className = 'toast_wrapper'
        toastWrapper.id = 'toast_wrapper'
        document.body.append(toastWrapper)
        ReactDOM.render(
            <Toast text={options.text} />,
            document.getElementById('toast_wrapper'),
        )

        if (timer) {
            clearInterval(timer)
        }
        timer = setInterval(() => {
            document?.getElementById('toast_wrapper')?.remove()
        }, options.dealy || 2000)
    }
})()
export default doToast