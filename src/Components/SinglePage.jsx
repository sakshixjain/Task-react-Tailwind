import React,{useState} from 'react';


const SinglePage = () => {

  const [openIndex, setOpenIndex] = useState(0); // First question opened by default

    const solutions = [
        {
          title: "Food",
          desc: "Leverage Agile Frameworks Provide a robust synopsis high level overview.",
          icon: "images/images/icons/Food.svg",
        
        },
        {
          title: "Grocery",
          desc: "Bring to the table win-win survival strategies to ensure proactive dominations.",
          icon: "images/images/icons/Grocery.svg",
          active: true,
        },
        {
          title: "Courier",
          desc: "Organically grows the hollis world view of disrupted innovation via workplace.",
          icon: "images/images/icons/Courier.svg"
        },
        {
          title: "Logistics",
          desc: "Nanotechnology immers along the information highway will close the loop.",
          icon: "images/images/icons/Logistics.svg",
        },
      ];


  const data = [
    {
      question: 'What is SaaS ?',
      answer:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quasi consequuntur mollitia eos, voluptates iste? Beatae, vel error! Voluptatibus deserunt ea iste veniam repudiandae atque voluptatem pariatur.',
    },
    {
      question: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, maiores. ?',
      answer:
        'Answer for second question goes here...',
    },
    {
      question: 'Lorem ipsum dolor sit amet consectetur.?',
      answer:
        'Answer for third question goes here...',
    },
    {
      question: 'Lorem ipsum dolor sit amet, consectetur adipisicing. ?',
      answer:
        'Answer for fourth question goes here...',
    },
  ];

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };


    

  return (
    <div>
    <div className="bg-[#5E4AE3] text-white min-h-screen">
        
      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-6">
        <div className="flex items-center gap-2 text-xl font-bold"> 
          <div className=" w-36 h-36 rounded-full flex items-center justify-center font-bold"><img src="images\images\logo\Logo.svg" alt="" /> 
          </div>
        </div>
        <ul className="flex gap-8 text-white font-medium">
          <li>Solution</li>
          <li>Product</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className="flex gap-4">
          <button className="px-4 py-2 bg-white text-[#5E4AE3] rounded-md font-semibold">Login</button>
          <button className="px-4 py-2 border border-white rounded-md font-semibold">Signup</button>
        </div>
      </nav>

      {/* Hero */}
      <div className="flex flex-col md:flex-row items-center px-10 py-20">
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            SaaS Delivery <br /> Management Software
          </h1>
          <p className="mt-4 text-lg text-gray-200">
            Track and Optimize routes in real-time
          </p>
          <div className="mt-6 flex gap-6">
            <button className="bg-white text-[#5E4AE3] px-6 py-3 rounded-md font-semibold">Get Started</button>
            <button className="flex items-center gap-2">
              <span className="w-4 h-4 bg-[#5E4AE3]  text-white rounded-full flex items-center justify-center"><i className="fa-solid fa-circle-play"></i></span>
              Watch how it works
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center mt-10 md:mt-0 relative">
          {/* Placeholder for laptop + phone */}

          <img src="images\images\img\banner-desktop.png" alt="User" />
         
            

        </div>
      </div>

      {/* Logos */}
      
<div className="bg-white py-10 px-24 flex justify-center items-center flex-wrap gap-10">
  <img src="images\images\brands\puuma.jpg" alt="Puma" className="h-24" />
  <img src="images\images\brands\nykaa.png" alt="Nykaa" className="h-24" />
  <img src="images\images\brands\1mg1.png" alt="1mg" className="h-20" />
  <img src="images\images\brands\pharmeasy.png" alt="PharmEasy" className="h-24" />
  <img src="images\images\brands\bewakoof.png" alt="Bewakoof" className="h-24" />
</div>

<div className='bg-white'>

      {/* Top Section */}
      <div className="text-center py-16 px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Solution for every delivery
        </h2>
        <div className="w-16 h-1 bg-[#5E4AE3] mx-auto mb-10 rounded-full" />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {solutions.map((item, index) => (
            <div
              key={index}
              className={`rounded-xl p-6 text-center shadow-sm border  hover:shadow-md transition-all duration-300 border-b-[4px] hover:border-[#5E4AE3]`}
            >
              <img
                src={item.icon}
                alt={item.title}
                className="w-12 h-16 mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
              <p className="text-gray-500 text-sm mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tilted Section Background */}
      <div className="relative bg-[#F4F7FE] py-20 px-4 -skew-y-3">
        <div className="max-w-4xl mx-auto skew-y-3 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Delivery business interfaces
          </h2>
          <div className="w-16 h-1 bg-[#5E4AE3] mx-auto mb-10 rounded-full" />

          <div className="flex flex-wrap justify-center gap-4">
            <div className="relative">
              <button className="border border-[#5E4AE3] hover:bg-[#5E4AE3] hover:text-white text-[#5E4AE3] px-6 py-3 rounded-md font-semibold">
                Dashboard
              </button>
            </div>
            <button className="border border-[#5E4AE3] hover:bg-[#5E4AE3] hover:text-white text-[#5E4AE3] px-6 py-3 rounded-md font-semibold">
              Customer App
            </button>
            <button className="border border-[#5E4AE3] hover:bg-[#5E4AE3] hover:text-white text-[#5E4AE3] px-6 py-3 rounded-md font-semibold">
              Agent App
            </button>
          </div>
          </div>
        </div>
      </div>


      <div className="bg-[#f7f9fd] py-16 px-4 text-center">

      {/* Skewed Blue Section */}
      <div className="relative mt-[-50px] z-0">
        <div className="bg-[#5E4AE3] transform -skew-y-3 py-20 text-white">
          <div className="transform skew-y-3 max-w-6xl mx-auto px-4">
            <h2 className="text-2xl font-semibold mb-6">An all-in-one proof for final mile delivery solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="flex flex-col items-center text-center">
                <img src={"images/images/icons/real-time.svg"} alt="Tracking 1" className="w-12 h-12 mb-4" />
                <h3 className="text-lg font-bold">Real Time Tracking</h3>
                <p className="text-sm mt-2 text-white/80">
                  By adopting real time delivery tracking software final mile delivery management has become
                </p>
              </div>
              {/* Card 2 */}
              <div className="flex flex-col items-center text-center">
                <img src={"images/images/icons/delivery.svg"} alt="Tracking 2" className="w-12 h-12 mb-4" />
                <h3 className="text-lg font-bold">Real Time Tracking</h3>
                <p className="text-sm mt-2 text-white/80">
                  By adopting real time delivery tracking software final mile delivery management has become
                </p>
              </div>
              {/* Card 3 */}
              <div className="flex flex-col items-center text-center">
                <img src={"images/images/icons/bell.svg"} alt="Tracking 3" className="w-12 h-12 mb-4" />
                <h3 className="text-lg font-bold">Real Time Tracking</h3>
                <p className="text-sm mt-2 text-white/80">
                  By adopting real time delivery tracking software final mile delivery management has become
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div className="max-w-3xl bg-white mx-auto py-10  px-4">
      <h2 className="text-center text-[#5E4AE3] text-2xl font-bold mb-8">Frequently Asked Question</h2>
      <div className="bg-white shadow-md rounded">
        {data.map((item, index) => (
          <div
            key={index}
            className="border-b cursor-pointer px-6 py-4"
            onClick={() => toggle(index)}
          >
            <div className="flex items-start gap-2">
              <img
                src={openIndex === index ? "images/images/icons/sub.svg" : "images/images/icons/add.svg"}
                alt="icon"
                className="w-4 h-4"
              />
              <div>
                <p className="font-semibold">{item.question}</p>
                {(openIndex === index) ? (
                  <p className="text-sm text-gray-600 ">{item.answer}</p>
                ): (<p className="text-sm text-gray-600 ">{item.question}</p>) }
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>


    <div className="max-w-7xl mx-auto bg-white px-4 py-16">
      <div className="grid md:grid-cols-2 items-center gap-10">
        {/* Left side image */}
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
          alt="building"
          className="w-full h-[500px] rounded-lg"
        />

        {/* Right side text + cards */}
        <div>
          <h2 className="text-3xl text-black font-semibold mb-3">What Make Us Different</h2>
          <p className="text-gray-600 mb-8">
            Check out our best services you can possibly orders in building your company
            and don’t forget to ask via out email or our customer service if you are in
            interesting in using our services
          </p>

          <div className=" shadow-md p-6 rounded-xl grid sm:grid-cols-4 card backdrop-blur-md z-10 w-[900px] -ml-96 gap-4">
            {/* Card 1 */}
            <div className="text-center px-4 py-6 hover:shadow-md rounded-lg transition">
              <img src={"images/images/icons/Suitcase.svg"} alt="icon" className="w-10 h-10 mx-auto mb-3" />
              <h4 className="font-semibold">Experienced</h4>
              <p className="text-sm text-gray-500 mt-1 mb-2">
                odio velit commodi sunt culpa ipsa qui soluta consequuntur!
              </p>
              <a href="#" className="text-blue-500 text-sm font-medium hover:underline">
                Learn more
              </a>
            </div>

            {/* Card 2 */}
            <div className="text-center px-4 py-6 hover:shadow-md rounded-lg transition">
              <img src={"images/images/icons/competitive-price.svg"}  alt="icon" className="w-10 h-10 mx-auto mb-3" />
              <h4 className="font-semibold">Experienced</h4>
              <p className="text-sm text-gray-500 mt-1 mb-2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis,
              </p>
              <a href="#" className="text-blue-500 text-sm font-medium hover:underline">
                Learn more
              </a>
            </div>

            {/* Card 3 */}
            <div className="text-center px-4 py-6 hover:shadow-md rounded-lg transition">
              <img src={"images/images/icons/on-time.svg"}  alt="icon" className="w-10 h-10 mx-auto mb-3" />
              <h4 className="font-semibold">Experienced</h4>
              <p className="text-sm text-gray-500 mt-1 mb-2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis,
              </p>
              <a href="#" className="text-blue-500 text-sm font-medium hover:underline">
                Learn more
              </a>
            </div>

            {/* Card 4 */}
            <div className="text-center px-4 py-6 hover:shadow-md rounded-lg transition">
              <img src={"images/images/icons/best-material.svg"}  alt="icon" className="w-10 h-10 mx-auto mb-3" />
              <h4 className="font-semibold">Experienced</h4>
              <p className="text-sm text-gray-500 mt-1 mb-2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis,
              </p>
              <a href="#" className="text-blue-500 text-sm font-medium hover:underline">
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>


    </div>
    </div>
  );
};

export default SinglePage;
