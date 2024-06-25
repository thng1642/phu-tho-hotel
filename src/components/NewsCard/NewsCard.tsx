import { useEffect, useRef } from "react"
import { News } from "../../page/home/Home"
import './index.scss'

function NewsCard(props: News) {
    const pRef = useRef<HTMLParagraphElement>(null)
    const titleRef = useRef<HTMLHeadingElement>(null)
    useEffect(() => {
        // 28 is height h3 tag if 1 line
        if (titleRef.current?.clientHeight === 28) {
            pRef.current?.classList.add('line-clamp-3')
        } else {
            pRef.current?.classList.add('line-clamp-2')
        }
    }, [])
    return (
        <div className="news-container">
            <div className="news-avatar">
                <img src={props.img1} alt="anh bia" />
                <div className="news-tag">{props.tag}</div>
                <div className="rectangle">Xem thêm</div>
            </div>
            <div className="text-content">
                <h3 ref={titleRef} className="title-news">{props.title}</h3>
                <div className="short-description">
                    <p ref={pRef}>{props["short-des"]}</p>
                </div>
            </div>
            <div className="footer-news-card">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <g clip-path="url(#clip0_3257_1116)">
                            <path d="M9.375 1.875C7.89164 1.875 6.44159 2.31487 5.20823 3.13898C3.97486 3.96309 3.01356 5.13443 2.44591 6.50487C1.87825 7.87532 1.72972 9.38332 2.01911 10.8382C2.3085 12.293 3.02281 13.6294 4.0717 14.6783C5.1206 15.7272 6.45697 16.4415 7.91182 16.7309C9.36668 17.0203 10.8747 16.8717 12.2451 16.3041C13.6156 15.7364 14.7869 14.7751 15.611 13.5418C16.4351 12.3084 16.875 10.8584 16.875 9.375C16.8729 7.38652 16.082 5.48009 14.676 4.07402C13.2699 2.66795 11.3635 1.8771 9.375 1.875ZM13.4135 9.95192H9.375C9.22199 9.95192 9.07525 9.89114 8.96706 9.78295C8.85886 9.67475 8.79808 9.52801 8.79808 9.375V5.33654C8.79808 5.18353 8.85886 5.03679 8.96706 4.92859C9.07525 4.8204 9.22199 4.75961 9.375 4.75961C9.52801 4.75961 9.67475 4.8204 9.78295 4.92859C9.89114 5.03679 9.95192 5.18353 9.95192 5.33654V8.79808H13.4135C13.5665 8.79808 13.7132 8.85886 13.8214 8.96705C13.9296 9.07525 13.9904 9.22199 13.9904 9.375C13.9904 9.52801 13.9296 9.67475 13.8214 9.78295C13.7132 9.89114 13.5665 9.95192 13.4135 9.95192Z" fill="#DBA765" />
                        </g>
                        <defs>
                            <clipPath id="clip0_3257_1116">
                                <rect width="20" height="20" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    <span>{props.dateAt}</span>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M10.0002 3.33337C10.8842 3.33337 11.7321 3.68456 12.3572 4.30968C12.9823 4.93481 13.3335 5.78265 13.3335 6.66671C13.3335 7.55076 12.9823 8.39861 12.3572 9.02373C11.7321 9.64885 10.8842 10 10.0002 10C9.11611 10 8.26826 9.64885 7.64314 9.02373C7.01802 8.39861 6.66683 7.55076 6.66683 6.66671C6.66683 5.78265 7.01802 4.93481 7.64314 4.30968C8.26826 3.68456 9.11611 3.33337 10.0002 3.33337ZM10.0002 16.6667C10.0002 16.6667 16.6668 16.6667 16.6668 15C16.6668 13 13.4168 10.8334 10.0002 10.8334C6.5835 10.8334 3.3335 13 3.3335 15C3.3335 16.6667 10.0002 16.6667 10.0002 16.6667Z" fill="#DBA765" />
                    </svg>
                    <span>{props.author}</span>
                </div>
            </div>
        </div>
    )
}
export default NewsCard