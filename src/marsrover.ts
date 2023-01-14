type Heading = "N" | "W" | "S" | "E"
const Compass : Array<Heading> = ['N','E', 'S', 'W']
type Coordinates = [x:number, y:number]


export const rotate = (turns: number)=> (heading: Heading) =>{
    const idx = Compass.indexOf(heading)
    return Compass[(idx + turns) % 4]

}

export  const turnLeft =  rotate(3)
export const turnRight = rotate(1)

export const move = (heading: Heading, position: Coordinates) =>{
 const[x, y] = position
 if(heading == "N") return [x, y+1]
 if(heading == "E") return [x+1, y]
 if(heading == "S") return [x, y -1]
 if(heading == "W") return [x -1, y]
}


