import React from "react";
import Travel from "./Travel"

const travels = [
    {
      destination : "Miami" ,
      country: "United States of America" ,
      image :"https://rccl-h.assetsadobe.com/is/image/content/dam/royal/data/ports/miami-florida/miami-florida-south-beach-aerial.jpg?$750x320$" ,
      distance : "8000Km" ,
    },
    {
      destination : "Los Angeles" ,
      country: "United States of America" ,
      image :"https://cache-graphicslib.viator.com/graphicslib/thumbs674x446/3638/SITours/los-angeles-city-tour-by-night-in-los-angeles-445299.jpg" ,
      distance : "15000Km" ,
    },
    {
      destination : "Bogota" ,
      country: "Comlombia" ,
      image :"https://www.tripsavvy.com/thmb/KhDB6upOuA3re_zpEreiVsvXv48=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-730282063-5afb127d18ba010037d336e7.jpg" ,
      distance : "12000km" ,
    },
    {
      destination : "Dakar" ,
      country: "Senegal" ,
      image :"https://hellolaroux.com/wp-content/uploads/2018/06/visiter-dakar-blog.jpg" ,
      distance : "7000Km" ,
    },
    {
      destination : "Paris" ,
      country: "France" ,
      image :"https://www.parisinfo.com/var/otcp/sites/images/node_43/node_51/node_233/node_7886/dossier-paris-patrimoine-%7C-780x340-%7C-%C2%A9-fotolia/160387-4-fre-FR/Dossier-Paris-Patrimoine-%7C-780x340-%7C-%C2%A9-Fotolia.jpg" ,
      distance : "700Km" ,
    },
  ];

  const Travels = () => (
    <div>
      {travels.map (travel => (
    <Travel destination={travel.destination} image={travel.image} country={travel.country} distance={travel.distance} />
  ) )}
  
    </div>
  );
 

  export default Travels;