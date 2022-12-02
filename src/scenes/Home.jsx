import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function Home() {
  const [topicQuestions, setTopicQuestions] = useState([]);

  useEffect(() => {
    async function fetchData() {
      await fetch("sheet.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then((response) => response.json())
        .then((json) => {
          const Questions = json.sheet;

          const groupByTopic = Questions.reduce((group, question) => {
            const { Topic } = question;
            group[Topic] = group[Topic] ?? [];
            group[Topic].push(question);
            return group;
          }, {});

          setTopicQuestions(groupByTopic);
        });
    }
    fetchData();
  }, []);

  return (
    <div className="relative z-0 my-4 h-full">
      <h2 className=" text-center font-semibold text-pink text-xl md:text-3xl mx-4 pb-4">
        Ace your DSA skills with this sheet
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 mx-auto w-4/5 justify-center items-center  gap-4">
        {topicQuestions &&
          Object.keys(topicQuestions).map((topic) => {
            return (
              <div
                key={topic}
                className="border-solid border-2 border-white p-4 mt-2 flex flex-col items-center min-w-xs"
              >
                <section className="font-semibold">{topic}</section>
                <section>
                  Total Questions: {topicQuestions[topic].length}
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
