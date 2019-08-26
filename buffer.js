const  { interval }  =  require('rxjs');
const { buffer, take} = require('rxjs/operators');


//  buffer
//  add values into a buffer 
// emit  buffered  values  as array whenever
// inner  observable  emits 

console.log('# emit the buffer after 1000ms');

interval(100)  //  emits value  value  every 100 ms 
    .pipe(
        buffer(interval(1000)),
        take(3) //  this will  limit only 3 value    
    )
    .subscribe(
        i => console.log(i),
        e =>  console.log(e),
        () =>  console.log('finish')
        );