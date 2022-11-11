import { Photo } from './Photo'
import { AboutTxt } from './AboutTxt'

export function About () {
    return (
        <div className="w-full flex items-center flex-col">
            <div>
                <Photo path="https://vsegda-pomnim.com/uploads/posts/2022-04/1649112256_58-vsegda-pomnim-com-p-kotyata-na-prirode-foto-65.jpg" className="w-[317px] h-[317px]" />
            </div>
            <AboutTxt txt1="Russkiy Kot" txt2="Having fun + Playing" txt3="Tel aviv. Israel"/>
        </div>
    )
}