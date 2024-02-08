'use client';

import React, { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel';
import { Recipe } from '@/types/recipe';
import { RecipeCard } from './RecipeCard';

interface RecipeCarouselProps {
    title: string;
	recipes: Recipe[];
    autoPlay?: boolean;
}

export const RecipeCarousel = ({ title, recipes, autoPlay = false }: RecipeCarouselProps) => {
	const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: false }));

	return (
		<section className='flex flex-col'>
			<h1 className='pl-1.5 text-left heading text-xl'>{title}</h1>
			<Carousel
				className='w-full max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl'
				opts={{ align: 'start', loop: true }}
				plugins={autoPlay ? [plugin.current]: []}
			>
				<CarouselContent>
					{recipes.map((recipe: Recipe) => (
						<CarouselItem
							key={recipe.id}
							className='sm:basis-1/2 lg:basis-1/3 xl:basis-1/4'
						>
							<div className='relative'>
								<RecipeCard recipe={recipe} />
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</section>
	);
};
