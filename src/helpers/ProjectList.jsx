import FloWord_Thumb from "../assets/FloWord_Thumb.jpg";
import Atlas_Thumb from "../assets/Atlas_Thumb.jpg";
import Jobify_Thumb from "../assets/Jobify_Thumb.jpg";
import Kampo_Thumb from "../assets/Kampo_Thumb.jpg";
import FloWord_Gameplay from "../assets/FloWord_Gameplay.jpg";
import Atlas_Login from "../assets/Atlas_Login.jpg";
import Jobify_Login from "../assets/Jobify_Login.jpg";
import Kampo_Home from "../assets/Kampo_Home.jpg";
import Expense_Home from "../assets/Expense_Home.png";
import Expense_Thumb from "../assets/Expense_Thumb.png";

export const ProjectList = [
  {
    name: "FloWord",
    thumb: FloWord_Thumb,
    display: FloWord_Gameplay,
    skills: "C#, Unity Engine, Firebase",
    link: "https://github.com/Trianglebucks/hangman_v1-feedback",
  },
  {
    name: "Atlas Inventory ",
    thumb: Atlas_Thumb,
    display: Atlas_Login,
    skills: "C#, SQLite, WPF",
    link: "https://github.com/Trianglebucks/AtlasProject",
  },
  {
    name: "Jobify",
    thumb: Jobify_Thumb,
    display: Jobify_Login,
    skills: "MERN Stack (MongoDB, Express, React, Node)",
    link: "https://mern-jobify-dlub.onrender.com/landing",
  },
  {
    name: "Kampo Apparel ",
    thumb: Kampo_Thumb,
    display: Kampo_Home,
    skills: "HTML, CSS, Bootstrap, PHP, MySQL",
  },
  {
    name: "Expense Tracker",
    thumb: Expense_Thumb,
    display: Expense_Home,
    skills: "MERN Stack (MongoDB, Express, React, Node)",
    link: "https://expense-tracker-kpue.onrender.com/",
  },
];
