import 'mocha';
import { expect } from 'chai';
import arrayDiff from '../src/array/arrayDiff';
import arrayIntersection from '../src/array/arrayIntersection';

describe('array数组处理', function(){
  it('arrayDiff', function() {
    const a = [1,2];
    const b = [1,3];
    expect(arrayDiff(a, b)).to.eql([2,3]);
    const a2 = [1,{id:1}];
    const b2 = [1,3];
    expect(arrayDiff(a2, b2)).to.eql([{id:1},3]);
    expect(arrayDiff([{id:1},{id:123}], [{id:1},{id:123456}])).to.eql([{id:123456}]);
  });

  it('arrayIntersection', function() {
    const a = [1,2];
    const b = [1,3];
    expect(arrayIntersection(a, b)).to.eql([1]);
  });
});