import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  // Durasi animasi dikompres supaya total maksimal ~2.5 detik
  const durasiSelamatDatang = 0.6;
  const durasiMurahCepatLezat = 0.5;
  const durasiFasilitas = 0.4;
  const durasiTombol = 0.3;

  const fasilitasVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: (custom) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay:
          durasiSelamatDatang +
          durasiMurahCepatLezat +
          custom * durasiFasilitas,
        duration: durasiFasilitas,
      },
    }),
  };

  const buttonVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (custom) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay:
          durasiSelamatDatang +
          durasiMurahCepatLezat +
          2 * durasiFasilitas + // 2 fasilitas
          custom * durasiTombol,
        duration: durasiTombol,
      },
    }),
  };

  return (
    <div
      className="d-flex align-items-center"
      style={{
        backgroundImage: 'url("/warmindo_bg.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        color: 'white',
      }}
    >
      <div className="container py-5">
        <div className="row">
          <div className="col-md-6">

            {/* Selamat Datang */}
            <motion.div
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: durasiSelamatDatang }}
            >
              <h2 className="display-5 fw-bold">Selamat Datang di Warmindo Satria</h2>
            </motion.div>

            {/* Murah, Cepat, Lezat */}
            <motion.div
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: durasiMurahCepatLezat, delay: durasiSelamatDatang }}
            >
              <p className="fs-4 text-warning">Murah, Cepat, Lezat!</p>
            </motion.div>

            <div className="d-flex gap-3 mb-4">
              {[ 
                { icon: "bi-wifi", label: "Free Wifi" },
                { icon: "bi-cup-hot", label: "Tempat Nongkrong" },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  className="text-center"
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={fasilitasVariants}
                >
                  <i
                    className={`bi ${item.icon}`}
                    style={{ fontSize: '2rem', color: 'white' }}
                  ></i>
                  <p className="mb-0">{item.label}</p>
                </motion.div>
              ))}
            </div>

            <div className="d-flex gap-3">
              {[
                {
                  href: "https://wa.me/6287855594017",
                  label: "Pesan via WhatsApp",
                  className: "btn btn-success",
                },
                {
                  href: "https://gofood.link/a/PsqABXN",
                  label: "Pesan di GoFood",
                  className: "btn btn-danger",
                },
              ].map((btn, i) => (
                <motion.a
                  key={btn.label}
                  href={btn.href}
                  target="_blank"
                  rel="noreferrer"
                  className={btn.className}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={buttonVariants}
                >
                  {btn.label}
                </motion.a>
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
