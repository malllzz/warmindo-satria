import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const MainLayout = ({ children }) => {
  const location = useLocation();
  const [isMenuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Beranda" },
    { path: "/menu", label: "Menu" },
    { path: "/tentang-kami", label: "Tentang Kami" },
  ];

  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      {/* HEADER */}
      <header className="bg-danger text-white py-1 shadow">
        <div className="container d-flex justify-content-between align-items-center">
          {/* Logo dan Judul */}
          <Link to="/" className="d-flex align-items-center text-decoration-none">
            <motion.img
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
              src="/logo_warmindo.svg"
              alt="Logo"
              height="60"
              className="me-2"
            />
            <motion.h1
              className="h5 m-0 text-white"
              whileHover={{ opacity: 0.7 }}
              transition={{ duration: 0.3 }}
            >
              Warmindo Satria
            </motion.h1>
          </Link>

          {/* Hamburger Button - muncul hanya di layar kecil */}
          <button
            className="btn btn-outline-light d-md-none"
            onClick={() => setMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>

          {/* Navbar - Desktop */}
          <nav className="d-none d-md-flex">
            {navItems.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
                className={`me-3 ${idx === navItems.length - 1 ? "me-0" : ""}`}
              >
                <Link
                  to={item.path}
                  className="text-white text-decoration-none"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </nav>
        </div>

        {/* Navbar - Mobile */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-danger d-md-none px-3 pt-2 pb-3"
            >
              {navItems.map((item, idx) => (
                <div key={idx} className="mb-2">
                  <Link
                    to={item.path}
                    className="text-white text-decoration-none"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* KONTEN */}
      <main className="flex-grow-1">{children}</main>

      {/* FOOTER */}
      <footer className="bg-dark text-white text-center py-3">
        <div className="container">
          &copy; {new Date().getFullYear()} Warmindo Satria
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
