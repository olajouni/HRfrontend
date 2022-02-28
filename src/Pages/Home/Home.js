import React from "react";
import Tasks from "../../Components/FeaturedTasks/TasksList";
import TasksForm from "../../Components/FeaturedTasks/TasksForm";
import "./Home.css";
import TasksLists from "../../Components/FeaturedTasks/TasksList";

export default function Home() {
  return (
    <div className="home">
      <TasksLists />
    </div>
  );
}
