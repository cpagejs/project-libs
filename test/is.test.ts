import 'mocha';
import { expect } from 'chai';
import isEmpty from '../src/is/isEmpty';

describe('is', function(){
  it('isEmpty', function() {
    expect(isEmpty('')).to.be.equal(true);
    expect(isEmpty(undefined)).to.be.equal(true);
    expect(isEmpty([])).to.be.equal(true);
    expect(isEmpty({})).to.be.equal(true);
    expect(isEmpty([1])).to.be.equal(false);
    expect(isEmpty({id:1})).to.be.equal(true);
  });
});