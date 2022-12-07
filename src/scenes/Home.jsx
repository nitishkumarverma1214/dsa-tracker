import React from "react";
import { useNavigate } from "react-router-dom";

export const urlFormat = (topic) => {
  return topic.toLowerCase().split(" ").join("_");
};
function Home({ questionSet }) {
  const navigate = useNavigate();

  const handleTopicSelection = (topic) => {
    navigate(urlFormat(topic));
  };
  return (
    <div className="relative z-0 my-4 h-full font-montserrat md:my-8">
      <h2 className="text-center font-semibold text-xl text-golden-yellow md:text-3xl mx-4 pb-4">
        Ace your DSA skills with this sheet 🔥 🔥 🔥
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 mx-auto w-4/5  gap-4 md:gap-8 ">
        {questionSet &&
          questionSet.map(({ topic, questions }) => {
            return (
              <div
                key={topic}
                onClick={() => handleTopicSelection(topic)}
                className="border-solid border-2 rounded-lg bg-dark-blue md:shadow-md md:shadow-light-grey hover:shadow-golden-yellow hover:shadow-lg cursor-pointer border-white p-4 mt-2 flex flex-col items-center min-w-xs"
              >
                <section className="font-semibold text-center">{topic}</section>
                <section className="font-medium">
                  Total Questions: {questions.length}
                </section>
                <section>Status</section>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Home;
