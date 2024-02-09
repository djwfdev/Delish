import { Recipe } from '@/types/recipe';

// UPDATE (POST): adds a recipe to favourites
export const addToFavourites = (recipe: Recipe): void => {
    try {
        if (typeof window !== 'undefined') {
            const favouritesJSON = localStorage.getItem('favourites');
            let favourites = favouritesJSON ? JSON.parse(favouritesJSON) : [];

            favourites.push(recipe); 
            localStorage.setItem('favourites', JSON.stringify(favourites));

            // dispatch custom event
            window.dispatchEvent(new CustomEvent('favouritesUpdated'));
        }
    } catch (error) {
        console.error('Error adding to favourites:', error);
    }
};

// DELETE: removes a recipe from favourites
export const removeFromFavourites = (id: number): void => {
    try {
        if (typeof window !== 'undefined') {
            let favourites: Recipe[] = [];
            const favouritesJSON = localStorage.getItem('favourites');
            if (favouritesJSON) {
                favourites = JSON.parse(favouritesJSON);
                // filter out the recipe
                favourites = favourites.filter((recipe) => recipe.id !== id);
                localStorage.setItem('favourites', JSON.stringify(favourites));

                // dispatch custom event
                window.dispatchEvent(new CustomEvent('favouritesUpdated'));
            }
        }
    } catch (error) {
        console.error('Error removing from favourites:', error);
    }
};

// READ (GET): returns favourite recipes list
export const getFavourites = (): Recipe[] => {
    try {
        if (typeof window !== 'undefined') {
            const favouritesJSON = localStorage.getItem('favourites');
            return favouritesJSON ? JSON.parse(favouritesJSON) : [];
        }
        return [];
    } catch (error) {
        console.error('Error getting favourites:', error);
        return [];
    }
};
