import {Suspense} from "react";
import {PrefetchColorContainer} from "@/components/prefetch-color-container";
import {PrefetchUserContainer} from "@/components/prefetch-user-container";

export default async function Home() {
    return (
        <div>
            <div>header onloading</div>
            <input placeholder={'test ui'}/>
            <Suspense fallback={<div>loading home 3seconds</div>}>
                <PrefetchColorContainer/>
            </Suspense>
            <Suspense fallback={<div>loading user-info</div>}>
                <PrefetchUserContainer/>
            </Suspense>
        </div>);
}