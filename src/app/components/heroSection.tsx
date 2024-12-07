import Image from "next/image"
import DropDownLeft from "../../../public/icons/DropDownLeft.png"
import hero_endFrame from "../../../public/images/hero_endframe.png"
import Apple_logo from "../../../public/logos/1200px-Apple_gray_logo 1.png"
import arrowRight from "../../../public/icons/icons arrow-right.png"

export default function HeroSection(){
    return(
        <div>
        <div style={{display: "flex", flexDirection: "column", alignItems: "flex-start", padding: "0px", gap: "16px", position: "absolute", width: "217px", height: "344px", left: "135px", top: "182px", border: "3px", borderColor: "black"}}>
            <div style={{display: "flex", flexDirection: "row", alignItems: "flex-start", padding: "0px", gap: "50px", width: "217px", height: "24px", flex: "none", order: "1", flexGrow: "0", }}>
                <div style={{width: "142px", height: "24px", fontStyle: "normal", fontWeight: "400", fontSize: "16px", lineHeight: "24px", textAlign: "center", color: "#000000", flex: "none", order: "0", flexGrow: "0", }}>
                Woman’s Fashion
                </div>
                <Image src={DropDownLeft} alt="DropDownLeft" style={{width: "24px", height: "24px", transform: "rotate2", flex: "none", order: "1", flexGrow: "0", }}/>
            </div>
            <div style={{display: "flex", flexDirection: "row", alignItems: "flex-start", justifyContent: "space-between", padding: "0px", gap: "81px", width: "217px", height: "24px", flex: "none", order: "1", flexGrow: "0", }}>
                <div style={{width: "112px", height: "24px", fontStyle: "normal", fontWeight: "400", fontSize: "16px", lineHeight: "24px", textAlign: "center", color: "#000000", flex: "none", order: "0", flexGrow: "0", }}>
                Men’s Fashion
                </div>
                <Image src={DropDownLeft} alt="DropDownLeft" style={{width: "24px", height: "24px", transform: "rotate2", flex: "none", order: "1", flexGrow: "0", }}/>
            </div>
            <div style={{width: "87px", height: "24px", fontStyle: "normal", fontWeight: "400", fontSize: "16px", lineHeight: "24px", textAlign: "center", color: "#000000", flex: "none", order: "2", flexGrow: "0", }}>
                Electronics
            </div>
            <div style={{width: "132px", height: "24px", fontStyle: "normal", fontWeight: "400", fontSize: "16px", lineHeight: "24px", textAlign: "center", color: "#000000", flex: "none", order: "3", flexGrow: "0", }}>
                Home & Lifestyle
            </div>
            <div style={{width: "73px", height: "24px", fontStyle: "normal", fontWeight: "400", fontSize: "16px", lineHeight: "24px", textAlign: "center", color: "#000000", flex: "none", order: "4", flexGrow: "0", }}>
                Medicine
            </div>
            <div style={{width: "137px", height: "24px", fontStyle: "normal", fontWeight: "400", fontSize: "16px", lineHeight: "24px", textAlign: "center", color: "#000000", flex: "none", order: "5", flexGrow: "0", }}>
                Sports & Outdoor
            </div>
            <div style={{width: "109px", height: "24px", fontStyle: "normal", fontWeight: "400", fontSize: "16px", lineHeight: "24px", textAlign: "center", color: "#000000", flex: "none", order: "6", flexGrow: "0", }}>
                Baby’s & Toys
            </div>
            <div style={{width: "131px", height: "24px", fontStyle: "normal", fontWeight: "400", fontSize: "16px", lineHeight: "24px", textAlign: "center", color: "#000000", flex: "none", order: "7", flexGrow: "0", }}>
                Groceries & Pets
            </div>
            <div style={{width: "128px", height: "24px", fontStyle: "normal", fontWeight: "400", fontSize: "16px", lineHeight: "24px", textAlign: "center", color: "#000000", flex: "none", order: "8", flexGrow: "0", }}>
                Health & Beauty
            </div>
        </div>
        <div style={{position: "absolute", width: "892px", height: "344px", left: "413px", top: "182px", backgroundColor: "#000000", }}>
            <div style={{display: "flex", flexDirection: "row", alignItems: "center", padding: "0px", gap: "24px", position: "absolute", width: "190px", height: "49px", left: "64px", top: "58px", }}>
                <Image src={Apple_logo} alt="Apple logo" style={{width: "40px", height: "49px", background: "url(.png)", flex: "none", order: "0", flexGrow: "0", }}/>
                <div style={{width: "126px", height: "20px", fontStyle: "normal", fontWeight: "400", fontSize: "16px", lineHeight: "24px", textAlign: "center", color: "#FAFAFA", flex: "none", order: "1", flexGrow: "0", }}>
                    iPhone 14 Series
                </div>
            </div>
            <h1 style={{position: "absolute", width: "294px", height: "120px", left: "64px", top: "127px", fontStyle: "normal", fontWeight: "600", fontSize: "48px", lineHeight: "60px", letterSpacing: "0.04em", color: "#FAFAFA", }}>
                Up to 10% off Voucher
            </h1>
            <div style={{display: "flex", flexDirection: "row", alignItems: "center", padding: "0px", gap: "8px", position: "absolute", width: "113px", height: "28px", left: "67px", top: "269px", }}>
                <div className="border-b-[1px] pb-1" style={{width: "81px" ,height: "24px" ,fontStyle: "normal", fontWeight: "500", fontSize: "16px", lineHeight: "24px", textAlign: "center", color: "#fafafa", flex: "none" ,order: "0" ,flexGrow: "0", }}>Shop Now</div>
                <Image src={arrowRight} alt=" icon arrow-right" style={{width: "24px" ,height: "24px" ,flex: "none" ,order: "1" ,flexGrow: "0" ,}} />
            </div>
            <Image src={hero_endFrame} alt="hero end frame" style={{position: "absolute", width: "496px", height: "352px", left: "396px", top: "16px", background: "#000000", }} />
            <div style={{display: "flex" ,flexDirection: "row" ,alignItems: "center" ,padding: "0px" ,gap: "12px" ,position: "absolute" ,width: "110px" ,height: "14px" ,left: "353px" ,top: "319px" ,}}>
                <div style={{width: "12px" ,height: "12px" ,background: "#FFFFFF" ,opacity: "0.5" ,borderRadius: "50px",flex: "none" ,order: "0" ,flexGrow: "0" ,}}></div>
                <div style={{width: "12px" ,height: "12px" ,background: "#FFFFFF" ,opacity: "0.5" ,borderRadius: "50px",flex: "none" ,order: "0" ,flexGrow: "0" ,}}></div>
                <div className="border-[4px] border-[#ffffff]" style={{width: "14px" ,height: "14px" ,background: "#db4444"  ,opacity: "100%" ,border: "2px", borderColor: "#ffffff",borderRadius: "50px",flex: "none" ,order: "0" ,flexGrow: "0" ,}}>                </div>
                <div style={{width: "12px" ,height: "12px" ,background: "#FFFFFF" ,opacity: "0.5" ,borderRadius: "50px", flex: "none" ,order: "0" ,flexGrow: "0" ,}}></div>
                <div style={{width: "12px" ,height: "12px" ,background: "#FFFFFF" ,opacity: "0.5" ,borderRadius: "50px",flex: "none" ,order: "0" ,flexGrow: "0" ,}}></div>
            </div>
        </div>
        </div>
    )
}