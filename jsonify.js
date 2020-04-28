const fs = require("fs");

//https://github.com/niklasf/eco
let afile = fs.readFileSync("a.tsv", "UTF-8").trim();
let bfile = fs.readFileSync("b.tsv", "UTF-8").trim();
let cfile = fs.readFileSync("c.tsv", "UTF-8").trim();
let dfile = fs.readFileSync("d.tsv", "UTF-8").trim();
let efile = fs.readFileSync("e.tsv", "UTF-8").trim();

let data = `${afile}\n${bfile}\n${cfile}\n${dfile}\n${efile}`;
let lines = data.split("\n");

let obj = {};

for(let i = 0; i < lines.length; i++) {
	let arr = lines[i].split("\t");
	let fen = arr[2];

	obj[fen] = {
		name: arr[1],
		eco: arr[0]
	};
}

let str = JSON.stringify(obj, null, "\t"); //Formatted

fs.writeFileSync("out.json", str);