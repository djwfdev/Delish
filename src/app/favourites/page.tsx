import React from 'react';
import { Favourites } from '@/components/Favourites';
import { Navbar } from '@/components/Navbar';

export default async function Home() {
	return (
        <>
            <Navbar />
            <Favourites />
        </>
    );
};
