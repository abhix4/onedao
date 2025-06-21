import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import driver from "../../assets/driver1.jpg"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
export default function TopDrivers() {
  return (
    <div className="p-md-3 bg-white rounded-3">
      <div className="d-flex justify-content-between">
      <h5 className="fw-bold mb-3">Top Drivers </h5>
      <FontAwesomeIcon icon={faChevronRight} className="ms-2" size="xs"/>
      </div>
      <Driver
        name="Abhishek Singh"
        phone="+91 9128927466"
        orders={5}
        income={98}
        img={driver}
      />
      <Driver
        name="Abhishek Singh"
        phone="+91 9128927466"
        orders={5}
        income={98}
        img={driver}
      />
      <Driver
        name="Abhishek Singh"
        phone="+91 9128927466"
        orders={5}
        income={98}
        img={driver}
      />

         <Driver
        name="Abhishek Singh"
        phone="+91 9128927466"
        orders={5}
        income={98}
        img={driver}
      />

         <Driver
        name="Abhishek Singh"
        phone="+91 9128927466"
        orders={5}
        income={98}
        img={driver}
      />
    </div>
  );
}

type DriverProps = {
  name: string;
  phone: string;
  orders: number;
  income: number;
  img: string;
};

function Driver({ name, phone, orders, income, img }: DriverProps) {
  return (
    <div className="d-flex justify-content-between align-items-center bg-light rounded-3  p-3 mb-2">
      <div className="d-flex align-items-center gap-3">
        <img
          src={img}
          alt={name}
          className="rounded"
          style={{ width: "48px", height: "48px", objectFit: "cover" }}
        />
        <div>
          <p className="mb-0 fw-semibold">{name}</p>
          <p className="mb-0 text-muted" style={{fontSize:'12px'}}>{phone}</p>
        </div>
      </div>
      <div className="text-end">
        <p className="mb-0  small">Orders: <span className="fw-semibold fs-5">{orders}</span></p>
        <p className="mb-0 small">Income: <span className="fw-semibold fs-5">${income}</span></p>
      </div>
    </div>
  );
}
