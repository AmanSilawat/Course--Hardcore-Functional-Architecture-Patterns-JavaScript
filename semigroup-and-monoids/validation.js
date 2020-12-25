const { List } = require('immutable-ext');
const { Either } = require('../lib/types');
const { Left, Right } = Either;

const isPresent = x => !!x;


const validate = (spec, obj) =>
    List(Object.keys(spec)).foldMap(key => {
        spec[key](obj[key]) ? Right(First([obj])) : Left([`${key} bad`]);
    }, Either.of(First([obj])));

const validations = { name: isPresend, email: isPresend };
const obj = { name: 'aman', email: 'aman.khan.silawat.aks@gmail.com' };
const res = validate(validations, obj);

isPresend(obj.name).concate(isEmail(obj.email));

res.fold(console.log, console.log);