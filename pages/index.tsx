import Layout from '../components/Layout'
import Image from 'next/image'

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">

    <Hero />
    <Services />
    <Featured />
    <Finisher />
    <Contact />

  </Layout>
)

export default IndexPage

/// Page Sections
const Hero = () => (<div className="relative pt-16 pb-32 flex content-center items-center justify-center"
  style={{
    minHeight: "75vh"
  }}>
  <div className="absolute top-0 w-full h-full bg-center bg-cover"
    style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1543489816-c87b0f5f7dd4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80')"
    }}>
    <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black"></span>
  </div>
  <div className="container relative mx-auto">
    <div className="items-center flex flex-wrap">
      <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
        <div className="pr-12 flex w-5/6 h-24 text-center">
          <Image src="/favicons/logo.png" layout='fill' objectFit='contain' alt="Main logo" />
        </div>
      </div>
    </div>
  </div>
</div>)

const Services = () => <section className="pb-20 bg-white -mt-24">
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap">

      <div className="w-full md:w-4/12 px-4 text-center">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
          <div className="px-4 py-5 flex-auto">
            <div className="text-black p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white ">
              <i className="fa-solid fa-recycle"></i>
            </div>
            <h6 className="text-xl font-semibold">
              Sustainability
            </h6>
            <p className="mt-2 mb-4 text-gray-600">
              Remine Indias focus on sustainability is evident in their commitment to recycling electronic waste and lithium batteries, which helps reduce the amount of hazardous waste in the environment. By utilizing cutting-edge technology, we are able to extract valuable materials while minimizing harm to the planet. This dedication to sustainability is central to our mission and values.
            </p>
          </div>
        </div>
      </div>

      <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
          <div className="px-4 py-5 flex-auto">
            <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-black">
              <i className="fa-regular fa-star"></i>
            </div>
            <h6 className="text-xl font-semibold">Recognised Startup</h6>
            <p className="mt-2 mb-4 text-gray-600">
              Remine India is an innovative startup dedicated to recycling electronic waste and lithium batteries. With a focus on sustainability and environmental responsibility, we use cutting-edge technology to extract valuable materials and dispose of hazardous waste safely.
            </p>
          </div>
        </div>
      </div>


      <div className="pt-6 w-full md:w-4/12 px-4 text-center">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
          <div className="px-4 py-5 flex-auto">
            <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-black">
              <i className="fa-solid fa-check"></i>
            </div>
            <h6 className="text-xl font-semibold">
              Specialisation
            </h6>
            <p className="mt-2 mb-4 text-gray-600">
              Remine India specializes in the recycling of electronic waste and lithium batteries. With a focus on sustainability and environmental responsibility, we use advanced technology to extract valuable materials and dispose of hazardous waste safely. Our specialization enables us to demonstrate a high level of expertise and knowledge in our field.
            </p>
          </div>
        </div>
      </div>
    </div>


    <div className="flex flex-wrap md:flex-nowrap items-center mt-32">
      <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
        <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
          <i className="fas fa-user-friends text-xl"></i>
        </div>
        <h3 className="text-3xl mb-2 font-semibold leading-normal">
          Our Portfolio
        </h3>
        <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
          As a lithium battery company, we are dedicated to providing innovative, high-performance batteries that are both safe and reliable. Our portfolio includes a wide range of products for various applications, from consumer electronics to electric vehicles and energy storage systems.
        </p>
        <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
          We prioritize sustainability and environmental responsibility, and our batteries are designed for long-term use and recyclability. Our commitment to excellence and customer satisfaction is reflected in our partnerships with leading companies in diverse industries.
        </p>
      </div>

      <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
        <div className="relative flex flex-col min-w-0 break-words  w-full mb-6 shadow-lg rounded-lg bg-white">
          <img
            alt="..."
            src="https://images.unsplash.com/photo-1604173227674-e72979f3f48b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            className="w-full align-middle rounded-t-lg"
          />

          <blockquote className="relative p-8 mb-4">
            <svg
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 583 95"
              className="absolute left-0 w-full block"
              style={{
                height: "95px",
                top: "-94px"
              }}
            >
              <polygon
                points="-30,95 583,95 583,65"
                className="text-white fill-current"
              ></polygon>
            </svg>
            <h4 className="text-xl font-bold text-black">
              High Efficieny Lithium Batteries
            </h4>
            <p className="text-md font-light mt-2 text-black">
              We provide innovative, high-efficiency lithium batteries for various applications, designed to optimize energy output while minimizing waste and environmental impact.
            </p>
          </blockquote>
        </div>
      </div>



      <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
        <div className="relative flex flex-col min-w-0 break-words  w-full mb-6 shadow-lg rounded-lg bg-white">
          <img
            alt="..."
            src="https://images.unsplash.com/photo-1615829386703-e2bb66a7cb7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787&q=80"
            className="w-full align-middle rounded-t-lg"
          />
          <blockquote className="relative p-8 mb-4">
            <svg
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 583 95"
              className="absolute left-0 w-full block"
              style={{
                height: "95px",
                top: "-94px"
              }}
            >
              <polygon
                points="-30,95 583,95 583,65"
                className="text-white fill-current"
              ></polygon>
            </svg>
            <h4 className="text-xl font-bold text-black">
              Electric Vehicle Batteries
            </h4>
            <p className="text-md font-light mt-2 text-black">
              Our company offers a range of high-performance electric vehicle batteries designed for efficiency, reliability, and environmental responsibility.
            </p>
          </blockquote>
        </div>
      </div>




    </div>
  </div>
