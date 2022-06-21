import { CategoryDiv } from "../../components/containers";

export function renderCategories(categories) {
  return categories.map((category) => {
    return (
      <CategoryDiv
        key={category.id}
        path={`/portfolio/${category.path}`}
        name={category.name}
        bgcolor={category.bgcolor}
      ></CategoryDiv>
    );
  });
}
