'use client';

import React from 'react';
import { Recipe } from '@/types/recipe';
import { RecipeCard } from '@/components/RecipeCard';
import { useFavourites } from '@/context/FavouritesContext';

export const Favourites = () => {
    const { favourites } = useFavourites();

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