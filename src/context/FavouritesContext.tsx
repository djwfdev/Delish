'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Recipe } from '@/types/recipe';
import { getFavourites } from '@/lib/favourites';

interface FavouritesContextType {
	favourites: Recipe[];
	updateFavourites: () => void;
}

const FavouritesContext = createContext<FavouritesContextType | undefined>(undefined);

export const useFavourites = (): FavouritesContextType => {
	const context = useContext(FavouritesContext);
	if (context === undefined) {
		throw new Error('useFavourites must be used within a FavouritesProvider');
	}
	return context;
};

export const FavouritesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [favourites, setFavourites] = useState<Recipe[]>([]);

    const updateFavourites = (): void => {
		setFavourites(() => getFavourites());
	};

	useEffect(() => {
		updateFavourites();

		const handleStorageChange = () => {
			updateFavourites();
		};

        window.addEventListener('storage', handleStorageChange);
		window.addEventListener('favouritesUpdated', handleStorageChange);

		return () => {
            window.removeEventListener('storage', handleStorageChange);
			window.removeEventListener('favouritesUpdated', handleStorageChange);
		};
	}, []);

	const contextValue: FavouritesContextType = {
		favourites,
		updateFavourites,
	};

	return <FavouritesContext.Provider value={contextValue}>{children}</FavouritesContext.Provider>;
};
