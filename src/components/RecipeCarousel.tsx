'use client';

import React from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { Card, CardContent } from '@/components/ui/card';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel';
import { Recipe } from '@/types/recipe';

interface RecipeCarouselProps {
	recipes: Recipe[];
}

export const RecipeCarousel = ({ recipes }: RecipeCarouselProps) => {
	const plugin = React.useRef(Autoplay({ delay: 3000, stopOnInteraction: false }));

	return (
		<div>
			<section className='flex items-center justify-center gap-2'>
				<Carousel
					className='w-full max-w-sm'
					opts={{ align: "start", loop: true }}
					plugins={[plugin.current]}
				>
					<CarouselContent>
						{recipes.map((recipe: Recipe) => (
							<CarouselItem
								key={recipe.id}
								className='md:basis-1/2 lg:basis-1/3'
							>
								<div className='p-1'>
									<Card>
										<CardContent className='flex flex-col gap-2 aspect-square items-center justify-center p-2'>
											<img className='w-full object-cover rounded-t-md' src={recipe.image} alt={recipe.title} />
											<span className='text-sm font-light'>{recipe.title}</span>
										</CardContent>
									</Card>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious />
					<CarouselNext />
				</Carousel>
			</section>
			<p>test</p>
		</div>
	);
};
