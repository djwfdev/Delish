'use client'

import { Recipe } from '@/types/recipe';

export const addToFavourites = (recipe: Recipe): void => {
    try {
        if (typeof window !== 'undefined') {
            const favouritesJSON = localStorage.getItem('favourites'); // GET
            let favourites = favouritesJSON ? JSON.parse(favouritesJSON) : [];

            favourites.push(recipe); 
            localStorage.setItem('favourites', JSON.stringify(favourites)); // POST
        }
    } catch (error) {
        console.error('Error adding to favourites:', error);
    }
};

export const removeFromFavourites = (id: number): void => {
    try {
        if (typeof window !== 'undefined') {
            let favourites: Recipe[] = [];
            const favouritesJSON = localStorage.getItem('favourites');
            if (favouritesJSON) {
                favourites = JSON.parse(favouritesJSON);
                // filter out the recipe
                favourites = favourites.filter((recipe) => recipe.id !== id);
                localStorage.setItem('favourites', JSON.stringify(favourites)); // DELETE
            }
        }
    } catch (error) {
        console.error('Error removing from favourites:', error);
    }
};

export const getFavourites = (): Recipe[] => {
    try {
        if (typeof window !== 'undefined') {
            const favouritesJSON = localStorage.getItem('favourites'); // GET
            return favouritesJSON ? JSON.parse(favouritesJSON) : [];
        }
        return [];
    } catch (error) {
        console.error('Error getting favourites:', error);
        return [];
    }
};
