// function outer() {
//     let hero = 'Ironman';

//     function inner() { // it works just like a variable I declared in outer
//         let cryForHelp = `${hero}, help!`;
//         console.log(cryForHelp);
//         let x = 10;
//     }

//     inner();
//     // console.log(x); // it will show error because x is in the inner() scope.

// }

// outer();
// // inner(); // error: inner is not defined

// function outer() {
//     let hero = 'Ironman';

//     function inner() { 
//         let hero = 'Captain America';
//         let cryForHelp = `${hero}, help!`;
//         console.log(cryForHelp); // it will print "Captain America". because in inner(), it will see if there is a "hero" in that function. if it doesn't find any "hero" variable, it will look further up.
//     }

//     inner();
    
// }

// outer();

// function outer() {
//     let hero = 'Ironman';

//     function inner() { 
//         let hero = 'Captain America';
        
//         function extraInner() {
//             let cryForHelp = `${hero}, help!`;
//             console.log(cryForHelp); // it will print "Captain America" becuase this function found hero variable in nearest inner() scope first.
//         }

//         extraInner();
//     }

//     inner();
    
// }

// outer();


function outer() {
    let hero = 'Ironman';

    function inner() { 
        function extraInner() {
            let cryForHelp = `${hero}, help!`;
            console.log(cryForHelp); // it will print "Ironman" becuase this function found hero variable in outer() scope.
        }

        extraInner();
    }

    inner();
    
}

outer();