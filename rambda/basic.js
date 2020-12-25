console.log(R.add(2, 3)); // 5
console.log(R.add(2)(3)); // 5

const equals3 = R.equals(3);
console.log( R.all(equals3)([3, 3, 3, 3] )); //=> true
console.log(R.all(equals3)([3, 3, 1, 3])); //=> false

const t = R.always('Tee');
t(); //=> 'Tee'