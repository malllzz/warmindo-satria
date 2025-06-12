import React from "react";
import { motion } from "framer-motion";
import { BsWifi, BsPlug, BsCupStraw } from "react-icons/bs";
import logoWarmindo from "/logo_warmindo_color.svg";

const TentangKami = () => {
  return (
    <div className="container py-5">
      {/* Tentang Warmindo Satria */}
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="row align-items-center bg-white shadow rounded-4 border p-4 mb-5"
      >
        <div className="col-md-4 text-center mb-3 mb-md-0">
          <img
            src={logoWarmindo}
            alt="Logo Warmindo"
            className="img-fluid"
            style={{ maxHeight: "160px" }}
          />
        </div>
        <div className="col-md-8">
          <h2 className="fw-bold mb-3">Tentang Warmindo Satria</h2>
          <p className="text-muted">
            Warmindo Satria hadir sebagai solusi kuliner cepat, terjangkau, dan nikmat
            bagi semua kalangan. Kami menyajikan berbagai menu mulai dari mie instan,
            nasi lauk lezat, hingga minuman kekinian. Dengan suasana yang nyaman,
            lokasi strategis, dan harga bersahabat, Warmindo Satria menjadi tempat
            ideal untuk makan siang, nongkrong, atau sekadar bersantai.
          </p>
        </div>
      </motion.div>

      {/* Fasilitas */}
      <motion.div
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="bg-white shadow rounded-4 border p-4 text-center mb-5"
      >
        <h2 className="fw-bold mb-3">Fasilitas Kami</h2>
        <ul className="list-unstyled text-muted">
          <li className="d-flex align-items-center justify-content-center mb-2">
            <BsWifi className="text-success me-2" size={24} /> Wifi Gratis
          </li>
          <li className="d-flex align-items-center justify-content-center mb-2">
            <BsCupStraw className="text-success me-2" size={24} /> Tempat Nongkrong Nyaman
          </li>
          <li className="d-flex align-items-center justify-content-center">
            <BsPlug className="text-success me-2" size={24} /> Stop Kontak
          </li>
        </ul>
      </motion.div>

      {/* Keunggulan */}
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="bg-white shadow rounded-4 border p-4 mb-5"
      >
        <h2 className="fw-bold mb-3">Mengapa Pilih Warmindo Satria?</h2>
        <ul className="text-muted">
          <li>
            <strong>Harga Terjangkau</strong> – Nikmati makanan enak tanpa menguras kantong.
          </li>
          <li>
            <strong>Menu Variatif</strong> – Mie instan, nasi lauk, hingga minuman segar tersedia lengkap.
          </li>
          <li>
            <strong>Tempat Nyaman</strong> – Cocok untuk nongkrong, belajar, atau bekerja santai.
          </li>
        </ul>
      </motion.div>

      {/* Kontak */}
      <motion.div
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="bg-white shadow rounded-4 border p-4 text-center"
      >
        <h2 className="fw-bold mb-3">Kontak Kami</h2>
        <a
  href="https://maps.app.goo.gl/zAsRCaLzyHL8MSU28"
  target="_blank"
  rel="noopener noreferrer"
  className="text-muted mb-1 text-decoration-none"
  style={{ transition: 'color 0.2s, text-decoration 0.2s' }}
  onMouseEnter={(e) => {
    e.target.style.color = '#6c757d';
    e.target.style.textDecoration = 'underline';
  }}
  onMouseLeave={(e) => {
    e.target.style.color = '';
    e.target.style.textDecoration = 'none';
  }}
>
  📍 Jalan Sidodadi, Purwokerto Kidul, Kec. Purwokerto Selatan, Kab. Banyumas
</a>
        <p className="text-muted mb-3">
          📱{" "}
          <a
            href="https://wa.me/6287855594017"
            target="_blank"
            rel="noopener noreferrer"
            className="text-success fw-semibold"
          >
            +62 878-5559-4017
          </a>
        </p>
        <a
          href="https://gofood.link/a/PsqABXN"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-danger fw-semibold px-4 py-2"
        >
          Pesan via GoFood
        </a>
      </motion.div>
    </div>
  );
};

export default TentangKami;
