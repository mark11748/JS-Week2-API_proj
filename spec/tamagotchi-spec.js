import { myClass } from './../js/testAPI.js';

describe('', function () {
  let thing = new myClass("thing");

  beforeEach(function() {
    jasmine.clock().install();
    thing.setStopwatch();
  });

  afterEach(function() {
    jasmine.clock().uninstall();
    thing.setStopwatch(false);
    thing.stopwatch = 30;
  });

  it('should have a name and start with a countdown time of 30', function() {
    expect(thing.name).toEqual("thing");
    expect(thing.stopwatch).toEqual(30);
  });

  it('should have a time of 23 seconds after 7001 milliseconds', function() {
    jasmine.clock().tick(8001);
    expect(thing.stopwatch).toEqual(22);
  });

  it('should have a time of 0 at 30000 milliseconds', function() {
    jasmine.clock().tick(30000);
    expect(thing.stopwatch).toEqual(0);
  });

  it('should have a time of 30 after 31000 milliseconds', function() {
    jasmine.clock().tick(31000);
    expect(thing.stopwatch).toEqual(30);
  });

  it('should add 5 seconds to the stopwatch when user clicks Feed button', function() {
    thing.feed();
    expect(thing.stopwatch).toEqual(35);
  });
});