</section>

const Featured = () => <section className="relative py-20">
  <div
    className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
    style={{ height: "80px" }}
  >
    <svg
      className="absolute bottom-0 overflow-hidden"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      version="1.1"
      viewBox="0 0 2560 100"
      x="0"
      y="0"
    >
      <polygon
        className="text-white fill-current"
        points="2560 0 2560 100 0 100"
      ></polygon>
    </svg>
  </div>

  <div className="container mx-auto px-4">
    <div className="items-center">
      <div className="w-full md:w-4/6 ml-auto mr-auto px-4">
        <div className="md:pr-12">
          {/* <div className="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300">
            <i className="fas fa-rocket text-xl"></i>
          </div> */}
          <h3 className="text-3xl font-semibold">
            Investors and Partners
          </h3>
          <p className="mt-4 text-lg leading-relaxed text-gray-600">
            Our company is backed by a diverse group of investors who share our commitment to sustainability and innovation, including leading venture capitalists and industry experts.
          </p>
          <ul className="list-none mt-6 flex justify-around">
            <li className="py-2">
              <div className="flex items-center">
                <div>
                  <span className="text-2xl font-semibold inline-block py-1 px-2 uppercase rounded-full text-white bg-black mr-3">
                    <i className="fa-solid fa-charging-station"></i>
                  </span>
                </div>
                <div>
                  <h4 className="text-gray-600">
                    Tesla Inc.
                  </h4>
                </div>
              </div>
            </li>
            <li className="py-2">
              <div className="flex items-center">
                <div>
                  <span className="text-2xl font-semibold inline-block py-1 px-2 uppercase rounded-full text-white bg-black mr-3">
                    <i className="fa-solid fa-car-battery"></i>
                  </span>
                </div>
                <div>
                  <h4 className="text-gray-600">Duracell Inc.</h4>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>



const Finisher = () => <section className="pb-20 relative block bg-black">
  <div className="container mx-auto px-4 lg:pt-24 lg:pb-64 ">
    <div className="flex flex-wrap text-center justify-center">
      <div className="w-full lg:w-6/12 px-4">
        <h2 className="text-4xl font-semibold text-white my-5">
          Business Queries
        </h2>
        <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
          For business queries and contacts, please reach out to our dedicated team at Remine. Were always open to partnerships, collaborations, and any other inquiries related to our company. Let us know how we can work together to create meaningful solutions for our customers.
        </p>
      </div>
    </div>

    <h1 className='text-4xl text-center text-white font-semibold'>OUR PROMISE</h1>

    <div className="flex flex-wrap mt-12 justify-center">
      <div className="w-full lg:w-3/12 px-4 text-center">
        <div className="text-black p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
          <i className="fa-solid fa-handshake"></i>
        </div>
        <h6 className="text-xl mt-5 font-semibold text-white">
          Top Notch Service
        </h6>
        <p className="mt-2 mb-4 text-gray-500">
          Our company provides top-notch service, delivering exceptional quality and satisfaction to all our customers.
        </p>
      </div>
      <div className="w-full lg:w-3/12 px-4 text-center">
        <div className="text-black p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
          <i className="fa-solid fa-people-group"></i>
        </div>
        <h5 className="text-xl mt-5 font-semibold text-white">
          Trusted By Thousands
        </h5>
        <p className="mt-2 mb-4 text-gray-500">
          Our company is trusted by thousands of satisfied customers who rely on our products and services for their daily needs.
        </p>
      </div>
      <div className="w-full lg:w-3/12 px-4 text-center">
        <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
          <i className="fa-solid fa-indian-rupee-sign"></i>
        </div>
        <h5 className="text-xl mt-5 font-semibold text-white">
          Best Price
        </h5>
        <p className="mt-2 mb-4 text-gray-500">
          We guarantee the best price for our products/services, ensuring you receive maximum value for your investment.
        </p>
      </div>
    </div>
  </div>
</section>

const Contact = () => <section className="relative block py-24 lg:pt-0 bg-black">
  <div className="container mx-auto px-4 my-10">
    <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
      <div className="w-full lg:w-6/12 px-4">
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white">
          <div className="flex-auto p-5 lg:p-10">
            <h4 className="text-2xl font-semibold">
              Contact Us!
            </h4>
            <p className="leading-relaxed mt-1 mb-4 text-gray-600">
              Complete this form and we will get back to you within 24 hours.
            </p>
            <div className="relative w-full mb-3 mt-8">
              <label
                className="block uppercase text-gray-700 text-xs font-bold mb-2"
                htmlFor="full-name"
              >
                Full Name
              </label>
              <input
                type="text"
                className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-gray-200 rounded text-sm shadow focus:outline-none focus:ring w-full"
                placeholder="Full Name"
                style={{ transition: "all .15s ease" }}
              />
            </div>

            <div className="relative w-full mb-3">
              <label
                className="block uppercase text-gray-700 text-xs font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-gray-200 rounded text-sm shadow focus:outline-none focus:ring w-full"
                placeholder="Email"
                style={{ transition: "all .15s ease" }}
              />
            </div>

            <div className="relative w-full mb-3">
              <label
                className="block uppercase text-gray-700 text-xs font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                rows={4}
                cols={80}
                className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-gray-200 rounded text-sm shadow focus:outline-none focus:ring w-full"
                placeholder="Type a message..."
              />
            </div>
            <div className="text-center mt-6">
              <button
                className="bg-black text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                type="button"
                style={{ transition: "all .15s ease" }}
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


