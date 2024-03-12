import React, { useState } from "react";

const Footer = () => {

    const [email, setEmail] = useState("");

    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };

    const [value, setValue] = useState("");

    const handleChange = (e) => {
      setValue(e.target.value);
    }
    
    const spacing = 10;

    const myStyle = () => {
      marginRight: spacing + "em";
    }

  return (
    <>
      <footer className="bg-foot text-white py-3 w-full relative">
        <div className="pt-5 pt-md-2 pt-xl-4 px-3 px-md-5 px-xl-7 m-0 pb-2 pb-md-0">
            <h2 className="font-sans text-uppercase text-white pb-2 pb-md-3 pb-xl-4 footer-padding text-sm2 footer-spacing">BLUE BOTTLE COFFEE</h2>
            <div className="flex flex-col flex-md-row justify-content-md-between footer-top">
                <ul className="list-unstyled flex flex-row pe-4 w-full footer-left"> 
                    <li className="pb-2 pb-sm-3 w-50 w-md-auto ps-1 ps-md-0 pe-3 pe-md-5 pe-lg-10 w-xl-25 w-auto footer-left">
                        <div className="">
                            <h3 className="font-sans tracking-widest uppercase text-white text-sm2 footer-text">COMPANY</h3>
                            <ul className="text-white">
                                <li className="py-25">
                                    <a href="/us/eng/cafes" target="_self" rel="" className="no-underline border-white w-fit cursor-pointer border-b border-opacity-0 hover:border-opacity-100 transition-color duration-300 active:border-opacity-100">
                                        <span aria-hidden="false" className="font-sans tracking-widest uppercase text-white text-xs font-normal">Locations</span>
                                    </a>
                                </li>
                                <li className="py-25">
                                    <a href="https://careers.bluebottlecoffee.com/" target="_self" rel="" className="no-underline border-white w-fit cursor-pointer border-b border-opacity-0 hover:border-opacity-100 transition-color duration-300 active:border-opacity-100">
                                        <span aria-hidden="false" className="font-sans tracking-widest uppercase text-white text-xs font-normal">Careers</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="w-50 pe-md-5 w-auto footer-extra">
                        <div className="">
                            <h3 className="font-sans tracking-widest uppercase text-white text-sm2 xl:text-md">LEARN</h3>
                            <ul className="text-white">
                                <li className="py-25">
                                    <a href="/us/eng/brew-guides" target="_self" rel="" className="no-underline border-white w-fit cursor-pointer border-b border-opacity-0 hover:border-opacity-100 transition-color duration-300 active:border-opacity-100">
                                    <span aria-hidden="false" className="font-sans tracking-widest uppercase text-white text-xs font-normal">Brew Guides</span>
                                    </a>
                                </li>
                                <li className="py-25">
                                    <a href="https://classes.bluebottlecoffee.com/" target="_self" rel="" className="no-underline border-white w-fit cursor-pointer border-b border-opacity-0 hover:border-opacity-100 transition-color duration-300 active:border-opacity-100">
                                        <span aria-hidden="false" className="font-sans tracking-widest uppercase text-white text-xs font-normal">Virtual Classes</span>
                                    </a>
                                </li>
                                <li className="py-25">
                                    <a href="/us/eng/our-story" target="_self" rel="" className="no-underline border-white w-fit cursor-pointer border-b border-opacity-0 hover:border-opacity-100 transition-color duration-300 active:border-opacity-100">
                                        <span aria-hidden="false" className="font-sans tracking-widest uppercase text-white text-xs font-normal">Our Brand</span>
                                    </a>
                                </li>
                                <li className="py-25">
                                    <a href="/us/eng/our-coffee" target="_self" rel="" className="no-underline border-white w-fit cursor-pointer border-b border-opacity-0 hover:border-opacity-100 transition-color duration-300 active:border-opacity-100">
                                        <span aria-hidden="false" className="font-sans tracking-widest uppercase text-white text-xs font-normal">Our Coffee</span>
                                    </a>
                                </li>
                                <li className="py-25">
                                    <a href="/us/eng/blue-bottle-sustainability" target="_self" rel="" className="no-underline border-white w-fit cursor-pointer border-b border-opacity-0 hover:border-opacity-100 transition-color duration-300 active:border-opacity-100">
                                        <span aria-hidden="false" className="font-sans tracking-widest uppercase text-white text-xs font-normal">Sustainability</span>
                                    </a>
                                </li>
                                <li className="py-25">
                                    <a href="/us/eng/blue-bottle-studio" target="_self" rel="" className="no-underline border-white w-fit cursor-pointer border-b border-opacity-0 hover:border-opacity-100 transition-color duration-300 active:border-opacity-100">
                                        <span aria-hidden="false" className="font-sans tracking-widest uppercase text-white text-xs font-normal">Blue Bottle Studio</span>
                                    </a>
                                </li>
                                <li className="py-25">
                                    <a href="https://blog.bluebottlecoffee.com/" target="_self" rel="" className="no-underline border-white w-fit cursor-pointer border-b border-opacity-0 hover:border-opacity-100 transition-color duration-300 active:border-opacity-100">
                                        <span aria-hidden="false" className="font-sans tracking-widest uppercase text-white text-xs font-normal">Blog</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="pb-2 pb-sm-3 w-50 w-md-auto ps-1 ps-md-0 pe-3 pe-md-5 pe-lg-10 w-xl-25 w-auto">
                        <div className="">
                            <h3 className="font-sans tracking-widest uppercase text-white text-sm2 xl:text-md">MORE</h3>
                            <ul className="text-white">
                                <li className="py-25">
                                    <a href="https://support.bluebottlecoffee.com/hc/en-us/requests/new" target="_self" rel="" className="no-underline border-white w-fit cursor-pointer border-b border-opacity-0 hover:border-opacity-100 transition-color duration-300 active:border-opacity-100">
                                        <span aria-hidden="false" className="font-sans tracking-widest uppercase text-white text-xs font-normal">Contact Us</span>
                                    </a>
                                </li>
                                <li className="py-25">
                                    <a href="https://support.bluebottlecoffee.com/hc/en-us/categories/14514159511323-Samra-Origins" target="_self" rel="" className="no-underline border-white w-fit cursor-pointer border-b border-opacity-0 hover:border-opacity-100 transition-color duration-300 active:border-opacity-100">
                                        <span aria-hidden="false" className="font-sans tracking-widest uppercase text-white text-xs font-normal">SAMRA FAQs</span>
                                    </a>
                                </li>
                                <li className="py-25">
                                    <a href="https://support.bluebottlecoffee.com/hc/en-us" target="_self" rel="" className="no-underline border-white w-fit cursor-pointer border-b border-opacity-0 hover:border-opacity-100 transition-color duration-300 active:border-opacity-100">
                                        <span aria-hidden="false" className="font-sans tracking-widest uppercase text-white text-xs font-normal">FAQs</span>
                                    </a>
                                </li>
                                <li className="py-25">
                                    <a href="/us/eng/product/online-gift-card" target="_self" rel="" className="no-underline border-white w-fit cursor-pointer border-b border-opacity-0 hover:border-opacity-100 transition-color duration-300 active:border-opacity-100">
                                        <span aria-hidden="false" className="font-sans tracking-widest uppercase text-white text-xs font-normal">Gift Cards</span>
                                    </a>
                                </li>
                                <li className="py-25">
                                    <a href="/us/eng/subscriptions/gift-subscriptions" target="_self" rel="" className="no-underline border-white w-fit cursor-pointer border-b border-opacity-0 hover:border-opacity-100 transition-color duration-300 active:border-opacity-100">
                                        <span aria-hidden="false" className="font-sans tracking-widest uppercase text-white text-xs font-normal">Gift Subscription</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
                <div className="md:justify-self-end .md-w-5 -mt-1" style={{width:"38%"}}>
                    <form className="max-w-max pt-7 md:pt-0 pb-0.5 form-b form-white">
                        <label htmlFor="newsletterEmailInput">
                            <span aria-hidden="false" className="font-sans tracking-widest uppercase text-white text-sm xl:text-md font-normal text-sm2">Subscribe and Stay Updated</span>
                        </label>
                        <p className="font-serif text-white text-sm py-4">Join our email newsletter for exclusive offers, Blue Bottle news, events, and first access to our most exciting releases. Plus, get complimentary shipping on your first purchase when you sign up.</p>
                        <div className="flex flex-row">
                            <input id="newsletterEmailInput" className="border-0 border-white py-2 px-0 w-full text-white bg-foot placeholder-white font-serif text-xs" type="email" autoComplete="email" inputMode="email" placeholder="enter your email address" value="" onChange={handleChange}/>
                                {/* <button className="py-2" type="submit" aria-label="sign up" style={{backgroundColor:"rgb(47,50,53)"}}> */}
                                    <div className="">
                                        <svg className="fill-current svg-icon" width="44" height="8" viewBox="0 0 44 8" fill="none">
                                        <path transform="scale(1.5714285714285714 1)" d="M27.3536 4.35356C27.5488 4.15829 27.5488 3.84171 27.3536 3.64645L24.1716 0.464468C23.9763 0.269206 23.6597 0.269206 23.4645 0.464468C23.2692 0.65973 23.2692 0.976313 23.4645 1.17157L26.2929 4L23.4645 6.82843C23.2692 7.02369 23.2692 7.34027 23.4645 7.53554C23.6597 7.7308 23.9763 7.7308 24.1716 7.53554L27.3536 4.35356ZM-4.37114e-08 4.5L27 4.5L27 3.5L4.37114e-08 3.5L-4.37114e-08 4.5Z"></path>                                        
                                        </svg>
                                    </div>
                                {/* </button> */}
                        </div>
                    </form>
                    <a href="/us/eng/privacy" target="_self" rel="" className="no-underline border-white w-fit cursor-pointer border-b border-opacity-0 hover:border-opacity-100 transition-color duration-300 active:border-opacity-100">
                        <span aria-hidden="false" className="font-sans tracking-widest uppercase text-white text-xs font-normal">Privacy Policy &amp; Terms</span>
                    </a>
                    <ul className="flex flex-row gap-7 md:gap-5 xl:gap-7 items-center md:transform md:origin-left md:scale-75 xl:transform-none pt-4.5 md:pt-3 pb-7 md:pb-10 gap-icon">
                        <li>
                            <a href="https://www.facebook.com/bluebottlecoffee" rel="noreferrer" target="_blank">
                                <div className="hover:opacity-70">
                                    <svg aria-labelledby="bbFacebook" fill="none" height="19" id="facebook-icon" viewBox="0 0 9 19" width="9" xmlns="http://www.w3.org/2000/svg">
                                        <title id="bbFacebook">Go to Blue Bottle Facebook</title>
                                        <path fillRule="evenodd" clipRule="evenodd" d="M5.72072 6.19694V4.56934C5.72072 4.32435 5.73126 4.1352 5.75322 4.00099C5.7784 3.85949 5.83001 3.72431 5.9052 3.60287C5.99357 3.46619 6.12972 3.36947 6.28558 3.33266C6.46128 3.28402 6.69408 3.2588 6.98574 3.2588H8.5758V0H6.03434C4.56375 0 3.5078 0.357585 2.86651 1.07276C2.22433 1.78883 1.90368 2.84177 1.90368 4.23428V6.19784H0V9.45754H1.90368V18.9151H5.72072V9.45754H8.2613L8.59776 6.19694H5.72072Z" fill="white" fillOpacity="0.8"></path>
                                    </svg>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.twitter.com/bluebottleroast" rel="noreferrer" target="_blank">
                                <div className="hover:opacity-70">
                                    <svg aria-labelledby="bbTwitter" fill="none" height="14" id="twitter-icon" viewBox="0 0 18 14" width="18" xmlns="http://www.w3.org/2000/svg">
                                        <title id="bbTwitter">Go to Blue Bottle Twitter</title>
                                        <path fillRule="evenodd" clipRule="evenodd" d="M15.7371 1.98487C16.1866 1.57576 16.5225 1.06156 16.7134 0.490521C16.7677 0.326734 16.5831 0.185742 16.4288 0.272701C15.8628 0.595947 15.2527 0.838713 14.6168 0.993701C14.5417 1.01133 14.4635 1.01117 14.3885 0.993261C14.3135 0.975348 14.2439 0.940189 14.1856 0.890701C13.5039 0.314861 12.6332 -0.00133879 11.7329 4.2609e-06C11.3413 4.2609e-06 10.9463 0.0591027 10.5582 0.174767C9.96918 0.349031 9.43643 0.669998 9.01209 1.10627C8.58775 1.54254 8.28636 2.07916 8.13741 2.66365C8.02907 3.09274 7.99929 3.53722 8.04944 3.97648C8.05154 3.99441 8.04971 4.01258 8.04406 4.02976C8.03841 4.04694 8.02907 4.06275 8.01667 4.07611C8.00369 4.09015 7.98785 4.10139 7.97018 4.10909C7.95251 4.1168 7.93338 4.1208 7.91404 4.12085C5.26898 3.88446 2.89645 2.66619 1.21903 0.687234C1.19904 0.66389 1.17366 0.645546 1.14499 0.633723C1.11631 0.6219 1.08517 0.616938 1.05414 0.619249C1.02312 0.62156 0.993102 0.631077 0.966584 0.647011C0.940066 0.662945 0.91781 0.684838 0.90166 0.710873C0.573136 1.25344 0.399767 1.87253 0.399729 2.50324C0.399885 2.97778 0.497802 3.44741 0.687625 3.88405C0.877448 4.32069 1.15528 4.71536 1.5045 5.04447C1.20959 4.97758 0.925284 4.87194 0.659319 4.73041C0.630212 4.71461 0.597443 4.70641 0.564163 4.70658C0.530882 4.70676 0.498207 4.71532 0.469279 4.73143C0.440351 4.74754 0.416142 4.77066 0.398977 4.79857C0.381813 4.82649 0.372271 4.85825 0.371269 4.89082C0.352295 6.32691 1.22679 7.60512 2.53596 8.18007L2.45747 8.18091C2.25049 8.18091 2.0392 8.16149 1.83308 8.1235C1.80039 8.11684 1.76649 8.11866 1.73474 8.12879C1.70299 8.13892 1.6745 8.157 1.6521 8.18123C1.62969 8.20547 1.61415 8.23502 1.60702 8.26695C1.59989 8.29889 1.60141 8.33209 1.61144 8.36327C2.03661 9.6398 3.17932 10.5811 4.54713 10.7947C3.40957 11.528 2.07651 11.9168 0.714514 11.9126H0.285889C0.222755 11.9116 0.161119 11.9314 0.110795 11.9687C0.0604702 12.0061 0.0243508 12.0588 0.00818778 12.1186C-0.00678168 12.1785 -0.00111803 12.2416 0.0242998 12.2981C0.0497177 12.3546 0.0934685 12.4013 0.148763 12.4309C1.70679 13.3005 3.46949 13.7574 5.26294 13.7564C6.83428 13.7564 8.30385 13.4559 9.63199 12.8649C10.8495 12.3222 11.9383 11.5372 12.829 10.56C13.6744 9.63627 14.3381 8.56749 14.7867 7.40757C15.2222 6.28892 15.4525 5.09513 15.4525 3.95622V3.90219C15.4525 3.71898 15.5387 3.5476 15.6888 3.4294C16.2566 2.98617 16.7532 2.46194 17.1618 1.87427C17.2696 1.71892 17.0997 1.52474 16.9221 1.60073C16.5395 1.7637 16.1426 1.89227 15.7362 1.98487H15.7371Z" fill="white" fillOpacity="0.8"></path>
                                    </svg>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/bluebottle" rel="noreferrer" target="_blank">
                                <div className="hover:opacity-70">
                                    <svg aria-labelledby="bbInstagram" fill="none" height="17" id="instagram-icon" viewBox="0 0 17 17" width="17" xmlns="http://www.w3.org/2000/svg">
                                        <title id="bbInstagram">Go to Blue Bottle Instagram</title>
                                        <path d="M11.8111 0.00079392H4.50152C2.01893 0.00079392 0 1.984 0 4.42133V11.5999C0 14.0381 2.01893 16.0221 4.50152 16.0221H11.8111C14.2937 16.0221 16.3126 14.0373 16.3126 11.5999V4.42212C16.3126 1.9848 14.2937 0 11.8111 0V0.00079392ZM14.8653 11.6007C14.8653 13.2553 13.495 14.601 11.8111 14.601H4.50152C2.81762 14.601 1.44731 13.2553 1.44731 11.6007V4.42212C1.44731 2.7676 2.81762 1.42191 4.50152 1.42191H11.8111C13.495 1.42191 14.8653 2.7676 14.8653 4.42212V11.6007Z" fill="white" fillOpacity="0.8"></path>
                                        <path d="M7.8656 4.13488C5.54736 4.13488 3.6626 5.9863 3.6626 8.26326C3.6626 10.5394 5.54815 12.3916 7.8656 12.3916C10.1838 12.3916 12.0694 10.5394 12.0694 8.26326C12.0694 5.9863 10.1838 4.13488 7.8656 4.13488ZM7.8656 10.9689C6.34604 10.9689 5.10991 9.75503 5.10991 8.26247C5.10991 6.7699 6.34604 5.5552 7.8656 5.5552C9.38595 5.5552 10.6221 6.7699 10.6221 8.26247C10.6221 9.75503 9.38516 10.9697 7.8656 10.9697V10.9689ZM12.0472 2.67011C11.7677 2.67011 11.4938 2.78125 11.2969 2.97497C11.0984 3.16869 10.9849 3.43782 10.9849 3.71331C10.9849 3.98642 11.0992 4.25556 11.2969 4.45007C11.4979 4.64514 11.7671 4.75424 12.0472 4.75424C12.3273 4.75424 12.5964 4.64514 12.7974 4.45007C12.9951 4.25556 13.1078 3.98642 13.1078 3.71252C13.1078 3.43782 12.9951 3.16869 12.7974 2.97497C12.5964 2.77924 12.3269 2.66983 12.0464 2.67011H12.0472Z" fill="white" fillOpacity="0.8"></path>
                                    </svg>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/channel/UCyki4e6RG84BT_xzi4oYkRw" rel="noreferrer" target="_blank">
                                <div className="hover:opacity-70">
                                    <svg aria-labelledby="bbYoutube" fill="none" height="16" id="youtube-icon" viewBox="0 0 22 16" width="22" xmlns="http://www.w3.org/2000/svg">
                                        <title id="bbYoutube">Go to Blue Bottle Youtube</title>
                                        <path d="M21.2092 2.36772C21.0857 1.90872 20.8438 1.49022 20.5077 1.15412C20.1716 0.818027 19.7531 0.576138 19.2941 0.452682C17.6047 0 10.8309 0 10.8309 0C10.8309 0 4.05702 0 2.36772 0.452682C1.90873 0.57615 1.49023 0.818043 1.15414 1.15414C0.818043 1.49023 0.57615 1.90873 0.452682 2.36772C0 4.05715 0 7.58165 0 7.58165C0 7.58165 0 11.1063 0.452682 12.7954C0.576138 13.2544 0.818027 13.6729 1.15412 14.009C1.49022 14.3451 1.90872 14.587 2.36772 14.7105C4.05702 15.1633 10.8309 15.1633 10.8309 15.1633C10.8309 15.1633 17.6047 15.1633 19.2941 14.7105C19.7531 14.587 20.1716 14.3452 20.5077 14.0091C20.8438 13.673 21.0857 13.2544 21.2092 12.7954C21.6617 11.1061 21.6617 7.58151 21.6617 7.58151C21.6617 7.58151 21.6617 4.05715 21.2092 2.36772Z" fill="white" fillOpacity="0.8"></path>
                                        <path d="M8.66602 10.8306V4.33205L14.2937 7.58133L8.66602 10.8306Z" fill="white"></path>
                                    </svg>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <hr className="border-white border-t -mx-5 md:-mx-10 xl:-mx-15"/>
                <div className="flex gap-y-6 lg:flex-row items-center lg:place-content-between pt-6 md:pt-3 lg:pt-8 xl:pt-11" style={{placeContent:"space-between", paddingTop:"1.3rem"}}>
                    <div className="">
                        <ul className="text-white flex flex-wrap gap-3">
                            <li className="py-2.5 xl:py-1.5 text-line">
                                <a href="/us/eng/terms-of-use" target="_self" rel="" className="no-underline border-white w-fit cursor-pointer border-b border-opacity-0 hover:border-opacity-100 transition-color duration-300 active:border-opacity-100">
                                    <span aria-hidden="false" className="font-sans tracking-widest uppercase text-white text-xs font-normal">Terms of Use</span>
                                </a>
                            </li>
                            <li className="py-2.5 xl:py-1.5 text-line">
                                <a href="/us/eng/privacy" target="_self" rel="" className="no-underline border-white w-fit cursor-pointer border-b border-opacity-0 hover:border-opacity-100 transition-color duration-300 active:border-opacity-100">
                                    <span aria-hidden="false" className="font-sans tracking-widest uppercase text-white text-xs font-normal">Privacy Policy</span>
                                </a>
                            </li>
                            <li className="py-2.5 xl:py-1.5 text-line">
                                <a href="/us/eng/notice/notice-at-collection" target="_self" rel="" className="no-underline border-white w-fit cursor-pointer border-b border-opacity-0 hover:border-opacity-100 transition-color duration-300 active:border-opacity-100">
                                    <span aria-hidden="false" className="font-sans tracking-widest uppercase text-white text-xs font-normal">Notice at Collection</span>
                                </a>
                            </li>
                            <li className="py-2.5 xl:py-1.5 text-line">
                                <a href="#" target="_self" rel="" className="no-underline border-white w-fit cursor-pointer border-b border-opacity-0 hover:border-opacity-100 transition-color duration-300 active:border-opacity-100">
                                    <span aria-hidden="false" className="font-sans tracking-widest uppercase text-white text-xs font-normal">Your Privacy Choices
                                        <svg aria-hidden="" version="1.1" viewBox="0 0 30 14" x="0px" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" y="0px" style={{display: 'inline-block', height: '14px', width: '30px', marginBottom: '2px', ...myStyle}}>
                                        <style>{`.st0{ fill-rule: evenodd;clipRule:evenodd;fill:#fff}.st1{fill-rule:evenodd;clipRule:evenodd;fill:#06f}.st2{fill:#fff}.st3{fill:#06f}`}</style>
                                            <g>
                                                <g id="final---dec.11-2020_1_"><g id="_x30_208-our-toggle_2_" transform="translate(-1275.000000, -200.000000)">
                                                    <g id="Final-Copy-2_2_" transform="translate(1275.000000, 200.000000)">
                                                        <path className="st0" d="M7.4,12.8h6.8l3.1-11.6H7.4C4.2,1.2,1.6,3.8,1.6,7S4.2,12.8,7.4,12.8z"></path>
                                                    </g>
                                                </g>
                                            </g>
                                            <g id="final---dec.11-2020">
                                                <g id="_x30_208-our-toggle" transform="translate(-1275.000000, -200.000000)">
                                                    <g id="Final-Copy-2" transform="translate(1275.000000, 200.000000)">
                                                        <path className="st1" d="M22.6,0H7.4c-3.9,0-7,3.1-7,7s3.1,7,7,7h15.2c3.9,0,7-3.1,7-7S26.4,0,22.6,0z M1.6,7c0-3.2,2.6-5.8,5.8-5.8h9.9l-3.1,11.6H7.4C4.2,12.8,1.6,10.2,1.6,7z"></path>
                                                        <path className="st2" d="M24.6,4c0.2,0.2,0.2,0.6,0,0.8l0,0L22.5,7l2.2,2.2c0.2,0.2,0.2,0.6,0,0.8c-0.2,0.2-0.6,0.2-0.8,0l0,0l-2.2-2.2L19.5,10c-0.2,0.2-0.6,0.2-0.8,0c-0.2-0.2-0.2-0.6,0-0.8l0,0L20.8,7l-2.2-2.2c-0.2-0.2-0.2-0.6,0-0.8c0.2-0.2,0.6-0.2,0.8,0l0,0l2.2,2.2L23.8,4C24,3.8,24.4,3.8,24.6,4z" id="x"></path>
                                                        <path className="st3" d="M12.7,4.1c0.2,0.2,0.3,0.6,0.1,0.8l0,0L8.6,9.8C8.5,9.9,8.4,10,8.3,10c-0.2,0.1-0.5,0.1-0.7-0.1l0,0L5.4,7.7c-0.2-0.2-0.2-0.6,0-0.8c0.2-0.2,0.6-0.2,0.8,0l0,0L8,8.6l3.8-4.5C12,3.9,12.4,3.9,12.7,4.1z" id="y"></path>
                                                        </g>
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <span aria-hidden="false" className="font-sans tracking-widest uppercase text-white text-xs flex text-center font-normal text-line2">© 2024 BLUE BOTTLE COFFEE Inc., All Rights Reserved</span>
                </div>
        </div>
    </footer>
    </>
  );
};

export default Footer;