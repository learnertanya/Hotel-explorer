import fs from "fs";
import path from "path";

function saveData(data) {
  const jsonData = JSON.stringify(data, null, 2);
  fs.writeFileSync(path.join("..", "/data.json"), jsonData);
}

class hotels {
  constructor(id,city, address, rooms, bed, bath, squareft, rent, name) {
    
    this.id = id;
    this.city=city;
    this.address = address;
    this.rooms = rooms;
    this.bed = bed;
    this.bath = bath;
    this.squareft = squareft;
    this.rent = rent;
    this.name = name;
    this.src = "/hotels.jpg"
  }
}
const city=["New York","New York","New York","New York","New York","New York","New York","New York","New York","Mumbai","Mumbai","Mumbai","Mumbai","Mumbai","Mumbai","Mumbai","Mumbai","Mumbai","Paris","Paris","Paris","Paris","Paris","Paris","Paris","Paris","Paris","London","London","London","London","London","London","London","London","London",];
const address = ["Park avenue street14","Park avenue street14","Park avenue street14","Park avenue street14","Park avenue street14","Park avenue street14","Park avenue street14","Park avenue street14","Park avenue street14","Park avenue street14","Park avenue street14","Park avenue street14","Park avenue street14","Park avenue street14","Park avenue street14","Park avenue street14","Park avenue street14","Park avenue street14","Park avenue street14","Park avenue street14","Park avenue street14","Park avenue street14","Park avenue street14","Park avenue street14","Park avenue street14","Park avenue street14","Park avenue street14","Park avenue street14","Park avenue street14","Park avenue street14","Park avenue street14","Park avenue street14","Park avenue street14","Park avenue street14","Park avenue street14","Park avenue street14"];
const rooms = [2,3,4,2,3,4,2,3,4,2,3,4,2,3,4,2,3,4,2,3,4,2,3,4,2,3,4,2,3,4,2,3,4,2,3,4];
const bed = [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,];
const bath = [1,2,1,2,1,2,1,2,1,1,2,1,2,1,2,1,2,1,1,2,1,2,1,2,1,2,1,1,2,1,2,1,2,1,2,1,];
const squareft = [100,120,169,200,120,169,170,168,189,100,120,169,200,120,169,170,168,189,100,120,169,200,120,169,170,168,189,100,120,169,200,120,169,170,168,189,];
const rent =  [250,300,310,280,500,400,390,280,400,250,300,310,280,500,400,390,280,400,250,300,310,280,500,400,390,280,400,250,300,310,280,500,400,390,280,400,];
const name = ["Hotel Spring Lame","Taj Hotel","Silver Hotel","Scenic Solitude Resort","The Mutiny Hotel","Mandarin Oriental","White Dove Hotels"," High Desert Inn","The Palms Motel","Hotel Spring Lame","Taj Hotel","Silver Hotel","Scenic Solitude Resort","The Mutiny Hotel","Mandarin Oriental","White Dove Hotels"," High Desert Inn","The Palms Motel","Hotel Spring Lame","Taj Hotel","Silver Hotel","Scenic Solitude Resort","The Mutiny Hotel","Mandarin Oriental","White Dove Hotels"," High Desert Inn","The Palms Motel","Hotel Spring Lame","Taj Hotel","Silver Hotel","Scenic Solitude Resort","The Mutiny Hotel","Mandarin Oriental","White Dove Hotels"," High Desert Inn","The Palms Motel",];

let ans = [];
for (let i = 0; i < address.length; i++) {
  const obj = new hotels(
    i + 1,

    city[i],
    address[i],
    rooms[i],
    bed[i],
    bath[i],
    squareft[i],
    rent[i],
    name[i]
  );
  ans.push(obj);
}

saveData(ans);
