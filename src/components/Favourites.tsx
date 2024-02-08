'use client';

import React, { useEffect, useState } from 'react';
import { Recipe } from '@/types/recipe';
import { RecipeCard } from '@/components/RecipeCard';
import { getFavourites } from '@/lib/favourites';

export const Favourites = () => {
	const [favourites, setFavourites] = useState<Recipe[]>([]);

	useEffect(() => {
		// Update favourites when localStorage changes
		const handleStorageChange = () => {
			setFavourites(getFavourites());
		};

		// Initialise favourites
		setFavourites(getFavourites());

		// Listen for changes in localStorage
		window.addEventListener('storage', handleStorageChange);

		// Cleanup function to remove the event listener
		return () => {
			window.removeEventListener('storage', handleStorageChange);
		};
	}, []);

	return (
		<div>
			{favourites.map((fav: Recipe, idx) => (
				<li key={idx}>
					<RecipeCard recipe={fav} />
				</li>
			))}
		</div>
	);
};
