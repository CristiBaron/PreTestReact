import React, { useState } from "react";

const studentsData = [
  { id: 1, fullname: "Mario Rossi", avg: 6, gender: "m" },
  { id: 2, fullname: "Luigi Verdi", avg: 4, gender: "m" },
  { id: 3, fullname: "Peach Pink", avg: 8, gender: "f" },
  { id: 4, fullname: "Wario Rossi", avg: 9, gender: "m" },
  { id: 5, fullname: "Daisy Princess", avg: 10, gender: "f" },
];

function App() {
  const [searchName, setSearchName] = useState("");
  const [filteredStudents, setFilteredStudents] = useState([]);

  const handleSearchChange = (event) => {
    setSearchName(event.target.value);
  };

  const handleSearch = () => {
    const filtered = studentsData.filter((student) =>
      student.fullname.toLowerCase().includes(searchName.toLowerCase())
    );
    setFilteredStudents(filtered);
  };

  return (
    <div className="h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-100 via-cyan-400 to-zinc-100 flex flex-col justify-center items-center gap-4">
      <div className="flex flex-col gap-5">
        <img src="/public/img/sun-glasses.png" className="w-64" alt="" />
        <div className="flex gap-2">
          <img src="/public/img/exam.png" className="w-10" alt="" />
          <h1 className="text-center text-4xl">Student List</h1>
        </div>
        <div className=" flex gap-4 justify-center ">
          <input
            type="text"
            value={searchName}
            onChange={handleSearchChange}
            placeholder="Cerca per nome"
            className="rounded-md text-center border-2 hover:bg-slate-100 hover:border-sky-400 hover:border-2 "
          />
          <button
            onClick={handleSearch}
            className="transition duration-150 ease-out hover:ease-in"
          >
            <img
              src="/public/img/search-2.png"
              className="w-10 hover:animate-pulse"
              alt=""
            />
          </button>
        </div>
        <div className="students-list text-center">
          {filteredStudents.length > 0 ? (
            filteredStudents.map((student) => (
              <div
                key={student.id}
                className={`student ${
                  student.gender === "m"
                    ? "bg-gradient-to-l from-cyan-400 via-cyan-300 to-cyan-100"
                    : "bg-gradient-to-l from-pink-500 via-pink-300 to-pink-100"
                } rounded-md p-4 flex flex-col items-center gap-2 border-2 ${
                  student.gender === "m"
                    ? "hover:border-cyan-300"
                    : "hover:border-pink-300"
                }`}
              >
                <p>
                  <strong>Nome:</strong> {student.fullname}
                </p>
                <p>
                  <strong>Media Voti:</strong> {student.avg}
                </p>
              </div>
            ))
          ) : (
            <div className="flex flex-col justify-center items-center">
              <p>No student with this name</p>
              <img
                src="/public/img/search-not-found.png"
                alt=""
                className="w-40"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
