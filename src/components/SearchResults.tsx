'use client';

import React from 'react';
import { Recipe } from '@/types/recipe';
import { RecipeCard } from '@/components/RecipeCard';

interface SearchResultsProps {
	results: Recipe[] | [];
}

export const SearchResults = ({ results }: SearchResultsProps) => {
	return (
		<section className='flex flex-col'>
			{results.length > 0 ? (
				<>
					<h1 className='pl-1.5 text-left heading text-xl'>Search Results</h1>
					<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5'>
						{results.map((recipe: Recipe, idx) => (
							<div className='mb-1' key={idx}>
								<RecipeCard recipe={recipe} />
							</div>
						))}
					</div>
				</>
			) : (
				<div className='flex justify-center items-center heading pt-10'>No results found ...</div>
			)}
		</section>
	);
};
