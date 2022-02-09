import React from "react";

export const Footer = () => {
  return (
    <div>
      <footer className="bg-dark text-white py-2 pt-4">
        <p className="text-center">
          Copyright &copy; {new Date().getFullYear()} Todolist.com.
        </p>
      </footer>
    </div>
  );
};
