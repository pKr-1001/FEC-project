import { useEffect, useState } from 'react';

const Header = () => {

    const [isVisible, setIsVisible] = useState(true)
    const [lastScroll, setLastScroll] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (scrollTop > lastScroll) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
            setLastScroll(scrollTop)
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [lastScroll])

    return (
        // <div className="sticky top-0 z-50 -translate-y-0 transition duration-500">
        <div className={`sticky ${isVisible ? '' : 'hidden'}`}>
            <div className="relative h-auto py-2 bg-white">
            <p className="text-center w-full text-xs font-serif text-black">BOGO 50% Off 
                <a href="#" className="w-full text-center text-xs font-serif px-05"> Craft Instant </a> 
                Start a Blue Bottle Coffee 
                <a href="#" className="underline px-05">{' '}Subscription</a> | 
                Free Shipping on Orders Over $40
            </p> 
            </div>
        <nav className="nav-bar flex w-full px-5 md:px-15 overflow-y-auto">
            <div className="w-full flex flex-col">
                <div className='grid items-center h-12 md:h-20 grid-col-3'>
                    <div className='flex flex-nowrap h-full items-center gap-6 sm:gap-7'>
                        <span className="button nav-item">
                            <div className='hover:opacity-70' aria-hidden="true">
                                <svg className="text-black fill-current" width="20" height="7" viewBox='0 0 20 7'>
                                <rect width="20" height="1.33333"></rect>
                                <rect y="5.33203" width="20" height="1.33333"></rect>
                                </svg>
                            </div>
                        </span>
                    </div>
                    <div className='w-20 justify-center items-center mx-auto'>
                        <div aria-hidden="true" className='hover:opacity-70'>
                            <svg className='w-4 h-8 md:h-10 lg:w-6 lg:h-full z-40 max-auto md:m1-auto lg:mr-auto' viewBox='0 0 23 57'>
                            <path fill="#00a9e0" fill-rule="evenodd" clip-rule="evenodd" d="M10.2753 2.6693C10.2753 2.6693 9.60825 2.61864 9.56181 2.61441C9.34353 2.58541 9.14432 2.5623 8.96266 2.54123C7.58438 2.38135 7.21682 2.33871 7.2019 0.727327C7.23568 0.292495 7.68317 -0.67849 8.56128 0.752657C8.95389 1.20438 9.43938 1.45768 9.84044 1.59277C9.74842 1.56104 9.85461 1.57674 10.0948 1.61226C10.8133 1.7185 12.7311 2.00207 14.1296 1.72364C14.6025 2.04871 14.1254 2.6313 13.9734 2.80017C13.9312 2.84661 12.1497 3.28988 10.4526 3.18012C10.4483 3.16583 10.4256 3.10323 10.3979 3.02646C10.3436 2.87634 10.2697 2.67209 10.2753 2.6693ZM22.2099 23.8526C22.3323 24.4943 22.4505 25.1697 22.5434 25.9085C22.8812 31.4474 23.1893 43.057 21.9524 50.3436C21.8215 53.0285 20.783 55.1816 20.4706 55.2703C20.4671 55.2721 20.455 55.2802 20.4349 55.2938C20.0908 55.5249 17.3822 57.3448 14.3872 56.942C13.2408 56.7877 12.342 56.8308 11.3714 56.8773C9.68646 56.9581 7.78541 57.0492 3.99763 56.1357C3.45304 55.7431 3.23773 55.4729 3.20818 55.2703C3.14063 54.8861 2.60026 52.1715 2.60026 52.1715C-0.916391 35.5002 0.155913 25.0346 0.14747 25.1444C0.155913 24.9755 0.171862 24.7992 0.18781 24.6228C0.195785 24.5346 0.203759 24.4464 0.210795 24.3592C0.548528 20.6694 0.75539 19.213 3.98075 18.0013C9.00085 16.1239 8.94975 13.2415 8.87055 8.77436C8.8673 8.59077 8.86399 8.4045 8.86099 8.21551C8.83566 7.17698 8.83144 6.33687 8.83144 6.33687C8.82722 6.34531 8.89477 4.54688 8.89477 4.54688V3.94318L12.8674 3.13262C12.8645 3.13829 12.8693 6.99754 12.8727 9.78114C12.8744 11.1435 12.8758 12.2483 12.8758 12.5174C13.165 15.0215 14.8389 15.4362 16.1695 15.7658C16.4899 15.8452 16.7904 15.9197 17.0468 16.0172C20.1624 17.4441 21.3065 20.7454 22.2099 23.8526Z"></path>
                            </svg>
                        </div>
                    </div>
                    <div className='flex shrink-0 justify-end items-center w-full'>

                    </div>
                </div>
            </div>
        </nav>
      </div>
    )
}

export default Header;