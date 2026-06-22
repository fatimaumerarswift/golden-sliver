import StorageHero from "@/app/components/StorageHero";
import StorageCards from "@/app/components/StorageCards";
import StorageUpdate from "@/app/components/StorageUpdate";
import Email from "@/app/components/Email";

export default function Storage() {
  return (
    <>
       <StorageHero/> 
       <StorageUpdate/>
       <StorageCards/>
       <Email/>
    </>
  )
}
