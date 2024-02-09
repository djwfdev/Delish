import { Navbar } from '@/components/Navbar';
import { RecipeInfo } from '@/components/RecipeInfo';
import { FavouritesProvider } from '@/context/FavouritesContext';
import { getRecipeById } from '@/lib/api';

export default async function Home({ params }: { params: { recipeId: string } }) {
	const recipe = await getRecipeById(Number(params.recipeId));

	return (
		<main className='min-w-[470px] flex flex-col mx-auto p-2 gap-8'>
			<Navbar />
			<FavouritesProvider>
				{recipe ? (
					<RecipeInfo recipe={recipe} />
				) : (
					<div className='flex justify-center items-center heading pt-10'>
						No recipe found ...
					</div>
				)}
			</FavouritesProvider>
		</main>
	);
}
