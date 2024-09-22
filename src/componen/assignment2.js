import React from 'react';

export const Assignment2 = () => {
  //1
  //a
  const panajngString = (str) => {
    console.log('Panajng string:', str.length);
  };
  panajngString('Koding Akademi');
  //b
  const jumlah = (angka1, angka2) => angka1 + angka2;
  console.log(jumlah(1, 2));
  //c
  const hitung = (a, b) => {
    let c = 5;
    return (a + b) * c;
  };
  console.log(hitung(1, 3));
  //2
  class Point {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
    plus(otherPoint) {
      return new Point(this.x + otherPoint.x, this.y + otherPoint.y);
    }
  }
  const point1 = new Point(3, 4);
  const point2 = new Point(2, 3);

  const result = point1.plus(point2);
  console.log(`Point is in position (${result.x}, ${result.y})`);
  //3
  const inventory = [
    { type: 'machine', value: 5000 },
    { type: 'machine', value: 650 },
    { type: 'duck', value: 10 },
    { type: 'furniture', value: 1200 },
    { type: 'machine', value: 77 },
  ];
  const valueInventory = inventory.map((item) => item.value);
  console.log(valueInventory);
  const sum = valueInventory.reduce((total, value) => total + value, 0);
  console.log(sum);
  //4
  const array1 = [5, 12, 8, 130, 144];
  const found = array1.find((element) => element > 10);
  console.log(found);

  const lastElement = (arr) => {
    return arr.findLast(() => true);
  };

  const last = lastElement([1, 2, 3, 4, 5]);
  console.log(last);
  //5
  const companies = [
    { name: 'Company 1', category: 'Finance', start: 1981, end: 2004 },
    { name: 'Company 2', category: 'Retail', start: 1992, end: 2008 },
    { name: 'Company 3', category: 'Auto', start: 1999, end: 2007 },
    { name: 'Company 4', category: 'Retail', start: 1989, end: 2010 },
    { name: 'Company 5', category: 'Technology', start: 2009, end: 2014 },
  ];

  //a print nama company menggunakan forEach
  companies.forEach((arr) => {
    console.log(arr.name, 'Jawaban A');
  });
  //b print nama company yang mulai setelah 1987
  companies.forEach((arr) => {
    if (arr.start > 1987) {
      console.log(arr.name, 'Jawaban B');
    }
  });
  //c ambil nama company yang memiliki kategory retail
  const retailCompanies = companies.filter((arr) => arr.category === 'Retail');
  retailCompanies.forEach((arr) => {
    console.log(arr.name, 'Jawaban C');
  });
  //d sort data end year secara ascending
  const sortedCompanies = companies.sort((a, b) => a.end - b.end);
  sortedCompanies.forEach((arr) => {
    console.log(`${arr.name} (${arr.start} - ${arr.end})`);
  });
  //e destruck data street
  const person = {
    name: 'Costas',
    address: {
      street: 'Lalaland 12',
    },
  };
  const {
    address: { street },
  } = person;

  console.log(street);
  //6
  const users = [
    { id: 1, name: 'Doni', city: 'Denpasar', age: 35 },
    { id: 2, name: 'Tono', city: 'Gianyar', age: 46 },
    { id: 3, name: 'Bento', city: 'Surabaya', age: 22 },
    { id: 4, name: 'Komang', city: 'Jakarta', age: 16 },
  ];
  //a gunakan array find methode untuk mengeprint user dengan ID =2
  const foundId = users.find((arr) => arr.id === 2);
  console.log('user', foundId);
  //b membuat array baru menggunakan metode map yang berisikan kumpulan data city dari array usser
  const myCity = users.map((arr) => arr.city);
  console.log('My City', myCity);
  //c membuat array baru menggunakan metode filter yang menampilkan user dengan umur lebih dari 18
  const foundAge = users.filter((arr) => arr.age > 18);
  console.log('Adults', foundAge);
  return (
    <div>
      <ul>
        {retailCompanies.map((a, b) => (
          <li key={b}> {a.name}</li>
        ))}
      </ul>
      <p>{street}</p>
    </div>
  );
};
