** start of script.js **

const normalizeUnits=(manifest)=>{
  let manifest2={...manifest};
  if (manifest2.unit=="lb"){ 
   manifest2.weight=manifest2.weight *0.45;
   manifest2.unit="kg"
   return manifest2
  }
  else{
    return manifest2
  } 
}

const cargo={
  containerId: 68, destination: "Salinas", weight: 101, unit: "lb", hazmat: true 
}
console.log(normalizeUnits(cargo))

const validateManifest = (manifest) => {
  const errors = {}; 

  if (!manifest.hasOwnProperty("containerId")) errors.containerId = "Missing";
  else if (manifest.containerId==null) errors.containerId = "Invalid";
  else if(Number.isInteger(manifest.containerId)==false||manifest.containerId<=0) errors.containerId="Invalid";

  if (!manifest.hasOwnProperty("destination")) {
    errors.destination = "Missing";
  } else if (typeof manifest.destination !== "string" || manifest.destination.trim() === "") {
    errors.destination = "Invalid";
  }

  if (!manifest.hasOwnProperty("weight")) errors.weight = "Missing";
  else if (Number.isNaN(manifest.weight)==true ||typeof manifest.weight !== "number" || manifest.weight <= 0) errors.weight = "Invalid";

  if (!manifest.hasOwnProperty("unit")) errors.unit = "Missing";
  else if (manifest.unit !== "kg" && manifest.unit !== "lb") errors.unit = "Invalid";

  if (!manifest.hasOwnProperty("hazmat")) errors.hazmat = "Missing";
  else if (typeof manifest.hazmat !== "boolean") errors.hazmat = "Invalid";

  return errors;
};

const cargo2={}
console.log(validateManifest(cargo2))

const processManifest=(manifest)=>{
  const errors = validateManifest(manifest);
  
  if(Object.keys(errors).length === 0){
    console.log(`Validation success: ${manifest.containerId}`)
    if(manifest.unit=="lb"){
      const converted = normalizeUnits(manifest);
      console.log(`Total weight: ${converted.weight} kg`)
    } else {
      console.log(`Total weight: ${manifest.weight} kg`)
    }
  } else {
    console.log(`Validation error: ${manifest.containerId}`)
    console.log(errors)
  }
}

const cargo5={ containerId: 55, destination: "Carmel", weight: 400, unit: "lb", hazmat: false }
processManifest(cargo5);

** end of script.js **

