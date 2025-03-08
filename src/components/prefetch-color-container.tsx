import {getQueryClient} from "@/utils/get-query-client";
import {colorsQueryOption} from "@/application/useColors";
import {dehydrate, HydrationBoundary} from "@tanstack/react-query";
import ColorContainer from "@/components/color-cotainer";

export async function PrefetchColorContainer() {
    const queryClient = getQueryClient()

    await queryClient.prefetchQuery(colorsQueryOption())

    return <HydrationBoundary state={dehydrate(queryClient)}>
        <ColorContainer/>
    </HydrationBoundary>
}