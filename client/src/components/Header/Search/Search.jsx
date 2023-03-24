import { useState } from 'react'
import { MdClose } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import './Search.scss'
import useFetch from "../../../hooks/useFetch";


const Search = ({ setShowSearch }) => {

  const [query, setQuery] = useState("")
  const navigate = useNavigate()

  const onChange = (e) => {
    setQuery(e.target.value);
  };

  let {data} = useFetch(`/api/products?populate=*&filter[title][$contains]=${query}`);

  if(!query.length) {
    data = null;
  }

  return (
    <div className='search-modal'>
      <div className='form-field'>
        <input type='text' autoFocus placeholder='Search for products' value={query} onChange={onChange} />
        <MdClose className='close-btn' onClick={() => setShowSearch(false)} />
      </div>

      <div className='search-result-content'>
        <div className='search-result'>
        {data?.data.map(item =>(
          <div key={item.id} className='search-result-item'>

            <div className='img-container'>
            <img
              src={
                process.env.REACT_APP_DEV_URL +
                item.attributes?.image.data[0].attributes.url
              }
              alt=""
            />
            </div>

            <div className='prod-detail'>
              <span className='name'>{item.attributes.title}</span>
              <span className='desc'>{item.attributes.description}</span>
            </div>

          </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Search
