import React from 'react';
import { Favourites } from '@/components/Favourites';
import { Navbar } from '@/components/Navbar';
import { FavouritesProvider } from '@/context/FavouritesContext';

export default async function Home() {
	return (
		<>
			<Navbar />
			<FavouritesProvider>
				<Favourites />
			</FavouritesProvider>
		</>
	);
}
