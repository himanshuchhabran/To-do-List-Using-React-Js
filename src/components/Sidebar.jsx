import { useState } from "react";
import TodoProvider from "../context/TodoContext";
import ShowTodoList from "./ShowTodoList";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdDashboard, MdPerson, MdSettings } from "react-icons/md";

export default function SidebarLayout() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("dashboard");

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: <MdDashboard className="w-5 h-5" /> },
    { id: "profile", label: "Profile", icon: <MdPerson className="w-5 h-5" /> },
    { id: "settings", label: "Settings", icon: <MdSettings className="w-5 h-5" /> },
  ];

  const handleMenuClick = (itemId) => {
    setActiveItem(itemId);
    setIsOpen(false);
  };

  return (
    <>
      <div className="flex h-screen">

        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}

        <div
          className={`fixed md:relative z-40 top-0 left-0 h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white transition-all duration-300 min-h-screen
          ${isOpen ? "w-64" : "w-0 overflow-hidden"}`}
        >
          <div className="p-4 text-lg font-bold border-b border-gray-700">
            Menu
          </div>
          <ul className="space-y-2 p-4 mt-4">
            {menuItems.map((item) => (
              <li
                key={item.id}
                onClick={() => handleMenuClick(item.id)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition-all duration-200 transform ${
                  activeItem === item.id
                    ? "bg-indigo-600 text-white shadow-lg scale-105"
                    : "hover:bg-gray-700 hover:translate-x-1"
                }`}
              >
                {item.icon}
                <span className="font-medium">{item.label}</span>
              </li>
            ))}
          </ul>
        </div>

 
        <div className="flex-1 bg-black w-full overflow-y-auto">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-3xl text-indigo-400 m-4 z-50 hover:text-indigo-300 transition-colors hover:bg-gray-800 p-2 rounded-lg"
          >
            <RxHamburgerMenu />
          </button>
          <TodoProvider>
            <ShowTodoList />
          </TodoProvider>
        </div>
      </div>
    </>
  );
}