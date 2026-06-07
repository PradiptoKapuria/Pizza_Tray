import pizza from './assets/PIZZA.jpeg'
import logo from './assets/pizza_tray_logo_v5.svg'
import pizza_only from './assets/pizza_only.svg'
import arrow from './assets/arrow.png'
import pizza_two from './assets/pizza_two.png'
import Mushpizza from './assets/Mush_pizza.png'
import pizzathree from './assets/Pizza_three-removebg-preview.png'
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import React, { useRef } from 'react'


const App = () => {
    const menuRef = useRef(null);
    const footerRef = useRef(null);

    const scrollToMenu = () => {
        menuRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    const scrollToFooter = () => {
        footerRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
        {/* ── HERO ── */}
        <div className='relative flex-col'>
            <img src={pizza} alt="" className='w-full h-[300px] md:h-[450px] lg:h-[600px] object-cover' />
            <div className='bg-[#000000b3] w-full h-full absolute inset-0'></div>
            {/* Mobile/tablet: centred. Desktop: your exact original position */}
            <img
                src={logo}
                alt=""
                className='absolute
                    top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[75%]
                    md:w-[65%]
                    lg:w-[700px] lg:top-[105px] lg:left-[385px] lg:translate-x-0 lg:translate-y-0'
            />
        </div>

        {/* ── BEST PIZZAS ── */}
        <section className='bg-orange-600 relative pb-10 lg:pb-0'>
            <h1 className='text-white font-lg text-[52px] md:text-[75px] lg:text-[100px] px-4 lg:pl-[30px] lg:w-[1000px] leading-tight'>
                The Best Pizzas In Town
            </h1>
            <img src={pizza_only} alt="" className='hidden lg:block absolute w-1/6 left-[1000px] top-[10px]' />

            <div className='flex flex-col lg:flex-row px-4 lg:px-0'>
                {/* Image placeholders */}
                <div className='w-full lg:w-1/2 lg:h-[700px]'>
                    <div className='flex gap-4 lg:gap-7'>
                        <div className='flex-1 h-[160px] md:h-[220px] lg:w-[500px] lg:h-[300px] bg-gray-500'></div>
                        <div className='flex-1 h-[160px] md:h-[220px] lg:w-[500px] lg:h-[300px] bg-gray-500'></div>
                    </div>
                    <div className='w-full md:w-[70%] h-[160px] md:h-[220px] lg:w-[500px] lg:h-[300px] bg-gray-500 mt-4 lg:mt-[50px] mx-auto lg:ml-[120px]'></div>
                </div>

                {/* Body text */}
                <div className='w-full lg:w-1/2 lg:h-[700px] mt-6 lg:mt-0'>
                    <p className='font-sfia text-white text-base md:text-xl lg:text-3xl lg:w-[650px] lg:pl-[50px]'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam perferendis distinctio iste reiciendis in exercitationem aperiam expedita voluptatem qui voluptates illum at corporis obcaecati enim facere corrupti quis veritatis, libero fugit! Aperiam temporibus corporis consectetur pariatur fuga. Dolor, quasi aliquam? Porro excepturi quo, quam alias dolorum quas obcaecati eveniet et quibusdam libero? Aperiam nobis incidunt excepturi aut fugiat perspiciatis quam officia molestiae eum deleniti, possimus assumenda, rem dolor repellat eius nisi. Nesciunt laborum facere voluptatibus? Architecto, esse. Cum dolores corporis rem recusandae, nisi autem ut dolorum incidunt fuga, similique quod cupiditate inventore doloribus eveniet nostrum illo nobis pariatur quidem numquam necessitatibus cumque sequi facere itaque nulla? Inventore dignissimos repellat ea? Consequuntur aliquid excepturi doloremque consectetur minima, ullam quibusdam pariatur maiores sunt itaque ut quaerat molestias officia. Rem voluptates placeat ut sed officia ab quod hic, dolor reiciendis tempora vero? Sapiente labore iusto rem nihil sequi fugit blanditiis impedit tempora. Repellendus.
                    </p>
                </div>
            </div>
        </section>

        {/* ── OUR PIZZAS ── */}
        <section className='bg-[#f9eedb] text-left pt-10 md:pt-[80px] lg:pt-[150px] lg:h-[700px] relative pl-4 lg:pl-[20px] overflow-hidden pb-10 lg:pb-0'>
            <h1 className='text-orange-600 font-sfia text-[56px] md:text-[80px] lg:text-[100px] font-extrabold'>Our Pizzas</h1>
            <p className='font-sfia text-orange-600 text-lg md:text-2xl lg:text-4xl w-full md:w-3/4 lg:w-1/2 font-bold'>
                Crafted, baked and prepared by the finest bakesmen, our pizzas are guaranteed to make you order another one
            </p>

            {/* Arrow: only on desktop */}
            <img src={arrow} alt="" className='hidden lg:block absolute top-[50px] left-[500px] rotate-320' />

            {/* Pizza image: hidden on mobile/tablet, absolute on desktop */}
            <img
                src={pizza_two}
                alt=""
                className='hidden lg:block lg:absolute lg:top-[50px] lg:left-[1100px]'
            />

            {/* Price card: hidden on mobile/tablet */}
            <div className='hidden lg:flex bg-orange-600 lg:w-[200px] lg:h-[200px] text-center flex-col items-center relative lg:ml-[900px] lg:mt-[-100px] rounded-2xl'>
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
        </section>

        {/* ── DELIVERY BANNER ── */}
        <section className='bg-orange-600 min-h-[350px] lg:h-[507px] flex flex-col lg:flex-row relative overflow-hidden pb-24 lg:pb-0'>
            <h1 className='font-sfia text-[#f9eedb] text-[38px] md:text-[60px] lg:text-[100px] font-extrabold w-full lg:w-1/2 leading-tight lg:leading-[85px] px-4 lg:px-[50px] py-8 lg:py-[100px]'>
                The Taste of Italy, To Your House Within Minutes
            </h1>

            {/* Colour stripe buttons */}
            <div className='flex lg:block px-4 lg:px-0'>
                <button className='bg-green-900 text-orange-600 font-sfia px-[20px] py-[20px] text-2xl'>    </button>
                <button className='bg-[#f9eedb] text-orange-600 font-sfia px-[20px] py-[20px] text-2xl'>    </button>
                <button className='bg-red-800 text-orange-600 font-sfia px-[20px] py-[20px] text-2xl'>    </button>
            </div>

            <img
                src={Mushpizza}
                className='hidden lg:block lg:w-1/3 rotate-270 absolute right-0 lg:top-[-86px]'
                alt=""
            />

            <button
                onClick={scrollToFooter}
                className='bg-[#f9eedb] text-orange-600 font-sfia px-[50px] py-[20px] text-xl lg:text-2xl absolute bottom-6 left-4 lg:top-[400px] lg:left-[70px] rounded'
            >
                Order Now
            </button>
        </section>

        {/* ── MENU ── */}
        <section ref={menuRef} className='bg-[#f9eedb] text-center flex-col justify-center'>
            <h1 className='text-orange-600 font-sfia text-[60px] md:text-[80px] lg:text-[100px] font-extrabold'>Our Menu</h1>

            <div className='flex flex-wrap justify-center lg:justify-start w-full lg:w-[1000px] gap-8 lg:gap-[60px] mx-auto lg:ml-[250px] pb-[100px] px-4 lg:px-0'>
                {[1,2,3,4,5,6,7,8].map((_, i) => (
                    <div key={i} className='w-[150px] md:w-[175px] lg:w-[200px]'>
                        <img src={pizzathree} alt="" className='w-[150px] h-[150px] md:w-[175px] md:h-[175px] lg:w-[200px] lg:h-[200px] rotate-270' />
                        <h2 className='font-sfia text-orange-600 text-lg md:text-xl lg:text-2xl font-medium'>Mushroom Pizza</h2>
                        <p className='font-sfia text-orange-600 text-lg md:text-xl lg:text-2xl font-medium'>Tk.500</p>
                        <button
                            onClick={scrollToFooter}
                            className='bg-orange-600 text-[#f9eedb] font-sfia px-[20px] py-[5px] text-lg md:text-xl lg:text-2xl rounded'
                        >
                            Order Now
                        </button>
                    </div>
                ))}
            </div>
        </section>

        {/* ── FOOTER ── */}
        <section ref={footerRef} className='bg-orange-600 flex flex-col lg:flex-row pb-[100px]'>
            <img src={logo} className='w-2/3 md:w-1/2 lg:w-1/3 pt-[50px] mx-auto lg:mx-0' alt="" />
            <div className='text-center lg:text-left'>
                <h1 className='text-[#f9eedb] font-sfia text-5xl md:text-6xl lg:text-8xl font-extrabold pt-[50px] lg:pl-[300px]'>Order Now!</h1>
                <h1 className='text-[#f9eedb] font-sfia text-2xl md:text-4xl lg:text-6xl font-extrabold pt-[50px] lg:pl-[300px]'>+880 1344 834 043</h1>
                <div className='flex justify-center lg:justify-start lg:pl-[380px] pt-[20px] gap-8 lg:gap-0'>
                    <p className='text-[#f9eedb] text-5xl lg:text-6xl'><a href="#"><FaFacebook /></a></p>
                    <p className='text-[#f9eedb] text-5xl lg:text-6xl lg:pl-[50px]'><a href="#"><FaWhatsapp /></a></p>
                </div>
            </div>
        </section>
        </>
    )
}

export default App