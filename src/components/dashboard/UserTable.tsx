import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import seirra from '../../assets/sierra.jpg'

export default function UserTable() {
    const data = [
        {
            user: { name: 'Sierra Ferguson', phone: '+998 (99) 436-46-15', img: 'https://via.placeholder.com/50' },
            carComfort: 'simple',
            orderedTime: '04.12.2021 20:30',
            startLocation: 'пл. Беш Агач, Furkat Street, Tashkent, O\'zbekiston',
            finishLocation: 'Furkat Street, Tashkent, O\'zbekiston',
            income: '50 300 000 SUM'
        },
        {
            user: { name: 'Sierra Ferguson', phone: '+998 (99) 436-46-15', img: 'https://via.placeholder.com/50' },
            carComfort: 'otra',
            orderedTime: '04.12.2021 20:24',
            startLocation: '21 Hamidulla Oripov ko\'chasi, Toshkent, O\'zbekiston',
            finishLocation: 'Oripov ko\'chasi, Toshkent, O\'zbekiston',
            income: '300 000 SUM'
        },
        {
            user: { name: 'Sierra Ferguson', phone: '+998 (99) 436-46-15', img: 'https://via.placeholder.com/50' },
            carComfort: 'convenient',
            orderedTime: '04.12.2021 20:23',
            startLocation: '76 Фаргона Йули, Тошкент, O\'zbekiston',
            finishLocation: '76 Фаргона Йули, Тошкент, O\'zbekiston',
            income: '5 300 000 SUM'
        },
        {
            user: { name: 'Sierra Ferguson', phone: '+998 (99) 436-46-15', img: 'https://via.placeholder.com/50' },
            carComfort: 'convenient',
            orderedTime: '17.11.2021 12:19',
            startLocation: '13 Kumarik ko\'chasi, Tashkent 100167, O\'zbekiston',
            finishLocation: '13 Kumarik ko\'chasi, Tashkent 100167, O\'zbekiston',
            income: '500 300 000 SUM'
        },
        {
            user: { name: 'Sierra Ferguson', phone: '+998 (99) 436-46-15', img: 'https://via.placeholder.com/50' },
            carComfort: 'convenient',
            orderedTime: '04.12.2021 20:30',
            startLocation: '1 Kuyі Talarik ko\'chasi, Toshkent 100091, O\'zbekiston',
            finishLocation: '1 Kuyі Talarik ko\'chasi, Toshkent 100091, O\'zbekiston',
            income: '50 300 000 SUM'
        },
    ];

    return (
            <div className=" mt-4 px-0" style={{ fontSize: "14px" }}>
            <div className="table-s overflow-auto" style={{ borderRadius: '12px'}}>
                <table className="table table-hover align-start mb-0 " style={{ borderRadius: '12px', overflow: 'hidden' }}>
                    <thead className="table-light fw-medium py-2" style={{ borderRadius: '6px', paddingBlock:"8px", color:"#505470" }}>
                        <tr>
                            <th scope="col" style={{ width:"240px",paddingBlockEnd:'16px', paddingBlockStart:'16px'}}><input className="form-check-input me-4" type="checkbox" value="" id="flexCheckDefault"/>User</th>
                            <th scope="col" style={{ width:"180px",paddingBlockEnd:'16px', paddingBlockStart:'16px'}}>Car Comfort</th>
                            <th scope="col" style={{ width:"180px",paddingBlockEnd:'16px', paddingBlockStart:'16px'}}>Ordered Time</th>
                            <th scope="col" style={{ width:"180px",paddingBlockEnd:'16px', paddingBlockStart:'16px'}}>Start Location</th>
                            <th scope="col" style={{ width:"180px",paddingBlockEnd:'16px', paddingBlockStart:'16px'}}>Finish Location</th>
                            <th scope="col" style={{ width:"150px",paddingBlockEnd:'16px', paddingBlockStart:'16px'}}>Income</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index}>
                                <td>
                                    <div className="d-flex align-items-center" style={{ maxWidth:"240px"}}>
                                        <input className="form-check-input me-4" type="checkbox" value="" id="flexCheckDefault"/>
                                        <img src={seirra} alt={item.user.name} className="rounded-circle me-2" width="50" height="50" />
                                        <div>
                                            <div className="fw-medium">{item.user.name}</div>
                                            <small className="text-muted fw-light">{item.user.phone}</small>
                                        </div>
                                    </div>
                                </td>
                                <td className="" style={{ width:"120px", fontSize:"12px"}}>{item.carComfort}</td>
                                <td  style={{ width:"140px", fontSize:"12px"}}>{item.orderedTime}</td>
                                <td  style={{ width:"200px", fontSize:"12px"}}>{item.startLocation}</td>
                                <td  style={{ width:"180px", fontSize:"12px"}}>{item.finishLocation}</td>
                                <td className="fw-bold" style={{width:"150px"}}><span style={{color:"#24C18F", paddingBlock:'4px', paddingInline:'10px', fontSize:"10px", backgroundColor:"#24C18F1A", borderRadius:"10px"}}>{item.income}</span></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
             
            </div>

               <div className="text-center mt-2 d-md-none">
                    <small className="text-muted">
                        <i className="fas fa-arrow-left me-1"></i>
                        Scroll horizontally to see more
                        <i className="fas fa-arrow-right ms-1"></i>
                    </small>
                </div>

            {/* Pagination */}
             <nav aria-label="Page navigation example" className="border-top pt-3" style={{fontSize:"14px"}}>
            <ul className="pagination justify-content-end align-items-center mb-0 gap-2">
                {/* Text: "1-2 of items" */}
                <p className="mb-0 me-3 fw-semibold">1-2 of items</p>

                {/* Previous button (disabled) */}
                <li className="page-item disabled">
                    <a className="page-link rounded" style={{ border: '1px solid #ddd', padding: '4px 12px' }}>
                        <FontAwesomeIcon icon={faChevronLeft} size="xs" />
                    </a>
                </li>

                {/* Page 1 (active) */}
                <li className="page-item active">
                    <a className="page-link rounded" style={{ backgroundColor: '#5B61F4', borderColor: '#5B61F4', color: '#fff',padding: '4px 12px'  }}>
                        1
                    </a>
                </li>

                {/* Page 2 (inactive) */}
                <li className="page-item">
                    <a className="page-link rounded" style={{ border: '1px solid #ddd', color: '#333', padding: '4px 12px'  }}>
                        2
                    </a>
                </li>

                {/* Next button */}
                <li className="page-item">
                    <a className="page-link rounded" style={{ border: '1px solid #ddd', padding: '4px 12px', color: '#333' }}>
                        <FontAwesomeIcon icon={faChevronRight} size="xs" />
                    </a>
                </li>
            </ul>
        </nav>
        </div>

    );
}
