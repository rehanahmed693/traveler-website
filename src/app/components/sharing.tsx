export default function SharingPic() {
  return (
    <div
      className="mx-auto  p-10 my-20 bg-cover bg-center w-[90%] rounded-3xl  "
      style={{
        backgroundImage:
          "linear-gradient(to right,#3f2321,transparent),  url('/images/banner-2.png')",
      }}
    >
      <h1 className="text-4xl sm:text-6xl py-4 font-semibold text-white">
        Sharing <br className=""></br>Is Earning Now
      </h1>
      <p className="text-white">
        Great oppurtunity to make <br></br>money by sharing your extra space
      </p>

      <button className="px-3 py-2 my-6 text-white font-semibold bg-red-400">
        Learn More
      </button>
    </div>
  );
}
