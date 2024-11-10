import Image from "next/image";
import Header from "../components/header";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Triside() {
  return (
    <div>
      <Header />

      <div className="w-[80%] mx-auto">
        <div>
          <h1 className="sm:text-3xl text-2xl font-medium py-6">Wege House</h1>
        </div>
        <div className="flex sm:flex-row flex-col gap-4 items-center">
          <div className="text-yellow-400 text-2xl flex gap-3 items-center">
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-half"></i>
            <span className="text-base text-black">245 Reviews</span>
          </div>
          <p className="font-semibold text-xl">
            Location: San Fransisco, California, United States
          </p>
        </div>

        <div className="flex sm:flex-row flex-col gap-1 w-[100%] my-8">
          <div className="sm:w-[50%] w-[100%]">
            <Image
              className="rounded-lg"
              src="/images/house-1.png"
              alt=""
              width={600}
              height={30}
            />
          </div>
          <div className="flex flex-wrap gap-1 sm:w-[50%] w-[100%]">
            <div className="w-[49%]">
              <Image
                className="rounded-lg"
                src="/images/house-2.png"
                alt=""
                width={600}
                height={30}
              />
            </div>
            <div className="w-[49%]">
              <Image
                className="rounded-lg"
                src="/images/house-3.png"
                alt=""
                width={600}
                height={30}
              />
            </div>
            <div className="w-[49%]">
              <Image
                className="rounded-lg"
                src="/images/house-4.png"
                alt=""
                width={600}
                height={30}
              />
            </div>
            <div className="w-[49%]">
              <Image
                className="rounded-lg"
                src="/images/house-5.png"
                alt=""
                width={600}
                height={30}
              />
            </div>
          </div>
        </div>
        <div>
          <h2 className="sm:text-2xl text-lg font-medium">
            Entire rental unit hosted by Brandon
          </h2>
          <p>2 guest &nbsp; &nbsp; 2 beds &nbsp; 1 bathroom</p>
          <p className="sm:text-xl text-lg font-medium text-right">
            $ 100 / day
          </p>
        </div>
        <hr className="my-5 bg-gray-400"></hr>

        <div className="border-2 flex flex-col sm:flex-row p-4 my-16 shadow-xl">
          <div className="mx-5">
            <label className="block">Check In</label>
            <input
              className="outline-none py-1"
              type="text"
              placeholder="add date"
            />
          </div>
          <div className="mx-5">
            <label className="block">Check Out</label>
            <input
              className="outline-none py-1"
              type="text"
              placeholder="add date"
            />
          </div>
          <div className="mx-5">
            <label className="block">Guests</label>
            <input
              className="outline-none py-1"
              type="text"
              placeholder="add date"
            />
          </div>
          <button className="mx-6 items-center bg-red-400 sm:px-12 px-5  text-white font-medium rounded-lg hover:text-red-400 hover:bg-slate-100">
            Check Availability
          </button>
        </div>

        <ul className="ul-list">
          <li>
            Entire Home <span>You will have the entire flat for you</span>
          </li>
          <li>
            Enhance Clean{" "}
            <span>This host committed to flywith's cleaning process</span>
          </li>
          <li>
            Great Location{" "}
            <span>90% of recent guests gave the location a 5 star rating</span>
          </li>
          <li>
            Great Check-in Experience{" "}
            <span>
              100% of recent guests gave the check-in process a 5 star rating
            </span>
          </li>
        </ul>

        <hr className="my-8 w-[100%] sm:w-[70%] bg-gray-400"></hr>
        <p className="mb-8 sm:max-w-[70%] w-[100%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem perspiciatis atque alias ad laboriosam? Ratione
          voluptas dolores eius, sapiente distinctio similique dolore omnis esse
          quae reiciendis doloremque? Adipisci atque eum similique explicabo
          asperiores, sit eveniet cum pariatur odit. Assumenda animi laudantium
          ipsum dolores fugit architecto illum excepturi doloremque ducimus
          aspernatur. Sequi nemo ipsa amet omnis aliquid voluptatum,
        </p>
        <hr className="my-8 w-[100%] sm:w-[70%] bg-gray-400"></hr>

        <div className="flex items-center my-4 sm:gap-8 gap-4">
          <Image
            className="rounded-full"
            src="/images/host.png"
            alt=""
            width={80}
            height={80}
          />
          <div>
            <h3 className="sm:text-lg text-base font-medium">
              Hosted By Brandon
            </h3>
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
  );
}
