function parseShipment(rawData){
  const parse=[]
  

  for(let i=0; i<rawData.length; i++){
    const data=rawData[i].split("|")

    if(parse.some(item=>item.sku === data[0])){
      continue
    }
    const obj={

          sku:data[0],

          name:data[1],

          qty:Number(data[2]),

          expires:data[3],

          zone: data[4] || "general"

      }
    parse.push(obj)
  }
  return parse
}



function planRestock(pantry, shipment){
  const actions=[]

  for(const shipmentItem of shipment){
    const inPantry= pantry.some(pantryItem=>pantryItem.sku===shipmentItem.sku)

    if(shipmentItem.qty<=0){
      actions.push({type: "discard", item: shipmentItem})
    }
    else if(inPantry==true){
      actions.push({type: "restock", item: shipmentItem})
      
    }
    else{
      actions.push({type: "donate", item: shipmentItem})
    }
  
  }
  return actions
}


function groupByZone(actions) {
  const grouped = {};

  for (const action of actions) {
    const zone = action.item.zone;

    if(!grouped[zone]){
      grouped[zone]=[]
    }
    
  grouped[zone].push(action)

  }

  return grouped;
}


function clonePantry(pantry){
  return structuredClone(pantry)
}









const rawData = [
  "A10|Tomatoes|5|2027-01-01",        // no zone field
  "B21|Bananas|10|2027-01-01|fridge", // zone: "fridge"
  "C32|Eggs|3|2027-01-01|pantry",     // zone: "pantry"
];

console.log(parseShipment(rawData))


const testPantry = [
  { sku: "A10", name: "Tomatoes", qty: 5, expires: "2027-01-01", zone: "general" }
];

const testShipment = [
  { sku: "A10", name: "Tomatoes", qty: 4, expires: "2027-03-01", zone: "general" }, // Should be restock
  { sku: "B21", name: "Bananas", qty: 0, expires: "2027-01-01", zone: "fridge" },  // Should be discard
  { sku: "Z99", name: "Honey", qty: 2, expires: "2029-12-31", zone: "pantry" }     // Should be donate
];


const result = planRestock(testPantry, testShipment);






const testActions = [
  { type: "restock", item: { sku: "A10", name: "Tomatoes", qty: 4, zone: "general" } },
  { type: "discard", item: { sku: "B21", name: "Bananas",  qty: 0, zone: "fridge"  } },
  { type: "donate",  item: { sku: "Z99", name: "Honey",    qty: 2, zone: "pantry"  } },
  { type: "restock", item: { sku: "M55", name: "Milk",     qty: 6, zone: "fridge"  } } // Another fridge item!
];


const groupedResult = groupByZone(testActions);


console.log("--- MY GROUP BY ZONE OUTPUT ---");
console.log(groupedResult);
