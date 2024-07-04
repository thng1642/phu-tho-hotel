import { useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import './index.scss'
import Dropdown from './Dropdown'

const listRooms = [
    {
        name: 'Phòng Standard',
        id: "xq7i2X2INpk5sFaHskcg"
    },
    {
        name: 'Phòng Dulex 2 giường',
        id: 'r2OleHegdqJZ2zcIai9C'
    },
    {
        name: 'Phòng Delux 1 giường',
        id: 'i8b8bGrHcPLAHB4SyF3c'
    },
    {
        name: 'Phòng Suite',
        id: 'TlDj3rXSbEHSGTcNtXKp'
    }

]
const listMassage = [
    { name: 'Phòng VIP Nhật', id: 'j5jInN5VBspMlQY2XCSX' },
    {
        name: 'Phòng VIP Ai Cập',
        id: 'fLpDUDZANUl0c3yp81Fn'
    },
    {
        id: '7z3lx3Q2qEIS79x4JOIz',
        name: 'Phòng VIP Hawaii',
    },
    { name: 'Phòng VIP Thái Lan', id: 'uFs2UpDkeHcgJ3yQlR2S' },
    { id: 'isYKXymFgaVmyxPJIDsF', name: 'Phòng VIP Trung Quốc' },
    {
        id: 'XFCz5R0VlcsULEBLcNfV',
        name: 'Phòng VIP Thiên nhiên'
    },
    {
        id: 'bsMbNwH31dTHBJJqfm1p',
        name: 'Phòng VIP Việt Nam'
    }
]
const listOtherSer = ['Đưa đón sân bay', 'Nhà hàng điểm tâm']

function Navigation() {
    const [openDropdown, setOpenDropdown] = useState(false)
    const [isDropdownRoom, setIsDropdownRoom] = useState(false)
    const [isDropdownMassage, setIsDropdownMassage] = useState(false)
    const searchBoxRef = useRef(null)
    const nav = useNavigate()
    const location = useLocation()
    const setUpDropdownSearch = (e: MouseEvent) => {
        if (searchBoxRef.current !== e.target) {
            setOpenDropdown(false)
        }
    }
    useEffect(() => {
        document.addEventListener('click', setUpDropdownSearch, true)
        return () => document.removeEventListener('click', setUpDropdownSearch)
    }, [])

    return (
        <nav className="header-nav">
            <div className='left-nav'>
                <div className={`${location.pathname === '/' ? "focused" : ''}`}>
                    <span
                        onClick={() => nav('/')}
                    >Trang chủ</span>
                </div>
                <div className={`${location.pathname.includes('phongnghi') ? "focused" : ''}`}>
                    <span
                        onMouseEnter={() => setIsDropdownRoom(true)}
                        onClick={() => nav('/phongnghi')}
                    >
                        Phòng nghỉ</span>
                    {isDropdownRoom ? <Dropdown items={listRooms} handlerMouseOut={setIsDropdownRoom} isClose={isDropdownRoom} /> : null}
                </div>
            </div>
            <div>
                <img src="https://firebasestorage.googleapis.com/v0/b/alta-875f0.appspot.com/o/logo_hotel.png?alt=media&token=097554a5-59f8-464a-9832-dbc63d996d64" alt="logo-hotel" />
            </div>
            <div className='right-nav'>
                <div className={`${location.pathname.includes('massage') ? "focused" : ''}`} ><span
                    onMouseEnter={() => setIsDropdownMassage(true)}
                    onClick={() => nav('/massage')}
                >massage
                </span>
                    {isDropdownMassage ? <Dropdown items={listMassage} handlerMouseOut={setIsDropdownMassage} isClose={isDropdownMassage} /> : null}
                </div>
                <div className={`${location.pathname.includes('dichvu') ? "focused" : ''}`} ><span
                    // onMouseEnter={() => setIsDropdownMassage(true)}
                    onClick={() => nav('/dichvu')}
                >các dịch vụ khác
                </span>
                    {/* {isDropdownMassage ? <Dropdown items={listMassage} handlerMouseOut={setIsDropdownMassage} isClose={isDropdownMassage} /> : null} */}
                </div>
                <div className={`${location.pathname.includes('contact') ? "focused" : ''}`} ><span
                    // onMouseEnter={() => setIsDropdownMassage(true)}
                    onClick={() => nav('/contact')}
                >liên hệ
                </span>
                    {/* {isDropdownMassage ? <Dropdown items={listMassage} handlerMouseOut={setIsDropdownMassage} isClose={isDropdownMassage} /> : null} */}
                </div>
            </div>
            <div className="nav-search">
                <div className='search-box--header' ref={searchBoxRef} onClick={() => setOpenDropdown(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                        <path d="M18.6363 18.6363C17.813 19.4597 16.8355 20.1128 15.7598 20.5584C14.684 21.004 13.5311 21.2333 12.3667 21.2333C10.0151 21.2333 7.75981 20.2992 6.09699 18.6363C4.43416 16.9735 3.5 14.7183 3.5 12.3667C3.5 10.0151 4.43416 7.75981 6.09699 6.09699C7.75981 4.43416 10.0151 3.5 12.3667 3.5C13.5311 3.5 14.684 3.72934 15.7598 4.17493C16.8355 4.62053 17.813 5.27364 18.6363 6.09699C19.4597 6.92033 20.1128 7.89779 20.5584 8.97354C21.004 10.0493 21.2333 11.2023 21.2333 12.3667C21.2333 13.5311 21.004 14.684 20.5584 15.7598C20.1128 16.8355 19.4597 17.813 18.6363 18.6363ZM18.6363 18.6363L24.5 24.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                {
                    openDropdown ? <div className="search-box--dropdown">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M13.3117 13.3117C12.7236 13.8998 12.0254 14.3663 11.257 14.6846C10.4886 15.0029 9.66504 15.1667 8.83333 15.1667C7.15363 15.1667 5.54272 14.4994 4.35499 13.3117C3.16726 12.1239 2.5 10.513 2.5 8.83333C2.5 7.15363 3.16726 5.54272 4.35499 4.35499C5.54272 3.16726 7.15363 2.5 8.83333 2.5C9.66504 2.5 10.4886 2.66382 11.257 2.9821C12.0254 3.30038 12.7236 3.76689 13.3117 4.35499C13.8998 4.94309 14.3663 5.64128 14.6846 6.40967C15.0029 7.17807 15.1667 8.00163 15.1667 8.83333C15.1667 9.66504 15.0029 10.4886 14.6846 11.257C14.3663 12.0254 13.8998 12.7236 13.3117 13.3117ZM13.3117 13.3117L17.5 17.5" stroke="#DBA765" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <input className='search-input' type="text" placeholder='Tìm kiếm' />
                    </div> : null
                }

            </div>
        </nav>
    )
}
export default Navigation