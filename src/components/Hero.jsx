import StarsCanvas from './canvas/Stars';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


const Hero=()=> {
    
  return (
        <div className=" bg-gray-900">
            <div className="relative h-[100vh] isolate px-6 pt-14 lg:px-8 overflow-hidden shadow-2xl">
                <div
                    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ea3c12] to-[#ffffff] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                        style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>

                <StarsCanvas />
                
                <div className="mx-auto max-w-2xl py-28 sm:py-36 lg:py-46">
                <div className="text-center">
                        
                        <TypeAnimation className="text-center text-xl sm:text-3xl"
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'We Provide Solutions for Startups',
                                1000, // wait 1s before replacing "Mice" with "Hamsters"
                                'We Provide Solutions for Businesses',
                                1000,
                                'We Provide Solutions for Individuals',
                                1000,
                                'We Provide Solutions for E-Commerce',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            style={{ color:'#9089fc', fontWeight:'bold' }}
                            repeat={Infinity}
                        />

                        <p className="mt-6 text-lg leading-8 text-gray-200/50">
                            Empowering the digital world with code and creativity, I am a passionate web developer, crafting dynamic experiences one line at a time.
                        </p>
                        
                    </div>
                    <Link to='/about'>
                        <div className="mt-10 mb-8 flex justify-center">
                            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-200 ring-1 ring-gray-200/10 hover:ring-gray-100/40 hover:scale-110">
                            Wanna learn more? <ArrowForwardIcon className='text-sm'/>
                            </div>
                        </div>
                    </Link>
                    
                </div>
                <div
                    className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                    aria-hidden="true"
                >
                <div
                    className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                    style={{
                    clipPath:
                        'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
                </div>
            </div>
        </div>
    )
}

export default Hero;