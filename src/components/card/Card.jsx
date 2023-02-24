import "./Card.css";
import img1 from "../../assets/bg-react.svg";
import { languages } from "../../helper/data";
import CardTitle from "../CardTitle";

const Card = () => {


  
  return (
    <div className="text-center box">
      <div className="title m-3">
        <img src={img1} width="160px" alt=""></img>
      </div>
      <div className="main ">
        <h1 className="text-light  fw-5 m-3">Languages</h1>
        <div className="strip"></div>
        <div className=" row lang g-3">
          {languages.map(({name,img,options}) => (
            <CardTitle name={name} img={img} options={options}  />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
