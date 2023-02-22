function makeADictonary(arr) {


    let sortedDictonary = [];
    arr.forEach(el => {
        let dictonary = {};

        let term = JSON.parse(el);

        for (const key in term) {

            dictonary["Term"] = key;

            dictonary["Definition"] = term[key];
        }
        sortedDictonary.push(dictonary);
    });

    sortedDictonary.sort((a, b) => a["Term"].localeCompare(b["Term"]));

    for (const el of sortedDictonary) {

        console.log(`Term: ${el["Term"]} => Definition: ${el["Definition"]}`)
    }

}
makeADictonary([

    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',

    '{"Bus":"A large motor vehicle carrying passengers by road,typically one serving the public on a fixed route and for a fare."}',

    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',

    '{"Bus":"A narrow strip of material, typically used to hold or fasten something."}',

    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified,transmitted, or recorded."}'

])