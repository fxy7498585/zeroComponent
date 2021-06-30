import React, { useEffect } from 'react'

interface ToastProps {
    text: string,
}

const Toast = (props: ToastProps) => {
    useEffect(() => {

    }, [])
    return (
        <div className="toast_content">
            <div className="toast_inner">{props.text}aa</div>
        </div>
    )
}

export default Toast