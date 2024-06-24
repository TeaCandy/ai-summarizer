import { robot } from '../assets';

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img  src={robot} 
        alt="sumz_logo"
        className='w-28 object-contain'
        />
        <text className='flex justify-between items-center w-full'>
          This project was made for educational purposes only
        </text>
        <button
        type="button"
        onClick={() => window.open('https://github.com/teacandy')}
        className='black_btn'
        >
          GitHub
        </button>
      </nav>


    <h1 className='head_text'>
      Summarize Articles with <br 
      className='max-md:hideen'
      />
      <span className='orange_gradient'>OpenAI GPT-4</span>
    </h1>
    <h2 className='desc mb-10'>
    An open-source article summarizer that condenses dense readings into clear and concise summaries. 
    </h2>
    </header>
  )
}

export default Hero