import { CategoryDiv } from "../../components/containers";

export function renderCategories(categories) {
  return categories.map((category) => {
    return (
      <CategoryDiv
        key={category.id}
        name={category.name}
        bgcolor={category.bgcolor}
      ></CategoryDiv>
    );
  });
}
