
import Header from "./components/header";
import Middle from "./components/middle";
import Tranding from "./components/tranding";
import SharingPic from "./components/sharing";

export default function Home(){
  return(
    <div>
    <div className=" main-pic bg-cover bg-center h-screen " style={{backgroundImage:"linear-gradient(to right,#3f2321,transparent), url('/images/banner.png')",}}>
      <Header/>
      <div className="flex flex-col items-center my-48">
      <h1 className="text-2xl sm:text-5xl text-white text-center px-2 py-4">Find Your Next Destination</h1>
      
      <form className="sm:flex mx-auto w-[70%] h-[220px] sm:h-16 bg-slate-200 rounded-md"  action="">
        <div className="sm:m-2 mx-6" >
          <label className="font-semibold ">Location</label>
          <input className="text-sm p-1 outline-none" type="text" placeholder="Add Date"></input>
        </div>

        <div className="sm:m-2 mx-6">
          <label className="font-semibold">Check In</label>
          <input className="text-sm p-1 outline-none" type="text" placeholder="Add Date"></input>
        </div>

        <div className="sm:m-2 mx-6">
          <label className="font-semibold">Check Out</label>
          <input className="text-sm p-1 outline-none" type="text" placeholder="Add Date"></input>
        </div>

        <div className="sm:m-2 mx-6">
          <label className="font-semibold">Guest</label>
          <input className="text-sm p-1 outline-none" type="text" placeholder="Add Date" ></input>
        </div>
      </form>
      </div>
      </div>
      <div>
        
      </div>
      <Middle/>
      <Tranding/>
      <SharingPic/>
      
      
      </div>  
  )
}
