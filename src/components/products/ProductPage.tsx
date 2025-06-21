import {  faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProductCard from "./ProductCard";
import Navbar from "../dashboard/Navbar";

export default function ProductPage(){
    return (
        <div className="ps-2 ps-md-1">
            <Navbar/>

            <div className="">
                <h5 className="mt-5">Products</h5>
                <div className="d-flex flex-wrap gap-3 mt-4 justify-content-center justify-content-md-start align-items-center">
                    {[...Array(8)].map((_, idx) => (
                        <div key={idx} className="">
                        <ProductCard />
                        </div>
                    ))}
                </div>

                  <nav aria-label="Page navigation example" className="pt-3 mt-5 pb-3">
                            <ul className="pagination justify-content-center justify-content-md-end  align-items-center mb-0 gap-2">
                                {/* Text: "1-2 of items" */}
                                <p className="mb-0 me-3 fw-semibold">1-2 of items</p>
                
                                {/* Previous button (disabled) */}
                                <li className="page-item disabled">
                                    <a className="page-link rounded" style={{ border: '1px solid #ddd', padding: '6px 12px' }}>
                                        <FontAwesomeIcon icon={faChevronLeft} size="xs" />
                                    </a>
                                </li>
                
                                {/* Page 1 (active) */}
                                <li className="page-item active">
                                    <a className="page-link rounded" style={{ backgroundColor: '#5B61F4', borderColor: '#5B61F4', color: '#fff' }}>
                                        1
                                    </a>
                                </li>
                
                                {/* Page 2 (inactive) */}
                                <li className="page-item">
                                    <a className="page-link rounded" style={{ border: '1px solid #ddd', color: '#333' }}>
                                        2
                                    </a>
                                </li>
                
                                {/* Next button */}
                                <li className="page-item">
                                    <a className="page-link rounded" style={{ border: '1px solid #ddd', padding: '6px 12px', color: '#333' }}>
                                        <FontAwesomeIcon icon={faChevronRight} size="xs" />
                                    </a>
                                </li>
                            </ul>
                        </nav>
            </div>
        </div>
    )
}