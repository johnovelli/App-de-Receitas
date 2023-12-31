import { useContext, useEffect } from 'react';
import AppContext from '../../context/AppContext';

type SearchInputType = {
  recipeType: 'Meals' | 'Drinks';
  searchInput: string;
  setRenderedList: React.Dispatch<React.SetStateAction<any[]>>;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function SearchInput({
  recipeType,
  searchInput,
  setRenderedList,
  handleInputChange }: SearchInputType) {
  const { mealsList, drinksList } = useContext(AppContext);

  useEffect(() => {
    function getSearchedList() {
      if (recipeType === 'Meals') {
        if (searchInput.length === 0) {
          setRenderedList(mealsList);
        }
        const list = mealsList.filter((recp: any) => (
          recp.strMeal.toLowerCase().includes(searchInput.toLocaleLowerCase())));
        setRenderedList(list);
      } if (recipeType === 'Drinks') {
        if (searchInput.length === 0) {
          setRenderedList(drinksList);
        }
        const list = drinksList.filter((recp: any) => (
          recp.strDrink.toLowerCase().includes(searchInput.toLocaleLowerCase())));
        setRenderedList(list);
      }
    }
    getSearchedList();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchInput]);

  return (
    <input
      type="text"
      onChange={ handleInputChange }
      placeholder="Search Recipe"
    />
  );
}

export default SearchInput;
