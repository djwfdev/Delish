import React from 'react';
import { Navbar } from '@/components/Navbar';
import { SearchBar } from '@/components/SearchBar';
import { getQueryFromUrl, getRecipesFromQuery } from '@/lib/api';
import { SearchResults } from '@/components/SearchResults';
import { FavouritesProvider } from '@/context/FavouritesContext';
import { NextRequest } from 'next/server';
import { headers } from 'next/headers';

export default async function Home() {
	const _headers = headers();
	const query = getQueryFromUrl(new NextRequest(_headers.get('x-url') as string));
	const results = await getRecipesFromQuery(query || '');

	return (
		<main className='min-w-[470px] flex flex-col mx-auto p-2 gap-8'>
			<Navbar />
			<SearchBar />
			<FavouritesProvider>
				<SearchResults results={results} />
			</FavouritesProvider>
		</main>
	);
}
