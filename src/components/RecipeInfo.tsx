'use client';

import React from 'react';
import { Recipe } from '@/types/recipe';
import { Card } from '@/components/ui/card';

interface RecipeInfoProps {
	recipe: Recipe;
}

// TODO: [WIP]: styling
export const RecipeInfo = ({ recipe }: RecipeInfoProps) => {
	return (
		<Card className='max-w-5xl h-full mx-auto bg-white rounded-lg shadow-md overflow-hidden md:flex'>
			<img
				src={recipe.image}
				alt={recipe.title}
				className='w-full md:w-1/3 h-auto md:h-64 object-cover object-center'
			/>
			<div className='p-4 md:w-2/3'>
				<h2 className='text-2xl font-bold text-gray-800'>{recipe.title}</h2>
				<div className='flex items-center justify-between mt-4'>
					<div>
						<p className='text-sm font-semibold text-gray-600'>Total Time</p>
						<p className='text-sm text-gray-800'>{recipe.readyInMinutes} mins</p>
					</div>
					<div>
						<p className='text-sm font-semibold text-gray-600'>Servings</p>
						<p className='text-sm text-gray-800'>{recipe.servings}</p>
					</div>
				</div>
				<div className='mt-4'>
					<p className='text-sm font-semibold text-gray-600'>Instructions</p>
					<p className='text-sm text-gray-800'>
						{recipe.instructions || 'Not available'}
					</p>
				</div>
			</div>
		</Card>
	);
};
