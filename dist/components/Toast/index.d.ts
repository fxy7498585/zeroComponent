interface ToastOption {
    text: string;
    dealy?: number;
}
declare const doToast: (options: ToastOption) => void;
export default doToast;
