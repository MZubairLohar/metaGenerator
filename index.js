
const fs = require('fs');
const sha1 = require("./node_modules/sha1");

var count = 7998;
function nameTo (){
    let myjson = {
        name : `Cheeky Cub Club ${count}`,
        image : "https://ipfs.io/ipfs/QmQvgxYTzc9UowgewEen1T8SXWv3JUWQ4aodrw1emcfnc1",
        dna: `${sha1(count)}`,
        edition : count,
        attribute : [
        { 
            trait_type : "Background",
            value : "unrevealed",
        },
        { 
            trait_type : "Back",
            value : "unrevealed",
        },
        { 
            trait_type : "Skin",
            value : "unrevealed",
        },
        { 
            trait_type : "tattoo",
            value : "unrevealed",
        },
        { 
            trait_type : "Mane",
            value : "unrevealed",
        },
        { 
            trait_type : "wrist",
            value : "unrevealed",
        },
        { 
            trait_type : "Body Gear",
            value : "unrevealed",
        },
        { 
            trait_type : "Head Gear",
            value : "unrevealed",
        },
        { 
            trait_type : "Neck",
            value : "unrevealed",
        },
        { 
            trait_type : "Ear",
            value : "unrevealed",
        },
        { 
            trait_type : "Mouth",
            value : "unrevealed",
        },
        { 
            trait_type : "Eyes",
            value : "unrevealed",
        }   
    ]
}
if(count <= 8000){
    fs.writeFile(
        `./metadata/${count}.json`,
        JSON.stringify(myjson),
        (err) => {
            if (err) console.log("Error writing file:", err);
        }
    );
    count++;
    nameTo();
    }
}
nameTo();