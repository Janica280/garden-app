// Prompting user for a season or plant type
let season = prompt("Enter a season you would like gardening advice on: ")
  .trim()
  .toLocaleLowerCase();
let plantType = prompt(
  "Enter a plant type you would like gardening advice on: ",
)
  .trim()
  .toLocaleLowerCase();

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
    vegetable: "Keep an eye out for pests.",
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
