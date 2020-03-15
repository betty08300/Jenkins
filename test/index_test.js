const { isPositive, range, double, Dog, fetchDirector } = require('../index');
const assert = require('assert');


describe( '#isPositive', function(){
  it('should return true when the number is positive', function(){
    assert.equal(isPositive(10), true); 
  })
  
  it('should return false  when the number is negative', function(){
    assert.equal(isPositive(-5), false); 
  })

  it('should return false when the number is equal to 0', function(){
    assert.equal(isPositive(0), false);
  })
})

describe('#range', function(){
  it('should return the number from 1 up to n in the array', function(){
    assert.deepEqual(range(4), [1,2,3,4]);
  })
})

describe('#double', function(){
  it('should return an array of twice every element', function(){
    assert.deepEqual(double([1,2,3]), [2,4,6]); 
  })

  it('should return the original array', function(){
    let array = [1,2,3];
    assert.equal((double(array)), array)
  })

  it('should mutate the original array', function(){
    let array = [1,2,3];
    double(array)
    assert.deepEqual((array), [2,4,6])
  })

})

describe("Dog", function(){
  let dog1;
  let dog2; 
  let dog3;
  let dog4;

  beforeEach(function(){
    dog1 = new Dog('fido', 4);
    dog2 = new Dog('snoopy', 2);
    dog3 = new Dog('JJ', 10);
    dog4 = new Dog('Richard', 50);
  })

  it('should be initialized with name and age', function(){
    
    assert.equal(dog1.name, 'fido');
    assert.equal(dog1.age, '4'); 

    assert.equal(dog2.name, 'snoopy');
    assert.equal(dog2.age, 2); 

  })

  describe('#bark', function(){
    it('should return name of the dog that barks', function(){
      assert.equal(dog3.bark(), 'JJ barks')
    })
  })

  describe('#run', function(){
    it('should return name of the dog that runs', function(){
      assert.equal(dog4.run(), 'Richard runs')
    })
  })
})

describe('#fetchDirector', function(){
  it('should return a string of movie\'s director', async function(){
    assert.equal(await fetchDirector('The Matrix'), 'Lana Wachowski, Lilly Wachowski')
  });
})


//console.log('running test')