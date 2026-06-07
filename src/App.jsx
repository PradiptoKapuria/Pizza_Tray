
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
    <div className='relative flex-col '>
        <img src={pizza} alt="" className='w-full h-[600px]' />
        <div className='bg-[#000000b3] w-full h-[600px] absolute top-0  '></div>
        <img src={logo} alt="" className=' absolute top-[105px] left-[385px] w-[700px] ' />

    </div>
    <section className='bg-orange-600 relative '>
        
        <h1 className='text-white font-lg text-[100px] pl-[30px] w-[1000px]'>The Best Pizzas In Town</h1>
        <img src={pizza_only} alt="" className= ' absolute w-1/6 left-[1000px] top-[10px] ' />

        <div className='flex'>
            <div className=' w-1/2 h-[700px]'>
            <div className='flex gap-7'>
                <div className='w-[500px] h-[300px] bg-gray-500'></div>
                <div className='w-[500px] h-[300px] bg-gray-500'></div>
                </div>
                 <div className='w-[500px] h-[300px] bg-gray-500 mt-[50px] ml-[120px]' ></div>
                </div>
                
           <div className=' w-1/2 h-[700px]'>
           <p className='font-sfia text-white text-3xl w-[650px] pl-[50px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam perferendis distinctio iste reiciendis in exercitationem aperiam expedita voluptatem qui voluptates illum at corporis obcaecati enim facere corrupti quis veritatis, libero fugit! Aperiam temporibus corporis consectetur pariatur fuga. Dolor, quasi aliquam? Porro excepturi quo, quam alias dolorum quas obcaecati eveniet et quibusdam libero? Aperiam nobis incidunt excepturi aut fugiat perspiciatis quam officia molestiae eum deleniti, possimus assumenda, rem dolor repellat eius nisi. Nesciunt laborum facere voluptatibus? Architecto, esse. Cum dolores corporis rem recusandae, nisi autem ut dolorum incidunt fuga, similique quod cupiditate inventore doloribus eveniet nostrum illo nobis pariatur quidem numquam necessitatibus cumque sequi facere itaque nulla? Inventore dignissimos repellat ea? Consequuntur aliquid excepturi doloremque consectetur minima, ullam quibusdam pariatur maiores sunt itaque ut quaerat molestias officia. Rem voluptates placeat ut sed officia ab quod hic, dolor reiciendis tempora vero? Sapiente labore iusto rem nihil sequi fugit blanditiis impedit tempora. Repellendus.</p></div>
           
        </div>
    </section>
    <section className='bg-[#f9eedb] text-left pt-[150px] h-[700px] relative pl-[20px]'>
        <h1 className='text-orange-600 font-sfia text-[100px] font-extrabold   '>Our Pizzas</h1>
         <p className='font-sfia text-orange-600 text-4xl w-1/2   font-bold'>
            Crafted, baked and prepared by the finest bakesmen, our pizzas are guaranteed to make you order another one
         </p>
           <img src={arrow} alt="" className='absolute top-[50px] left-[500px] rotate-320' />
          <img src={pizza_two} alt="" className='absolute top-[50px] left-[1100px] ' />
          <div className='bg-orange-600 w-[200px] h-[200px] text-center flex-col items-center relative ml-[900px] mt-[-100px] rounded-2xl'>
            <h2 className='text-[#f9eedb] font-sfia text-[200px]  rotate-90 absolute top-[-130px] left-[80px]'>[</h2>
            <h2 className='text-[#f9eedb] font-sfia text-4xl pt-[55px]'>Sausage Pizza</h2>
            <h2 className='text-[#f9eedb] font-sfia text-4xl'>Tk.800</h2>
            <h2 className='text-[#f9eedb] font-sfia text-[200px]  rotate-90 absolute top-[30px] left-[80px]'>]</h2>
            
          </div>
          <button onClick={scrollToMenu} className='bg-orange-600 text-[#f9eedb] font-sfia px-[20px] py-[20px] text-2xl rounded '>Explore Our Menu</button>
    </section>
    <section className='bg-orange-600 h-[507px] flex relative'>
        <h1 className='font-sfia text-[#f9eedb] text-[100px] font-extrabold w-1/2 leading-[85px] px-[50px] py-[100px]'>The Taste of Italy, To Your House Within Minutes</h1>
        <button className='bg-green-900 text-orange-600 font-sfia px-[20px] py-[20px] text-2xl  '>    </button>
        <button className='bg-[#f9eedb] text-orange-600 font-sfia px-[20px] py-[20px] text-2xl  '>    </button>
        <button className='bg-red-800 text-orange-600 font-sfia px-[20px] py-[20px] text-2xl  '>    </button>
        <img src={Mushpizza} className='w-1/3 rotate-270 absolute right-0 top-[-86px] ' alt="" />
        <div className=''></div>
        <button   onClick={scrollToFooter} className='bg-[#f9eedb] text-orange-600 font-sfia px-[50px] py-[20px] text-2xl absolute top-[400px] left-[70px] rounded  '> Order Now   </button>
    </section>
    <section ref={menuRef} className='bg-[#f9eedb] text-center flex-col justify-center'>
        <h1 className='text-orange-600 font-sfia text-[100px] font-extrabold   '>Our Menu</h1>



        <div className=' flex flex-wrap w-[1000px] gap-[60px] ml-[250px] pb-[100px]'>
            
            <div className='w-[200px]'>
                <img src={pizzathree} alt="" className='w-[200px] h-[200px] rotate-270' />
                <h2 className='font-sfia text-orange-600 text-2xl font-medium'>Mushroom Pizza</h2>
                <p className='font-sfia text-orange-600 text-2xl font-medium'>Tk.500</p>
                <button   onClick={scrollToFooter} className='bg-orange-600 text-[#f9eedb] font-sfia px-[20px] py-[5px] text-2xl rounded '>Order Now</button>
            </div>
            <div className='w-[200px]'>
                <img src={pizzathree} alt="" className='w-[200px] h-[200px] rotate-270' />
                <h2 className='font-sfia text-orange-600 text-2xl font-medium'>Mushroom Pizza</h2>
                <p className='font-sfia text-orange-600 text-2xl font-medium'>Tk.500</p>
                <button   onClick={scrollToFooter} className='bg-orange-600 text-[#f9eedb] font-sfia px-[20px] py-[5px] text-2xl rounded '>Order Now</button>
            </div>
            <div className='w-[200px]'>
                <img src={pizzathree} alt="" className='w-[200px] h-[200px] rotate-270' />
                <h2 className='font-sfia text-orange-600 text-2xl font-medium'>Mushroom Pizza</h2>
                <p className='font-sfia text-orange-600 text-2xl font-medium'>Tk.500</p>
                <button className='bg-orange-600 text-[#f9eedb] font-sfia px-[20px] py-[5px] text-2xl rounded '>Order Now</button>
            </div>
            <div className='w-[200px]'>
                <img src={pizzathree} alt="" className='w-[200px] h-[200px] rotate-270' />
                <h2 className='font-sfia text-orange-600 text-2xl font-medium'>Mushroom Pizza</h2>
                <p className='font-sfia text-orange-600 text-2xl font-medium'>Tk.500</p>
                <button   onClick={scrollToFooter} className='bg-orange-600 text-[#f9eedb] font-sfia px-[20px] py-[5px] text-2xl rounded '>Order Now</button>
            </div>
            <div className='w-[200px]'>
                <img src={pizzathree} alt="" className='w-[200px] h-[200px] rotate-270' />
                <h2 className='font-sfia text-orange-600 text-2xl font-medium'>Mushroom Pizza</h2>
                <p className='font-sfia text-orange-600 text-2xl font-medium'>Tk.500</p>
                <button   onClick={scrollToFooter} className='bg-orange-600 text-[#f9eedb] font-sfia px-[20px] py-[5px] text-2xl rounded '>Order Now</button>
            </div>
            <div className='w-[200px]'>
                <img src={pizzathree} alt="" className='w-[200px] h-[200px] rotate-270' />
                <h2 className='font-sfia text-orange-600 text-2xl font-medium'>Mushroom Pizza</h2>
                <p className='font-sfia text-orange-600 text-2xl font-medium'>Tk.500</p>
                <button   onClick={scrollToFooter} className='bg-orange-600 text-[#f9eedb] font-sfia px-[20px] py-[5px] text-2xl rounded '>Order Now</button>
            </div>
            <div className='w-[200px]'>
                <img src={pizzathree} alt="" className='w-[200px] h-[200px] rotate-270' />
                <h2 className='font-sfia text-orange-600 text-2xl font-medium'>Mushroom Pizza</h2>
                <p className='font-sfia text-orange-600 text-2xl font-medium'>Tk.500</p>
                <button   onClick={scrollToFooter} className='bg-orange-600 text-[#f9eedb] font-sfia px-[20px] py-[5px] text-2xl rounded '>Order Now</button>
            </div>
            <div className='w-[200px]'>
                <img src={pizzathree} alt="" className='w-[200px] h-[200px] rotate-270' />
                <h2 className='font-sfia text-orange-600 text-2xl font-medium'>Mushroom Pizza</h2>
                <p className='font-sfia text-orange-600 text-2xl font-medium'>Tk.500</p>
                <button   onClick={scrollToFooter}  className='bg-orange-600 text-[#f9eedb] font-sfia px-[20px] py-[5px] text-2xl rounded '>Order Now</button>
            </div>

            </div>
    </section>
    <section ref={footerRef} className='bg-orange-600 flex pb-[100px]'>
        <img src={logo} className='w-1/3 pt-[50px]' alt="" />
        <div>
            <h1 className='text-[#f9eedb] font-sfia text-8xl font-extrabold pt-[50px] pl-[300px]'>Order Now!</h1>
             <h1 className='text-[#f9eedb] font-sfia text-6xl font-extrabold pt-[50px] pl-[300px]'>+880 1344 834 043</h1>
             <div className='flex pl-[380px] pt-[20px]'>
                <p className='text-[#f9eedb] text-6xl'><a href><FaFacebook /></a></p>
             <p className='text-[#f9eedb] text-6xl pl-[50px] '><a href><FaWhatsapp /></a></p>
             </div>
        </div>
    </section>
    
    </>
  )
}

export default App
