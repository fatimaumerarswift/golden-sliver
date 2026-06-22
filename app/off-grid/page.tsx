import GridHero from "@/app/components/GridHero";
import Email from "@/app/components/Email";
import GridUpdate from "@/app/components/GridUpdate";
import GridCards from "@/app/components/GridCards";


export default function page() {
  return (
    <>
      <GridHero/>  
      <GridUpdate/>
      <GridCards/>
        <Email/>
    
    </>
  )
}
