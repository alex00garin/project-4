import React from 'react'

function CardSection() {
  return (
    <>
      <section className='h-fit w-auto m-5 bg-mint-green text-center pb-3'>
        <div className='font-oswald'>
          <h1 className='text-2xl pt-5 font-medium tracking-widest text-dark-green'>LATEST ARTICLES</h1>
          <div className='bg-dark-green h-1 w-20 mt-5 items-center justify-center mx-auto mb-10'></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 md:mx-5 gap-5 justify-center items-center text-center pb-5 font-oswald tracking-wide">
          
          <div className="max-w-[15rem] lg:max-w-[20rem] opacity-80 mx-auto flex flex-grow bg-deep-green shadow-xl dark:bg-gray-800 transition-all transform hover:scale-110 hover:bg-mint-green">
            <div className="flex flex-col items-center">
              <a target={'_blank'} href="https://www.wikihow.com/Improve-Your-Health-by-Gardening">
                  <img className="h-auto w-fit" src="/img-2.jpg" alt="" />
              </a>
              <div className='bg-dark-green h-1 w-12 mt-5 items-center justify-center mx-auto mb-5'></div>
              <p className='h-16 mb-5 mx-3 uppercase text-dark-green opacity'>How to Improve Your Health by Gardening</p>
            </div>
          </div>

          <div className="max-w-[15rem] lg:max-w-[20rem] opacity-80 mx-auto flex flex-grow bg-deep-green shadow-xl dark:bg-gray-800 transition-all transform hover:scale-110 hover:bg-mint-green">
            <div className="flex flex-col ">
              <a target={'_blank'} href="https://www.wikihow.com/Perform-Pre%E2%80%90Breeding-Health-Checks-for-Dogs">
                  <img className="h-auto w-fit" src="/img-3.jpg" alt="" />
              </a>
              <div className='bg-dark-green h-1 w-12 mt-5 items-center justify-center mx-auto mb-5'></div>
              <p className='h-16 mb-5 mx-3 uppercase text-dark-green opacity'>How to Perform Pre‐Breeding Health Checks for Dogs</p>
            </div>
          </div>

          <div className="max-w-[15rem] lg:max-w-[20rem] opacity-80 mx-auto flex flex-grow bg-deep-green shadow-xl dark:bg-gray-800 transition-all transform hover:scale-110 hover:bg-mint-green">
            <div className="flex flex-col ">
              <a target={'_blank'} href="https://www.wikihow.com/Care-for-Indoor-Plants">
                  <img className="h-auto w-fit" src="/img-4.jpg" alt="" />
              </a>
              <div className='bg-dark-green h-1 w-12 mt-5 items-center justify-center mx-auto mb-5'></div>
              <p className='h-16 mb-5 mx-3 uppercase text-dark-green opacity'>How to Care for Indoor Plants</p>
            </div>
          </div>

          </div>
      </section>
    </>
  )
}

export default CardSection;