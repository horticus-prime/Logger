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

let reqData = (message) => {
  console.log(message);
};

describe('req Data', () => {
  it('test req Data', () => {
    let data = 'Hello';
    expect(reqData(data)).toBe(console.log('Hello'));
  })
})

// describe('Hello World Function', () => {
//   it('should return Hello World', () => {
//     expect(helloWorld()).toBe('Hello World!');
//   })
// })