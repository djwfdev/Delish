import { Recipe } from '@/types/recipe';
import { BASE_URL } from '@/constants/constants';

export const getPopularRecipes = async (): Promise<Recipe[]> => {
	try {
		const response = await fetch(`${BASE_URL}/recipes/random?number=10&apiKey=${process.env.API_KEY}`); // GET
		if (!response.ok) {
			throw new Error('Failed to get recipes');
		}
		const data = await response.json();
		return data.recipes;
	} catch (error) {
		console.error('Error fetching recipes:', error);
		return [];
	}
};

export const getRecipeById = async (id: number): Promise<Recipe | null> => {
	try {
		const response = await fetch(`${BASE_URL}/recipes/${id}/information?apiKey=${process.env.API_KEY}`); // GET
		if (!response.ok) {
			throw new Error('Failed to get recipe');
		}
		const data = await response.json();
		return data;
	} catch (error) {
		console.error('Error fetching recipe:', error);
		return null;
	}
};
