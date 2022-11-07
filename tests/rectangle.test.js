import {getRectanglePerimeter} from "../js/rectangle";
test ('should count output of perimeter',()=>{
    const outputPerimeter = getRectanglePerimeter(2,4);
    expect (outputPerimeter).toBe(12);
});

import { getRectangleArea } from "../js/rectangle";
test ('should count output of area',()=>{
const outputArea = getRectangleArea (2,4);
expect(outputArea).toBe(8);
});

import { getRectangleInfo } from "../js/rectangle";
test('should generate a correct info of Rectangle',()=>{
    const infoRectangle = getRectangleInfo (2,4);
});
