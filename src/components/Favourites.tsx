'use client';

import React from 'react';
import { Recipe } from '@/types/recipe';
import { RecipeCard } from '@/components/RecipeCard';
import { useFavourites } from '@/context/FavouritesContext';

export const Favourites = () => {
	const { favourites } = useFavourites();

	return (
		<section className='flex flex-col'>
			<h1 className='pl-1.5 text-left heading text-xl'>Favourites</h1>
			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5'>
				{favourites.map((fav: Recipe, idx) => (
                    <div className='mb-2' key={idx}>
                        <RecipeCard recipe={fav} />
                    </div>
				))}
			</div>
		</section>
	);
};
