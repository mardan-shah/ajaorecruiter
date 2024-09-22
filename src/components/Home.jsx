import Hero from "./Hero";
import Tech from "./Tech";
import Services from "./Services";


const Home = () => {

    return (
        <>
        <Hero />
        <div className="h-auto bg-gray-900">
            <h1 className="font-bold text-3xl sm:text-4xl md:text-[40px] text-white mb-4 text-center pt-20" >Technologies we use</h1>
            <Tech />
        </div>
        <Services/>
        
        </>
    );
};

export default Home;
