// 1. Copy and paste your prototype in here and refactor into class syntax.
class CuboidMaker {
    constructor(prop) {
        for (let key of ['length', 'width', 'height']) {
            this[key] = prop[key]
        }
    }
    volume() {return this.length * this.width * this.height}
    surfaceArea() {return 2 * (this.length * this.width + this.length * this.height + this.width * this.height)}
}

/* == Step 4: Create a new object that uses CuboidMaker ==
  Create a cuboid object that uses the new keyword to use our CuboidMaker constructor
  Add properties and values of length: 4, width: 5, and height: 5 to cuboid.   
*/
const cuboid = new CuboidMaker({length: 4, width: 5, height: 5})

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker {
    constructor(length) {
        super({length: length, width: length, height: length})
    }
    // new methods are not needed, cubes are also rectangular prisms and can use the same formula
}

const cubeOne = new CubeMaker(1)
console.log(cubeOne.volume()) // 1*1*1 = 1
console.log(cubeOne.surfaceArea()) // 1*1*6 = 6

const cubeTwo = new CubeMaker(2)
console.log(cubeTwo.volume()) // 2*2*2 = 8
console.log(cubeTwo.surfaceArea()) // 2*2*6 = 24

const cubeThree = new CubeMaker(3)
console.log(cubeThree.volume()) // 3*3*3 = 27
console.log(cubeThree.surfaceArea()) // 3*3*6 = 54