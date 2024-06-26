import './index.scss'
type Prop = {
  author: string,
  content: string,
  dateAt: string,
}
function Feedback(prop: Prop) {
  return (
    <div className='feedback-container'>
      <div className="header-feedback">
        <img src="https://firebasestorage.googleapis.com/v0/b/alta-875f0.appspot.com/o/avt.jpg?alt=media&token=45de4599-c10c-409c-bc4e-3b97532d3abe" alt="anh dai dien" />
        <div>
          <h4>{prop.author}</h4>
          <span>{prop.dateAt}</span>
        </div>
      </div>
      <div className="content-feedback">
        <p>{prop.content}</p>
      </div>
    </div>
  )
}
export default Feedback