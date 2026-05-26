import Image from "next/image";

export default function Background() {
  return (
    <>
      <div className="pointer-events-none absolute inset-0 bg-black blur-[125px]">
        <Image
          src="/images/background.webp"
          alt=""
          fill
          priority
          className="object-cover object-center opacity-70"
        />
      </div>
      <div className="pointer-events-none absolute top-56.25 h-[calc(100%-13.75rem)] w-full py-2.5">
        <div className="bg-background relative h-full w-full rounded-tl-[100px] rounded-tr-[20px] blur-2xl" />
      </div>
    </>
  );
}
