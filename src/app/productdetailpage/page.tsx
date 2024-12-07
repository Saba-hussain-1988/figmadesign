import Image from "next/image";
import farm895 from "../../../public/images/Frame 895.png"
import farm896 from "../../../public/images/Frame 896.png"
import farm897 from "../../../public/images/Frame 897.png"
import farm919 from "../../../public/images/Frame 919.png"
import farm894 from "../../../public/images/Frame 894.png"


export default function Home(){
    return(
        <div>
            <div className="flex items-center gap-3 absolute left-1/4 transform -translate-x-1/2 top-[222px] w-[90%] max-w-[353px] sm:gap-4 md:gap-6">
                <span className="text-[14px] leading-[21px] font-poppins font-normal text-black/50 sm:text-[16px] sm:leading-[24px]">
                    Account
                </span>
                <div className="w-[13.19px] h-0 opacity-50 border border-black rotate-[117.05deg] order-1 flex-none"></div>

                <span className="text-[14px] leading-[21px] font-poppins font-normal text-black/50 sm:text-[16px] sm:leading-[24px] order-2 flex-none">
                  Gaming
                </span>
                <div className="w-[13.19px] h-0 opacity-50 border border-black rotate-[117.05deg] order-2 flex-none"></div>
                
                <span className="text-[14px] leading-[21px] font-poppins font-normal text-black text-nowrap order-8 flex-none sm:text-[16px] sm:leading-[24px] w-auto max-w-[177px]">
                Havic HV G-92 Gamepad
                </span>


            </div>

            {/* product image */}
            <div className="w-full lg:sticky mt-[200px] sm:flex gap-2">
                      <div className="sm:space-y-3 w-16 max-sm:w-12 max-sm:flex max-sm:mb-4 max-sm:gap-4">
                          <Image src={farm895} alt="Product1" className="absolute w-[40%] max-w-[170px] h-[30%] max-h-[138px] left-[10%] top-[20%] bg-[#F5F5F5] rounded-[4px]" />
                          <Image src={farm896} alt="Product2" className="w-full cursor-pointer rounded-md" />
                          <Image src={farm897} alt="Product3" className="w-full cursor-pointer rounded-md" />
                          <Image src={farm919} alt="Product4" className="w-full cursor-pointer rounded-md" />
                      </div>
                      <div className="absolute w-[90%] max-w-[500px] h-[600px] max-h-[600px] left-[10%] top-[20%] bg-[#F5F5F5] rounded-[4px]">

                      <Image src={farm894} alt="Product" className="absolute w-[90%] max-w-[500px] h-[80%] max-h-[600px] left-1/2 top-[20%] transform -translate-x-1/2 bg-[#F5F5F5] rounded-[4px]" />
                      </div>
                  </div>

        </div>
    )
}