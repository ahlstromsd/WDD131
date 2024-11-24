import { recipes } from './recipes.mjs';

document.addEventListener("DOMContentLoaded", () => {
    const recipeSection = document.getElementById("recipe-section");
    const searchForm = document.getElementById("search-form");
    const searchInput = document.getElementById("search-input");

    // Utility to generate a random number
    function random(num) {
        return Math.floor(Math.random() * num);
    }

    // Get a random recipe from the list
    function getRandomRecipe() {
        return recipes[random(recipes.length)];
    }

    // Template for generating tags
    function tagsTemplate(tags) {
        return tags.map(tag => `<li>${tag}</li>`).join("");
    }

    // Template for generating the star rating
    function ratingTemplate(rating) {
        return `
            <span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">
                ${"⭐".repeat(rating)}${"☆".repeat(5 - rating)}
            </span>
        `;
    }

    // Template for generating recipe HTML
    function recipeTemplate(recipe) {
        return `
            <figure class="recipe">
                <img src="${recipe.image}" alt="${recipe.name}" class="recipe-image">
                <figcaption>
                    <ul class="recipe__tags">${tagsTemplate(recipe.tags)}</ul>
                    <h2>${recipe.name}</h2>
                    <p class="recipe__ratings">${ratingTemplate(recipe.rating)}</p>
                    <p class="recipe__description">${recipe.description}</p>
                    <p><strong>Ingredients:</strong></p>
                    <ul class="ingredients-list">
                        ${recipe.recipeIngredient.map(ingredient => `<li>${ingredient}</li>`).join("")}
                    </ul>
                    <p><strong>Instructions:</strong></p>
                    <ol class="instructions-list">
                        ${recipe.recipeInstructions.map(instruction => `<li>${instruction}</li>`).join("")}
                    </ol>
                </figcaption>
            </figure>
        `;
    }

    // Render recipes in the DOM
    function renderRecipes(recipeList) {
        recipeSection.innerHTML = recipeList.map(recipe => recipeTemplate(recipe)).join("");
    }

    // Initialize with a random recipe
    function init() {
        const randomRecipe = getRandomRecipe();
        renderRecipes([randomRecipe]);
    }

    // Filter recipes based on search query
    function filterRecipes(query) {
        return recipes
            .filter(recipe => 
                recipe.name.toLowerCase().includes(query) ||
                recipe.description.toLowerCase().includes(query) ||
                recipe.tags.some(tag => tag.toLowerCase().includes(query)) ||
                recipe.recipeIngredient.some(ingredient => ingredient.toLowerCase().includes(query))
            )
            .sort((a, b) => a.name.localeCompare(b.name));
    }

    // Handle search functionality
    function searchHandler(event) {
        event.preventDefault();
        const query = searchInput.value.trim().toLowerCase();
        const filteredRecipes = filterRecipes(query);
        renderRecipes(filteredRecipes);
    }

    // Attach search event listener
    searchForm.addEventListener("submit", searchHandler);

    // Run the initial random recipe display
    init();
});
// Theme switcher logic
document.addEventListener("DOMContentLoaded", () => {
    const themeSwitcher = document.getElementById("theme-switcher");
    const rootElement = document.documentElement; // Get the root element

    // Check for saved theme in localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        rootElement.setAttribute("data-theme", savedTheme);
        themeSwitcher.textContent = savedTheme === "dark" ? "Light Mode" : "Dark Mode";
    }

    // Add event listener for the theme switcher button
    themeSwitcher.addEventListener("click", () => {
        const currentTheme = rootElement.getAttribute("data-theme") || "light";
        const newTheme = currentTheme === "light" ? "dark" : "light";

        // Update the theme
        rootElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme); // Save theme to localStorage
        themeSwitcher.textContent = newTheme === "dark" ? "Light Mode" : "Dark Mode";
    });
});
