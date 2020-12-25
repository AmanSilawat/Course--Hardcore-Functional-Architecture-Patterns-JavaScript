const { List } = require('immutable-ext');
// Moniod = Semigroup + Identity



const Intersection = x => ({
    x,
    concat: other => Intersection(_.intersection(x, other.x))
});
// Intersection.empty = () => Intersection(true);

Intersection([1, 2, 3, 4]).concat(Intersection([12, 3, 4, 5]));

const res = List([true, true, false]).foldMap(All, All.empty());
console.log(res);