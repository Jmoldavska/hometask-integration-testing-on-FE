# hometask-integration-testing-on-FE
Project creation, setting up the basic structure for writing both code and tests.

## Steps to install project and run tests:

- First of all navigate to the project root in the terminal. 
- Run `yarn` in order to set up dependencies.
- Check your "./package.json" file
```
"devDependencies": {
    "@babel/core": "^7.20.2",
    "@babel/preset-env": "^7.20.2",
    "babel-jest": "^29.2.2",
    "jest": "^29.2.2"
  }
  ```
  - Check Scripts part in "./package.json" file. It suppose to be choosen "jest" :
  ```
  "scripts": {
    "test": "jest"
  }
  ```
  - Check "./rectangle.js/ file. In order to import functions to the tests folder it used to be added "export", like this :
  ```
  export function getRectanglePerimeter(length, width) {
    return 2 * (length + width);
}

export function getRectangleArea(length, width) {
    return length * width;
}
export function getRectangleInfo(length, width) {
    const area = getRectangleArea(length, width);
    const perimeter = getRectanglePerimeter(length, width);
    return console.log(`The perimeter of a rectangle is ${perimeter} and the area is ${area}`)
}
export default {getRectanglePerimeter,getRectangleArea,getRectangleInfo};
```
- run `yarn test` command in terminal.