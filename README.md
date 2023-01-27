# Mars Rover Kata


👾 🚀 You are working in an Engineering Squad for the 🎶 Melody Mars Mission, tasked with designing software to manage robots 🤖 and cool vehicles for space exploration! 👽 🛸🌏

## INSTRUCTIONS

The Plateau is divided into a grid. A Rover’s position is represented by x and y co-ordinates and the letters N, S, W, E to represent North, South, West, East (the four cardinal compass points) respectively.

Example
0 0 N

This means the Rover is at the bottom-left corner facing in the North direction.

N.B. Assume that the square directly North from (x, y) is (x, y+1), and the square directly

East from (x, y) is (x + 1, y)

To move a Rover around the Plateau, a string of letters is sent to a Rover.

Here are the letters and their resultant action:

L - Spins the Rover 90 degrees Left without moving from the current coordinate point

R - Spins the Rover 90 degrees Right without moving from the current coordinate point

M - Moves the Rover forward by one grid point, maintaining the same heading (i.e. from where the Rover is facing (its orientation)).

Assume that the square directly North from (x, y) is (x, y+1).

Rovers move sequentially, this means that the first Rover needs to finish moving first before the next one can move.



## Install & Run All tests
npm start


## Run Tests

npm run watch-all
