import React from "react";

const sectionData = [
  {
    title: "Rajasthan",
    image:
      "https://www.cleartrip.com/collections/wp-content/uploads/2019/05/Rajasthan-Safari.jpg",
    content: `In 1978, Brian Smith landed in Southern California with a bag of sheepskin boots and hope. He fell in love with the sheepskin experience and was convinced the world would one day share this love. The beaches of Southern California had long been an epicenter of a relaxed, casual lifestyle, a lifestyle that Brian felt was a perfect fit for his brand. So he founded the UGG brand, began selling his sheepskin boots and they were an immediate sensation. By the mid 1980's, the UGG brand became a symbol of relaxed southern California culture, gaining momentum through surf shops and other shops up and down the coast of California, from San Diego to Santa Cruz. UGG boots reached beyond the beach, popping up in big cities and small towns all over, and in every level of society. Girls wore their surfer boyfriend's pair of UGG boots like a letterman jacket. When winter came along, UGG boots were in ski shops and were seen in lodges from Mammoth to Aspen.`,
    color: "#3b8595",
  },
  {
    title: "Kolkata",
    image:
      "https://inspiretravellifestyle.com/wp-content/uploads/2020/09/victoria-landscape-landscapes-5286267.jpg",
    content: `Breaking into the New York fashion world is no easy task. But by the early 2000's, UGG Australia began to take it by storm. The evolution of UGG from a brand that made sheepskin boots, slippers, clogs and sandals for an active, outdoor lifestyle to a brand that was now being touted as a symbol of a stylish, casual and luxurious lifestyle was swift. Much of this was due to a brand repositioning effort that transformed UGG into a high-end luxury footwear maker. As a fashion brand, UGG advertisements now graced the pages of Vogue Magazine as well as other fashion books. In the mid 2000's, the desire for premium casual fashion was popping up all over the world and UGG was now perfectly aligned with this movement.`,
    color: "#3d3c3a",
  },
  {
    title: "Ladakh",
    image:
      "https://c8.alamy.com/comp/DWDXHR/beautiful-scenery-leh-ladakh-jammu-and-kashmir-india-DWDXHR.jpg",
    content: `When the New York fashion community notices your brand, the world soon follows. The widespread love for UGG extended to Europe in the mid-2000's along with the stylish casual movement and demand for premium casual fashion. UGG boots and shoes were now seen walking the streets of London, Paris and Amsterdam with regularity. To meet the rising demand from new fans, UGG opened flagship stores in the UK and an additional location in Moscow. As the love spread farther East, concept stores were opened in Beijing, Shanghai and Tokyo. UGG Australia is now an international brand that is loved by all. This love is a result of a magical combination of the amazing functional benefits of sheepskin and the heightened emotional feeling you get when you slip them on your feet. In short, you just feel better all over when you wear UGG boots, slippers, and shoes.`,
    color: "#c48660",
  },
];

export default function MainContent() {
  return (
    <>
      <div id="parallax-world-of-ugg" className="pt-20 bg-white min-h-screen">
        <section className="text-center">
          <div className="bg-white p-16 max-md:px-10">
            <h3 className="text-base font-Oswald tracking-[10px] text-center font-thin uppercase opacity-90">
              Places I've Been to
            </h3>
            <br />
            <h1 className="text-3xl font-Oswald uppercase ">Scroll DOWN</h1>
          </div>
        </section>
        {sectionData.map((section, index) => (
          <React.Fragment key={index}>
            <section
              className={`relative w-full py-56 overflow-hidden bg-cover bg-fixed bg-no-repeat bg-top flex items-center justify-center`}
              style={{
                backgroundImage: `url("${section.image}")`,
              }}
            >
              <h2
                className={`text-6xl text-white uppercase font-Oswald text-${section.color}`}
              >
                {section.title}
              </h2>
            </section>

            <section className="p-20 max-w-[800px] mx-auto my-0 bg-white text-lg max-md:text-base text-justify max-md:p-8 font-montserrat">
              <p>
                <span
                  className={`text-6xl max-md:text-5xl leading-[64px] pl-10 pr-4 font-Oswald float-left font-bold text-[${section.color}]`}
                >
                  {section.content.charAt(0)}
                </span>
                {section.content.substring(1)}
              </p>
            </section>
          </React.Fragment>
        ))}
      </div>
    </>
  );
}
