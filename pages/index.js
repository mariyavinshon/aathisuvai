import Image from "next/image";
import { Inter, Open_Sans, Cormorant_Garamond } from "next/font/google";
import { useState, useRef, useEffect } from "react";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });
const open_Sans = Open_Sans({
  weight: ["400", "700"],
  subsets: ["latin"], // Specify the subsets you need
  preload: true, // Preload the font
  variable: "--font-Open_Sans",
});
const cormorant_Garamond = Cormorant_Garamond({
  weight: ["400", "700"],
  subsets: ["cyrillic"], // Specify the subsets you need
  preload: true, // Preload the font
  variable: "--font-cormorant_Garamond",
});

{
  /* <div className={`${cormorant_Garamond.variable } font-cormorant_Garamond font-bold`}> */
}

export default function Home() {
  const Data = [
    "image-1",
    "image-2",
    "image-3",
    "image-4",
    "image-5",
    "image-6",
    "image-7",
    "image-8",
    "image-9",
  ];

  return (
    <main
      className={`flex  flex-col items-center justify-between bg-[#0C0B08]  ${cormorant_Garamond.variable} font-cormorant_Garamond `}
    >
      <div
        className={` w-full h-[500px] lg:h-[70vh]   delay-1000   `}
        style={{
          animation: " 50s  infinite  image  ease-in-out  ",
          // backgroundImage: `url('/bg-image-${BgimageIndex}.png')`,
          backgroundSize: "cover",
          backgroundPosition: "bottom ",
          backgroundRepeat: "no-repeat",
          // transition: "image 3s infinite",
        }}
      >
        <div className="bg-black/60 w-full h-full flex items-center justify-center ">
          <div className="flex flex-col gap-5 items-center  justify-center   ">
            <h1
              className={`font-bold text-2xl md:text-4xl lg:text-6xl text-white text-center`}
              style={{ lineHeight: 1.25 }}
            >
              Bringing Authentic Sri Lankan And
              <br /> South Indian Flavors To Your Events
            </h1>
            <button className=" bg-white px-4 py-2  shadow-md  lg:text-xl rounded font-bold ">
              Book Now
            </button>
          </div>
        </div>
      </div>
      <div className=" relative flex items-center justify-center w-full  lg:h-[1100px] text-white">
        <div className=" lg:w-5/6  py-32 px-2">
          <div className=" flex flex-col items-center justify-center">
            <div>
              <span>Chase the New Flavour</span>
              <img src="/design-1.png" className=" mt-2" />
            </div>
          </div>
          <h2
            className={` text-center  font-bold text-2xl mt-5 lg:mt-0 lg:text-5xl text-white`}
            style={{ lineHeight: 1.25 }}
          >
            Welcome to Aathi Suvai Catering, your trusted catering partner
          </h2>
          <div className=" mt-10 text-center flex items-center justify-center ">
            <ul className={`lg:w-4/6   lg:text-xl px-2 lg:px-0 `}>
              <li>It all started on the Ist of April 2022 ...</li>
              <li>
                AathiSuvai is a family owned business made up of only a
                passionate uncle, a kind-hearted auntie, dedicated nephews and
                the heart of every family their children.
              </li>
              <li>
                A lot of us come from far away, leaving behind our loved ones
                and with the taste of our mother's food still lingering on our
                tongues. Here at AathiSuvai every dish is infused with a deep
                sense of tradition and authenticity.
              </li>
              <li className=" mt-5">
                AathiSuvai is an authentic and traditional Sri Lankan and South
                Indian home-cooked food Catering Service. At AathiSuvai we pass
                on the value of "Food is Medicine" to our future generation.
                With that being said our food is prepared with no colouring or
                preservatives while preserving its true taste and quality.
              </li>
              <li>
                Our community means a lot to us as a family. Meeting and feeding
                people from different races, religion and nationalities is what
                makes a great and vibrant community.
              </li>
              <li>We are grateful to be a part of the community in Croydon.</li>
              <li>At AathiSuvai we cater for all occasions.</li>
            </ul>
          </div>
        </div>
        <img
          src="/group-1.png"
          className=" absolute top-5 left-2 h-24 lg:h-fit"
        />
        <img
          src="/group-2.png"
          className=" absolute top-5 right-2 h-24 lg:h-fit"
        />

        <img
          src="/group-3.png"
          className=" absolute bottom-5 left-2 h-24 lg:h-fit"
        />

        <img
          src="/group-4.png"
          className=" absolute bottom-5 right-2 h-24 lg:h-fit"
        />
      </div>
      <div className=" lg:h-[500px] flex items-center justify-center w-full bg-[#111111] text-white">
        <div className=" w-5/6  flex flex-col items-center justify-center lg:py-0 py-10">
          <div>
            <h2
              className={` text-center  font-bold text-2xl mt-5 lg:mt-0 lg:text-5xl text-white`}
              style={{ lineHeight: 1.25 }}
            >
              About Us
            </h2>
            <img src="/design-1.png" className=" mt-2" />
          </div>
          <div className=" mt-10 text-center flex items-center justify-center ">
            <p className={` lg:w-4/6   lg:text-xl px-2 lg:px-0 `}>
              Aane. Our Tamil heritage is at the heart of everything we do,
              ensuring that every dish we serve is rich in tradition and flavor.
              We are proud to be officially registered and hold a food safety
              license, guaranteeing the highest standards for your events.thi
              Suvai Catering was founded on a passion for authentic South Indian
              and Sri Lankan cuisi
            </p>
          </div>
          {/* <button className=" bg-white px-4 py-2  shadow-md  lg:text-xl rounded font-bold text-black mt-10 ">
            Know More
          </button> */}
        </div>
      </div>
      {/* <div className=" lg:h-[500px] flex items-center justify-center w-full  text-white">
        <div className=" w-5/6  flex flex-col items-center justify-center py-10 ">
          <div>
            <div>
              <h2
                className={` text-center  font-bold text-2xl mt-5 lg:mt-0 lg:text-5xl text-white`}
                style={{ lineHeight: 1.25 }}
              >
                Our Dishes
              </h2>
              <img src="/design-1.png" className=" mt-2 " />
            </div>
          </div>
          <div className=" mt-14 text-center hidden lg:flex items-center justify-center  gap-10 ">
            {Data.map(
              (item, i) =>
                i < 6 && (
                  <div className="">
                    <img
                      key={i}
                      src={`/${item}.jpeg`}
                      className=" rounded-full h-32 w-32  object-cover border-2 border-[#DCCA87] "
                      style={{ backgroundPosition: "center" }}
                    />
                    <p className=" text-white mt-2">Dish</p>
                  </div>
                )
            )}
          </div>
          <div className=" mt-14 text-center lg:hidden flex items-center justify-center  gap-10 ">
            {Data.map(
              (item, i) =>
                i < 2 && (
                  <div className="">
                    <img
                      key={i}
                      src={`/${item}.jpeg`}
                      className=" rounded-full h-32 w-32  object-cover border-2 border-[#DCCA87] "
                      style={{ backgroundPosition: "center" }}
                    />
                    <p className=" text-white mt-2">Dish</p>
                  </div>
                )
            )}
          </div>
          
        </div>
      </div> */}
      <div className=" lg:h-[900px] flex flex-col items-center justify-center w-full  text-white">
        <div className=" lg:w-5/6  flex flex-col items-center justify-center py-10">
          <div>
            <div>
              <h2
                className={` text-center  font-bold text-2xl mt-5 lg:mt-0 lg:text-5xl text-white`}
                style={{ lineHeight: 1.25 }}
              >
                Our Gallery
              </h2>
              <img src="/design-1.png" className=" mt-2" />
            </div>
          </div>
          <div className=" mt-10 lg:mt-14 text-center flex items-center justify-center  gap-10 lg:w-4/6   lg:text-xl px-2 lg:px-0">
            <p className="">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
              mattis ipsum turpis elit elit scelerisque egestas mu.Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum
              turpis elit elit scelerisque egestas mu.
            </p>
          </div>
          <button className=" bg-white px-4 py-2  shadow-md  lg:text-xl rounded font-bold text-black mt-10 ">
            View More
          </button>
        </div>
        <div className=" flex mt-5 lg:mt-20 gap-10 w-full lg:w-5/6 ">
          <div
            x-data="{}"
            x-init="$nextTick(() => {
    let ul = $refs.logos;
    let clone = ul.cloneNode(true);
    ul.parentNode.appendChild(clone);
  })"
            class="w-full overflow-hidden relative"
          >
            <div class="flex animate-infinite-scroll ">
              <ul
                x-ref="logos"
                class="flex items-center [&_li]:mx-8 [&_img]:max-w-none"
              >
                {Data.map((item, i) => (
                  <li key={i}>
                    <img src={`/${item}.jpeg`} className="h-96" />
                  </li>
                ))}
              </ul>
              <ul
                class="flex items-center [&_li]:mx-8 [&_img]:max-w-none"
                aria-hidden="true"
              >
                {Data.map((item, i) => (
                  <li key={i}>
                    <img src={`/${item}.jpeg`} className="h-96" />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className=" lg:h-[500px] flex flex-col items-center justify-center w-full  text-white mt-10">
        <div className=" lg:w-5/6  flex flex-col items-center justify-center  lg:py-0 py-10">
          <div>
            <div className=" flex flex-col items-center justify-center">
              <div>
                <span className=" lg:text-lg">Testmonial</span>
                <img src="/design-1.png" className=" mt-2" />
              </div>
            </div>
            <div>
              <h2
                className={` text-center  font-bold text-2xl mt-5 lg:mt-0 lg:text-5xl text-white`}
                style={{ lineHeight: 1.25 }}
              >
                Happy Customers
              </h2>
              {/* <img src="/design-1.png" className=" mt-2" /> */}
            </div>
          </div>
          <div className="  text-center flex items-center justify-center  gap-10 w-5/6">
            <section className="isolate overflow-hidden  px-6 lg:px-8">
              <div className="relative mx-auto pt-20 sm:pt-20 ">
                <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 bg-[radial-gradient(50%_100%_at_top,theme(colors.black.100),white)] opacity-20 lg:left-36" />
                <figure className="grid grid-cols-1 items-center gap-x-6 gap-y-8 lg:gap-x-10">
                  <div className="relative col-span-2 lg:col-start-1 lg:row-start-2 flex items-center justify-center w-full">
                    <blockquote className=" relative  lg:w-4/6   lg:text-xl font-semibold leading-8 text-white  sm:leading-9">
                      <svg
                        viewBox="0 0 162 128"
                        fill="none"
                        aria-hidden="true"
                        className="absolute -top-12 left-0 -z-10 h-8 lg:h-10 stroke-[#DCCA87]"
                      >
                        <path
                          id="b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb"
                          d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z"
                        />
                        <use
                          href="#b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb"
                          x={86}
                        />
                      </svg>
                      <p>
                        Commodo amet fugiat excepteur sunt qui ea elit cupidatat
                        ullamco consectetur ipsum elit consequat. Elit sunt
                        proident ea nulla ad nulla dolore ad pariatur tempor
                        non. Sint veniam minim et ea.
                      </p>
                    </blockquote>
                  </div>
                  {/* <div className=" lg:block hidden  col-end-1 w-16 lg:row-span-4 lg:w-72">
                    <img
                      className="rounded-xl bg-red-500 lg:rounded-3xl"
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=576&h=576&q=80"
                      alt=""
                    />
                  </div> */}
                  <figcaption className="text-base lg:col-start-1 lg:row-start-3">
                    <div className="font-semibold text-white">Judith Black</div>
                    <div className="mt-1 text-white">CEO of Workcation</div>
                  </figcaption>
                </figure>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
