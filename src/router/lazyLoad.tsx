import {ReactNode, Suspense} from "react";
import {LazyLoading} from "./LazyLoading.tsx";

export const lazyLoad = (children: ReactNode): ReactNode => {
    return (
        <Suspense fallback={<LazyLoading/>}>
            {children}
        </Suspense>
    )
}
