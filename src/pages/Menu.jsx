import React from 'react';
import { motion } from 'framer-motion';

const menuItems = [
  // Makanan
  {
    name: 'Paket Ayam Penyet',
    description: 'Nasi + Ayam Penyet + Es Teh',
    price: 'Rp15.500',
    img: '/menu/Paket Ayam Penyet.jpg',
  },
  {
    name: 'Paket Ayam Goreng',
    description: 'Nasi + Ayam Goreng + Es Teh',
    price: 'Rp15.500',
    img: '/menu/Paket Ayam Goreng.jpg',
  },
  {
    name: 'Nasi Telur Dadar',
    description: 'Nasi + Telur Dadar + Sambal',
    price: 'Rp10.000',
    img: '/menu/Nasi Telur Dadar.jpg',
  },
  {
    name: 'Nasi Telur Ceplok',
    description: 'Nasi + Telur Ceplok + Sambal',
    price: 'Rp10.000',
    img: '/menu/Nasi Telur Ceplok.webp',
  },
  {
    name: 'Nasi Mie Omelet',
    price: 'Rp13.000',
    img: '/menu/Nasi Mie Omelet.jpeg',
  },
  {
    name: 'Indomie Goreng Telur',
    price: 'Rp10.000',
    img: '/menu/Indomie Goreng Telur.jpg',
  },
  {
    name: 'Indomie Kuah Telur',
    price: 'Rp10.000',
    img: '/menu/Indomie Kuah Telur.jpg',
  },
  {
    name: 'Nasi Goreng Magelangan',
    price: 'Rp13.000',
    img: '/menu/Nasi Goreng Magelangan.jpg',
  },
  {
    name: 'Sambal Lamongan',
    price: 'Rp3.000',
    img: '/menu/Sambal Lamongan.jpg',
  },
  {
    name: 'Sambal Ijo',
    price: 'Rp3.000',
    img: '/menu/Sambal Ijo.jpg',
  },
  {
    name: 'Sambal Matah',
    price: 'Rp3.000',
    img: '/menu/Sambal Matah.jpg',
  },
  {
    name: 'Indomie Becek Telur',
    price: 'Rp11.000',
    img: '/menu/Indomie Becek Telur.jpg',
  },

  // Minuman
  {
    name: 'Es Teh',
    price: 'Rp4.000',
    img: '/menu/Es Teh.jpg',
  },
  {
    name: 'Es Milo',
    price: 'Rp7.000',
    img: '/menu/Es Milo.jpg',
  },
  {
    name: 'Es Good Day',
    price: 'Rp7.000',
    img: '/menu/Es Good Day.jpg',
  },
  {
    name: 'Es Susu Cokelat',
    price: 'Rp5.000',
    img: '/menu/Es Susu Cokelat.jpg',
  },
  {
    name: 'Es Susu Putih',
    price: 'Rp5.000',
    img: '/menu/Es Susu Putih.jpg',
  },
  {
    name: 'Es Extra Joss Susu',
    price: 'Rp7.000',
    img: '/menu/Es Extra Joss Susu.jpg',
  },
  {
    name: 'Es Kuku Bima Susu',
    price: 'Rp7.000',
    img: '/menu/Es Kuku Bima Susu.jpg',
  },
];

const Menu = () => {
  const headingVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
  };

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <div className="container py-4">
      <motion.h2
        className="text-center mb-4 text-warning fw-bold"
        variants={headingVariants}
        initial="hidden"
        animate="visible"
      >
        Menu Kami
      </motion.h2>

      <div className="row">
        {menuItems.map((item, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <motion.div
              className="card shadow-sm h-100"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <img
                src={item.img}
                className="card-img-top"
                alt={item.name}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title text-danger">{item.name}</h5>
                {item.description && (
                  <p className="card-text small text-muted">{item.description}</p>
                )}
                <p className="card-text fw-bold text-success mt-auto">{item.price}</p>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
