type Heading = "N" | "W" | "S" | "E";
type Coordinates = [x: number, y: number];
export type Rover = {
  heading: Heading;
  position: Coordinates;
};
const Compass: Array<Heading> = ["N", "E", "S", "W"];

export type ExecuteResult =
  | (Rover & { _: "Success" })
  | (Rover & { _: "Failure" });

const rotate =
  (turns: number) =>
  (rover: Rover): ExecuteResult => {
    const idx = Compass.indexOf(rover.heading);
    const newHeading = Compass[(idx + turns) % 4];
    return { ...rover, heading: newHeading, _: "Success" };
  };

const turnLeft = rotate(3);
const turnRight = rotate(1);

const getNextPosition = (
  heading: Heading,
  position: Coordinates
): Coordinates => {
  const [x, y] = position;
  if (heading == "N") return [x, y + 1];
  if (heading == "E") return [x + 1, y];
  if (heading == "S") return [x, y - 1];
  if (heading == "W") return [x - 1, y];
};


const outOfBounds = (next: Coordinates, max: Coordinates) => next[0] < 0 ||
next[1] < 0 || 
next[0] > max[0] || 
next[1] > next[1]

const move = (state: ExecuteResult, maxPos: Coordinates): ExecuteResult => {
  const nextPos = getNextPosition(state.heading, state.position);
  if(outOfBounds(nextPos, maxPos)) return{ ...state, _:"Failure"}
  return { ...state, position: nextPos };
};

export const apply = (state: ExecuteResult, command: string, maxPos:Coordinates): ExecuteResult => {
  if (command === "L") return turnLeft(state);
  if (command === "R") return turnRight(state);
  if (command === "M") return move(state, maxPos);
};

export const execute = (commands: string, state: ExecuteResult, maxPos: Coordinates) =>{
    let result = state
    for (const c of commands.split(" ")){
    result = apply(result, c, maxPos)
    if (result._ === "Failure") break;
}
    return result
}


const initialState = (location: string): ExecuteResult => {
  const [x, y, heading] = location.split(" ");
  return {heading, position: [parseInt(x), parseInt(y)], _:"Success"};
};
const print = (state: ExecuteResult) => {
  const location = `${state.position[0]} ${state.position[1]} ${state.heading}`;
  return state._ === "Success" ? location : `F ${location}`;
};

export const run = (program: Array<string>): Array<string> => {
  const output = [];
 const [maxX, maxY] = program.shift().split(" ")
 const maxPos: Coordinates = [parseInt(maxX), parseInt(maxY)]
  while (program.length > 0) {
    const [location, commands] = [program.shift(), program.shift()];
    const state = execute(commands, initialState(location), maxPos);
    output.push(print(state));
  }
  return output;
};
