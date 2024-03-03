'use server'

export async function createSubCategory () {
    const data = await fetch("https://staging.mazaady.com/api/v1/properties?cat=13", {
    method: "GET",
    headers: {
      "private-key": process.env.PRIVATE_KEY as string,
    },
   }).then((res) => res.json());

   return data;
}