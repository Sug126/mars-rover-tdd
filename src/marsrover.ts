import  MarsPlateau from './Pleateau'
import { RotateLeft } from './move'
import { RotateRight } from './move'
import { MoveForward } from './move'

export default class MarsRover {
  constructor(private orientation = 'N', private coordinates = {
    x:0,
    y:0
  }, private Mars = new Mars()) 
}