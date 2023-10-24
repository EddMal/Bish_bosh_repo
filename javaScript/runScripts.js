
//already implied in classes and modules when use of them, forces declaration of variables.
//'use strict';


// Best practise declare a const object for global variables to reduce clutter.
/* const app = {
     rename1: 'value',
     rename2: 'value',
     rename3: 'value'
}; */

// include function:
/* import { bishBosh } from 'javaScripts'; */

console.log('Test');

function bishBosh() {
     for (let i = 1; i <= 101; i++) {
         if ((i % 3 == 0) && (i % 4 == 0)) {
             //list Bish-Bosh
             console.log('Bish-Bosh');
         }
         else if ((i % 3) == 0) {
             //list Bish
             console.log('Bish');
         } 
         else if ((i % 4) == 0) {
          //list Bish
          console.log('Bosh');
         }
         else {
             //list number // ´${i}´??
             console.log(i);
         }
 
     }
 }

 let c = bishBosh(); 

//bishBosh();
