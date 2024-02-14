import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <div className="flex flex-col space-y-4 text-white justify-center mt-20 items-center max-w-lg">
        <div>
          <h1 className="text-center text-3xl text font-bold mb-4">
            🫶 Happy Valen-Friend-Tines! 🫶
          </h1>
          <p className="font-semibold">
            Hello dearest Bianca. this is just a lil something to let you khow
            much I appreciate u in my life. However you must answer a few
            questions - ready?
          </p>
        </div>
        <>
          <video width="750" height="500" controls>
            <source src="/egg.mp4" type="video/mp4" />
          </video>
        </>
        <Link passHref href={"/quiz"}>
          <button className="rounded-md bg-black p-3">
            Take me to da quiz
          </button>
        </Link>
      </div>
    </main>
  );
}
