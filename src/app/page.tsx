// import CustomCursor from "@/components/CustomCursor";
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
    </div>
  );
}
