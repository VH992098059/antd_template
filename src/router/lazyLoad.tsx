import {ReactNode, Suspense} from "react";
import {LazyLoading} from "./old/LazyImport/LazyLoading.tsx";

export const lazyLoad = (children: ReactNode): ReactNode => {
    return (
        <Suspense fallback={<LazyLoading/>}>
            {children}
        </Suspense>
    )
}
