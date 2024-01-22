import React, { useEffect, useState } from "react";
import { GetRecipeByDishType } from "../functions/Edamam";
import RecipeCard from "../components/RecipeCard";

export default function TodaysMenu() {
  const [starter, setStarter] = useState(null);
  const [mainCourse, setMainCourse] = useState(null);
  const [dessert, setDessert] = useState(null);

  useEffect(() => {
    const fetchStarter = async () => {
      try {
        const result = await GetRecipeByDishType("starter");
        setStarter(result);
        console.log("Starter recipe:", result);
      } catch (error) {
        console.error("Error fetching starter recipe:", error);
      }
    };

    fetchStarter();
  }, []);

  useEffect(() => {
    const fetchMainCourse = async () => {
      try {
        const result = await GetRecipeByDishType("main_course");
        setMainCourse(result);
        console.log("Main course recipe:", result);
      } catch (error) {
        console.error("Error fetching main course recipe:", error);
      }
    };

    fetchMainCourse();
  }, []);

  useEffect(() => {
    const fetchDessert = async () => {
      try {
        const result = await GetRecipeByDishType("desserts");
        setDessert(result);
        console.log("Dessert recipe:", result);
      } catch (error) {
        console.error("Error fetching dessert recipe:", error);
      }
    };

    fetchDessert();
  }, []);

  return (
    <div>
      <h1>Today's Menu</h1>
      <RecipeCard Recipe={starter} />
      <RecipeCard Recipe={mainCourse} />
      <RecipeCard Recipe={dessert} />
    </div>
  );
}
