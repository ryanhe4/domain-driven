import Color from "@/domain/color";
import {useSuspenseQuery, UseSuspenseQueryOptions,} from "@tanstack/react-query"
import colorService from "@/domain/color.service";

export const colorsQueryOption = (): UseSuspenseQueryOptions<Color[]> => ({
    queryKey: ['colors'],
    queryFn: colorService.getAllColors,
})

export function useColors() {
    return useSuspenseQuery({
        ...colorsQueryOption(),
        staleTime: 60 * 1000
    })
}