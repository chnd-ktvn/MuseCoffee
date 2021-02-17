-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 17 Feb 2021 pada 13.02
-- Versi server: 10.4.17-MariaDB
-- Versi PHP: 8.0.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `muse_coffee`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `category`
--

CREATE TABLE `category` (
  `category_id` int(11) NOT NULL,
  `category_name` varchar(30) NOT NULL,
  `category_created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `category_updated_at` datetime NOT NULL,
  `category_status` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `category`
--

INSERT INTO `category` (`category_id`, `category_name`, `category_created_at`, `category_updated_at`, `category_status`) VALUES
(1, 'Favorite Product', '2021-02-15 20:07:29', '0000-00-00 00:00:00', 1),
(2, 'Coffee', '2021-02-15 20:07:29', '0000-00-00 00:00:00', 1),
(3, 'Non Coffee', '2021-02-15 20:09:15', '0000-00-00 00:00:00', 1),
(4, 'Foods', '2021-02-15 20:09:15', '0000-00-00 00:00:00', 1),
(5, 'Add-on', '2021-02-15 20:09:53', '0000-00-00 00:00:00', 1);

-- --------------------------------------------------------

--
-- Struktur dari tabel `coupon`
--

CREATE TABLE `coupon` (
  `coupon_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `coupon_code` varchar(10) NOT NULL,
  `coupon_disc` int(2) NOT NULL,
  `coupon_detail` varchar(200) NOT NULL,
  `coupon_valid_start` date NOT NULL,
  `coupon_valid_end` date NOT NULL,
  `coupon_background_color` varchar(50) NOT NULL,
  `coupon_created_at` datetime NOT NULL,
  `coupon_updated_at` datetime NOT NULL,
  `coupon_deleted_at` datetime NOT NULL,
  `coupon_status` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `product`
--

CREATE TABLE `product` (
  `product_id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL,
  `coupon_id` int(11) NOT NULL,
  `product_name` varchar(30) NOT NULL,
  `photo` varchar(250) NOT NULL,
  `product_price` int(10) NOT NULL,
  `product_size` varchar(15) NOT NULL,
  `product_detail` varchar(500) NOT NULL,
  `start_delivery_hour` varchar(5) NOT NULL,
  `end_delivery_hour` varchar(5) NOT NULL,
  `stock_product` int(4) NOT NULL,
  `delivery_methods` varchar(100) NOT NULL,
  `is_food` varchar(5) NOT NULL,
  `product_created_at` datetime NOT NULL,
  `product_updated_at` datetime NOT NULL,
  `product_deleted_at` datetime NOT NULL,
  `product_status` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `product`
--

INSERT INTO `product` (`product_id`, `category_id`, `coupon_id`, `product_name`, `photo`, `product_price`, `product_size`, `product_detail`, `start_delivery_hour`, `end_delivery_hour`, `stock_product`, `delivery_methods`, `is_food`, `product_created_at`, `product_updated_at`, `product_deleted_at`, `product_status`) VALUES
(1, 2, 0, 'Cold Brew', '2021-02-17T10-34-40.593Zimage 25 (2).png', 20000, 'R,L,XL', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis aliquid doloremque, nobis officiis similique facilis cumque? Vitae ea id quibusdam tempore minima laborum, corrupti tempora est temporibus sequi voluptatibus voluptate.', '8 AM', '8 PM', 100, 'Home Delivery,Dine In,Take Away', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 1),
(2, 4, 0, 'Soy Ginger', '2021-02-16T09-36-34.026ZSoy-Ginger-Dipping-Sauce-PictureTheRecipe.jpg', 50000, '500 gr', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis aliquid doloremque, nobis officiis similique facilis cumque? Vitae ea id quibusdam tempore minima laborum, corrupti tempora est temporibus sequi voluptatibus voluptate.', '8 AM', '8 PM', 80, 'Dine In,Take Away', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 1),
(3, 3, 0, 'Lemon Iced Tea', '2021-02-16T09-38-37.205Zlemon-Iced-Tea.jpg', 7000, 'R,L', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis aliquid doloremque, nobis officiis similique facilis cumque? Vitae ea id quibusdam tempore minima laborum, corrupti tempora est temporibus sequi voluptatibus voluptate.', '8 AM', '8 PM', 100, 'Dine In', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 1),
(4, 5, 0, 'Cheese Pasta', '2021-02-16T09-42-48.030Z4.jpg', 20000, '250 gr,300 gr', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis aliquid doloremque, nobis officiis similique facilis cumque? Vitae ea id quibusdam tempore minima laborum, corrupti tempora est temporibus sequi voluptatibus voluptate.', '8 AM', '8 PM', 80, 'Dine In', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 1),
(5, 2, 0, 'Latte', '2021-02-16T09-45-32.804Zimage 36.png', 20000, 'L', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis aliquid doloremque, nobis officiis similique facilis cumque? Vitae ea id quibusdam tempore minima laborum, corrupti tempora est temporibus sequi voluptatibus voluptate.', '8 AM', '8 PM', 80, 'Dine In,Take Away', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 1);

-- --------------------------------------------------------

--
-- Struktur dari tabel `user`
--

CREATE TABLE `user` (
  `user_id` int(11) NOT NULL,
  `user_name` varchar(50) NOT NULL,
  `user_first_name` varchar(20) NOT NULL,
  `user_last_name` varchar(20) NOT NULL,
  `user_email` varchar(50) NOT NULL,
  `user_role` int(1) NOT NULL,
  `user_password` varchar(255) NOT NULL,
  `user_phone_number` varchar(20) NOT NULL,
  `photo` varchar(200) NOT NULL,
  `user_delivery_address` varchar(500) NOT NULL,
  `user_date_birth` varchar(20) NOT NULL,
  `user_gender` varchar(6) NOT NULL,
  `user_activation` varchar(3) NOT NULL,
  `user_created_at` datetime NOT NULL,
  `user_updated_at` datetime NOT NULL,
  `user_deleted_at` datetime NOT NULL,
  `user_status` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `user`
--

INSERT INTO `user` (`user_id`, `user_name`, `user_first_name`, `user_last_name`, `user_email`, `user_role`, `user_password`, `user_phone_number`, `photo`, `user_delivery_address`, `user_date_birth`, `user_gender`, `user_activation`, `user_created_at`, `user_updated_at`, `user_deleted_at`, `user_status`) VALUES
(1, '', '', '', 'candraoktaviani2017@', 1, '$2b$10$eTHvA63l9VXYuZGayYMCR.blJ2NxQhE2PmkOwCB5pFjQLPxwPUzXS', '2147483647', '', '', 'Tue Feb 16 2021', '', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 1),
(2, '', '', '', 'candraoktaviani2017@', 1, '$2b$10$qYfZP7wEybV/PRXl6EmzNusTocBmHf9m3G8q7mBhIqtYJaU1YadzW', '+6212345678', '', '', '2021-02-15 23:29:58.', '', '', '2021-02-15 23:29:58', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 1),
(3, '', '', '', 'candraoktaviani2017@gmail.com', 1, '$2b$10$WaC9XJ4/LcRukt0psJ0aKuhSJbLeGP4qfIhBfQP3HVEjyxScoviZG', '+6212345678', '', '', '2021-02-16T07:37:56+', '', 'on', '2021-02-16 07:37:56', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 1),
(4, '', '', '', 'chandra@gmail.com', 2, '$2b$10$fS5k54n09zvOpNR.dBn57ub4qt.Daw.RWZBhtHEtmg7LbcFhi/bQ2', '+6212345678', '', '', '2021-02-16T15:38:35+', '', 'on', '2021-02-16 15:38:35', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 1),
(5, '', '', '', 'c@gmail.com', 1, '$2b$10$CP8vjANNXtFThhfEb7Elp.i7LJHU/n2k2g3GA2WgH/rtWxvfkQPim', '+6212345678', '', '', '2021-02-17T04:44:49+', '', '', '2021-02-17 04:44:49', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 1),
(6, '', '', '', 'anicaoca@gmail.com', 1, '$2b$10$cDj4cuareTx1KswytRHUFOwu6KdMfycygV1Xxfrm0xxU.0WXuuUXG', '+6212345678', '', '', '2021-02-17T08:14:27+', '', 'on', '2021-02-17 08:14:27', '2021-02-17 08:56:03', '0000-00-00 00:00:00', 1),
(7, '', '', '', 'viniani045@gmail.com', 1, '$2b$10$tnMFGyhjHB8u9aT0q1QPE.cUa5S3P28ZbuzBK1CQ3sMxTU3..alMG', '+6212345678', '', '', '2021-02-17T09:36:19+', '', 'off', '2021-02-17 09:36:19', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 1),
(8, '', '', '', 'vianiani045@gmail.com', 1, '$2b$10$1rEbH6m6UB/K9IAnwMtaROEoWYJTSXNhZeUTj.EaVMaEWJMDJ3rjq', '+6212345678', '', '', '2021-02-17T09:39:03+', '', 'on', '2021-02-17 09:39:03', '2021-02-17 09:40:19', '0000-00-00 00:00:00', 1),
(9, '', '', '', 'v@gmail.com', 1, '$2b$10$OlEIMloVKF99nOKfkwxgeOSNV0lqYDVSdvk/TKcGYeIusgAmzKrsi', '+6212345678', '', '', '2021-02-17T14:54:56+', '', 'off', '2021-02-17 14:54:56', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 1),
(10, '', '', '', 'x@gmail.com', 1, '$2b$10$HTFaowii/RJAy7yrJNdBguMLXcXDUHTWLMtTU32fZCaKNpilFj3xS', '+6212345678', '', '', '2021-02-17T14:57:02+', '', 'off', '2021-02-17 14:57:02', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 1),
(11, '', '', '', 'faithrose010@gmail.com', 1, '$2b$10$zRiif4dsSpUECKie2ovMNeYXxj/Oey21MNjiWMksWCcx6ldVb3NBS', '+6212345678', '', '', '2021-02-17T15:14:54+', '', 'on', '2021-02-17 15:14:54', '2021-02-17 15:17:40', '0000-00-00 00:00:00', 1);

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`category_id`);

--
-- Indeks untuk tabel `coupon`
--
ALTER TABLE `coupon`
  ADD PRIMARY KEY (`coupon_id`);

--
-- Indeks untuk tabel `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`product_id`);

--
-- Indeks untuk tabel `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `category`
--
ALTER TABLE `category`
  MODIFY `category_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT untuk tabel `coupon`
--
ALTER TABLE `coupon`
  MODIFY `coupon_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `product`
--
ALTER TABLE `product`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT untuk tabel `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
