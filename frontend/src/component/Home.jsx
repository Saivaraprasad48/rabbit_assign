import { useState } from "react";
import { IoMdCreate } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";

const Home = () => {
  const [edit, setEdit] = useState(false);
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState(["Learn HTML"]);
  const [update, setUpdate] = useState("");
  const [updatePopup, setUpdatePopup] = useState(false);
  const [index, setIndex] = useState(null);
  const navigate = useNavigate();

  const getCreateTask = () => {
    if (task === "") {
      alert("Please enter a task");
    } else {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const getDelete = (e) => {
    const restTasks = tasks.filter((k) => e !== k);
    setTasks(restTasks);
  };

  const getUpdate = (e) => {
    setUpdate(e);
    setUpdatePopup(true);
    tasks?.map((k, i) => {
      if (k === e) {
        setIndex(i);
      }
    });
  };

  const updateTask = () => {
    tasks[index] = update;
    renderTasks();
    setUpdatePopup(false);
  };

  const renderTasks = () => {
    return (
      <div className="mt-3 h-[200px] px-5">
        {tasks.map((e) => (
          <div key={e} className="flex flex-row justify-center items-center">
            <p key={e}> {e}</p>
            <FaEdit
              size={20}
              color="#bfbfbf"
              className="ml-2 cursor-pointer"
              onClick={() => getUpdate(e)}
            />
            <MdDeleteForever
              size={20}
              color="#bfbfbf"
              className="ml-2 cursor-pointer"
              onClick={() => getDelete(e)}
            />
          </div>
        ))}
        {updatePopup && (
          <div>
            <input
              type="text"
              value={update}
              onChange={(e) => setUpdate(e.target.value)}
              className="p-2 border border-blue-200 rounded border-solid"
            />
            <button
              className="bg-blue-500 text-[#fff] p-2 ml-2 rounded"
              onClick={updateTask}
            >
              {" "}
              Update Task
            </button>
          </div>
        )}
      </div>
    );
  };

  const getLogout = () => {
    navigate("/");
    localStorage.removeItem("username");
    localStorage.removeItem("email");
  };

  return (
    <div className="bg-blue-200 h-[100vh] flex flex-col justify-start items-start p-4">
      <div className="flex flex-row justify-end items-center w-[100%] mb-2 mr-5 gap-2">
        <button
          className="bg-red-500 text-[#fff] p-2 rounded"
          onClick={getLogout}
        >
          Logout
        </button>
        <button className="bg-white py-3 rounded px-2 cursor-pointer">
          <FaRegUserCircle size={20} />
        </button>
      </div>
      <div className="h-[90vh] bg-white w-[100%] rounded flex flex-row justify-start items-start">
        <div className="w-[50%] text-center pt-5 px-2">
          <h1 className="font-bold"> Available Tasks</h1>
          {renderTasks()}
        </div>
        <div>
          <h1 className="text-center text-red-500 pl-5 pt-5 mx-auto font-semibold">
            Task Management
          </h1>
          <div className=" flex flex-row justify-center items-center pt-2">
            <p>Add Task</p>
            <IoMdCreate
              className="ml-2 cursor-pointer"
              onClick={() => setEdit((prev) => !prev)}
            />
          </div>
          {edit && (
            <div>
              <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                className="p-2 border border-blue-200 rounded border-solid"
              />
              <button
                className="bg-blue-500 text-[#fff] p-2 ml-2 rounded"
                onClick={getCreateTask}
              >
                {" "}
                Save Task
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
