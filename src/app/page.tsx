import { getRecipeById, getRecipes } from './lib/api';
import { Recipe } from './types/recipe';

export default async function Home() {
	const recipes = await getRecipeById(1);

	return (
		<div>
            <div>{recipes?.title}</div>
			{/* {recipes.map((recipe: Recipe) => (
                <div key={recipe.id}>
                    <img src={recipe.image} alt={recipe.title}/>
                </div>
            ))} */}
		</div>
	);
}
