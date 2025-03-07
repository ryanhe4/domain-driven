class Color {
    id = 0
    name = ""
    hex = ""
    red = 0
    green = 0
    blue = 0

    constructor(id: number, name: string, hex: string, red: number, green: number, blue: number) {
        this.id = id
        this.name = name
        this.hex = hex
        this.red = red
        this.green = green
        this.blue = blue
    }

    mixin(other: Color): Color {
        const newColor = new Color(this.id + other.id,
            `mixedColor${this.name}${other.name}`,
            this.hex,
            this.red, this.green, this.blue
        );
        return newColor
    }
}

export default Color