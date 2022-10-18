//(function(){
//    "use strict";

    let planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";


    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
    let planetsArray = planetsString.split("|");
    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */
    //This is for the first
    let planetBr = planetsArray.join("<br>");
    console.log(planetBr);

    //BONUS: Unordered List
    let planetaryList = "<ul>" + "<li>" + planetsArray.join("</li><li>" ) + "</li>" + "</ul>";
    console.log(planetaryList);

    let newPlanetArr =[];
    planetArray.forEach(function(planet){
        console.log("<li>${planet}$</li>");
        newPlanetArr.push("<li>${planet}$</li>");

    });
    console.log(newPlanetArr);
    newPlanetArr.unshift('<ul>');
    newPlanetArr.push("</ul>");
    let str = newPlanetArr.join();
    console.log(str)

//})();