import Image from "next/image"
import line from "../../../public/icons/Line 3 (1).png"

export default function LineFront(){
    return(
        <div style={{position: "absolute", width: "1440px", height: "10px",}}>
            <Image src={line} alt="line" style={{position: "absolute",width: "1440px", height: "10px",}}/>
        </div>
    )
}