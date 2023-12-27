import './recipes.css';

type RecipesType = {
  recipeType: 'Meals' | 'Drinks';
  recipeList: any;
};

function Recipes({ recipeType, recipeList }: RecipesType) {
  return (
    <div className="recipes">
      <h2>{`${recipeType} Recipes`}</h2>
      {recipeList.length > 0 ? (
        <>
          {recipeList.map((recipe: any) => (
            <div key={ recipeType === 'Meals' ? recipe.idMeal : recipe.idDrink }>
              <h2>{recipeType === 'Meals' ? recipe.strMeal : recipe.strDrink}</h2>
            </div>
          ))}
        </>
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
}

export default Recipes;
