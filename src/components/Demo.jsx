import { useState, useEffect } from 'react';

import { copy, linkIcon, loader, tick} from '../assets';

const Demo = () => {
  const [article, setarticle] = useState({
    url: '',
    summary: '',
  });

  const handleSubmit = async (e) => {
    alert('Submitted');
  }


  return (
    <section className='met-16 w-full max-w-xl'>
      {/* {Search} */}
      <div className='flex flex-col w-full gap-2'>
        <form className='relative flex justify-center items-center'
        onSubmit={handleSubmit}
        >
          <img 
          src={linkIcon}
          alt="link_icon"
          className='absolute left-0 my-2 ml-3 w-5'
          />

          <input 
          type='url'
          placeholder='Enter a valid URL'
          value={article.url}
          onChange={(e) => setarticle({ ...
            article, url: e.target.value
          })}
          required
          className='url_input peer-focus:border-gray-700 peer-focus:text-gray-700'
          />

          <button
            type='submit'
            className='submit_btn'
          >
            ⏎
          </button>
        </form>
        {/* { Browser URL History } */}
      </div>

      {/* {Display Results} */}
    </section>
  )
}

export default Demo