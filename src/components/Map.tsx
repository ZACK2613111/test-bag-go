import Image from "next/image";
import mapImage from "../../public/images/WorldMap.png";

const MapComponent = () => {
    return (
      <div className="relative w-full h-screen">
        {/* Image Background */}
        <Image
          src={mapImage}
          alt="Map"
          layout="fill"
          objectFit="contain"
          className="z-0"
        />
        
        {/* Overlay with white background and blurry effect (centered div) */}
        <div className="absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-10 bg-white bg-opacity-60 backdrop-blur-lg px-4">
          <h1 className="text-5xl font-bold text-center text-gray-800">
            Où que vous soyez, Bag&Go est là pour transformer vos imprévus de voyage en solutions.
          </h1>
        </div>
      </div>
    );
  };
  
  export default MapComponent;