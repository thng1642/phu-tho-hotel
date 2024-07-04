import { Input } from 'antd'
import DecoHeader from '../../components/Deco-title/DecoHeader'
import './contact.scss'

const { TextArea } = Input
const inputFieldCSS: React.CSSProperties = {
  display: 'flex',
  height: 47,
  width: 808,
  padding: "18px 16px",
  alignItems: 'flex-start',
  background: '#FFF',
  color: '#999',
  fontFamily: 'Lato',
  fontSize: 16,
  fontWeight: 400,
  lineHeight: 24
}
function Contact() {
  return (
    <section>
      <div className="header-contact">
        <div>
          <h2>Liên hệ</h2>
          <DecoHeader name='' />
        </div>
      </div>
      <section style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '68px',
      }}>
        <div>
          <div className='info-contact-container'>
            <DecoHeader name='liên hệ chúng tôi' />
            <div>
              <div className='info-contact'>
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="49" viewBox="0 0 48 49" fill="none">
                  <path d="M36.6568 45.5C34.8268 45.5 32.2562 44.8381 28.4068 42.6875C23.7259 40.0625 20.1052 37.639 15.4496 32.9956C10.9609 28.5097 8.7765 25.6053 5.71931 20.0422C2.26556 13.7609 2.85431 10.4684 3.51243 9.06123C4.29618 7.37936 5.45306 6.37342 6.94837 5.37498C7.7977 4.81852 8.6965 4.3415 9.63337 3.94998C9.72712 3.90967 9.81431 3.87123 9.89212 3.83655C10.3562 3.62748 11.0593 3.31155 11.9499 3.64905C12.5443 3.87217 13.0749 4.32873 13.9056 5.14905C15.609 6.82905 17.9368 10.5706 18.7956 12.4081C19.3721 13.6465 19.7537 14.464 19.7546 15.3809C19.7546 16.4544 19.2146 17.2822 18.5593 18.1756C18.4365 18.3434 18.3146 18.5037 18.1965 18.6594C17.4831 19.5969 17.3265 19.8678 17.4296 20.3515C17.6387 21.3237 19.1977 24.2178 21.7599 26.7744C24.3221 29.3309 27.1327 30.7915 28.1087 30.9997C28.6131 31.1075 28.8896 30.9444 29.8571 30.2056C29.9959 30.0997 30.1384 29.99 30.2874 29.8803C31.2868 29.1369 32.0762 28.6109 33.1243 28.6109H33.1299C34.0421 28.6109 34.8231 29.0065 36.1168 29.659C37.8043 30.5103 41.6584 32.8081 43.3487 34.5134C44.1709 35.3422 44.6293 35.8709 44.8534 36.4644C45.1909 37.3578 44.8731 38.0581 44.6659 38.5269C44.6312 38.6047 44.5928 38.69 44.5524 38.7847C44.1578 39.7199 43.678 40.6168 43.119 41.4641C42.1224 42.9547 41.1127 44.1087 39.4271 44.8934C38.5616 45.3028 37.6143 45.5102 36.6568 45.5Z" fill="#DBA765" />
                </svg>
                <h3>hotline</h3>
                <p>(028) 38551310</p>
              </div>
              <div className='info-contact'>
                <svg xmlns="http://www.w3.org/2000/svg" width="49" height="48" viewBox="0 0 49 48" fill="none">
                  <g clip-path="url(#clip0_2707_8774)">
                    <path d="M24.5 3C20.1255 3.00496 15.9315 4.74494 12.8382 7.83822C9.74494 10.9315 8.00496 15.1255 8 19.5C8 33.6188 23 44.2819 23.6394 44.7281C23.8916 44.9048 24.1921 44.9996 24.5 44.9996C24.8079 44.9996 25.1084 44.9048 25.3606 44.7281C26 44.2819 41 33.6188 41 19.5C40.995 15.1255 39.2551 10.9315 36.1618 7.83822C33.0685 4.74494 28.8745 3.00496 24.5 3ZM24.5 13.5C25.6867 13.5 26.8467 13.8519 27.8334 14.5112C28.8201 15.1705 29.5892 16.1075 30.0433 17.2039C30.4974 18.3003 30.6162 19.5067 30.3847 20.6705C30.1532 21.8344 29.5818 22.9035 28.7426 23.7426C27.9035 24.5818 26.8344 25.1532 25.6705 25.3847C24.5067 25.6162 23.3003 25.4974 22.2039 25.0433C21.1075 24.5892 20.1705 23.8201 19.5112 22.8334C18.8519 21.8467 18.5 20.6867 18.5 19.5C18.5 17.9087 19.1321 16.3826 20.2574 15.2574C21.3826 14.1321 22.9087 13.5 24.5 13.5Z" fill="#DBA765" />
                  </g>
                  <defs>
                    <clipPath id="clip0_2707_8774">
                      <rect width="48" height="48" fill="white" transform="translate(0.5)" />
                    </clipPath>
                  </defs>
                </svg>
                <h3>địa chỉ</h3>
                <p>915 Đường 3 Tháng 2, Phường 7, Quận 11, TP. Hồ Chí Minh</p>
              </div>
              <div className='info-contact'>
                <svg xmlns="http://www.w3.org/2000/svg" width="49" height="49" viewBox="0 0 49 49" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5 41.5H34.5C40.5 41.5 44.5 38.5 44.5 31.5V17.5C44.5 10.5 40.5 7.5 34.5 7.5H14.5C8.5 7.5 4.5 10.5 4.5 17.5V31.5C4.5 38.5 8.5 41.5 14.5 41.5ZM34.9681 19.086C35.2917 18.8275 35.3445 18.3556 35.086 18.0319C34.8275 17.7083 34.3556 17.6555 34.0319 17.914L27.7729 22.9132L27.7725 22.9135C25.9862 24.3354 22.9946 24.3355 21.208 22.9139L21.2071 22.9132L14.969 17.9147C14.6457 17.6557 14.1737 17.7078 13.9147 18.031C13.6557 18.3543 13.7078 18.8263 14.031 19.0853L20.271 24.0853L20.2729 24.0868C22.6063 25.9444 26.3737 25.9444 28.7071 24.0868L28.7081 24.086L34.9681 19.086Z" fill="#DBA765" />
                </svg>
                <h3>email</h3>
                <p>phutho@phuthohotel.vn</p>
              </div>
            </div>
          </div>
        </div>
        <div className="help-me-contact">
          <h4>Xin chào!<br />Chúng tôi có thể giúp gì cho quý khách?</h4>
          <div className="input-fields-container">
            <Input style={inputFieldCSS} placeholder="Họ và tên" />
            <Input style={inputFieldCSS} placeholder="Số điện thoại" />
            <Input style={inputFieldCSS} placeholder="Email" />
            <TextArea placeholder="Lời nhắn..."
              style={{
                display: 'flex',
                height: 182,
                width: 808,
                padding: "18px 16px",
                alignItems: 'flex-start',
                background: '#FFF',
                color: '#999',
                fontFamily: 'Lato',
                fontSize: 16,
                fontWeight: 400,
                lineHeight: 24,
                resize: 'none'
              }}
            />
            <div className="submit-btn">
              Gửi
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}
export default Contact