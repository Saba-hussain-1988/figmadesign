import Image from "next/image"
import Link from "next/link"
import logo1 from "../../../public/logos/Logo1.png"
import SearchComponent from "./search"
import likeIcon from "../../../public/icons/Vector.png"
import cartIcon from "../../../public/icons/Cart1 with buy.png"


export default function Header(){
    return(
        <div style={{ display: "flex",flexDirection: "row", alignItems: "center", padding: "0px", gap: "148px", position: "absolute", width: "1170px", height: "38px", left: "135px", top: "88px", opacity: "100%"  }}>
             <div style = {{display: "flex", flexDirection:"row", alignItems: "flex-start", padding: "0px", gap: "190px", width: "675px", height: "24px", flex: "none", order: "0", flexGrow: "0", }}>
                <Image src = {logo1} alt="Logo 1" style={{width: "118px", height: "24px", flex: "none", order: "0", flexGrow: "0", }}/>
                <nav style = {{display: "flex", flexDirection: "row", alignItems: "flex-start", padding: "0px", gap: "48px", width: "367px", height: "24px", flex: "none", order: "1", flexGrow: "0", }}>
                    <Link href={"#"} style={{display: "flex", flexDirection: "column", alignItems: "center", padding: "0px", width: "48px", height: "24px", flex: "none", order: "0", flexGrow: "0", }}>Home</Link>
                    <Link href={"#"} style={{width: "66px", height: "24px", flex: "none", order: "1", flexGrow: "0", }}>Contact</Link>
                    <Link href={"#"} style={{width: "48px", height: "24px", flex: "none", order: "2", flexGrow: "0", }}>About</Link>
                    <Link href={"#"} style={{width: "61px", height: "24px", flex: "none", order: "3", flexGrow: "0", }}>Sign Up</Link>
                </nav>
            </div> 
            <div style={{display: "flex", flexDirection: "row", alignItems: "center", padding: "0px", gap: "24px", width: "347px", height: "38px", flex: "none", order: "1", flexGrow: "0", }}>
                    <SearchComponent />
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", padding: "0px", gap: "16px",width: "80px", height: "32px", flex: "none", order: "3", flexGrow: "0", }}>
                    <Link href={"#"} style={{ }}>
                        <Image src={likeIcon} alt="like icon" style={{width: "20px", height: "20px"}}/>
                    </Link>
                    <Link href={"#"} style={{}}>
                        <Image src={cartIcon} alt="cart icon" style={{width: "32px", height: "32px" }}/>
                    </Link>
                </div>
            </div>
        </div>
    )
}

// <div className="w-[] h-[]"/* E-Commerce HomePage */


/* Frame 551 */