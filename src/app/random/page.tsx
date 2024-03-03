"use client";
import { useEffect, useState } from "react";
import { createMainCategory } from "../form/actions/main-category";

export default function App() {
  const [mainCategoryList, setMainCategoryList] = useState({}) as any;

  useEffect(() => {
    const updateViews = async () => {
      const updatedViews = await createMainCategory()
      setMainCategoryList(updatedViews)
    }
 
    updateViews()
  }, []);
  console.log(mainCategoryList.data.categories);
    return (
      <div>
        <h1>{mainCategoryList.data?.categories?.map((category: any) => (
                    <p key={category?.slug}>
                      {category?.slug}
                    </p>
                  ))}</h1>
      </div>
    );
  }
  