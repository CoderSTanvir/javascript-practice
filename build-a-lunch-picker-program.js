** start of script.js **

const lunches=[];

function addLunchToEnd(lunchMenu, lunch){
      console.log(`${lunch} added to the end of the lunch menu.`);
      lunchMenu.push(lunch);
      return lunchMenu
}
console.log(addLunchToEnd(lunches, "Tacos"));






function addLunchToStart(array, string){
      console.log(`${string} added to the start of the lunch menu.`);
      array.unshift(string);
      return array

}
console.log(addLunchToStart(lunches, "Sushi"));







function removeLastLunch(param1){
  if (param1.length===0){
    return console.log("No lunches to remove.")
  }
  else{
      let string;
      string=param1.pop();
      console.log(`${string} removed from the end of the lunch menu.`);
      return param1
    
  }

}
console.log(removeLastLunch(["Stew", "Soup", "Toast"]));
console.log(removeLastLunch([]));





function removeFirstLunch(param1){
    if (param1.length===0){
      return console.log("No lunches to remove.")
  }
  else{
      let string;
      string=param1.shift();
      console.log(`${string} removed from the start of the lunch menu.`);
      return param1
    
  } 
}
console.log(removeFirstLunch(["Salad", "Eggs", "Cheese"]))





function getRandomLunch(lunchMenu){
  if (lunchMenu.length===0){
    return console.log("No lunches available.")
  }
  else{     
    let lunch=lunchMenu[Math.floor(Math.random()*lunchMenu.length)];
    console.log(`Randomly selected lunch: ${lunch}`);
    return lunchMenu
  } 

}
console.log(getRandomLunch(["Sushi", "Pizza", "Burger"]))





function showLunchMenu(lunchMenu){
  if (lunchMenu.length===0){
    return console.log("The menu is empty.")
  }
  else{     
    console.log(`Menu items: ${lunchMenu.join(", ")}`)
    return lunchMenu
  } 

}
console.log(showLunchMenu(["Greens", "Corns", "Beans"]))

** end of script.js **

