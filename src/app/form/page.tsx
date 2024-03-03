"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { useEffect, useState } from "react";
import { createMainCategory } from "./actions/main-category";
import { createSubCategory } from "./actions/sub-category";

const formSchema = z.object({
  mainCategory: z.string(),
  mainCategoryChildren: z.string(),
  subCategory: z.string(),
});

export default function ProfileForm() {
  const [mainCategoryList, setMainCategoryList] = useState({}) as any;
  const [subCategoryList, setSubCategoryList] = useState({}) as any;
  const [showMainCategoryChildren, setShowMainCategoryChildren] =
    useState(false);
  const [mainCategoryChildrenType, setMainCategoryChildrenType] = useState("");

  useEffect(() => {
    const getMainCategory = async () => {
      const getMainCategory = await createMainCategory();
      setMainCategoryList(getMainCategory);
    };
    const getSubCategory = async () => {
      const getSubCategory = await createSubCategory();
      setSubCategoryList(getSubCategory);
    }

    getMainCategory();
    getSubCategory();
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      mainCategory: "",
      mainCategoryChildren: "",
      subCategory: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  console.log(mainCategoryList.data?.categories?.find((category: {slug: string}) => {
    category.slug === "cars-motorcycles-accessories"
  }))
  console.log(mainCategoryList)

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="mainCategory"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Main Category</FormLabel>
              <Select
                onValueChange={(value) => {
                  field.onChange(value)
                  setShowMainCategoryChildren(true);
                  setMainCategoryChildrenType(value)
                }}
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a main category." />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {mainCategoryList.data?.categories?.map((category: any) => (
                    <SelectItem key={category?.slug} value={category?.slug}>
                      {category?.slug}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        {showMainCategoryChildren && (
          <FormField
            control={form.control}
            name="mainCategoryChildren"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Main Category children</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a main category children." />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {/* {mainCategoryList.data?.categories?.filter((category: {slug: string}) => {
                     console.log(category.slug === mainCategoryChildrenType);
                      category.slug === mainCategoryChildrenType
                    }).children?.map((category: any) => (
                      <SelectItem key={category?.slug} value={category?.slug}>
                        {category?.slug}
                      </SelectItem>
                    ))} */}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        )}
        <FormField
          control={form.control}
          name="subCategory"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Sub Category</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a sub category." />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                {subCategoryList.data?.map((category: any) => (
                    <SelectItem key={category?.slug} value={category?.slug}>
                      {category?.slug}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
