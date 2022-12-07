import React from "react";

function Topic({ data }) {
  return (
    <div className="md:w-[768px] mx-auto mt-4 md:mt-8">
      <div className="capitalize grid grid-cols-[1fr_3fr_1fr] h-8 gap-2 font-roboto font-semibold m-4 border-b-light-blue border-b-2 pb-4 text-center">
        {/* Heading */}
        <div className="">ID</div>
        <div className="">Question</div>
        <div className="">Done</div>
      </div>
      <div>
        {/* Row data  */}
        {data?.questions &&
          data?.questions?.length > 0 &&
          data.questions.map((question) => (
            <div
              key={question.id}
              className="grid grid-cols-[1fr_3fr_1fr] h-14 gap-4 font-roboto text-center m-4 border-b-light-blue border-b-2"
            >
              <div>{question.id}</div>
              <div>
                <a href={question.URL} target="_blank">
                  {" "}
                  {question.Problem}
                </a>
              </div>
              <div>
                <input type="checkbox" name="" id="" value={question.Done} />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Topic;
