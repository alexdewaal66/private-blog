import error from "./error.module.css";


export function Error({children}) {
    return (
        <div className={error.centered}>
            {children}
        </div>
    )
}