import { Dispatch, SetStateAction, useLayoutEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"

function DecorationDropdown() {
    return (
        <div className='decoration-dropdown'>
            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="6" viewBox="0 0 11 6" fill="none">
                <path d="M3.59757 0.477664L4.19617e-05 3.00861L3.59757 5.52234C4.03783 5.83612 4.52721 6 5.02396 6C5.5207 6 6.01006 5.83612 6.45033 5.52234L10.0479 3.00861L6.45033 0.477664C6.01006 0.163881 5.5207 0 5.02396 0C4.52721 0 4.03783 0.163881 3.59757 0.477664Z" fill="#DBA765" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="5" height="4" viewBox="0 0 5 4" fill="none">
                <path d="M4.96484 2C4.96484 2.39556 4.83388 2.78224 4.58847 3.11114C4.34307 3.44004 3.99425 3.69638 3.58615 3.84776C3.17806 3.99913 2.72898 4.03874 2.29575 3.96157C1.86251 3.8844 1.46457 3.69392 1.15223 3.41421C0.839882 3.13451 0.627158 2.77814 0.540982 2.39018C0.454806 2.00222 0.499053 1.60008 0.668094 1.23463C0.837134 0.86918 1.12338 0.556823 1.49065 0.33706C1.85793 0.117298 2.28975 0 2.73147 0C3.3238 0 3.89188 0.210714 4.31072 0.585786C4.72956 0.960859 4.96484 1.46957 4.96484 2Z" fill="#DBA765" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="88" height="2" viewBox="0 0 88 2" fill="none">
                <path d="M0.88353 2H86.7815C86.9056 2 87.0246 1.89464 87.1124 1.70711C87.2002 1.51957 87.2495 1.26522 87.2495 1C87.2495 0.734784 87.2002 0.48043 87.1124 0.292894C87.0246 0.105357 86.9056 0 86.7815 0H0.88353C0.759399 0 0.640335 0.105357 0.552559 0.292894C0.464783 0.48043 0.415474 0.734784 0.415474 1C0.415474 1.26522 0.464783 1.51957 0.552559 1.70711C0.640335 1.89464 0.759399 2 0.88353 2Z" fill="#DBA765" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="6" viewBox="0 0 11 6" fill="none">
                <path d="M3.59757 0.477664L4.19617e-05 3.00861L3.59757 5.52234C4.03783 5.83612 4.52721 6 5.02396 6C5.5207 6 6.01006 5.83612 6.45033 5.52234L10.0479 3.00861L6.45033 0.477664C6.01006 0.163881 5.5207 0 5.02396 0C4.52721 0 4.03783 0.163881 3.59757 0.477664Z" fill="#DBA765" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="10" viewBox="0 0 16 10" fill="none">
                <path d="M6.87494 0.359636L0 5.0051L6.87494 9.64036C7.22259 9.87666 7.60843 10 8 10C8.39157 10 8.77742 9.87666 9.12506 9.64036L16 5.0051L9.12506 0.359636C8.77742 0.123338 8.39157 0 8 0C7.60843 0 7.22259 0.123338 6.87494 0.359636Z" fill="#DBA765" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="6" viewBox="0 0 11 6" fill="none">
                <path d="M3.59757 0.477664L4.19617e-05 3.00861L3.59757 5.52234C4.03783 5.83612 4.52721 6 5.02396 6C5.5207 6 6.01006 5.83612 6.45033 5.52234L10.0479 3.00861L6.45033 0.477664C6.01006 0.163881 5.5207 0 5.02396 0C4.52721 0 4.03783 0.163881 3.59757 0.477664Z" fill="#DBA765" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="88" height="2" viewBox="0 0 88 2" fill="none">
                <path d="M0.88353 2H86.7815C86.9056 2 87.0246 1.89464 87.1124 1.70711C87.2002 1.51957 87.2495 1.26522 87.2495 1C87.2495 0.734784 87.2002 0.48043 87.1124 0.292894C87.0246 0.105357 86.9056 0 86.7815 0H0.88353C0.759399 0 0.640335 0.105357 0.552559 0.292894C0.464783 0.48043 0.415474 0.734784 0.415474 1C0.415474 1.26522 0.464783 1.51957 0.552559 1.70711C0.640335 1.89464 0.759399 2 0.88353 2Z" fill="#DBA765" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="5" height="4" viewBox="0 0 5 4" fill="none">
                <path d="M4.96484 2C4.96484 2.39556 4.83388 2.78224 4.58847 3.11114C4.34307 3.44004 3.99425 3.69638 3.58615 3.84776C3.17806 3.99913 2.72898 4.03874 2.29575 3.96157C1.86251 3.8844 1.46457 3.69392 1.15223 3.41421C0.839882 3.13451 0.627158 2.77814 0.540982 2.39018C0.454806 2.00222 0.499053 1.60008 0.668094 1.23463C0.837134 0.86918 1.12338 0.556823 1.49065 0.33706C1.85793 0.117298 2.28975 0 2.73147 0C3.3238 0 3.89188 0.210714 4.31072 0.585786C4.72956 0.960859 4.96484 1.46957 4.96484 2Z" fill="#DBA765" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="6" viewBox="0 0 11 6" fill="none">
                <path d="M3.59757 0.477664L4.19617e-05 3.00861L3.59757 5.52234C4.03783 5.83612 4.52721 6 5.02396 6C5.5207 6 6.01006 5.83612 6.45033 5.52234L10.0479 3.00861L6.45033 0.477664C6.01006 0.163881 5.5207 0 5.02396 0C4.52721 0 4.03783 0.163881 3.59757 0.477664Z" fill="#DBA765" />
            </svg>
        </div>
    )
}
export interface Item {
    name: string
    id: string
}
type Props = {
    name: String,
    items: Item[],
    handlerMouseOut: Dispatch<SetStateAction<boolean>>,
    isClose: boolean
}
function Dropdown(props: Props) {
    const [selected, setSelected] = useState('')
    const location = useLocation()
    const nav = useNavigate()
    const handleClick = (id: string) => {
        nav(`/${props.name}/${id}`, { state: id })
    }
    useLayoutEffect(() => {
        const tmp = location.pathname.split('/')[2]
        setSelected(tmp)
    }, [location.pathname])
    return (
        <div className='dropdown'
            onMouseLeave={() => {
                props.handlerMouseOut(false)
            }}
        >
            <DecorationDropdown />
            <div className='list-items'>
                {
                    props.items.map((value, index) => {
                        const style = 'dropdown-items--focus'
                        if (selected === value.id)
                            return (
                                <p onClick={() => handleClick(value.id)} key={index} className={style + ' dropdown-items'}>{value.name}</p>
                            )
                        return (
                            <p onClick={() => handleClick(value.id)} key={index} className='dropdown-items'>{value.name}</p>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Dropdown