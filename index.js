const fetch = require('node-fetch');

const isPositive = (n) => {
  return n > 0; 
}

const range = (n) => {
  let numbers = [];
  for (let i = 1; i <= n; i++){
    numbers.push(i);
  }

  return numbers; 
}

const double = (arr) => {
  for (i = 0; i < arr.length; i++){
    arr[i] *= 2
  }

  return arr;
}


class Dog{
  constructor(name, age){
    this.name = name,
    this.age = age
  }

  bark(){
    return `${this.name} barks`
  }

  run(){
    return `${this.name} runs`
  }

}

const fetchDirector = async(title) => {
  const api = `http://www.omdbapi.com/?t=${title}&apikey=3a92536e`;
  const resp = await fetch(api)
  const movie = await resp.json();
  return movie.Director 

}


module.exports = {
  isPositive,
  range,
  double,
  Dog,
  fetchDirector
}

