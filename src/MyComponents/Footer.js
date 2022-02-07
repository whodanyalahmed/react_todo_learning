import React from "react";

export const Footer = () => {
  let FooterStyle = {
    position: "absolute",
    top: "82vh",
    width: "100%",
  };
  return (
    <div>
      <footer className="bg-dark text-white py-2 pt-3 my-5" style={FooterStyle}>
        <p className="text-center">
          Copyright &copy; {new Date().getFullYear()} Todolist.com.
        </p>
      </footer>
    </div>
  );
};
