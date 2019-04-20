require('../src/db/mongoose')
const Task = require('../src/models/task');


Task.findByIdAndDelete('5c8d388316982f48a40418f8').then(() => {
   return Task.countDocuments({completed:false});
}).then((result) => {
    console.log(result)
}).catch((e)=>{
    console.log(e);
});
