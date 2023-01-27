

const Card = ({title, date, tech, desc}:{title:string,date:string, tech:string, desc:string }) =>{
    return(
        <article className="bg-white flex flex-col p-[19px] max-w-[418px] space-y-[13px]">
            <h3 className="font-bold text-[30px] leading-[44px]">{title}</h3>
            <div className="text-[18px] leading-[26px] flex justify-between max-w-[15rem]">
                <p>{date}</p>
                |
                <p>{tech}</p>
            </div>
            <p>{desc}</p>
        </article>
    );    
}

export default Card;