

const Card = ({title, date, tech, desc}) =>{
    return(
        <article className="bg-white flex flex-col p-[19px] w-[418px] space-y-[13px]">
            <h3 className="font-bold">{title}</h3>
            <div className="text-[18px] leading-[26px]">{date}  |  {tech}</div>
            <p>{desc}</p>
        </article>
    );    
}

export default Card;