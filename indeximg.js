const fs = require('fs');


var count = 3994;
function test(){
    // var filePathCopy = `./rename/${count}.jpg`;
    console.log(count);
    if(count <= 3998){
        fs.copyFile(`./rename/${count}.jpg`,`./renameNew/${++count}.jpg`,(err) => {
            if (err) console.log("Error writing file:", err);
        });
        // count++;
        test();

    }    
}

test();

// 1:  // 6 
// 2:  // 43
// 3:  // 126
// 4:  // 187   __ 185
// 5:  // 232   __ 228
// 6:  // 301   __ 296
// 7:  // 362   __ 357
// 8:  // 944   __ 938
// 9:  // 1063  __ 955
// 10: // 1220  __ 1055
// 11: // 2114  __ 1211
// 12: // 2922  __ 2105
// 13: // 3221  __ 2911
// 14: // 3740  __ 3209
// 15: // 3816  __ 3803
// 16: // 3912  __ 3891