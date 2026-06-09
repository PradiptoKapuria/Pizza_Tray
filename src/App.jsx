import pizza from './assets/PIZZA.jpeg'
import logo from './assets/logo_.png'
import pizza_only from './assets/pizza_only.svg'
import arrow from './assets/arrow.png'
import pizza_two from './assets/pizza_two.png'
import Mushpizza from './assets/Mush_pizza.png'
import pizzathree from './assets/Pizza_three-removebg-preview.png'
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import React, { useRef } from 'react'
import Cart from './Cart'
import lg from './assets/lg-white.png'


const App = () => {
    const menuRef  = useRef(null);
    const cartRef  = useRef(null);
    const footerRef = useRef(null);

    const scrollToMenu = () => {
        menuRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    const scrollToCart = () => {
        cartRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    const scrollToFooter = () => {
        footerRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>

        {/* ── HERO ── */}
        {/* Full-width image, no inner container needed */}
        <div className='relative flex-col'>
            <img src={pizza} alt="" className='w-full h-[300px] md:h-[450px] lg:h-[600px] object-cover' />
            <div className='bg-[#000000b3] w-full h-full absolute inset-0'></div>
            <img
                src={logo}
                alt=""
                className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[75%] md:w-[65%] lg:w-[400px]'
            />
        </div>

        {/* ── BEST PIZZAS ── */}
        {/* bg is full-width orange; inner content capped and centered */}
        <section className='bg-orange-600 relative pb-10 lg:pb-0'>
            <div className='max-w-[1200px] mx-auto px-4'>
                <div className='relative'>
                    <h1 className='text-white font-lg text-[52px] md:text-[75px] lg:text-[100px] leading-tight lg:w-[600px]'>
                        The Best Pizzas In Town
                    </h1>
                    <img src={lg} alt="" className='hidden lg:block absolute right-0 top-[150px]' />
                </div>

                <div className='flex flex-col lg:flex-row'>
                    <div className='w-full lg:w-1/2 lg:h-[700px]'>
                        <div className='flex gap-4 lg:gap-7'>
                            <div className='flex-1 h-[160px] md:h-[220px] lg:h-[300px] bg-gray-500'></div>
                            <div className='flex-1 h-[160px] md:h-[220px] lg:h-[300px] bg-gray-500'></div>
                        </div>
                        <div className='w-full md:w-[70%] h-[160px] md:h-[220px] lg:w-[60%] lg:h-[300px] bg-gray-500 mt-4 lg:mt-[50px] mx-auto lg:ml-[20%]'></div>
                    </div>

                    <div className='w-full lg:w-1/2 lg:h-[700px] mt-6 lg:mt-0'>
                        <p className='font-sfia text-white text-base md:text-xl lg:text-3xl lg:pl-[50px]'>
                        </p>
                    </div>
                </div>
            </div>
        </section>

        {/* ── OUR PIZZAS ── */}
        <section className='bg-[#f9eedb] text-left pt-10 md:pt-[80px] lg:pt-[150px] lg:h-[700px] relative overflow-hidden pb-10 lg:pb-0'>
            <div className='max-w-[1200px] mx-auto px-4 relative'>
                <h1 className='text-orange-600 font-sfia text-[56px] md:text-[80px] lg:text-[100px] font-extrabold'>Our Pizzas</h1>
                <p className='font-sfia text-orange-600 text-lg md:text-2xl lg:text-4xl w-full md:w-3/4 lg:w-1/2 font-bold'>
                    Crafted, baked and prepared by the finest bakesmen, our pizzas are guaranteed to make you order another one
                </p>

                <img src={arrow} alt="" className='hidden lg:block absolute top-[-50px] left-[500px] rotate-320' />

                <img
                    src={pizza_two}
                    alt=""
                    className='hidden lg:block lg:absolute lg:top-[-50px] lg:right-[-200px]'
                />

                <div className='hidden lg:flex bg-orange-600 lg:w-[200px] lg:h-[200px] text-center flex-col items-center relative lg:ml-[800px] lg:mt-[-100px] rounded-2xl'>
                    <h2 className='text-[#f9eedb] font-sfia text-[160px] lg:text-[200px] rotate-90 absolute top-[-110px] lg:top-[-130px] left-[60px] lg:left-[80px]'>[</h2>
                    <h2 className='text-[#f9eedb] font-sfia text-xl lg:text-4xl pt-[48px] lg:pt-[55px]'>Sausage Pizza</h2>
                    <h2 className='text-[#f9eedb] font-sfia text-xl lg:text-4xl'>Tk.800</h2>
                    <h2 className='text-[#f9eedb] font-sfia text-[160px] lg:text-[200px] rotate-90 absolute top-[22px] lg:top-[30px] left-[60px] lg:left-[80px]'>]</h2>
                </div>

                <button
                    onClick={scrollToMenu}
                    className='bg-orange-600 text-[#f9eedb] font-sfia px-[20px] py-[20px] text-xl lg:text-2xl rounded mt-8 block lg:inline'
                >
                    Explore Our Menu
                </button>
            </div>
        </section>

        {/* ── DELIVERY BANNER ── */}
        <section className='bg-orange-600 min-h-[350px] lg:h-[507px] relative overflow-hidden pb-24 lg:pb-0'>
            <div className='max-w-[1200px] mx-auto px-4 flex flex-col lg:flex-row h-full relative'>
                <h1 className='font-sfia text-[#f9eedb] text-[38px] md:text-[60px] lg:text-[100px] font-extrabold w-full lg:w-1/2 leading-tight lg:leading-[85px] py-8 lg:py-[100px]'>
                    The Taste of Italy, To Your House Within Minutes
                </h1>

                <div className='flex lg:block'>
                    <button className='bg-green-900 text-orange-600 font-sfia px-[20px] py-[20px] text-2xl'>    </button>
                    <button className='bg-[#f9eedb] text-orange-600 font-sfia px-[20px] py-[20px] text-2xl'>    </button>
                    <button className='bg-red-800 text-orange-600 font-sfia px-[20px] py-[20px] text-2xl'>    </button>
                </div>

                <img
                    src={Mushpizza}
                    className='hidden lg:block lg:w-[510px] rotate-270 absolute right-[-100px] lg:top-[-86px]'
                    alt=""
                />

                <button
                    onClick={scrollToCart}
                    className='bg-[#f9eedb] text-orange-600 font-sfia px-[50px] py-[20px] text-xl lg:text-2xl absolute bottom-6 left-4 lg:top-[400px] lg:left-0 rounded'
                >
                    Order Now
                </button>
            </div>
        </section>

        {/* ── MENU ── */}
        <section ref={menuRef} className='bg-[#f9eedb] text-center flex-col justify-center'>
            <div className='max-w-[1200px] mx-auto px-4'>
                <h1 className='text-orange-600 font-sfia text-[60px] md:text-[80px] lg:text-[100px] font-extrabold'>Our Menu</h1>

                <div className='flex flex-wrap justify-center gap-8 lg:gap-[60px] pb-[100px]'>
                    {[1,2,3,4,5,6,7,8].map((_, i) => (
                        <div key={i} className='w-[150px] md:w-[175px] lg:w-[200px]'>
                            <img src={pizzathree} alt="" className='w-[150px] h-[150px] md:w-[175px] md:h-[175px] lg:w-[200px] lg:h-[200px] rotate-270' />
                            <h2 className='font-sfia text-orange-600 text-lg md:text-xl lg:text-2xl font-medium'>Mushroom Pizza</h2>
                            <p className='font-sfia text-orange-600 text-lg md:text-xl lg:text-2xl font-medium'>Tk.500</p>
                            <button
                                onClick={scrollToCart}
                                className='bg-orange-600 text-[#f9eedb] font-sfia px-[20px] py-[5px] text-lg md:text-xl lg:text-2xl rounded'
                            >
                                Order Now
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* ── CART ── */}
        <div ref={cartRef}>
            <Cart />
        </div>

        {/* ── FOOTER ── */}
        <section ref={footerRef} className='bg-orange-600 pb-[100px]'>
            <div className='max-w-[1200px] mx-auto flex flex-col lg:flex-row'>
                <img src={lg} className='w-2/3 md:w-1/2 lg:w-1/3 pt-[50px] mx-auto lg:mx-0' alt="" />
                <div className='text-center lg:text-left pt-[50px] lg:pl-[80px]'>
                    <h1 className='text-[#f9eedb] font-sfia text-5xl md:text-6xl lg:text-8xl font-extrabold'>Order Now!</h1>
                    <h1 className='text-[#f9eedb] font-sfia text-2xl md:text-4xl lg:text-6xl font-extrabold pt-[50px]'>+880 1344 834 043</h1>
                    <div className='flex justify-center lg:justify-start pt-[20px] gap-8'>
                        <p className='text-[#f9eedb] text-5xl lg:text-6xl'><a href="#"><FaFacebook /></a></p>
                        <p className='text-[#f9eedb] text-5xl lg:text-6xl'><a href="01344834043"><FaWhatsapp /></a></p>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default App