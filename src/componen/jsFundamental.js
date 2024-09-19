import React from 'react';

const JsFundamental = () => {
  // if statement
  let time = 30;
  if (time < 10) {
    console.log('kecil dari 10');
  } else if (time < 20) {
    console.log('kecil dari 20');
  } else {
    console.log('yang lain');
  }

  // switch statement
  let fruitType = 'Bananass';

  switch (fruitType) {
    case 'Oranges':
      console.log('Buah Jeruk');
      break;
    case 'Apples':
      console.log('Buah Apel');
      break;
    case 'Banans':
      console.log('Buah Pisang');
      break;
    default:
      console.log(`Sorry tidak kenal ${fruitType}`);
  }

  // object
  const myHonda = {
    type: 'SUV',
    color: 'red',
    wheels: 4,
  };
  console.log(myHonda.type);

  // looping
  for (let step = 0; step < 5; step++) {
    console.log('Step :', step);
  }

  // fungction
  function square(number) {
    return number * number;
  }
  let mySquare = square(12);
  console.log(mySquare);

  //assignment2
  //1
  let cityName = 'Denpasar';
  let number1 = 200;
  let number2 = 800;
  //2
  console.log(cityName);
  console.log(number1);
  console.log(number2);
  //3
  function clone3(myclone) {
    console.log(`${myclone},${myclone},${myclone}`);
    for (let i = 0; i < 3; i++) {
      console.log(i, myclone);
    }
    return <p>{`${myclone},${myclone},${myclone}`}</p>;
  }

  console.log(clone3('doni'));
  //4
  const carItem = {
    itemID: 1,
    itemName: 'Shoe Nike',
    itemPrice: '$56',
    itemQuantitiy: 2,
    cartID: 201,
  };
  function klik(itemName, itemQuantitiy) {
    console.log(carItem.itemName, carItem.itemQuantitiy);
  }
  console.log(klik);
  //5
  let company = 'Koding Akademi';
  let kata1 = 'This is Bootcamp';
  let kata2 = 'Fullstack Web Developer';
  let kata3 = `by "${company}"`;
  console.log(kata1);
  console.log(kata2);
  console.log(kata3);
  //6
  const fruits = ['Jambu', 'Mangga', 'Durian', 'Anggur'];
  //a
  console.log(fruits.length + ' assignment6');
  //b. edit array
  fruits[2] = 'Salak';
  console.log(fruits);
  //c. add array
  fruits.push('Rambutan');
  console.log(fruits);
  //7
  function sum(num1, num2) {
    if (num1 < 100 && num2 < 100) {
      console.log('true ,less than 100');
      return true;
    } else {
      console.log('False ,More than 100');
      return false;
    }
  }

  console.log(sum(80, 90) + 'kondisi1');
  console.log(sum(101, 102) + 'kondisi2');
  //8
  const student = {
    name: 'Wayan Suksme',
    age: 30,
    hobbies: ['Baca', 'ngoding', 'tidur'],
  };
  for (let key in student) {
    console.log(key, ':', student[key]);
  }
  //end
  return (
    <div>
      <button onClick={klik}>klik</button> {clone3('150')}
    </div>
  );
};
//3

export default JsFundamental;
