import Image from "next/image";

const Hero = () =>{
    return(
        <section  className="flex justify-center bg-blue-500 items-center md:space-x-[115px] md:space-y-0 md:h-[595px] md:flex-row flex-col-reverse px-[20px] md:px-[148px] lg:px-[200px]">
            <div className="flex-col space-y-[40px] w-full h-full">
                <h1 className="text-[44px] leading-[60px] font-semibold md:max-w-[506px]">
                    Hi, I am John, <br/>Creative Technologist</h1>
                <p className="md:max-w-[497px]">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                     Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                </p>
                <button className="text-white px-4 py-2 rounded-sm active:outline-none transition-all duration-200
                hover:bg-transparent border hover:border-[#FF6464] hover:text-[#FF6464] hover:scale-[1.05] active:scale-[0.95]">Download Resime</button>
            </div>

            <div>
                <Image height={243} width={243} src='' className="h-[243px] w-[243px]" alt="profile"/>
            </div>
        </section>
    );
}

export default Hero;