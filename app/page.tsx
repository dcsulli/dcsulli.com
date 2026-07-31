import SocialLinks from "@/components/SocialLinks";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold animate-fade-in">
        DC Sulli
      </h1>

      <p className="mt-6 max-w-xl text-center text-lg text-gray-600 animate-fade-in-delay">
        Musician, developer, creator. 
        
      </p>
      
      <SocialLinks />
    
    </main>
  );
}