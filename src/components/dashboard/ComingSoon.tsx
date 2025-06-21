import {  faSnowflake } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "./Navbar";

export default function ComingSoon(){
    return (
         <div className="ps-1">
            <Navbar/>
            <div className="d-flex justify-content-center text-black-50 mt-5">
                <h4 className="mt-5"><FontAwesomeIcon icon={faSnowflake} /> Nothing to show here!</h4>
            </div>
         
        </div>
    )
}