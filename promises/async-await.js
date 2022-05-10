const getIDs = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([532, 543, 75, 1, 5]);
        }, 1500);
    });
// Here we are fetching a recipe with a given Id.
// We are getting a recipe as an object once consumed.
const getRecipe = (recipeID) => {
    return new Promise((resolve, reject) => {
        setTimeout(
            (ID) => {
                const recipe = {
                    title: "Fresh tomato pasta",
                    publisher: "Pinchas Hodadad",
                };
                resolve(`${ID}: ${recipe.title}`);
            },
            1500,
            recipeID
        );
    });
};
// Here we are consuming the promise.
// Getting the Ids, then getting a recipe with the id in the index 2.
async getIDs()
await ((IDs) => {
    console.log(IDs);
})
await ((recipe) => {
    console.log(recipe);
})
.catch((error) => {
    console.log("It is an error!");
});