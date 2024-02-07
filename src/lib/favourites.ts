import { Recipe } from '../../types/recipe';

export const addToFavorites = (recipe: Recipe): void => {
    try {
        const favouritesJSON = sessionStorage.getItem('favourites');
        let favourites = favouritesJSON ? JSON.parse(favouritesJSON) : [];

        favourites.push(recipe); 
        sessionStorage.setItem('favourites', JSON.stringify(favourites)); // POST
    } catch (error) {
        console.error('Error adding to favourites:', error);
    }
};

export const removeFromFavorites = (id: number): void => {
    try {
        let favorites: Recipe[] = [];
        const favoritesJSON = sessionStorage.getItem('favorites');
        if (favoritesJSON) {
            favorites = JSON.parse(favoritesJSON);
            // filter out the recipe
            favorites = favorites.filter((recipe) => recipe.id !== id);
            sessionStorage.setItem('favorites', JSON.stringify(favorites)); // DELETE
        }
    } catch (error) {
        console.error('Error removing from favorites:', error);
    }
};

export const getFavorites = (): Recipe[] => {
    try {
        const favoritesJSON = sessionStorage.getItem('favorites'); // GET
        return favoritesJSON ? JSON.parse(favoritesJSON) : [];
    } catch (error) {
        console.error('Error getting favorites:', error);
        return [];
    }
};
