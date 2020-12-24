// Moniod = Semigroup + Identity

const Product = x => ({
    x,
    concat: other => Product(x * other.x)
});
Product.empty = () => Product(1);

const Sum = x => ({
    x,
    concat: other => Sum(x + other.x)
});
Sum.empty = () => Sum(0);

const Any = x => ({
    x,
    concat: other => Any(x || other.x)
});
Any.empty = () => Any(false);

const All = x => ({
    x,
    concat: other => All(x && other.x)
});
All.empty = () => All(true);

console.log(Product.empty().concat(Product(10)));
console.log(Sum.empty().concat(Sum(10)));


const sum = [4, 4]
    .map(Sum)
    .reduce((acc, n) => acc.concat(n), Sum.empty())

const product = [4, 4]
    .map(Product)
    .reduce((acc, n) => acc.concat(n), Product.empty())

const any = [true, false]
    .map(Any)
    .reduce((acc, n) => acc.concat(n), Any.empty())

const all = [true, true]
    .map(All)
    .reduce((acc, n) => acc.concat(n), All.empty())

console.log(sum);
console.log(product);
console.log(any);
console.log(all);