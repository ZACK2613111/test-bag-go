// import CustomCursor from "@/components/CustomCursor";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Footer from "@/components/footer";
import Header from "@/components/header";
import MapComponent from "@/components/Map";
import Reservation from "@/components/reservation";
import Sponsors from "@/components/Sponsors";
import SliderTestimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div >
     {/* <CustomCursor/> */}
     <Header/>
     <Reservation/> 
     <Sponsors />   
     <About />
     <SliderTestimonials/>
     <MapComponent/>
     <FAQ />
     <Footer />
    </div>
  );
}
