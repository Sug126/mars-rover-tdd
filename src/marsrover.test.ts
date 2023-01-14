import { turnLeft, turnRight, move} from './marsrover'

test.each`
original | expected
 ${"N"}  | ${"W"} 
 ${"W"}  | ${"S"} 
 ${"S"}  | ${"E"} 
 ${"E"}  | ${"N"} 
`
(
"when facing original, turning left should turn to $expected",
({original, expected}) => expect(turnLeft(original)).toBe(expected)
)

test.each`
original | expected
 ${"N"}  | ${"E"} 
 ${"E"}  | ${"S"} 
 ${"S"}  | ${"W"} 
 ${"W"}  | ${"N"} 
`
(
"when facing $original, turning right should turn to $expected",
({original, expected}) => expect(turnRight(original)).toBe(expected)
)

