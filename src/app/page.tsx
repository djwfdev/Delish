import { Navbar } from '@/components/Navbar';
import { RecipeCarousel } from '@/components/RecipeCarousel';
import { getDietLimitedRecipes, getPopularRecipes } from '@/lib/api';
import { DIETS } from '@/constants/constants';
import { SearchBar } from '@/components/SearchBar';

export default async function Home() {
	const popularRecipes = await getPopularRecipes();
    const vegetarianRecipes = await getDietLimitedRecipes(DIETS.VG);
    const ketoRecipes = await getDietLimitedRecipes(DIETS.KTO);

	return (
		<main className='min-w-[470px] flex flex-col mx-auto justify-center items-center p-2 gap-8'>
            <Navbar />
            <SearchBar />
			<RecipeCarousel title={'Most popular recipes'} recipes={popularRecipes} autoPlay={true}/>
            <RecipeCarousel title={'Vegetarian recipes'} recipes={vegetarianRecipes}  />
            <RecipeCarousel title={'Ketogenic recipes'} recipes={ketoRecipes}  />
		</main>
	);
}
