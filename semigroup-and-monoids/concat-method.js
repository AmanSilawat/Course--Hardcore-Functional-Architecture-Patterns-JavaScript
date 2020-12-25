const { Id, Task, Either } = require('../../lib/types');
const { Left, Right } = Either;

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

const All = x => ({
    x,
    concat: other => All(x && other.x)
});
All.empty = () => All(true);


console.log(res.fold(id, id));

