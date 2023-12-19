import './Cards.css';
import { Link } from 'react-router-dom';


export const Cards = (props) => {
    const {img, title, text, btnLink} = props;

    return (
    <div className='cards-container'>
        <div className='img-card'>
            <img src={img} alt=""/>
        </div>
        <div className='text-card-container'>
            <div className='title-card'>
                <h3>{title}</h3>
            </div>
            <div className='text-card'>
                <p>{text}</p>
            </div>
            <div className='btn-ir'>
                <Link to={btnLink}>
                    <button>
                        IR
                    </button>
                </Link>
            </div>
        </div>
    </div>
    );
    };