import Header from "./header";
import TopHeader from "./topHeader";

export default function CompleteHeader(){
    return(
        <div className="h-[150px] w-[1440px] border-[#f5f5f5] border-b-4 " >
            <TopHeader />
            <Header />
            <hr/>
        </div>
    )
}