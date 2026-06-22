import Email from "@/app/components/Email";
import CoinsHero from "@/app/components/CoinsHero";
import CoinCards from "@/app/components/CoinsCards";
import CoinsUpdate from "@/app/components/CoinsUpdate";


export default function page() {
  return (
 <>
<CoinsHero/>
<CoinsUpdate/>
<CoinCards/>
 <Email/>
 
 </>
  )
}