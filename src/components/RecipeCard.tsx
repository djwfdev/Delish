'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { toSentenceCase } from '@/lib/utils';
import { Recipe } from '@/types/recipe';
import { Clock, Heart, Users } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { addToFavourites, removeFromFavourites } from '@/lib/favourites';
import { Button } from './ui/button';
import { useFavourites } from '@/context/FavouritesContext';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

interface RecipeCardProps {
	recipe: Recipe;
}

export const RecipeCard = ({ recipe }: RecipeCardProps) => {
	const { favourites } = useFavourites();
	const isRecipeInFavourites = () => {
		return favourites.some((fav) => fav.id === recipe.id);
	};
	const [isFavourited, setIsFavourited] = useState<boolean>(isRecipeInFavourites());
	const router = useRouter();

	useEffect(() => {
		setIsFavourited(isRecipeInFavourites());
	}, [favourites]);

	const toggleFavourite = () => {
		if (isFavourited) {
			removeFromFavourites(recipe.id);
			toast.success('Removed from favourites!');
		} else {
			addToFavourites(recipe);
            toast.success('Added to favourites!');
		}
	};

	return (
		<Card className='h-full min-w-[15rem] transition-transform duration-200 scale-95 hover:scale-100 hover:cursor-pointer'>
			<div className='h-64 sm:h-56 lg:h-64 xl:h-72 transition-transform duration-300'>
				<Link href={recipe.sourceUrl} target='_blank'>
					<img
						src={recipe.image}
						alt={recipe.title}
						className='w-full h-full object-cover rounded-t-md'
					/>
					<p className='absolute flex z-10 items-center justify-center inset-x-0 top-0 bg-primary bg-opacity-70 rounded-t-md h-12 p-3 tracking-wide text-white text-sm text-center'>
						{toSentenceCase(recipe.title)}
					</p>
				</Link>
			</div>
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
					className={`h-6 w-6 rounded-full ring-1 hover:ring-2 hover:bg-green-100 hover:scale-110 ring-primary transition-transform 
                    ${isFavourited && 'bg-primary text-white hover:bg-green-600 hover:text-white'}`}
					size={'icon'}
					variant={'ghost'}
					onClick={toggleFavourite}
				>
					<Heart className={`h-4 w-4`} />
				</Button>
			</div>
		</Card>
	);
};
