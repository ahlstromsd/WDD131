import { recipes } from './recipes.mjs';

document.addEventListener("DOMContentLoaded", () => {
    const recipeSection = document.getElementById("recipe-section");

    recipes.forEach((recipe) => {
        const recipeCard = document.createElement("div");
        recipeCard.classList.add("recipe-card");

        // Building the recipe card dynamically
        recipeCard.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.name}" class="recipe-image">
            <h2>${recipe.name}</h2>
            <p><strong>Author:</strong> ${recipe.author}</p>
            <p><strong>Cook Time:</strong> ${recipe.cookTime}</p>
            <p><strong>Prep Time:</strong> ${recipe.prepTime}</p>
            <p><strong>Yield:</strong> ${recipe.recipeYield}</p>
            <p><strong>Rating:</strong> 
                <span class="rating" role="img" aria-label="Rating: ${recipe.rating} out of 5 stars">
                    ${"⭐".repeat(recipe.rating)}${"☆".repeat(5 - recipe.rating)}
                </span>
            </p>
            <p><strong>Description:</strong> ${recipe.description}</p>
            <p><strong>Tags:</strong> ${recipe.tags.join(", ")}</p>
            <p><strong>Ingredients:</strong></p>
            <ul class="ingredients-list">
                ${recipe.recipeIngredient.map(ingredient => `<li>${ingredient}</li>`).join("")}
            </ul>
            <p><strong>Instructions:</strong></p>
            <ol class="instructions-list">
                ${recipe.recipeInstructions.map(instruction => `<li>${instruction}</li>`).join("")}
            </ol>
        `;

        recipeSection.appendChild(recipeCard);
    });
});
