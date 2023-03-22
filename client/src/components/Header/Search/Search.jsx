import { MdClose } from 'react-icons/md'
import ProdImage from '../../../assets/products/earbuds-prod-1.webp'
import './Search.scss'

const Search = ({ setShowSearch }) => {
  return (
    <div className='search-modal'>
      <div className='form-field'>
        <input type='text' autoFocus placeholder='Search for products' />
        <MdClose className='close-btn' onClick={() => setShowSearch(false)} />
      </div>

      <div className='search-result-content'>
        <div className='search-result'>
          <div className='search-result-item'>

            <div className='img-container'>
              <img src={ProdImage} alt='' />
            </div>

            <div className='prod-detail'>
              <span className='name'>Product name</span>
              <span className='desc'>Product desc</span>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Search
