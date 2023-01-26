import Image from "next/image";

const Hero = () =>{
    return(
        <section className="flex px-[30px] md:px-[148px] lg:px-[200px] py-[100] md:flex-row w-full
        flex-col-reverse items-center md:items-start md:justify-between">
            <div className="flex flex-col items-center md:items-start md:text-left text-center space-y-8 pt-8 md:pt-0">
                <h1 className="text-[32px] leading-[40px] md:text-[44px] md:leading-[60px] font-bold">Hi, I am John, <br/>Creative Technologist</h1>
                <p className="md:max-w-[497px]">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                    Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                </p>
                <button className="text-white font-semibold flex items-center justify-center px-4 py-2 rounded-sm active:outline-none transition-all duration-200
                 hover:bg-transparent border hover:border-[#FF6464] hover:text-[#FF6464] hover:scale-[1.02] active:scale-[0.95]">
                    Download Resume</button>
            </div>
            <img src="/man.jpg" alt="profile" className="h-[170px] w-[170px] md:h-[243px] md:w-[243px] rounded-full object-cover" />
        </section>
    );
}

export default Hero;