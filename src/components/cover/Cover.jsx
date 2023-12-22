import './Cover.css'

export const Cover = (props) => {
const {title, title2, text, text2, img} = props;
  
return (
    <div className='cover-container'>
      <div className='text-cover'>
        <h1 className='titulo-cover'>{title}</h1>
        <div className='txt-cover'>
          <p>{text}</p>
        </div>
      </div>
      <div className='img-cover'>
        <img src={img} alt="" />
      </div>
    </div>
  )
}
