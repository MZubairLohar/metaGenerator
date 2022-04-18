
const fs = require('fs');
const sha1 = require("./node_modules/sha1");
const jsonData= require('./traits copy.json');
var count = 0;
function nameTo (){
    console.log(jsonData[count].tokenId, "== ", count);
        let myjson = {

            name : `Cheeky Cub Club ${count}`,
            image : "https://ipfs.io/ipfs/QmQvgxYTzc9UowgewEen1T8SXWv3JUWQ4aodrw1emcfnc1",
            dna: `${sha1(count)}`,
            edition : count,
            attribute : [
            { 
                trait_type : "Background",
                value : jsonData[count].Background,
            },
            { 
                trait_type : "Back",
                value : jsonData[count].Back,
            },
            { 
                trait_type : "Skin",
                value : jsonData[count].Skin,
            },
            { 
                trait_type : "tattoo",
                value : jsonData[count].tattoo,
            },
            { 
                trait_type : "Mane",
                value : jsonData[count].Mane,
            },
            { 
                trait_type : "wrist",
                value : jsonData[count].wrist,
            },
            { 
                trait_type : "Body Gear",
                value : jsonData[count].BodyGear,
            },
            { 
                trait_type : "Head Gear",
                value : jsonData[count].HeadGear ,
            },
            { 
                trait_type : "Neck",
                value : jsonData[count].Neck ,
            },
            { 
                trait_type : "Ear",
                value : jsonData[count].Ear ,
            },
            { 
                trait_type : "Mouth",
                value : jsonData[count].Mouth ,
            },
            { 
                trait_type : "Eyes",
                value : jsonData[count].Eyes ,
            }   
        ]
    }
    if(count <= 20){
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