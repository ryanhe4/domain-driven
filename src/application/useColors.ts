import Color from "@/domain/color";
import colorService from "@/domain/color.service";
import {useSuspenseQuery, UseSuspenseQueryOptions} from "@tanstack/react-query"

export const colorsQueryOption: UseSuspenseQueryOptions<Color[]> = {
    queryKey: ['colors'],
    queryFn: colorService.getAllColors
}

export function useColors() {
    return useSuspenseQuery({
        ...colorsQueryOption
    })
}