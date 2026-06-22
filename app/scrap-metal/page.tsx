import MetalHero from "@/app/components/MetalHero";
import Email from "@/app/components/Email";
import MetalUpdates from "@/app/components/MetalUpdate";
import MetalCards from "@/app/components/MetalCard";


export default function page() {
  return (
   <>
   <MetalHero/>
   <MetalUpdates/>
   <MetalCards/>
   <Email/>
   </>
  )
}
