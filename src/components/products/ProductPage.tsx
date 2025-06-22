import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ProductCard from './ProductCard';
import Navbar from '../dashboard/Navbar';

export default function ProductPage() {
  return (
    <div className=" ps-md-1">
      <Navbar />

      <div className="">
        <h5 className="mt-5 ps-4 ps-md-0">Products</h5>
        <div className="d-flex flex-wrap gap-3 mt-5 justify-content-center justify-content-md-start align-items-center">
          {[...Array(8)].map((_, idx) => (
            <div key={idx} className="">
              <ProductCard />
            </div>
          ))}
        </div>

        <nav
          aria-label="Page navigation example"
          className="border-top pt-3 mt-5"
          style={{ fontSize: '14px' }}
        >
          <ul className="pagination justify-content-end align-items-center mb-0 gap-2">
            {/* Text: "1-2 of items" */}
            <p className="mb-0 me-3 fw-semibold">1-2 of items</p>

            {/* Previous button (disabled) */}
            <li className="page-item disabled">
              <a
                className="page-link rounded"
                style={{ border: '1px solid #ddd', padding: '4px 12px' }}
              >
                <FontAwesomeIcon icon={faChevronLeft} size="xs" />
              </a>
            </li>

            {/* Page 1 (active) */}
            <li className="page-item active">
              <a
                className="page-link rounded"
                style={{
                  backgroundColor: '#5B61F4',
                  borderColor: '#5B61F4',
                  color: '#fff',
                  padding: '4px 12px',
                }}
              >
                1
              </a>
            </li>

            {/* Page 2 (inactive) */}
            <li className="page-item">
              <a
                className="page-link rounded"
                style={{
                  border: '1px solid #ddd',
                  color: '#333',
                  padding: '4px 12px',
                }}
              >
                2
              </a>
            </li>

            {/* Next button */}
            <li className="page-item">
              <a
                className="page-link rounded"
                style={{
                  border: '1px solid #ddd',
                  padding: '4px 12px',
                  color: '#333',
                }}
              >
                <FontAwesomeIcon icon={faChevronRight} size="xs" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
