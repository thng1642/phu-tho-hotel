import { Pagination } from 'antd'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { RootState } from '../../app/store'
import Tag from '../../components/NewsCard/Tag'
import { fetchNewsTag } from '../../redux/home/newsCardSlice'
import './index.scss'

export default function Searching() {
  const dispatch = useAppDispatch()
  const keySearch = useParams()
  const tags = useAppSelector((state: RootState) => state.relative)
  useEffect(() => {
    dispatch(fetchNewsTag())
  }, [])
  return (
    <section>
      <div className="header-searching">
        <div className='input-search-container'>
          <div className='input-searching'>
            <input type="text" name="search" id="" defaultValue={keySearch.search} />
            <div className='search-icon'><svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
              <path d="M21.7987 21.2987C20.8577 22.2396 19.7406 22.9861 18.5112 23.4953C17.2818 24.0046 15.9641 24.2667 14.6333 24.2667C11.9458 24.2667 9.36835 23.1991 7.46798 21.2987C5.56762 19.3983 4.5 16.8209 4.5 14.1333C4.5 11.4458 5.56762 8.86835 7.46798 6.96798C9.36835 5.06762 11.9458 4 14.6333 4C15.9641 4 17.2818 4.26211 18.5112 4.77135C19.7406 5.2806 20.8577 6.02702 21.7987 6.96798C22.7396 7.90895 23.4861 9.02604 23.9953 10.2555C24.5046 11.4849 24.7667 12.8026 24.7667 14.1333C24.7667 15.4641 24.5046 16.7818 23.9953 18.0112C23.4861 19.2406 22.7396 20.3577 21.7987 21.2987ZM21.7987 21.2987L28.5 28" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg></div>
          </div>
          <div className='result-searching'>
            <p><span className='count-result-searching'>6</span> kết quả phù hợp</p>
          </div>
        </div>
      </div>
      <div className="result-search-container">
        <div className='result-search-layout'>
          {
            tags.map((value, index) => (
              <Tag key={index} value={value} />
            ))
          }
        </div>
        <>
          <Pagination defaultCurrent={1} total={50} />
        </>
      </div>
    </section>
  )
}