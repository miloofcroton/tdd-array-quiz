const assert = require('assert');
const why = require('../lib/why');

describe('why tests', () => {


    it('removes words with y and Y', () => {

        const attempt = why(['dog', 'doggy', 'Yes', 'No']);
        const expected = ['dog', 'No'];
        assert.equal(attempt, expected);
    });

    
});