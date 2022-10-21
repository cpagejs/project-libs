import 'mocha';
import { expect } from 'chai';
import arrayDiff from '../src/array/arrayDiff';
import arrayIntersection from '../src/array/arrayIntersection';

describe('array数组处理', function(){
  it('arrayDiff', function() {
    const a = [1,2];
    const b = [1,3];
    expect(arrayDiff(a, b)).to.eql([2,3]);
  });

  it('arrayIntersection', function() {
    const a = [1,2];
    const b = [1,3];
    expect(arrayIntersection(a, b)).to.eql([1]);
  });
});