import React from "react";

function About() {
  return (
    <div className="md:max-w-lg md:mx-auto font-montserrat">
      <h2 className="text-center  font-semibold my-8 text-2xl">
        Introducing Grind 75
      </h2>

      <p className="flex flex-wrap mx-4">
        Grind 75 is Blind 75 reimagined for the future. The author looked at all
        the top LeetCode questions (by popularity, frequency, topics covered,
        like rating) and picked the top 169 questions which he felt were of
        value. Within those questions, He ranked them again and assigned a
        priority to them according to the value it provides to the user. With a
        priority for each question, He selected the top 75 to be the new Blind
        75, which he call Grind 75. However, it doesn't end at 75 questions! As
        mentioned, I've selected 169 questions and you can go past the top 75
        questions if you like and have the time. You probably don't need to do
        beyond the 169 questions.
      </p>
    </div>
  );
}

export default About;
