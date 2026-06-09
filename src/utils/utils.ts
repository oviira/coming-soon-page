const debounce = (fn: Function, delay: number) => {
    let timeout: ReturnType<typeof setTimeout>;

    return function(...args: any[]) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            console.log('debounce');
            return fn(...args);
        }, delay);
    }
}

export { debounce };