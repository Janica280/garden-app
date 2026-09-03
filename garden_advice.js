// Prompting user for a season or plant type
let season = prompt("Enter a season you would like gardening advice on: ")
  .trim()
  .toLocaleLowerCase();
let plantType = prompt(
  "Enter a plant type you would like gardening advice on: ",
)
  .trim()
  .toLocaleLowerCase();

// I added this code during the second issue for the task and the #7th issue in the git repo
if (season === "fall") {
  season = "autumn";
}

// Variable to hold gardening advice
let advice = "";

// Object that holds advice for different seasons and plant types
const gardeningAdvice = {
  seasons: {
    summer: "Water your plants regularly and provide some shade.\n",
    autumn:
      "Clear away fallen leaves and prepare the soil for the coming winter.\n",
    // This was coded for the first issue of the task or the #5th issue in the git repo
    //fall: "Clear away fallen leaves and prepare the soil for the coming winter.\n",
    winter: "Protect your plants from frost with covers.\n",
    spring: "Remove dead leaves and twigs, and provide fertilizer.\n",
  },
  plantTypes: {
    flowers: "Use fertiliser to encourage blooms.",
    vegetables: "Keep an eye out for pests.",
    succulents: "Do not overwater.",
    herbs: "Provide lots of sunlight.",
    shrubs: "Prune on a scheduled and consistent bases.",
  },
};

// Determine advice based on the season
function seasonAdvice() {
  advice += gardeningAdvice.seasons[season] || "No advice for this season.\n";
}

// Determine advice based on the plant type
function plantTypeAdvice() {
  advice +=
    gardeningAdvice.plantTypes[plantType] || "No advice for this plant type.\n";
}

// Determine best plants to plant during a specific season
function bestPlants() {
  let combination = `${season}_${plantType}`;
  advice += `\nBest ${plantType} to plant in ${season} are: `;

  switch (combination) {
    case "summer_flowers":
      advice += "Marigolds, Zinnias, Sunflowers";
      break;
    case "summer_vegetables":
      advice += "Zucchini, Peppers, Tomatoes";
      break;
    case "summer_succulents":
      advice += "Most warm season succulents";
      break;
    case "summer_herbs":
      advice += "Basil, Rosemary, Oregano";
      break;
    case "summer_shrubs":
      advice += "Buddleia, Hydrangeas, Philadelphus";
      break;

    case "autumn_flowers":
      advice += "Mums, Asters, Pansies";
      break;
    case "autumn_vegetables":
      advice += "Broccoli, Cauliflower, Garlic";
      break;
    case "autumn_succulents":
      advice += "Aeonium and select winter growers";
      break;
    case "autumn_herbs":
      advice += "Sage, Thyme, Mint";
      break;
    case "autumn_shrubs":
      advice += "Buttonbush, Abelia x grandiflora, Caryopteris";
      break;

    case "winter_flowers":
      advice += "Hellebores, Winter Jasmine, Snowdrops";
      break;
    case "winter_vegetables":
      advice += "Leeks, Spinach, Kale";
      break;
    case "winter_succulents":
      advice +=
        "Generally avoided as most succulents enter dormancy and are prone to rot if planted";
      break;
    case "winter_herbs":
      advice += "Parsley, Rosemary, Chervil";
      break;
    case "winter_shrubs":
      advice += " Camellia japonica, Daphne odora, Witch hazel";
      break;

    case "spring_flowers":
      advice += "Tulips, Daffodils, Pansies";
      break;
    case "spring_vegetables":
      advice += "Leafy Greens, Root Vegetables, Peas";
      break;
    case "spring_succulents":
      advice += "Haworthia, Echeveria, Sedum";
      break;
    case "spring_herbs":
      advice += "Parsley, Cilantro, Chives";
      break;
    case "spring_shrubs":
      advice += "Azaleas, Syringa vulgaris, Forsythia";
      break;
  }
}

// Calling functions that determine advice
seasonAdvice();
plantTypeAdvice();
bestPlants();

// Log the generated advice to the console
console.log(advice);

// RESOURCES: //

//Name of webpage: Seasonal Gardening: What to Plant Each Season
//Name of website: Vego Garden
//Author: Jessica Miller
//Published: 02/07/2024
//Used for: best flowers, vegetables, and herbs per season
//URL: https://www.vegogarden.com/blogs/academy/seasonal-gardening-what-to-plant-each-season

//Name of webpage: How and When to Plant a Succulent: The Complete Guide
//Name of website: Ferber Painting
//Used for: best succulents per season
//URL: https://www.ferberpainting.com/nz/blog/how-and-when-to-plant-a-succulent-the-complete-guide/

//Name of webpage: Flowering Shrubs for Every Season: Year-Round Color in Your Garden
//Name of website: Thursd.
//Used for: best shrubs per person
//URL: https://thursd.com/articles/lovely-shrubs-that-bloom-all-year
