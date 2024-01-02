import { useContext, useEffect } from 'react';
import AppContext from '../../context/AppContext';

type SearchInputType = {
  recipeType: 'Meals' | 'Drinks';
  searchInput: string;
  setRenderedList: React.Dispatch<React.SetStateAction<any[]>>;
  setSearchInput: React.Dispatch<React.SetStateAction<string>>;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function SearchInput({
  recipeType,
  searchInput,
  setRenderedList,
  setSearchInput,
  handleInputChange }: SearchInputType) {
  const { mealsList, drinksList, categoryList } = useContext(AppContext);

  useEffect(() => {
    setSearchInput('');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryList]);

  useEffect(() => {
    function getSearchedList() {
      if (categoryList.length > 0) {
        const list = recipeType === 'Meals'
          ? categoryList.filter((recp: any) => (
            recp.strMeal.toLowerCase().includes(searchInput.toLocaleLowerCase())))
          : categoryList.filter((recp: any) => (
            recp.strDrink.toLowerCase().includes(searchInput.toLocaleLowerCase())));
        setRenderedList(list);
      } else {
        const list = recipeType === 'Meals'
          ? mealsList.filter((recp: any) => (
            recp.strMeal.toLowerCase().includes(searchInput.toLocaleLowerCase())))
          : drinksList.filter((recp: any) => (
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
      value={ searchInput }
    />
  );
}

export default SearchInput;
