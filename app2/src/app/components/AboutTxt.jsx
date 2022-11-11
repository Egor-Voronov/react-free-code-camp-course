export function AboutTxt ({ txt1, txt2, txt3 }) {
    return (
        <div className="flex items-center text-center relative mt-10 flex-col">
            <h1 className="font-bold text-white text-[25px]">{txt1}</h1>
            <h2 className="txt2 font-normal text-[12.8px]">{txt2}</h2>
            <h2 className="text-white font-normal text-[10.24px] relative mt-1">{txt3}</h2>
        </div>
    )
}