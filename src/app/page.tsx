// import CustomCursor from "@/components/CustomCursor";
import About from "@/components/About";
import Header from "@/components/header";
import Reservation from "@/components/reservation";
import Sponsors from "@/components/Sponsors";

export default function Home() {
  return (
    <div >
     {/* <CustomCursor/> */}
     <Header/>
     <Reservation/> 
     <Sponsors />   
     <About />
    </div>
  );
}
