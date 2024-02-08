'use client'

import React from 'react';
import { toSentenceCase } from '@/lib/utils';
import { Recipe } from '@/types/recipe';
import { Clock, Plus, PlusCircle, PlusIcon, Users } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { addToFavourites } from '@/lib/favourites';
import { Button } from './ui/button';

interface RecipeCardProps {
	recipe: Recipe;
}

export const RecipeCard = ({ recipe }: RecipeCardProps) => {
	return (
		<Card className='sm:h-[20rem] transition-transform duration-200 scale-95 hover:scale-100 hover:cursor-pointer'>
			<img
				src={recipe.image}
				alt={recipe.title}
				className='w-full min-h-[82%] object-cover rounded-t-md'
			/>
			<p className='absolute flex z-10 items-center justify-center inset-x-0 top-0 bg-primary bg-opacity-70 rounded-t-md h-12 p-3 tracking-wide text-white text-sm text-center'>
				{toSentenceCase(recipe.title)}
			</p>
			<div className='flex p-4 justify-between items-center text-center text-sm text-gray-600'>
				<div className='flex gap-1 items-center'>
					<Users className='h-4 w-4 text-primary' />
					<span>{recipe.servings}</span>
				</div>
				<div className='flex gap-1 items-center'>
					<Clock className='h-4 w-4 text-primary' />
					<span>{recipe.readyInMinutes} min</span>
				</div>
				<Button
					className='h-6 w-6 rounded-full ring-1 hover:ring-2 hover:bg-green-100 hover:scale-110 ring-primary transition-transform'
					size={'icon'}
					variant={'ghost'}
					onClick={() => addToFavourites(recipe)}
				>
					<PlusIcon className='h-4 w-4' />
				</Button>
			</div>
		</Card>
	);
};
