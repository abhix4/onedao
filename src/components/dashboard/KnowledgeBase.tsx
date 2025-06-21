import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import stat from '../../assets/statistic.png'


export default function KnowledgeBase() {
    return (
        <div className="p-md-2">
            <h5 className="fw-bold">Knowledge Base</h5>
            <div className="d-flex  gap-2 mt-4 overflow-auto">
                <div
                    className="py-4 px-2 rounded-3 fw-medium d-flex justify-content-center align-items-center flex-grow-1"
                    style={{
                        backgroundColor: "#3366FF33",
                        color: "#3366FF",
                        maxWidth: '160px',
                        flexBasis: '200px',
                        fontSize:"12px"
                    }}
                >
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="me-2">
                    <path d="M28.0799 15.76L27.8666 15.4667C27.4933 15.0133 27.0533 14.6533 26.5466 14.3867C25.8666 14 25.0933 13.8 24.2933 13.8H7.69327C6.89327 13.8 6.13327 14 5.43994 14.3867C4.91994 14.6667 4.45327 15.0533 4.0666 15.5333C3.3066 16.5067 2.9466 17.7067 3.0666 18.9067L3.55994 25.1333C3.73327 27.0133 3.95994 29.3333 8.1866 29.3333H23.8133C28.0399 29.3333 28.2533 27.0133 28.4399 25.12L28.9333 18.92C29.0533 17.8 28.7599 16.68 28.0799 15.76ZM19.1866 23.12H12.7999C12.2799 23.12 11.8666 22.6933 11.8666 22.1867C11.8666 21.68 12.2799 21.2533 12.7999 21.2533H19.1866C19.7066 21.2533 20.1199 21.68 20.1199 22.1867C20.1199 22.7067 19.7066 23.12 19.1866 23.12Z" fill="#3366FF"/>
                    <path opacity="0.4" d="M4.50684 15.08C4.80017 14.8133 5.0935 14.5733 5.44017 14.3867C6.12017 14 6.8935 13.8 7.6935 13.8H24.3068C25.1068 13.8 25.8668 14 26.5602 14.3867C26.9068 14.5733 27.2135 14.8133 27.4935 15.0933V14.3867V13.0933C27.4935 8.33334 26.0402 6.88 21.2802 6.88H18.1068C17.5202 6.88 17.5068 6.86667 17.1602 6.41334L15.5602 4.26667C14.8002 3.28001 14.2002 2.66667 12.2935 2.66667H10.7202C5.96017 2.66667 4.50684 4.12001 4.50684 8.88V14.4V15.08Z" fill="#3366FF"/>
                    </svg>

                    Top orders
                     <FontAwesomeIcon icon={faChevronRight} className="ms-2" size="xs"/>
                </div>
                <div
                    className="py-4 px-2 rounded-3 d-flex justify-content-center flex-grow-1 align-items-center "
                    style={{
                        backgroundColor: "#FF333F33",
                        color: "#FF333F",
                        maxWidth: '160px',
                        flexBasis: '200px',
                        fontSize:"12px"
                    }}
                >
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="me-2">
                    <path d="M28.0799 15.76L27.8666 15.4667C27.4933 15.0133 27.0533 14.6533 26.5466 14.3867C25.8666 14 25.0933 13.8 24.2933 13.8H7.69327C6.89327 13.8 6.13327 14 5.43994 14.3867C4.91994 14.6667 4.45327 15.0533 4.0666 15.5333C3.3066 16.5067 2.9466 17.7067 3.0666 18.9067L3.55994 25.1333C3.73327 27.0133 3.95994 29.3333 8.1866 29.3333H23.8133C28.0399 29.3333 28.2533 27.0133 28.4399 25.12L28.9333 18.92C29.0533 17.8 28.7599 16.68 28.0799 15.76ZM19.1866 23.12H12.7999C12.2799 23.12 11.8666 22.6933 11.8666 22.1867C11.8666 21.68 12.2799 21.2533 12.7999 21.2533H19.1866C19.7066 21.2533 20.1199 21.68 20.1199 22.1867C20.1199 22.7067 19.7066 23.12 19.1866 23.12Z" fill="#FF333F"/>
                    <path opacity="0.4" d="M4.50684 15.08C4.80017 14.8133 5.0935 14.5733 5.44017 14.3867C6.12017 14 6.8935 13.8 7.6935 13.8H24.3068C25.1068 13.8 25.8668 14 26.5602 14.3867C26.9068 14.5733 27.2135 14.8133 27.4935 15.0933V14.3867V13.0933C27.4935 8.33334 26.0402 6.88 21.2802 6.88H18.1068C17.5202 6.88 17.5068 6.86667 17.1602 6.41334L15.5602 4.26667C14.8002 3.28001 14.2002 2.66667 12.2935 2.66667H10.7202C5.96017 2.66667 4.50684 4.12001 4.50684 8.88V14.4V15.08Z" fill="#FF333F"/>
                    </svg>

                    Total earnings
                     <FontAwesomeIcon icon={faChevronRight} className="ms-2" size="xs"/>
                </div>
                <div
                    className="py-4 px-2 rounded-3 d-flex justify-content-center flex-grow-1 align-items-center "
                    style={{
                        backgroundColor: "#FF953333",
                        color: "#FF9533",
                        maxWidth: '160px',
                        flexBasis: '200px',
                        fontSize:"12px"
                    }}
                >
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="me-2">
                    <path d="M28.0799 15.76L27.8666 15.4667C27.4933 15.0133 27.0533 14.6533 26.5466 14.3867C25.8666 14 25.0933 13.8 24.2933 13.8H7.69327C6.89327 13.8 6.13327 14 5.43994 14.3867C4.91994 14.6667 4.45327 15.0533 4.0666 15.5333C3.3066 16.5067 2.9466 17.7067 3.0666 18.9067L3.55994 25.1333C3.73327 27.0133 3.95994 29.3333 8.1866 29.3333H23.8133C28.0399 29.3333 28.2533 27.0133 28.4399 25.12L28.9333 18.92C29.0533 17.8 28.7599 16.68 28.0799 15.76ZM19.1866 23.12H12.7999C12.2799 23.12 11.8666 22.6933 11.8666 22.1867C11.8666 21.68 12.2799 21.2533 12.7999 21.2533H19.1866C19.7066 21.2533 20.1199 21.68 20.1199 22.1867C20.1199 22.7067 19.7066 23.12 19.1866 23.12Z" fill="#FF9533"/>
                    <path opacity="0.4" d="M4.50684 15.08C4.80017 14.8133 5.0935 14.5733 5.44017 14.3867C6.12017 14 6.8935 13.8 7.6935 13.8H24.3068C25.1068 13.8 25.8668 14 26.5602 14.3867C26.9068 14.5733 27.2135 14.8133 27.4935 15.0933V14.3867V13.0933C27.4935 8.33334 26.0402 6.88 21.2802 6.88H18.1068C17.5202 6.88 17.5068 6.86667 17.1602 6.41334L15.5602 4.26667C14.8002 3.28001 14.2002 2.66667 12.2935 2.66667H10.7202C5.96017 2.66667 4.50684 4.12001 4.50684 8.88V14.4V15.08Z" fill="#FF9533"/>
                    </svg>

                    Profit
                    <FontAwesomeIcon icon={faChevronRight} className="ms-5" size="xs"/>
                </div>
            </div>

            <div>
                <div
                    className="d-flex justify-content-between align-items-start p-4 rounded-3 mt-5 "
                    style={{
                        backgroundColor: "#F7F9FC",
                        width: "100%",
                        maxWidth: "600px",
                    }}
                >
                    <h5>Statistic</h5>
                    <div> <FontAwesomeIcon icon={faChevronLeft} className="me-2" size="xs"/> Aug 2021   <FontAwesomeIcon icon={faChevronRight} className="ms-2" size="xs"/></div>
                </div>
                <img src={stat} alt="statistic" style={{ width: "100%", maxWidth: "600px", height: "auto", objectFit: "cover" }} className="rounded-bottom"/>
            </div>
          
        </div>
    )
}