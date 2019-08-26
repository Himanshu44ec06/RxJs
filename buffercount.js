// buffer count 
//  add value  into buffer untill  full
//  then emit  the buffer
const  { of }  =  require('rxjs');
const { bufferCount } = require('rxjs/operators');

// #region Exmaple 1
console.log('# emits buffer  of 2 values or when complete')

of(1,2,3)
    .pipe(  bufferCount(2) )
    .subscribe(
        i => console.log(i), 
        e =>  console.log(e),
        () => console.log('finish')
    )

// #endregion