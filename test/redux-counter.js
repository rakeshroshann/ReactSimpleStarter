import expect from 'expect';
import deepFreeze from 'deep-freeze';

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
    const addCounter = (list) => {
      //list.push(0);
      return list.concat(0);
    };

    const removeCounter = (list, index) => {
      return [
        ...list.slice(0, index),
        ...list.slice(index + 1)
      ];
    };

    const testAddCounter = () => {
      const listBefore = [];
      const listAfter = [0];

      deepFreeze(listBefore);

      expect(
        addCounter(listBefore)
      ).toEqual(listAfter);

    };

    testAddCounter();

    console.log('All test passed!!')
    });
  });
});