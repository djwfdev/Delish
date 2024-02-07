import { RecipeCarousel } from '@/components/recipecarousel';
import { getPopularRecipes } from '@/lib/api';
import { Recipe } from '@/types/recipe';

export default async function Home() {
	const recipes = await getPopularRecipes();

	return (
		<main>
			<RecipeCarousel recipes={recipes}/>
			<div>
				{recipes.map((recipe: Recipe) => (
					<div key={recipe.id}>
						<img src={recipe.image} alt={recipe.title} />
					</div>
				))}
			</div>
		</main>
	);
}
