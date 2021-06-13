import {useEffect} from "react";

export function now() {
    const time = (new Date()).toLocaleTimeString();
    return `(${time})`;
}

export function useConditionalEffect(operation, qualifier) {
    function conditionalOperation() {
        if (qualifier)
            operation();
    }

    useEffect(conditionalOperation, [qualifier]);
}

export function cx(...classes) {
    return classes.join(' ');
}
