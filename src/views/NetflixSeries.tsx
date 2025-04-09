
import { SeriesCard } from "../components/ui/SeriesCard";
import seriesData from "../json/seriesData.json"
import "../style/Netfilx.module.css"

export type dataTypes={
  name:string;
  id:string;
  img_url:string;
  rating:string;
  description:string;
  cast:string[];
  genre:string[];
  watch_url:string;
}

const NetflixSeries = () => {
  


  return (
    <ul className="flex gap-8 flex-wrap justify-center items-center ">
      {seriesData.map((curElem:dataTypes) => (
        <SeriesCard key={curElem.id} data={curElem} />
      ))}
    </ul>
  );
};

export default NetflixSeries;