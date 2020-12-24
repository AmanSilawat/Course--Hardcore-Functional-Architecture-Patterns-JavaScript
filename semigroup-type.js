// Semigroup
const Sum = x => ({
    x,
    concat: other => Sum(x + other.x)
});

const Product = x => ({
    x,
    concat: other => Product(x * other.x)
});

const Any = x => ({
    x,
    concat: other => Any(x || other.x)
});

console.log(Sum(10).concat(Sum(5)));
console.log(Product(10).concat(Product(5)));
console.log(Any(true).concat(Any(true)));
console.log(Any(false).concat(Any(true)));