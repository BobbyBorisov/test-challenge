var assert = require('assert');
import {first, second, third, forth} from '../src/code'

describe('Limechain test', function() {
  describe('question #1', function() {
    it('should print success', function() {
      first(15)
    });
  });

  describe('question #2', function() {
    it('should pass', function() {
      second([
        '[{}]',
        '[{}}]'
      ])

      //Output should be:
      //YES
      //NO
    });
  });

  describe('question #3', function() {
    it('should pass', function() {
      third('spiderman')
    });
  });

  describe('question #4', function() {
    it('should pass', function() {
      forth(1,0,3)
    });
  });
});
