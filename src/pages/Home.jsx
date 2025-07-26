import React from 'react'
import { Timer, Utensils, CirclePlay, TwitterIcon, FacebookIcon, GithubIcon } from 'lucide-react'
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import Badge from '../assets/Badge.png'
import Breakfast from '../assets/Breakfast.png'
import Vegan from '../assets/Vegan.png'
import Meat from '../assets/Meat.png'
import Dessert from '../assets/Dessert.png'
import Lunch from '../assets/Lunch.png'
import Chocolate from '../assets/Chocolate.png'
import image26 from '../assets/image26.png'
import image27 from '../assets/image27.png'
import image28 from '../assets/image28.png'
import image29 from '../assets/image29.png'
import image30 from '../assets/image30.png'
import image31 from '../assets/image31.png'
import image32 from '../assets/image32.png'
import image33 from '../assets/image33.png'
import ad1 from '../assets/ad1.png'
import chef from '../assets/chef.png'
import mutton from '../assets/mutton.png'
import kanda from '../assets/kanda.png'
import cabbage from '../assets/cabbage.png'
import tamato from '../assets/tamato.png'

const Home = ({navMenuFooter}) => {
    const categoryList = [
        { title: "Breakfast", img: Breakfast, color: "#708246" },
        { title: "Vegan", img: Vegan, color: "#6CC63F" },
        { title: "Meat", img: Meat, color: "#CC261B" },
        { title: "Dessert", img: Dessert, color: "#F09E00" },
        { title: "Lunch", img: Lunch, color: "#CC261B" },
        { title: "Chocolate", img: Chocolate, color: "#6CC63F" },
    ];
    // hex Conversion 
    const hexToRgba = (hex, opacity) => {
        hex = hex.replace("#", "");

        // 3-digit hex ko 6-digit me convert
        if (hex.length === 3) {
            hex = hex.split("").map(char => char + char).join("");
        }

        const r = parseInt(hex.substring(0, 2), 16);
        const g = parseInt(hex.substring(2, 4), 16);
        const b = parseInt(hex.substring(4, 6), 16);

        return `rgba(${r},${g},${b},${opacity})`;
    };
    // Gridlist
    const gridList = [
        { title: "Big and Juicy Wagyu Beef Cheeseburger", img: image26 },
        { title: "Fresh Lime Roasted Salmon with Ginger Sauce", img: image27 },
        { title: "Strawberry Oatmeal Pancake with Honey Syrup", img: image28 },
        { title: "Fresh and Healthy Mixed Mayonnaise Salad", img: image29 },
        { title: "Chicken Meatballs with Cream Cheese", img: image30 },
        { title: "Don’t forget to eat healthy food", img: ad1 },
        { title: "Fruity Pancake with Orange & Blueberry", img: image31 },
        { title: "The Best Easy One Pot Chicken and Rice", img: image32 },
        { title: "The Creamiest Creamy Chicken and Bacon Pasta", img: image33 },
    ]
    return (
        <main className='w-screen'>
            {/* Hero Section */}
            <section className='relative w-full h-[calc(100vh-55px)] inline-flex'>
                {/* Left */}
                <div className='hidden lg:w-[5%] lg:flex justify-start items-center h-full my-auto'>
                    {/* LeftSideBorder */}
                    <div className='bg-[#E7FAFE] pr-10 h-[83%] rounded-tr-4xl rounded-br-4xl' />
                </div>
                {/* center */}
                <div className='relative w-full lg:w-[90%] lg:flex lg:my-auto'>
                    {/* Card-1 */}
                    <div className='bg-[#E7FAFE] sm:mt-5 md:mt-0 py-5 sm:py-10 md:py-15 px-10 lg:w-[50%] lg:py-0 lg:px-10 lg:rounded-none lg:rounded-tl-4xl lg:rounded-bl-4xl'>
                        {/* Tag*/}
                        <span className='inline-flex items-center gap-2 bg-white rounded-4xl p-2 sm:p-3 font-inter md:font-semibold lg:mt-10'>
                            <img src={img1} alt="img1" />
                            <span>Hot Recipes</span>
                        </span>
                        {/* Heading */}
                        <p className='font-inter font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-7xl flex flex-col items-start py-3 md:py-5 text-gray-800'>
                            <span>Spicy delicious</span>
                            <span>chicken wings</span>
                        </p>
                        {/* slogan */}
                        <p className='text-sm sm:text-md md:py-2 md:w-[50%] lg:text-xl lg:w-[80%] '>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
                        {/* labels */}
                        <div className='mt-5 md:mt-3 flex items-start gap-5 text-sm sm:text-md md:text-lg lg:mt-5'>
                            {/*  label-1 */}
                            <span className='bg-gray-200 inline-flex items-center justify-center py-1 px-2 lg:py-2 lg:px-4 gap-2 rounded-3xl'>
                                <Timer size={20} />
                                <span>30 Minutes</span>
                            </span>
                            {/* label-2 */}
                            <span className='bg-gray-200 inline-flex items-center justify-center py-1 px-2 lg:py-2 lg:px-4 gap-2 rounded-3xl'>
                                <Utensils size={20} />
                                <span>30 Minutes</span>
                            </span>
                        </div>
                        {/* profile + Recipes */}
                        <div className='flex justify-between items-center mt-4 sm:mt-10 md:mt-8 lg:mt-20'>
                            {/* profile + Name + Date */}
                            <div className='inline-flex items-center gap-2 text-sm sm:text-md md:text-lg'>
                                <img src="https://github.com/shadcn.png" alt="" className='h-[40px] w-[40px] sm:h-[50px] sm:w-[50px] rounded-full object-center object-cover' />
                                <p className='flex flex-col items-start justify-center font-inter lg:font-semibold text-gray-800'>
                                    <span>John Smith</span>
                                    <span>{new Date().toLocaleDateString()}</span>
                                </p>
                            </div>
                            {/* View Recipes Btn */}
                            <div className='bg-gray-900 px-4 py-3 rounded-3xl inline-flex items-center text-white gap-2 text-sm lg:px-5 lg:py-4 cursor-pointer'>
                                View Recipes <CirclePlay size={18} />
                            </div>
                        </div>
                    </div>
                    {/* Badge OK */}
                    <div className='absolute z-10 h-[80px] w-[80px] left-5 md:h-[100px] md:w-[100px] md:left-150 md:top-40 lg:top-30 lg:left-165 lg:h-[120px] lg:w-[120px]'>
                        <img src={Badge} alt="" />
                    </div>
                    {/* Card-2 */}
                    <div className='bg-[#E7FAFE] lg:w-[50%] flex items-center justify-center lg:rounded-tr-4xl lg:rounded-br-4xl'>
                        <img src={img2} alt="" className='object-cover rotate-90 lg:rotate-none lg:object-fill h-full w-full' />
                    </div>
                </div>
                {/* Right */}
                <div className='hidden lg:w-[5%] lg:flex justify-end items-center h-full my-auto'>
                    <div className='bg-[#E7FAFE] pr-10 h-[83%] rounded-tl-4xl rounded-bl-4xl' />
                </div>
            </section>

            {/* Section -2 */}
            <section className='w-full py-5 px-1 mt-30 sm:mt-100 sm:pt-20 md:mt-150 lg:mt-10 lg:w-[90%] lg:mx-auto lg:px-0 lg:py-0'>
                <div className='flex justify-between items-center py-10'>
                    <h2 className='text-2xl font-bold tracking-wider text-gray-800 font-inter'>Categories</h2>
                    <span className='px-3 py-2 rounded-4xl font-tinos bg-gray-200 cursor-pointer text-sm'>View All Categories</span>
                </div>
                {/* Grids list */}
                <div className='grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 md:gap-2'>
                    {categoryList.map((items, index) => (
                        <div key={index} className={`flex flex-col items-center justify-center backdrop-blur-3xl rounded-3xl`} style={{ backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0.8) 60%, ${hexToRgba(items.color, 0.2)} 100%)` }}>
                            <img src={items.img} alt={items.title} className='py-5 object-center w-[60%] h-[80%]' />
                            <span className='font-inter pb-5 font-semibold text-sm'>{items.title}</span>
                        </div>
                    ))}
                </div>

                {/* Grid list 2 */}
                <div className='mt-10 h-full w-full'>
                    <h1 className='text-center text-2xl font-tinos font-medium py-3'>Simple and tasty recipes</h1>
                    <p className='text-center font-tinos text-sm font-normal'>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
                    {/* Grid List */}
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center justify-between gap-2'>
                        {gridList.map((items, index) => (
                            <>
                                {index === 5 ? <AdCard items={items} index={index} /> : <CardList items={items} index={index} />}
                            </>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section-3 */}
            <section className='relative min-h-screen w-screen lg:flex flex-row lg:pt-20 lg:px-20'>
                {/* Left Box */}
                <div className='pt-20 px-5 flex flex-col font-tinos lg:mt-30 lg:w-1/2'>
                    <p className='text-3xl font-semibold lg:text-6xl'>Everyone can be achef in their own kitchen</p>
                    <span className='text-[12px] py-5 lg:text-xl'>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </span>
                    <button className='mt-5 py-2 bg-black text-white rounded-2xl lg:w-1/3 cursor-pointer'>Learn More</button>
                </div>
                {/* Right Box */}
                <div className='absolute lg:relative bottom-0'>
                    <img src={mutton} alt="mutton" className='absolute top-5 left-10 w-[60px] lg:top-20 lg:left-20' />
                    <img src={kanda} alt="kanda" className='absolute top-8 left-65 w-[50px] lg:left-120 lg:top-20' />
                    <img src={cabbage} alt="cabbage" className='absolute top-25 right-4 w-[50px] lg:top-55 lg:right-10' />
                    <img src={tamato} alt="tamato" className='absolute bottom-10 w-[50px] lg:bottom-30 lg:left-5' />
                    <img src={chef} alt="chef" className='object-cover object-center bg-gradient-to-b from-white via-white to-gray-200 rounded-2xl' />
                </div>
            </section>

            {/* Section-3 */}
            <section className='w-screen h-[50vh] lg:h-[60vh] flex items-center justify-center'>
                <div className='relative w-[90%] mx-auto bg-[#E7F9FD] rounded-3xl lg:h-[40vh]'>
                    <div className='flex flex-col items-center justify-center'>
                        <p className='mt-2 lg:mt-10 text-3xl font-semibold lg:text-5xl text-center font-tinos text-gray-900/90'>Deliciousness to your inbox</p>
                        <span className='text-sm text-gray-700/60 text-center w-[80%] lg:w-[40%] mt-1 mb-5 lg:my-5'>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </span>
                        {/* left Img */}
                    </div>
                    <img src="/left-1.png" alt="left" className='absolute left-0 bottom-0 w-[15%] lg:w-[20%]' />
                    {/* right */}
                    <img src="/right-2.png" alt="right-2" className='absolute right-[20%] lg:right-[25%] bottom-[4%] lg:bottom-[10%] w-[10%] lg:w-[10%]' />
                    <img src="/right.png" alt="right" className='absolute right-0 bottom-0 rounded-br-2xl w-[15%] lg:w-[20%]' />
                </div>
            </section>

            {/* Footer Section */}
            <section id='' className='w-full h-[10vh] bg-white'>
                <div className='w-[90%] mx-auto'>
                    {/* Part-1 */}
                    <div className='flex flex-col md:flex-row justify-between items-start md:items-center mt-15 mb-5 '>
                        {/* Left Box */}
                        <div className='flex flex-col justify-center items-start gap-2'>
                            <a href="#">
                                <p className='text-xl md:text-2xl text-center font-lobster'>
                                    Foodieland<span className='text-2xl text-red-400 font-extrabold'>.</span>
                                </p>
                            </a>
                            <span className='text-sm text-gray-800/60 font-tinos font-semibold mb-2 lg:mb-0'>Lorem ipsum dolor sit amet, consectetuipisicing elit,</span>
                        </div>
                        {/* Right-Box */}
                        <div className='flex justify-end items-end'>
                            <ul className='flex items-center gap-5 font-tinos text-md lg:text-xl'>
                                {navMenuFooter.map((items, index) => (
                                    <li key={index} className='relative group'>
                                        <a href={items.link}>{items.name}</a>
                                        <span className='absolute w-0 h-[2px] left-0 bottom-0 bg-gray-900 group-hover:w-full transition-all eas duration-500' />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    {/* Part-2 */}
                    <footer className='border-t-2 border-gray-300/60 flex justify-center items-center'>
                        <div className='flex justify-center items-center py-5'>
                                <span className='text-md font-tinos'>Designed & Developed by <a href="https://linkedin.com/in/iamrahulydw" target="_blank" rel="noopener noreferrer" className='text-sky-800 hover:underline'>Rahul Kumar</a> © {new Date().getFullYear()}</span>
                        </div>
                    </footer>
                </div>
            </section>
        </main>
    )
}

export default Home;

const CardList = ({ items, index }) => {
    return (
        <div className='mt-5 flex flex-col justify-center items-center pb-5 rounded-2xl bg-gradient-to-b from-white to bg-gray-200'>
            <img src={items.img} alt="icons" className='object-fit object-center rounded-3xl py-2 px-2 mt-2' />
            <p className='text-md font-tinos py-5'>{items.title}</p>
            <div className='w-full flex justify-around items-center font-tinos lg:justify-start lg:gap-5 lg:pl-10'>
                {/*  label-1 */}
                <span className='bg-gray-300 flex flex-row items-center justify-center rounded-3xl px-3 lg:py-2 gap-2'>
                    <Timer size={16} />
                    <span>30 Minutes</span>
                </span>
                {/* label-2 */}
                <span className='bg-gray-300 flex flex-row items-center justify-center rounded-3xl px-3 lg:py-2 gap-2'>
                    <Utensils size={16} />
                    <span>30 Minutes</span>
                </span>
            </div>
        </div>
    )
};

const AdCard = ({ items, index }) => {
    return (
        <div className="relative flex flex-col items-center justify-center overflow-hidden text-white py-5 rounded-2xl custom-radial-bg">
            <h1 className="text-center text-xl md:text-2xl font-tinos font-medium mb-4">
                Don’t forget to eat <br /> healthy food
            </h1>
            <img
                src={items.img}
                alt="Healthy Food"
                className="w-60 md:w-80 rounded-full object-cover z-10"
            />
            <a
                href="https://linkedin.com/in/rahulydw"
                className="mt-5 text-sm md:text-base font-tinos"
            >
                www.foodieland.com
            </a>
        </div>

    )
};

