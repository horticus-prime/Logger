'use strict';

const logger = require('../logger.js');

describe('logger module', () => {
  it('Should console.log when called', () => {
    // arrange 
    let spy = jest.spyOn(console, 'log');

    // act
    logger('message', 'type');
    // assert

    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });
});

describe('hello World', () => {
  it('test return', () => {
    logger.helloWorld;
    expect(logger.helloWorld).toBe(undefined);
  });
});
