import Image from "next/image";

export default function Tranding() {
  return (
    <div>
      <h1 className="text-xl sm:text-2xl sm:font-bold mx-10 sm:mx-16 py-6">
        Tranding Places
      </h1>
      <div className="flex sm:flex-row flex-col justify-center gap-4 mx-auto w-[90%] mb-4">
        <div className="sm:w-[30%] w-[85%] mx-auto sm:mx-0 h-[360px] sm:h-[380px] bg-cover border-b-2 border-slate-300 rounded-t-md">
          <Image
            className="sm:h-[350px] h-[330px] rounded-t-md"
            src="/images/dubai.png"
            alt=""
            width={300}
            height={350}
          />
          <p className="text-base pt-1">DUBAI</p>
        </div>
        <div className="sm:w-[30%] w-[85%] mx-auto sm:mx-0 h-[360px] sm:h-[380px] bg-cover border-b-2 border-slate-300 rounded-t-md">
          <Image
            className="sm:h-[350px] h-[330px] rounded-t-md"
            src="/images/new-york.png"
            alt=""
            width={300}
            height={350}
          />
          <p className="text-base pt-1">NEW YORK</p>
        </div>
        <div className="sm:w-[30%] w-[85%] mx-auto sm:mx-0 h-[360px] sm:h-[380px] bg-cover border-b-2 border-slate-300 rounded-t-md">
          <Image
            className="sm:h-[350px] h-[330px] rounded-t-md"
            src="/images/paris.png"
            alt=""
            width={300}
            height={350}
          />
          <p className="text-base pt-1">PARIS</p>
        </div>
        <div className="sm:w-[30%] w-[85%] mx-auto sm:mx-0 h-[360px] sm:h-[380px] bg-cover border-b-2 border-slate-300 rounded-t-md">
          <Image
            className="sm:h-[350px] h-[330px] rounded-t-md"
            src="/images/new-delhi.png"
            alt=""
            width={300}
            height={350}
          />
          <p className="text-base pt-1">New Delhi</p>
        </div>
      </div>
    </div>
  );
}
