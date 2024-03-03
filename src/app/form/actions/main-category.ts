"use server";

export async function createMainCategory () {
    const data = await fetch("https://staging.mazaady.com/api/v1/get_all_cats", {
    method: "GET",
    headers: {
      "private-key": process.env.PRIVATE_KEY as string,
    },
   }).then((res) => res.json());

   return data;
}