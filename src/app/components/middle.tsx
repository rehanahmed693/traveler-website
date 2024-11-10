import Image from "next/image";

export default function Middle() {
  return (
    <div>
      <h1 className="sm:text-2xl text-lg font-bold mx-20 py-6">Exclusives</h1>
      <div className=" mx-auto flex flex-wrap justify-center w-[90%] gap-10 mb-4 ">
        <div className="sm:w-[31%] w-[90%] relative">
          <Image src="/images/image-1.png" alt="" width={400} height={200} />
          <div className=" absolute sm:top-16 sm:left-36 top-10 right-20 text-white ">
            <p className="sm:text-3xl text-xl ">London</p>
            <p>Starts @ $250</p>
          </div>
        </div>

        <div className="sm:w-[31%] w-[90%] relative">
          <Image src="/images/image-2.png" alt="" width={400} height={200} />
          <div className=" absolute sm:top-16 sm:left-36 top-10 right-20 text-white ">
            <p className="sm:text-3xl text-xl ">Switzerland</p>
            <p>Starts @ $250</p>
          </div>
        </div>

        <div className="sm:w-[31%] w-[90%] relative">
          <Image src="/images/image-3.png" alt="" width={400} height={200} />
          <div className=" absolute sm:top-16 sm:left-36 top-10 right-20 text-white ">
            <p className="sm:text-3xl text-xl ">Australia</p>
            <p>Starts @ $250</p>
          </div>
        </div>

        <div className="sm:w-[31%] w-[90%] relative">
          <Image src="/images/image-4.png" alt="" width={400} height={200} />
          <div className=" absolute sm:top-16 sm:left-36 top-10 right-20 text-white ">
            <p className="sm:text-3xl text-xl">France</p>
            <p>Starts @ $250</p>
          </div>
        </div>

        <div className="sm:w-[31%] w-[90%] relative">
          <Image src="/images/image-5.png" alt="" width={400} height={200} />
          <div className=" absolute sm:top-16 sm:left-36 top-10 right-20 text-white ">
            <p className="sm:text-3xl text-xl ">Amsterdom</p>
            <p>Starts @ $250</p>
          </div>
        </div>

        <div className="sm:w-[31%] w-[90%] relative">
          <Image src="/images/image-6.png" alt="" width={400} height={200} />
          <div className=" absolute sm:top-16 sm:left-36 top-10 right-20 text-white ">
            <p className="sm:text-3xl text-xl ">Netherlands</p>
            <p>Starts @ $250</p>
          </div>
        </div>

        <div className="sm:w-[31%] w-[90%] relative">
          <Image src="/images/image-7.png" alt="" width={400} height={200} />
          <div className=" absolute sm:top-16 sm:left-36 top-10 right-20 text-white ">
            <p className="sm:text-3xl text-xl ">New York</p>
            <p>Starts @ $250</p>
          </div>
        </div>

        <div className="sm:w-[31%] w-[90%] relative">
          <Image src="/images/image-8.png" alt="" width={400} height={200} />
          <div className=" absolute sm:top-16 sm:left-36 top-10 right-20 text-white ">
            <p className="sm:text-3xl text-xl ">Chicago</p>
            <p>Starts @ $250</p>
          </div>
        </div>

        <div className="sm:w-[31%] w-[90%] relative">
          <Image src="/images/image-9.png" alt="" width={400} height={200} />
          <div className=" absolute sm:top-16 sm:left-36 top-10 right-20 text-white ">
            <p className="sm:text-3xl text-xl ">San Francisco</p>
            <p>Starts @ $250</p>
          </div>
        </div>

        <div className="sm:w-[31%] w-[90%] relative">
          <Image src="/images/image-10.png" alt="" width={400} height={200} />
          <div className=" absolute sm:top-16 sm:left-36 top-10 right-20 text-white ">
            <p className="sm:text-3xl text-xl ">Shanghai</p>
            <p>Starts @ $250</p>
          </div>
        </div>
      </div>
    </div>
  );
}
