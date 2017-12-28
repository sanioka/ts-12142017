import { expect } from 'chai';
import { isInArray } from './w1_isInArray';
import { summator } from './w2_summator';
import {reverceLettersOnly} from './w4_reverseLettersOnly';

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
  it('should return 40', () => {
    expect(summator(10, 10, 2, 8, 5, 5))
      .to
      .equal(40);
  });

});

describe('reverceLettersOnly work', () => {
  it('should reverse letters ', () => {
    expect(reverceLettersOnly('s1tar3t 2 hellow'))
      .to
      .equal('t1rat3s 2 wolleh');
    expect(reverceLettersOnly('s1ta$%r3t 2 hel^low'))
      .to
      .equal('t1ra$%t3s 2 wol^leh');
    expect(reverceLettersOnly('s1tar3t 2   low5'))
      .to
      .equal('t1rat3s 2   wol5');
  });


});