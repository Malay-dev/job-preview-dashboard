import React from "react";

const JobAbout = () => {
  return (
    <div className="container py-10 text-[#3D3D3D] font-medium font-sans text-sm border-b">
      <h1 className="text-[#6E6D6D]">About the job</h1>
      <ol className="list-inside list-decimal">
        <li>Handle the UI/UX research design</li>
        <li>Work on researching on latest web applications designs & trends</li>
        <li>Work on conceptualizing and visualizing</li>
        <li>
          Work on creating graphics content and other graphic related works
        </li>
      </ol>
      <h1 className="mt-1">Benifits:</h1>
      <ul className="list-inside list-disc">
        <li>Health Insurance</li>
        <li>Provident Fund</li>
      </ul>
      <h1 className="mt-1">Schedule:</h1>
      <ul className="list-inside list-disc">
        <li>Day Shift</li>
      </ul>
      <h1 className="mt-1">Suplemental pay types</h1>
      <ul className="list-inside list-disc">
        <li>Performance bonus</li>
        <li>Yearly bonus</li>
      </ul>
      <h1 className="mt-1">Work Location: In person</h1>
    </div>
  );
};

export default JobAbout;
