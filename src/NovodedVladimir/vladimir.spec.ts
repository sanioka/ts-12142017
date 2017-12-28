import { expect } from 'chai';
import { isInArray } from './isInArray';


describe('isInArray function', () => {
  it('should return false isInArray([1,"2", true], 1,false,5)', () => {
    const result: boolean = isInArray([1, '2', true], 1, false, 5);
    expect(result)
      .to
      .equal(false);
  });
  it('should return true isInArray([1,"2", true], 1,"2", true])', () => {
    const result: boolean = isInArray([1, '2', true], 1, '2', true);
    expect(result)
      .to
      .equal(true);
  });
});