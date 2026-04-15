// Hardcoded values for the season and plant type
let season = "summer"; //TODO: Replace with prompt() to allow user interaction.
let plantType = "flower"; //TODO: Replace with prompt() to allow user interaction.

// Variable to hold gardening advice
let advice = "";

// Object that holds advice for different seasons and plant types
const gardeningAdvice = {
  seasons: {
    summer: "Water your plants regularly and provide some shade.\n",
    autumn:
      "Clear away fallen leaves and prepare the soil for the coming winter.\n",
    winter: "Protect your plants from frost with covers.\n",
    spring: "Remove dead leaves and twigs, and provide fertilizer.\n",
  },
  plantTypes: {
    flower: "Use fertiliser to encourage blooms.",
    vegetable: "Keep an eye out for pests!",
    succulent: "Do not overwater.",
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

// Calling functions that determine advice
seasonAdvice();
plantTypeAdvice();

// Log the generated advice to the console
console.log(advice);

// TODO: Examples of possible features to add:
// - Add detailed comments explaining each block of code.
// - Refactor the code into functions for better readability and modularity.
// - Store advice in an object for multiple plants and seasons.
// - Suggest plants that thrive in the given season.
