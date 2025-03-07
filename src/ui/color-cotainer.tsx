'use client'

import {useColors} from "@/application/useColors";

export function ColorContainer() {
    const {data} = useColors();

    return <div>
        {data.map(color => {
            return <div key={color.id}>
                {color.name}
                {color.hex}
            </div>
        })}

    </div>
}