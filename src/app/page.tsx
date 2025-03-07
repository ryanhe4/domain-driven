import {dehydrate, HydrationBoundary, QueryClient} from "@tanstack/react-query";
import {colorsQueryOption} from "@/application/useColors";
import {ColorContainer} from "@/ui/color-cotainer";
import {Suspense} from "react";

export default async function Home() {
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <PrefetchQuery/>
            </Suspense>
        </div>);
}


async function PrefetchQuery() {
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery(colorsQueryOption)

    return <HydrationBoundary state={dehydrate(queryClient)}>
        <div> header</div>
        <main>
            <ColorContainer/>
        </main>
    </HydrationBoundary>
}