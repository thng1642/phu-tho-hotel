import { News } from "../../page/home/Home"
import './tag.scss'

type Prop = {
  value: News
}
export default function Tag(prop: Prop) {
  return (
    <div className="tag-container">
      <div style={{
        // height: 'auto',
        // overflow: 'hidden',
        // width: '306px'
      }} ><img className="img-tag" src={prop.value.img1} alt="anh" />
        <div className="tag-hover">
          Xem thêm
        </div>
      </div>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingBottom: 12
      }}>
        <div className="header-tag">
          <span>{prop.value.tag}</span>
          <h3>{prop.value.title}</h3>
          <p>{prop.value["short-des"]}</p>
        </div>
        <div className="footer-tag">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <g clip-path="url(#clip0_3485_1337)">
                <path d="M9.375 1.875C7.89164 1.875 6.44159 2.31487 5.20823 3.13898C3.97486 3.96309 3.01356 5.13443 2.44591 6.50487C1.87825 7.87532 1.72972 9.38332 2.01911 10.8382C2.3085 12.293 3.02281 13.6294 4.0717 14.6783C5.1206 15.7272 6.45697 16.4415 7.91182 16.7309C9.36668 17.0203 10.8747 16.8717 12.2451 16.3041C13.6156 15.7364 14.7869 14.7751 15.611 13.5418C16.4351 12.3084 16.875 10.8584 16.875 9.375C16.8729 7.38652 16.082 5.48009 14.676 4.07402C13.2699 2.66795 11.3635 1.8771 9.375 1.875ZM13.4135 9.95192H9.375C9.22199 9.95192 9.07525 9.89114 8.96706 9.78295C8.85886 9.67475 8.79808 9.52801 8.79808 9.375V5.33654C8.79808 5.18353 8.85886 5.03679 8.96706 4.92859C9.07525 4.8204 9.22199 4.75961 9.375 4.75961C9.52801 4.75961 9.67475 4.8204 9.78295 4.92859C9.89114 5.03679 9.95192 5.18353 9.95192 5.33654V8.79808H13.4135C13.5665 8.79808 13.7132 8.85886 13.8214 8.96705C13.9296 9.07525 13.9904 9.22199 13.9904 9.375C13.9904 9.52801 13.9296 9.67475 13.8214 9.78295C13.7132 9.89114 13.5665 9.95192 13.4135 9.95192Z" fill="#DBA765" />
              </g>
              <defs>
                <clipPath id="clip0_3485_1337">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
            {prop.value.dateAt}
          </div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10.0007 3.33337C10.8847 3.33337 11.7326 3.68456 12.3577 4.30968C12.9828 4.93481 13.334 5.78265 13.334 6.66671C13.334 7.55076 12.9828 8.39861 12.3577 9.02373C11.7326 9.64885 10.8847 10 10.0007 10C9.1166 10 8.26875 9.64885 7.64363 9.02373C7.01851 8.39861 6.66732 7.55076 6.66732 6.66671C6.66732 5.78265 7.01851 4.93481 7.64363 4.30968C8.26875 3.68456 9.1166 3.33337 10.0007 3.33337ZM10.0007 16.6667C10.0007 16.6667 16.6673 16.6667 16.6673 15C16.6673 13 13.4173 10.8334 10.0007 10.8334C6.58398 10.8334 3.33398 13 3.33398 15C3.33398 16.6667 10.0007 16.6667 10.0007 16.6667Z" fill="#DBA765" />
            </svg>
            {prop.value.author}
          </div>
        </div>
      </div>
    </div>
  )
}