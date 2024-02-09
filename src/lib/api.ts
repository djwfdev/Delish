import { Recipe } from '@/types/recipe';
import { BASE_URL } from '@/constants/constants';
import { NextRequest } from 'next/server';

// READ (GET): returns a list of random popular recipes
export const getPopularRecipes = async (): Promise<Recipe[]> => {
	try {
		const response = await fetch(
			`${BASE_URL}/recipes/random?number=10&apiKey=${process.env.API_KEY}`
		); // GET
		if (!response.ok) {
			throw new Error('Failed to get recipes');
		}
		const data = await response.json();
		return data.recipes;
	} catch (error) {
		console.error('Error fetching recipes: ', error);
		return [];
	}
};

// READ (GET): returns a recipe filtered by diet restrictions
export const getDietLimitedRecipes = async (diet: string): Promise<Recipe[]> => {
	try {
		const response = await fetch(
			`${BASE_URL}/recipes/complexSearch?addRecipeInformation=true&diet=${diet}&number=15&apiKey=${process.env.API_KEY}`
		); // GET
		if (!response.ok) {
			throw new Error('Failed to get recipes for ' + diet);
		}
		const data = await response.json();
		return data.results;
	} catch (error) {
		console.error('Error fetching recipes: ', error);
		return [];
	}
};

// READ (GET): returns a recipe given its' id
export const getRecipeById = async (id: number): Promise<Recipe | null> => {
	try {
		const response = await fetch(
			`${BASE_URL}/recipes/${id}/information?apiKey=${process.env.API_KEY}`
		);
		if (!response.ok) {
			throw new Error('Failed to get recipe');
		}
		const data = await response.json();
		return data;
	} catch (error) {
		console.error('Error fetching recipe: ', error);
		return null;
	}
};

// READ (GET): returns a list of recipes that match a query
export const getRecipesFromQuery = async (query: string): Promise<Recipe[]> => {
	try {
		const response = await fetch(
			`${BASE_URL}/recipes/complexSearch?addRecipeInformation=true&query=${query}&number=20&apiKey=${process.env.API_KEY}`
		);
		if (!response.ok) {
			throw new Error('Failed to get recipes with this query: ' + query);
		}
		const data = await response.json();
		return data.results;
	} catch (error) {
		console.error('Error fetching recipes: ', error);
		return [];
	}
};

// GET (READ): [helper function] gets query in current url
export const getQueryFromUrl = (request: NextRequest) => {
	const query = request.nextUrl.searchParams.get('query');
	return query;
};
