import expect from 'expect';
import deepFreeze from 'deep-freeze';
import {addCounter} from '../src/lib/array-mutation';

describe('Array Mutation', function () {
  describe('addCounter', function () {
    it('should return new array', function () {
      const testAddCounter = () => {
        const listBefore = [];
        const listAfter = [0];
        deepFreeze(listBefore);
        expect(
          addCounter(listBefore)
        ).toEqual(listAfter);
      };
      testAddCounter();
    });
  });
});