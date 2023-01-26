import {Command} from "./command"


export class RotateRight extends Command {
    execute: void {
        this.marsRover.rotateRight()
    }
}


export class RotateLeft extends Command {
    execute: void {
        this.marsRover.rotateLeft()
    }
}


export class MoveForward extends Command {
    execute: void {
        this.marsRover.moveForward()
    }
}