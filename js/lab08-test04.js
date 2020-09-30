// convert comma-separated values into an array
let countries = csv.split(",");
console.log(countries);
// convert array into delimited string
let countriesString = countries.join();
// check if these are arrays
console.log(Array.isArray(countries) && Array.isArray(csv))
//  sort a simple array 
countries.sort();
console.log(countries);
// reverse the sort
countries.reverse();
console.log(countries);
// remove the first element
countries.shift();
console.log(countries);
// remove the last element
countries.pop();
console.log(countries);
// add new elements to the front of the array
countries.unshift("Brazil", "India");
console.log(countries);
// search for element
if(countries.includes("Germany")) console.log("Germany is included");
// search for element index
console.log("The Index of Germany is: " + countries.indexOf("Germany"));
// make a new array by extracting from another array
countries.splice(1, 0, "Mexico")
console.log(countries);
console.log('---------------------');
// there are other array methods which you will learn in Ch 10 */

// use a loop to output all cities whose continent=="NA"
for(let c of cities) {
   if(c.continent == "NA") console.log(c);
}

console.log('---------------------');

// use a loop to output gallery names whose country=="USA"
for(let g of galleries) {
   if(g.location.country == "USA") console.log(g);
}

console.log('---------------------');

// convert JSON colorsAsString to js object
const colors = JSON.parse(colorsAsString);
console.log(colors);
// use a loop to output color name if luminance < 75
for(let color of colors) {
   if(color.luminance < 75) {
      console.log(color.name + "has a luminance of : " + color.luminance);
   }
}
console.log('---------------------');

// use two nested loops - outer: loop thru colors
for(let color of colors) {
   colorName = color.name;
   let colorSum = 0;
   for(let value of color.rgb) {
      colorSum += value;
   }
   console.log(`${colorName} has a rgb value of ${colorSum}`);
}

console.log('---------------------');

/* use a loop output using document.write a unordered
   list of links to the galleries in the galleries array.
   Make the label of the link the name property, and the href
   the url property */
let galleryList = "<ul>\n";
for(let gallery of galleries) {
   galleryList += `<li><a href="${gallery.url}">${gallery.name}</a></li>\n`
}
galleryList += "</ul>";
document.write(galleryList);
/* use a loop output using document.write an unordered
   list of color names in the colors array.
   Set the style property of each <li> as follows: 
   1. set the background color to the values in the rgb array using the CSS 
      rgb() function.  This make the background color of the item the same
      as the color name.
   2. Set the text color to white if the luminosity is less than 75. This will 
    make the text color white for the darker colors.  */
let colorList = "<ul>\n";
for(let color of colors) {
   rgbValue  = color.rgb.join();
   colorList += `<li style="background-color: rgb(${rgbValue});`;
   colorList += color.luminance < 75 ? "color: white\">" : "color: black\">";
   colorList += `${color.name}</li>\n`;
}
colorList += "</ul>";
document.write(colorList);
