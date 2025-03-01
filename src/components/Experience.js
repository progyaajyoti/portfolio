import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";
import Link from "next/link";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}{" "}
          <a
            className="capitalize text-slideGreen dark:text-primaryDark"
            href={companyLink}
            target={"_blank"}
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm"> {work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>

      <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
        <motion.div
          className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-primaryDark shadow-3xl 
            origin-top  dark:bg-primaryDark dark:shadow-3xl"
          style={{ scaleY: scrollYProgress }}
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Strategy and Product Developer"
            company="2050HealthCare"
            time="Oct,2024 - Current"
            address="Bangalore"
            companyLink="https://www.2050healthcare.com/"
            work="At 2050HealthCare, I have the opportunity to drive digital transformation changes in our healthcare application through innovative feature planning, extensive market research, and continuous customer feedback. I work closely with cross-functional teams to identify market gaps and devise forward-thinking functionalities that not only address current industry challenges but also lay the groundwork for future growth. By leveraging cutting-edge AI technologies, I streamline user interactions and simplify complex processes, ensuring that our digital solutions remain intuitive, responsive, and effective. This role empowers me to contribute to a comprehensive product rollout strategy—from detailed planning and resource allocation to timeline management—while also developing robust business models that forecast financial viability and guide strategic investments. Ultimately, my work helps position our digital healthcare offerings at the forefront of technological advancements, driving improved patient experiences and sustainable growth."
          />

          <Details
            position="Data Scientist- Intern"
            company="Balaji Green Technologies"
            time="Jun,2024 - Sep,2024"
            address="Bangalore"
            companyLink=""
            work="At Balaji Green Technologies, I have the opportunity to spearhead innovative projects focused on sentiment analysis and other advanced NLP initiatives. I work collaboratively with cross-functional teams to develop sophisticated algorithms that extract meaningful insights from large volumes of textual data. By leveraging state-of-the-art language models and machine learning techniques, I create solutions that accurately gauge customer sentiment and uncover hidden trends. This role not only empowers me to refine our digital strategy through data-driven insights but also ensures that our NLP applications remain at the cutting edge of technological advancements, driving improved customer engagement and strategic decision-making."
          />

            <Details
            position="Data Scientist- Intern"
            company="POPULARDIGITAL.AI"
            time="Feb,2024 - May,2020"
            address="Bangalore"
            companyLink="https://www.populardigital.ai/"
            work="At populardigital.ai, I had the opportunity to design and implement a comprehensive framework for no-code machine learning model building. This project was aimed at democratizing data science by enabling users to transform their raw data into actionable insights without writing a single line of code. I leveraged Streamlit to develop an interactive platform where users can effortlessly upload CSV, XLS, or XLSX files, guiding them through every stage of data processing. The framework offers extensive data visualization tools, robust data cleaning processes, and a suite of machine learning algorithms—covering all classification and regression techniques from SKlearn. Users can explore their datasets through detailed graphs, cleanse and preprocess data with ease, and ultimately build predictive models that cater to their specific needs. This initiative not only simplifies complex data science tasks but also empowers users by providing them with a user-friendly interface that bridges the gap between advanced analytics and everyday usability, ultimately driving innovation and accessibility in the field of machine learning."
          />
        </ul>
      </div>
      <div className="mt-40 flex items-center justify-between gap-3 grid-cols-2">
        <Link
          href="/projects/"
          target={"_self"}
          className={`flex items-center rounded-lg border-2 border-solid bg-light p-2.5 px-6 text-lg font-semibold
            capitalize text-dark hover:border-light hover:bg-dark hover:text-light 
            dark:bg-dark dark:text-light dark:hover:bg-light dark:hover:text-dark
            md:p-2 md:px-4 md:text-base
             `}
        >
          View Projects
        </Link>
        <Link
          href="/articles/"
          target={"_self"}
          className={`flex items-center rounded-lg border-2 border-solid bg-dark p-2.5 px-6 text-lg font-semibold
            capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
            dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
            md:p-2 md:px-4 md:text-base
             `}
        >
          View Articles
        </Link>
      </div>
    </div>
  );
};

export default Experience;
