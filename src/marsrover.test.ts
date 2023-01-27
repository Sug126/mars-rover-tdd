import MarsRover from './marsRover';

describe('Mars Rover', () => {
    it.each`instructions | expectedOrientation 
            ${'L'}       | ${'0:0:W'}
            ${'LL'}      | ${'0:0:S'}
            ${'LLL'}     | ${'0:0:E'}
    `('should be in position $expectedOrientation when given $instructions',
        ({instructions, expectedOrientation}) => {
            const marsRover = new MarsRover();

            expect(marsRover.executeInstructions(instructions)).toBe(expectedOrientation);
        });

    it('should be in position 0:1:N when given instruction M', () => {
        const marsRover = new MarsRover();

        expect(marsRover.executeInstructions('M')).toBe('0:1:N');
    })

    it('should be in position 1:0:N when given instruction RM', () => {
        const marsRover = new MarsRover();

        expect(marsRover.executeInstructions('RM')).toBe('1:0:E');
    })

    it('should be in position 2:1:E when given instruction MRMM', () => {
        const marsRover = new MarsRover();

        expect(marsRover.executeInstructions('MRMM')).toBe('2:1:E');
    })

    it('should be in position 0:0:N when given instruction MMMMMMMMMM', () => {
        const marsRover = new MarsRover();

        expect(marsRover.executeInstructions('MMMMMMMMMM')).toBe('0:0:N');
    })

    it('should be in position 0:0:E when given instruction RMMMMMMMMMM', () => {
        const marsRover = new MarsRover();

        expect(marsRover.executeInstructions('RMMMMMMMMMM')).toBe('0:0:E');
    })
     it('should be in position 1:2:N when given instruction LMLMLMLMM', () => {
        const marsRover = new MarsRover();

        expect(marsRover.executeInstructions('LMLMLMLMM')).toBe('1:2:N');
    })
   
})  