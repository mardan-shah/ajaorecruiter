import { Globe, ShoppingCart, Server, Smartphone } from "lucide-react"

export const services = [
    {
      title: "Web Development",
      description: "Building responsive and functional web applications.",
      icon: <Globe className="w-6 h-6 text-white" />,
    },
    {
      title: "E-commerce Solutions",
      description: "Creating efficient online shopping experiences.",
      icon: <ShoppingCart className="w-6 h-6 text-white" />,
    },
    {
      title: "Cloud Hosting",
      description: "Reliable and scalable cloud hosting services.",
      icon: <Server className="w-6 h-6 text-white" />,
    },
    {
      title: "Mobile App Developmens",
      description: "Crafting intuitive mobile applications.",
      icon: <Smartphone className="w-6 h-6 text-white" />,
    },
  ];

  const ServicesSection = () => {
    return (
        <section className="pt-20 lg:pt-[120px] pb-12 lg:pb-[90px] bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center">
            <div className="text-center mb-12 lg:mb-20 max-w-[510px]">
              <span className="font-semibold text-lg text-indigo-400 mb-2 block">
                Our Services
              </span>
              <h2 className="font-bold text-3xl sm:text-4xl md:text-[40px] text-white mb-4">
                What We Offer
              </h2>
              <p className="text-base text-gray-300">
                Explore our wide range of services tailored to meet your needs. Experience exceptional quality and performance.
              </p>
            </div>
          </div>
          
          <div className="flex flex-wrap -mx-4 justify-center">
            {services.map((data, index) => (
              <div className="w-full md:w-1/2 lg:w-1/3 px-4" key={index}>
                <div className="bg-gray-700 h-[90%] p-10 md:px-7 xl:px-10 rounded-[20px] shadow-md hover:shadow-lg mb-8 hover:bg-indigo-500 hover:scale-105 hover:text-white duration-300 transition-all ease-in-out">
                  <div className="w-[70px] h-[70px] flex items-center justify-center bg-indigo-400 rounded-2xl mb-8">
                    {data.icon}
                  </div>
                  <h4 className="font-semibold text-xl text-white mb-3">{data.title}</h4>
                  <p className="text-gray-300">{data.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
export default ServicesSection;
