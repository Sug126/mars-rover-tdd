import MarsRover from './marsrover'

export abstract class Command{
    constructor(public marsRover = new MarsRover()){

    }

    abstract execute() : void
}