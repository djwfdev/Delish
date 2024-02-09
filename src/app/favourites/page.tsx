import React from 'react';
import { Favourites } from '@/components/Favourites';
import { Navbar } from '@/components/Navbar';
import { FavouritesProvider } from '@/context/FavouritesContext';

export default function Home() {
	return (
		<main className='min-w-[470px] flex flex-col mx-auto p-2 gap-8'>
			<Navbar />
			<FavouritesProvider>
				<Favourites />
			</FavouritesProvider>
		</main>
	);
}
