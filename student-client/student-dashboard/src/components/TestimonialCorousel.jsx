import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const TestimonialsCorousel = () => {
  return (
    <div className="bg-neutral-800">
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll down
        </span>
      </div>
      <HorizontalScrollCarousel />
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll up
        </span>
      </div>
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-2 text-3xl font-black uppercase text-white backdrop-blur-sm">
          {card.title}
        </p>
      </div>
    </div>
  );
};

export default TestimonialsCorousel;

const cards = [
  {
    url: "https://eklavyaindia.org/wp-content/uploads/2024/04/save_20220105_1247202dff-min.webp ",
    title: "Social Mobility",
    id: 1,
  },
  {
    url: "https://eklavyaindia.org/wp-content/uploads/2024/04/add-a-subheading-9-1-min.webp",
    title: "Diversity",
    id: 2,
  },
  {
    url: "https://eklavyaindia.org/wp-content/uploads/2024/04/img_20211024_112747-12dff-min.webp",
    title: "Awareness",
    id: 3,
  },
  {
    url: "https://eklavyaindia.org/wp-content/uploads/2024/04/img_20210618_1350042dff-min.webp",
    title: "Mentoring",
    id: 4,
  },
  {
    url: "https://eklavyaindia.org/wp-content/uploads/2024/04/classroom-pic-12dff-min.webp",
    title: "Coaching",
    id: 5,
  },
  {
    url: "https://eklavyaindia.org/wp-content/uploads/2024/03/eklavyafounders-1_LE_auto_x2_toned-768x768.jpg",
    title: "Acknowledgment",
    id: 6,
  },
  {
    url: "https://eklavyaindia.org/wp-content/uploads/2024/03/Untitled-design-8.png",
    title: "Graduate Programs",
    id: 7,
  },
];