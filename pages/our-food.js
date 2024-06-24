import Footer from "@/components/footer";
import React from "react";

export default function OurFood() {
  const our_foods = [
    { title: "our food", image: "image-1.jpeg" },
    { title: "our food", image: "image-2.jpeg" },
    { title: "our food", image: "image-3.jpeg" },
    { title: "our food", image: "image-4.jpeg" },
    { title: "our food", image: "image-5.jpeg" },
    { title: "our food", image: "image-6.jpeg" },
  ];

  const menu_list = [
    {
      title: "AATHI SUVAI CLASSIC MUHURTHAM",
      des: "",
      starters: ["VEG ROLL", "VEG PATTIE", "MAEDU VADAI WITH COCO CHUTNEY"],
      main: [
        "BASMATHI RICE",
        "PAPPU (DHAL CURRY)",
        "AUBERGINE OILY CURRY",
        "SPINACH CURRY",
        "LONG BEANS CURRY",
        "BEETROOT CURRY",
        "CASAVA CHIPS",
        "MANGO PICKLE",
        "SAEMIYA PAYASAM",
        "CARROT SAMBAL",
        "RASAM",
        "PAPAD",
        "DRY CHILLI",
      ],
    },
    {
      title: "SOUTH INDIAN MUHURTHAM",
      des: "",
      starters: [],
      main: [
        "BASMATHI RICE",
        "SAFFRON RICE",
        "MURUGAKAI SAMBAR",
        "VATHA KULAMBU",
        "MORE KULAMBU",
        "CHILI PANEER CURRY",
        "MIX VEG AVIYAL",
        "AUBERGINE PIRATAL",
        "PARUPPU PODI WITH GHEE",
        "CASAVA CHIPS",
        "POTATO CHIPS",
        "PAPADAM",
        "PICKLI",
        "DRY CHILI",
        "ILLANEER PAYASAM",
        "JILAEBI",
        "RASAM",
        "CURD RICE TOPPED WITH POMEGRANATE",
      ],
    },
    {
      title: "AATHI SUVAI CLASSIC PADAYAL NON-VEG",
      des: "",
      starters: ["CHICKEN 65", "NETHIL FRY", "MUTTON ROLL"],
      main: [
        "BASMATHI RICE",
        "FISH CURRY",
        "BONE SOOTHI",
        "ERAL PALL CURRY",
        "PEPPER CHICKEN CURRY",
        "MIXED SEA FOOD FRY",
        "KULFI",
        "ONION RAITHA",
        "PINEAPPLE KAESARI",
      ],
    },
    {
      title: "AATHI SUVAI RAJA MUHURTHAM VEG",
      des: "",
      starters: ["PANEER LOLLIPOP", "MASAL VADAI", "MASALA CHIPS"],
      main: [
        "BASMATHI RICE",
        "PILAU RICE",
        "PANEER BUTTER MASALA",
        "AUBERGINE CASHEW CURRY",
        "VATHA KULAMBU",
        "SOYA CURRY",
        "KADAMBA SAMBAR (MIX VEG)",
        "PUMPKIN CASAVA CURRY",
        "PAPADAM",
        "DRY CHILLI",
        "TROPICAL PAYASAM",
        "PICKLE",
        "POTATO FRY",
        "OKRA FRY",
        "CHICKPEAS AND CORIANDER SALAD",
        "RAVA KAESARI",
      ],
    },
    {
      title: "AATHI SUVAI RAJA PADAYAL NON-VEG",
      des: "",
      starters: [
        "FISH EGG PATTIE",
        "CHICKEN LOLLIPOP",
        "SEAFOOD DEVIL",
        "MUTTON KOLA URUNDAI",
      ],
      main: [
        "BASMATHI RICE",
        "JEERA RICE",
        "PRAWN PEPPER ROAST",
        "BABY LAMB CURRY",
        "BONE RASAM",
        "PRAWN CABBAGE VARAI",
        "CRAB CHETTINADU",
        "CHETTINAD CHICKEN CURRY",
        "PRAWN 65",
        "KING FISH FRY",
        "POMEGRANATE AND ONION SALAD",
        "FRUIT SALAD WITH VANILLA ICE CREAM",
      ],
    },
  ];

  return (
    <div className=" text-white h-full w-full bg-[#0C0B08] ">
      <div
        className=" h-[60vh] flex items-center justify-center "
        style={{
          backgroundImage: `url('/bg-our-food-1.png')`,
          backgroundSize: "cover",
          backgroundPosition: "top ",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div>
          <h1
            className={`font-bold text-2xl md:text-4xl lg:text-6xl text-white text-center`}
            style={{ lineHeight: 1.25 }}
          >
            Our Foods
          </h1>
        </div>
      </div>
      <div className=" lg:h-[1100px] flex items-center justify-center w-full  text-white mt-10">
        <div className=" w-5/6  flex flex-col items-center justify-center lg:py-0 py-10">
          <div>
            <h2
              className={` text-center  font-bold text-2xl mt-5 lg:mt-0 lg:text-5xl text-white`}
              style={{ lineHeight: 1.25 }}
            >
              Our Menu
            </h2>
            <img src="/design-1.png" className=" mt-2" />
          </div>
          <div className=" mt-10 text-center grid grid-cols-3 gap-10 ">
            {our_foods.map((item, i) => (
              <div key={i} className=" w-full border hover:border-[#DCCA87] ">
                <img
                  src={`/${item.image}`}
                  className=" h-96 object-cover w-full  opacity-50 hover:opacity-100 "
                />
                <p className=" text-lg py-4">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="  flex items-center justify-center w-full  text-white  mt-20">
        <div className=" w-5/6  flex flex-col items-center justify-center lg:py-0 py-10">
          <div>
            <h2
              className={` text-center  font-bold text-2xl mt-5 lg:mt-0 lg:text-5xl text-white`}
              style={{ lineHeight: 1.25 }}
            >
              Our Packages
            </h2>
            <img src="/design-1.png" className=" mt-2" />
          </div>
          <div className="  w-full  flex flex-col items-center justify-center pb-10">
            {menu_list.map((item, i) => (
              <div className=" w-5/6 flex flex-col items-center justify-center mt-10">
                <h2
                  className={` text-center  font-bold text-2xl mt-5 lg:mt-0 lg:text-5xl text-white`}
                  style={{ lineHeight: 1.25 }}
                >
                  {item.title}
                </h2>
                <p className=" w-4/6 text-center text-xl mt-5">
                  Typical spaghetti is made from water, milled wheat, and flour,
                  but authentic spaghetti is made with durum wheat semolina.
                  Spaghetti is Italy's classic pasta that is known for its long,
                  thin, cylindrical shape.
                </p>
                <div
                  className=" w-[80%] h-[700px] mt-10 flex flex-col justify-center  pl-20 "
                  style={{
                    backgroundImage: `url('/invite-border.png')`,
                    backgroundSize: "contain",
                    backgroundPosition: "top ",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <h3 className=" text-3xl  ">Starters</h3>

                  <div className="  gap-5  grid grid-row-3   mt-2">
                    {item?.starters?.map((item, i) => (
                      <p className=""> -{item}</p>
                    ))}
                  </div>
                  <h3 className=" text-3xl mt-5  text-left ">Main</h3>
                  <div className="  gap-5  grid grid-cols-3   mt-2">
                    {item?.main?.map((item, i) => (
                      <p className=" "> -{item}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
