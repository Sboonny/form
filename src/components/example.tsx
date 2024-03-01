export async function Test() {
   const data = await fetch("https://staging.mazaady.com/api/v1/get-options-child/53", {
    method: "GET",
    headers: {
      "private-key": process.env.PRIVATE_KEY as string,
    },
   }).then((res) => res.json());

   console.log("data:", data);

  return <div>test</div>;
}
