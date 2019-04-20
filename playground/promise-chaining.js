require('../src/db/mongoose')
const User = require('../src/models/user');

//5c8d0cd175faf51550b2e7fe
User.findByIdAndUpdate('5c8d0cd175faf51550b2e7fe',{
    age: 1
}
).then((user) => {
    console.log(user);
    return User.countDocuments({age:1});
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e);
});