import Image from "next/image";
import { Bubble } from "./ui/bubble";

export function SellerInfo() {
  return (
    <section className="flex flex-col p-5 bg-white rounded-lg m-5">
      <Image
        src="/images/avatar.jpg"
        alt="Hala Ahmad posing for the camera with hazy background"
        width={80}
        height={80}
      />
      <h1 className="text-2xl font-bold mt-4 font-sans">Hala Ahmad</h1>
      <p className="text-sm text-gray-500 font-sans">
        I am Hala Ahmed, I am the owner of the local brand called Beauty which
        is for Mackeup and Skin Care.
      </p>
      <div className="flex">
        <Bubble>Test</Bubble>
      </div>
    </section>
  );
}
