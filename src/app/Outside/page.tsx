import Image from "next/image";
import Header from "../components/header";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Outside() {
  return (
    <>
      <Header />
      <div className="w-[80%] mx-auto">
        <div>
          <div className="my-4">
            <p>200+ options</p>
            <h1 className="sm:text-3xl text-2xl font-semibold sm:font-bold pb-1">
              Recommended Places In San Francisco
            </h1>
          </div>
          <div className="mx-auto border-t-2 flex sm:flex-row sm:items-start items-center flex-col gap-3 mt-4 py-8 w-[90%] sm:w-[100%]">
            <div className="sm:w-[400px] w-[90%] rounded-lg">
              <Image
                className="rounded-lg"
                src="/images/image-s1.png"
                alt=""
                width={400}
                height={300}
              />
            </div>
            <div className="mx-5 sm:mx-0">
              <p>Private Villa In San Francisco</p>
              <h2 className="text-xl font-bold ">
                Delux Queen Room With Street View
              </h2>
              <p>1 Brdroom / 1 Bathroom / Wifi /Kitchen</p>
              <div className="text-yellow-400 text-sm sm:text-2xl flex gap-1 sm:gap-3 items-center">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-half"></i>
                <span className="sm:text-base text-sm text-black">
                  245 Reviews
                </span>
              </div>
            </div>
          </div>

          <div className="mx-auto border-t-2 flex sm:flex-row sm:items-start items-center flex-col gap-3 mt-4 py-8 w-[90%] sm:w-[100%]">
            <div className="sm:w-[400px] w-[90%] rounded-lg">
              <Image
                className="rounded-lg"
                src="/images/image-s2.png"
                alt=""
                width={400}
                height={300}
              />
            </div>
            <div className="mx-5 sm:mx-0">
              <p>Private Villa In San Francisco</p>
              <h2 className="text-xl font-bold ">
                Delux Queen Room With Street View
              </h2>
              <p>1 Brdroom / 1 Bathroom / Wifi /Kitchen</p>
              <div className="text-yellow-400 text-sm sm:text-2xl flex gap-1 sm:gap-3 items-center">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-half"></i>
                <span className="sm:text-base text-sm text-black">
                  245 Reviews
                </span>
              </div>
            </div>
          </div>

          <div className="mx-auto border-t-2 flex sm:flex-row sm:items-start items-center flex-col gap-3 mt-4 py-8 w-[90%] sm:w-[100%]">
            <div className="sm:w-[400px] w-[90%] rounded-lg">
              <Image
                className="rounded-lg"
                src="/images/image-s3.png"
                alt=""
                width={400}
                height={300}
              />
            </div>
            <div className="mx-5 sm:mx-0">
              <p>Private Villa In San Francisco</p>
              <h2 className="text-xl font-bold ">
                Delux Queen Room With Street View
              </h2>
              <p>1 Brdroom / 1 Bathroom / Wifi /Kitchen</p>
              <div className="text-yellow-400 text-sm sm:text-2xl flex gap-1 sm:gap-3 items-center">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-half"></i>
                <span className="sm:text-base text-sm text-black">
                  245 Reviews
                </span>
              </div>
            </div>
          </div>

          <div className="mx-auto border-t-2 flex sm:flex-row sm:items-start items-center flex-col gap-3 mt-4 py-8 w-[90%] sm:w-[100%]">
            <div className="sm:w-[400px] w-[90%] rounded-lg">
              <Image
                className="rounded-lg"
                src="/images/image-s4.png"
                alt=""
                width={400}
                height={300}
              />
            </div>
            <div className="mx-5 sm:mx-0">
              <p>Private Villa In San Francisco</p>
              <h2 className="text-xl font-bold ">
                Delux Queen Room With Street View
              </h2>
              <p>1 Brdroom / 1 Bathroom / Wifi /Kitchen</p>
              <div className="text-yellow-400 text-sm sm:text-2xl flex gap-1 sm:gap-3 items-center">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-half"></i>
                <span className="sm:text-base text-sm text-black">
                  245 Reviews
                </span>
              </div>
            </div>
          </div>

          <div className="mx-auto border-t-2 flex sm:flex-row sm:items-start items-center flex-col gap-3 mt-4 py-8 w-[90%] sm:w-[100%]">
            <div className="sm:w-[400px] w-[90%] rounded-lg">
              <Image
                className="rounded-lg"
                src="/images/image-s5.png"
                alt=""
                width={400}
                height={300}
              />
            </div>
            <div className="mx-5 sm:mx-0">
              <p>Private Villa In San Francisco</p>
              <h2 className="text-xl font-bold ">
                Delux Queen Room With Street View
              </h2>
              <p>1 Brdroom / 1 Bathroom / Wifi /Kitchen</p>
              <div className="text-yellow-400 text-sm sm:text-2xl flex gap-1 sm:gap-3 items-center">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-half"></i>
                <span className="sm:text-base text-sm text-black">
                  245 Reviews
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
