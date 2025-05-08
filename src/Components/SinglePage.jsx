import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
const SinglePage = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const [theme, setTheme] = useState('light'); // 'light' or 'dark'

  useEffect(() => {
    document.body.className = theme; // Apply theme as class to body
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const solutions = [
    {
      title: 'Food',
      desc: 'Leverage Agile Frameworks Provide a robust synopsis high level overview.',
      icon: 'images/images/icons/Food.svg',
    },
    {
      title: 'Grocery',
      desc: 'Bring to the table win-win survival strategies to ensure proactive dominations.',
      icon: 'images/images/icons/Grocery.svg',
      active: true,
    },
    {
      title: 'Courier',
      desc: 'Organically grows the hollis world view of disrupted innovation via workplace.',
      icon: 'images/images/icons/Courier.svg',
    },
    {
      title: 'Logistics',
      desc: 'Nanotechnology immers along the information highway will close the loop.',
      icon: 'images/images/icons/Logistics.svg',
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
      answer: 'Answer for second question goes here...',
    },
    {
      question: 'Lorem ipsum dolor sit amet consectetur.?',
      answer: 'Answer for third question goes here...',
    },
    {
      question: 'Lorem ipsum dolor sit amet, consectetur adipisicing. ?',
      answer: 'Answer for fourth question goes here...',
    },
  ];

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={`app ${theme}`}>
      <div className="bg-primary text-primary-text min-h-screen">
        {/* Navbar */}
        <nav className="flex justify-between items-center px-10">
          <div className="flex items-center gap-2 text-xl font-bold">
            <div className="w-36 h-36 rounded-full flex items-center justify-center font-bold">
              <img src="images\images\logo\Logo.svg" alt="" />
            </div>
          </div>
          <ul className="flex ul gap-8 font-medium">
            <li>Solution</li>
            <li>Product</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
          <div className="flex gap-4 ">
            <Link to='/login' className="px-4 ul py-2 border border-secondary-border rounded-md font-semibold">
              Login
            </Link>
            <Link to='signup' className="px-4 ul py-2 border border-secondary-border rounded-md font-semibold">
              Signup
            </Link>
            <button onClick={toggleTheme} className="toggle-btn">
              <i className={`fa-solid ${theme === 'light' ? 'fa-moon' : 'fa-sun'}`}></i>
            </button>
            <button className="bar">
              <i className="fa-solid fa-bars"></i>
            </button>
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
              <button className="hover:bg-white foot hover:text-primary px-6 py-3 rounded-md font-semibold">
                Get Started
              </button>
              <button className="watch-btn px-6 py-3 rounded-md font-semibold  flex items-center gap-2">
                <span className="w-4 h-4 bg-primary  text-primary-text rounded-full flex items-center justify-center">
                  <i className="fa-solid fa-circle-play"></i>
                </span>
                Watch how it works
              </button>
            </div>
          </div>

          <div className="flex-1 flex justify-center mt-10 md:mt-0 relative">
           
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

        <div className="bg-secondary-bg">
          {/* Top Section */}
          <div className="text-center py-16 px-4">
            <h2 className="text-3xl font-bold text-secondary-text mb-4">
              Solution for every delivery
            </h2>
            <div className=" w-16 h-1 bg-primary mx-auto mb-10 rounded-full" />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {solutions.map((item, index) => (
                <div
                  key={index}
                  className={`foot grocery-card rounded-xl p-6 text-center shadow-sm border  hover:shadow-md transition-all duration-300 border-b-[4px] hover:border-primary bg-white`}
                >
                  <img src={item.icon} alt={item.title} className="w-12 h-16 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-secondary-text">{item.title}</h3>
                  <p className="text-gray-500 text-sm mt-2">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tilted Section Background */}
          <div className="foot relative bg-[#F4F7FE] py-20 px-4 -skew-y-3">
            <div className="max-w-4xl mx-auto skew-y-3 text-center">
              <h2 className="text-2xl font-bold text-secondary-text mb-4">
                Delivery business interfaces
              </h2>
              <div className="w-16 h-1 bg-primary mx-auto mb-10 rounded-full" />

              <div className="flex flex-wrap justify-center gap-4">
                <div className="relative">
                  <button className="back-btn border border-primary hover:bg-primary hover:text-white text-primary px-6 py-3 rounded-md font-semibold">
                    Dashboard
                  </button>
                </div>
                <button className="back-btn border border-primary hover:bg-primary hover:text-white text-primary px-6 py-3 rounded-md font-semibold">
                  Customer App
                </button>
                <button className="back-btn border border-primary hover:bg-primary hover:text-white text-primary px-6 py-3 rounded-md font-semibold">
                  Agent App
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#f7f9fd] foot py-16 px-4 text-center">
          {/* Skewed Blue Section */}
          <div className="relative mt-[-50px] z-0">
            <div className="bg-primary transform -skew-y-3 py-20 text-primary-text">
              <div className="transform skew-y-3 max-w-6xl mx-auto px-4">
                <h2 className="text-2xl font-semibold mb-6">
                  An all-in-one proof for final mile delivery solutions
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Card 1 */}
                  <div className="flex flex-col items-center text-center">
                    <img
                      src={'images/images/icons/real-time.svg'}
                      alt="Tracking 1"
                      className="w-12 h-12 mb-4"
                    />
                    <h3 className="text-lg font-bold">Real Time Tracking</h3>
                    <p className="text-sm mt-2 text-primary-text/80">
                      By adopting real time delivery tracking software final
                      mile delivery management has become
                    </p>
                  </div>
                  {/* Card 2 */}
                  <div className="flex flex-col items-center text-center">
                    <img
                      src={'images/images/icons/delivery.svg'}
                      alt="Tracking 2"
                      className="w-12 h-12 mb-4"
                    />
                    <h3 className="text-lg font-bold">Real Time Tracking</h3>
                    <p className="text-sm mt-2 text-primary-text/80">
                      By adopting real time delivery tracking software final
                      mile delivery management has become
                    </p>
                  </div>
                  {/* Card 3 */}
                  <div className="flex flex-col items-center text-center">
                    <img
                      src={'images/images/icons/bell.svg'}
                      alt="Tracking 3"
                      className="w-12 h-12 mb-4"
                    />
                    <h3 className="text-lg font-bold">Real Time Tracking</h3>
                    <p className="text-sm mt-2 text-primary-text/80">
                      By adopting real time delivery tracking software final
                      mile delivery management has become
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

<div className='bg-[#f7f9fd] '>
        <div className="max-w-3xl bg-white mx-auto py-10  px-4">
          <h2 className="text-center text-primary text-2xl font-bold mb-8">
            Frequently Asked Question
          </h2>
          <div className="bg-white shadow-md rounded">
            {data.map((item, index) => (
              <div
                key={index}
                className="border-b cursor-pointer px-6 py-4"
                onClick={() => toggle(index)}
              >
                <div className="flex items-start gap-2">
                  <img
                    src={
                      openIndex === index
                        ? 'images/images/icons/sub.svg'
                        : 'images/images/icons/add.svg'
                    }
                    alt="icon"
                    className="w-4 h-4"
                  />
                  <div>
                    <p className="font-semibold text-secondary-text">{item.question}</p>
                    {openIndex === index ? (
                      <p className="text-sm text-gray-600 ">{item.answer}</p>
                    ) : (
                      <p className="text-sm text-gray-600 ">{item.question}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="foot max-w-7xl mx-auto bg-white px-4 py-16">
          <div className="grid md:grid-cols-2 items-center gap-10">
            {/* Left side image */}
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
              alt="building"
              className="w-full h-[500px] rounded-lg"
            />

            {/* Right side text + cards */}
            <div>
              <h2 className="text-3xl text-secondary-text font-semibold mb-3">
                What Make Us Different
              </h2>
              <p className="text-gray-600 mb-8">
                Check out our best services you can possibly orders in building
                your company and don’t forget to ask via out email or our
                customer service if you are in interesting in using our services
              </p>

              <div className="foot shadow-md p-6 rounded-xl grid sm:grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-6xl mx-auto backdrop-blur-md z-10 bg-white">
                {/* Card 1 */}
                <div className="text-center px-4 py-6 hover:shadow-md rounded-lg transition">
                  <img
                    src="images/images/icons/Suitcase.svg"
                    alt="icon"
                    className="w-10 h-10 mx-auto mb-3"
                  />
                  <h4 className="font-semibold text-secondary-text">Experienced</h4>
                  <p className="text-sm text-gray-500 mt-1 mb-2">
                    odio velit commodi sunt culpa ipsa qui soluta consequuntur!
                  </p>
                  <a
                    href="#"
                    className="text-blue-500 text-sm font-medium hover:underline"
                  >
                    Learn more
                  </a>
                </div>

                {/* Card 2 */}
                <div className="text-center px-4 py-6 hover:shadow-md rounded-lg transition">
                  <img
                    src="images/images/icons/competitive-price.svg"
                    alt="icon"
                    className="w-10 h-10 mx-auto mb-3"
                  />
                  <h4 className="font-semibold text-secondary-text">Experienced</h4>
                  <p className="text-sm text-gray-500 mt-1 mb-2">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Perspiciatis,
                  </p>
                  <a
                    href="#"
                    className="text-blue-500 text-sm font-medium hover:underline"
                  >
                    Learn more
                  </a>
                </div>

                {/* Card 3 */}
                <div className="text-center px-4 py-6 hover:shadow-md rounded-lg transition">
                  <img
                    src="images/images/icons/on-time.svg"
                    alt="icon"
                    className="w-10 h-10 mx-auto mb-3"
                  />
                  <h4 className="font-semibold text-secondary-text">Experienced</h4>
                  <p className="text-sm text-gray-500 mt-1 mb-2">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Perspiciatis,
                  </p>
                  <a
                    href="#"
                    className="text-blue-500 text-sm font-medium hover:underline"
                  >
                    Learn more
                  </a>
                </div>

                {/* Card 4 */}
                <div className="text-center px-4 py-6 hover:shadow-md rounded-lg transition">
                  <img
                    src="images/images/icons/best-material.svg"
                    alt="icon"
                    className="w-10 h-10 mx-auto mb-3"
                  />
                  <h4 className="font-semibold text-secondary-text">Experienced</h4>
                  <p className="text-sm text-gray-500 mt-1 mb-2">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Perspiciatis,
                  </p>
                  <a
                    href="#"
                    className="text-blue-500 text-sm font-medium hover:underline"
                  >
                    Learn more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
</div>

<div className='bg-primary'>
        <section className="bg-primary text-white py-20">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Advance Fleet Tracking <br /> Solution Tracker
              </h2>
              <div className="mt-6 flex gap-6">
                <button className="hover:bg-white hover:text-indigo-600 px-6 py-3 rounded-md font-semibold">
                  Get Started
                </button>
                <button className="flex items-center gap-2">
                <span className="w-4 h-4 bg-indigo-600  text-white rounded-full flex items-center justify-center">
                    <i className="fa-solid fa-circle-play"></i>
                  </span>
                  Watch how it works
                </button>
              </div>
            </div>
          </div>
        </section>
        </div>
        {/* Footer */}
        <footer className="foot bg-white py-12 justify-center">
          <div className="max-w-9xl foot grid md:grid-cols-5 px-28 pr-12 text-gray-800">
            <div className="md:col-span-1 pr-8">
              <div className="flex items-center gap-2 text-xl font-bold">
                <div className=" text-white p-1 rounded-full">
                  <img src="images\images\logo\logo2.svg" alt="" />{' '}
                </div>
              </div>
              <p className="text-lg mt-2 text-gray-600">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Facilis, eius.
              </p>
            </div>

            <div className="justify-center text-start">
              <h4 className="font-semibold text-2xl mb-3">Product</h4>
              <ul className="space-y-2 text-lg text-gray-600">
                <li>Features</li>
                <li>API</li>
                <li>Solutions</li>
              </ul>
            </div>
            <div className="justify-center text-start">
              <h4 className="font-semibold text-2xl mb-3">Company</h4>
              <ul className="space-y-2 text-lg text-gray-600">
                <li>About Us</li>
                <li>Blog</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div className="justify-center text-start">
              <h4 className="font-semibold text-2xl mb-3">Support</h4>
              <ul className="space-y-2 text-lg text-gray-600">
                <li>Support Center</li>
                <li>System Status</li>
                <li>Languages</li>
              </ul>
            </div>
            <div className="justify-center text-start">
              <h4 className="font-semibold mb-3 text-2xl">Follow Us</h4>
              <div className="flex space-x-3 mt-2">
                <a
                  className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 hover:bg-indigo-200 "
                  href="https://www.facebook.com/networsystechnologies/"
                >
                  <img src="images\images\social-icons\Facebook.svg" alt="" />
                </a>
                <a
                  className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 hover:bg-indigo-200"
                  href="https://www.instagram.com/networsyst/"
                >
                  <img src="images\images\social-icons\Twitter.svg" alt="" />
                </a>
                <a
                  className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 hover:bg-indigo-200"
                  href=""
                >
                  <img src="images\images\social-icons\Instagram.svg" alt="#" />
                </a>
              </div>
            </div>
          </div>
        </footer>
  
      </div>
    </div>
  );
};

export default SinglePage;