import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const Card = (props: Props) => {
  return (
    <div className="text-white p-4 max-w-md">
      <h1 className="text-center font-bold text-3xl mb-4">
        💌 Formal Letter of Human Appreciation 💌
      </h1>

      <div className="space-y-4 font-semibold">
        <p>
          Honestly I just think you are great. In every capacity. You have many
          gifts and I love how you express all of them. I literally heard you
          sing once and was determined to make a connection out of you and we
          became such close friends.
        </p>
        <p>
          You have a unique way of bringing ppl together for a greater purpose.
          You are so silly and you make me laugh a lot. Your existence makes me
          happy and I’m overjoyed we get to share the earth as the same time as
          each other. Your beauty shines bright from the inside out into the
          world. The sun could never.
        </p>
        <p>
          I love how we help each other grow in Christ, in fitness, in
          intelligence, in music, just everywhere. Looking forward to continuing
          lending my talents to bring forth more of your amazing creative ideas.
          I’ve always known I was great since birth but since I met you, I can
          say my life has gotten{" "}
          <span className="font-bold italic text-black">Better {"    "}</span>{" "}
          100x fold - in a multitude of areas.
        </p>
        <p>
          You have a special power Bianca, you make flowers grow where others
          cultivated dust and stones. I’m grateful for you in ways you won’t
          ever understand. I will always be here for you Yankini, pray we live
          very long lives. See you at 100?
        </p>
        <p>
          can I chew your nose? I think it’s cute. Anyway. Bye. Please leave me
          alone. thank you. I cherish you so much. Oh yea. Love you.
        </p>

        <p>signed, ya bestie. o.</p>
      </div>

      <div className="my-6">
        <Image src="/partner.jpg" width={1000} height={1000} alt="o and b" />
      </div>

      <div className="items-center justify-center flex">
        <Link passHref href={"/"}>
          <button className="rounded-md bg-black p-3">Home</button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
