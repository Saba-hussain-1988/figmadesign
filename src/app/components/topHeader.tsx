import Image from "next/image"
import dropdown from "../../../public/icons/DropDown.png"


export default function TopHeader(){
    return(
        <div   style = {{position:"absolute", width: "1440px", height: "48px", left: "0px", top:" 0px", background: "#000000",}}>
            <div style = {{display: "flex", flexDirection:"row", alignItems: "flex-start", padding: "0px", gap: "231px", position:"absolute", width: "859px", height: "24px", right: 136, top: "12px", }}>
                <div style = {{display: "flex", flexDirection: "row", alignItems: "center", padding: "0px", gap: "8px", width:" 550px", height: "24px", flex: "none", order: "0", flexGrow:" 0", }}>
                   <div style = {{width: "474px", height:" 18px", fontStyle: "normal", fontWeight:" 400", fontSize: "14px", lineHeight:" 21px", color: "#FAFAFA", flex:" none", order:" 0", flexGrow: "0", }}>
                        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
                    </div>
                   <button style = {{width:" 68px", height: "24px", fontStyle: "normal", fontWeight: "600", fontSize: "14px", lineHeight: "24px", textAlign:"center", textDecorationLine:" underline", color:" #FAFAFA", flex:" none", order: "1", flexGrow:" 0", }}>
                    ShopNow</button>
                </div>
                  <div style = {{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", padding: "0px", gap: "5px", width: "78px", height: "24px", flex: "none", order: 1, flexGrow: 0, }}>
                   <div style = {{width: "49px", height: "21px", fontStyle: "normal", fontWeight: "400", fontSize: "14px", lineHeight: "21px", color: "#FAFAFA", flex: "none", order: 0, flexGrow: 0, }}>English</div>
                    <div style = {{width: "24px", height: "24px", flex: "none", order: 1, flexGrow: 0, }}>
                        <Image src={dropdown} alt="dropDown" style={{width: "24px", height: "24px", }}/>
                    </div>
                </div>
            </div> 
        </div>
    )
}