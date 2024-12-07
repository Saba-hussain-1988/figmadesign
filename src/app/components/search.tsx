import Image from "next/image"
import searchIcon from "../../../public/icons/Component 2.png"

export default function SearchComponent(){
    return(
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "7px 12px 7px 20px", gap: "10px", width: "243px", height: "38px", background: "#F5F5F5", borderRadius: "4px", flex: "none", order: "0", flexGrow: "0",}}>
        <div style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", padding: "0px", gap: "34px", width: "211px", height: "24px", flex: "none", order: "0", flexGrow: "0", }}>
            <input type="text" placeholder="What are you looking for?" style={{width: "153px", height: "18px", fontStyle: "normal", fontWeight: "400", fontSize: "12px", lineHeight: "18px", color: "#000000", opacity: "0.5", flex: "none", border: "0", flexGrow: "0", }}/>
            <Image src={searchIcon} alt="search Icon" style={{width: "24px", height: "24px", flex: "none", order: "1", flexGrow: "0",}}/>
        </div>
        </div>
    )
}