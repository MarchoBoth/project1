import React from 'react';

export const JsEs6 = () => {
  //class
  class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
    CariKell() {
      return 2 * (this.height + this.width);
    }
  }

  const square = new Rectangle(10, 10);
  console.log(square);
  console.log(`Keliling nya adalah ${square.CariKell()}`);
  // array find
  const array1 = [5, 12, 8, 130, 144];
  const found = array1.find((element) => element > 10);
  console.log(found);
  // array filter
  const heros = [
    'axe',
    'bloodseeker',
    'strom spirit',
    'earth seeker',
    'tingker',
    'jug',
    'lion',
  ];
  const result = heros.filter((dota) => dota.length > 6);
  console.log(result);
  // array map
  const array2 = [1, 4, 9, 16];
  //pass a fucntion to map
  const map1 = array2.map((x) => x * 2);
  console.log(map1); // Array [2,8,18,32]
  const number2 = [1, 4, 9, 16];
  const newNumbers = number2.map(function (number) {
    return number2 * 2;
  });
  console.log(newNumbers); //[2,8,18,32]
  const myArray = ['apple', 'banana', 'orange'];
  const myList = myArray.map((item) => <p>{item}</p>);
  console.log(myList);
  const items = [
    {
      id: 1,
      title: 'topi army',
      category: 'topi',
      price: 150000,
      img: './images/topi.jpg',
    },
    {
      id: 2,
      title: 'topi army',
      category: 'topi',
      price: 150000,
      img: './images/topi.jpg',
    },
  ];
  const myitems = items.map((item) => item.category);
  console.log(myitems);

  //destructuring
  const veicles = ['mustang', 'f-150', 'expedition'];
  console.log(veicles);
  //oll way
  //const car = veicles[0];
  //const truck = veicles[1];
  //const suv = veicles[2];

  const veicles2 = ['mustang', 'f-150', 'expedition'];
  const [car, truck, suv] = veicles2;
  console.log(veicles2);
  console.log(car);
  const x = [1, 2, 3, 4, 5];
  const [y, z] = x;
  console.log(y);
  console.log(z);
  return <div>JsEs6</div>;
};
