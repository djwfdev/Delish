import { Navbar } from '@/components/Navbar';
import { RecipeCarousel } from '@/components/RecipeCarousel';
import { getPopularRecipes } from '@/lib/api';

export default async function Home() {
	const recipes = await getPopularRecipes();

	return (
		<main className='min-w-[320px] flex flex-col mx-auto justify-center items-center px-4'>
            <Navbar />
			<RecipeCarousel recipes={recipes}/>
		</main>
	);
}
