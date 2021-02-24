-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 24 Feb 2021 pada 13.55
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
  `category_status` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `category`
--

INSERT INTO `category` (`category_id`, `category_name`, `category_created_at`, `category_status`) VALUES
(1, 'Favorite Product', '2021-02-15 20:07:29', 1),
(2, 'Coffee', '2021-02-15 20:07:29', 1),
(3, 'Non Coffee', '2021-02-15 20:09:15', 1),
(4, 'Foods', '2021-02-15 20:09:15', 1),
(5, 'Add-on', '2021-02-15 20:09:53', 1);

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
-- Struktur dari tabel `detail_history`
--

CREATE TABLE `detail_history` (
  `detail_history_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `qty` int(11) NOT NULL,
  `photo` varchar(250) NOT NULL,
  `product_name` varchar(30) NOT NULL,
  `product_price` int(10) NOT NULL,
  `history_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `detail_history`
--

INSERT INTO `detail_history` (`detail_history_id`, `user_id`, `product_id`, `qty`, `photo`, `product_name`, `product_price`, `history_id`) VALUES
(1, 3, 1, 1, '2021-02-21T14-23-28.305Zimage 25 (2).png', 'Cold Brew', 20000, 7),
(2, 3, 2, 2, '2021-02-16T09-36-34.026ZSoy-Ginger-Dipping-Sauce-PictureTheRecipe.jpg', 'Soy Ginger', 50000, 7),
(3, 3, 2, 2, '', 'Soy Ginger', 50000, 9),
(4, 3, 3, 2, '', 'Lemon Iced Tea', 7000, 9),
(5, 3, 4, 3, '', 'Cheese Pasta', 20000, 10),
(6, 3, 2, 1, '', 'Soy Ginger', 50000, 11),
(7, 3, 3, 1, '', 'Lemon Iced Tea', 7000, 12),
(8, 3, 1, 1, '', 'Cold Brew', 20000, 13),
(9, 3, 1, 1, '', 'Cold Brew', 20000, 14),
(10, 3, 1, 1, '', 'Cold Brew', 20000, 14),
(11, 3, 1, 1, '', 'Cold Brew', 20000, 15),
(12, 3, 2, 1, '2021-02-16T09-36-34.026ZSoy-Ginger-Dipping-Sauce-PictureTheRecipe.jpg', 'Soy Ginger', 50000, 16),
(13, 3, 2, 1, '2021-02-16T09-36-34.026ZSoy-Ginger-Dipping-Sauce-PictureTheRecipe.jpg', 'Soy Ginger', 50000, 17),
(14, 3, 1, 1, '2021-02-21T14-23-28.305Zimage 25 (2).png', 'Cold Brew', 20000, 17),
(15, 3, 4, 1, '2021-02-21T14-33-12.105Z4.jpg', 'Cheese Pasta', 20000, 18),
(16, 3, 4, 1, '2021-02-21T14-33-12.105Z4.jpg', 'Cheese Pasta', 20000, 19),
(17, 3, 1, 1, '2021-02-21T14-23-28.305Zimage 25 (2).png', 'Cold Brew', 20000, 20),
(18, 3, 1, 1, '2021-02-21T14-23-28.305Zimage 25 (2).png', 'Cold Brew', 20000, 21),
(19, 3, 1, 1, '2021-02-21T14-23-28.305Zimage 25 (2).png', 'Cold Brew', 20000, 22);

-- --------------------------------------------------------

--
-- Struktur dari tabel `history`
--

CREATE TABLE `history` (
  `history_id` int(11) NOT NULL,
  `history_invoice` varchar(14) NOT NULL,
  `history_total` int(11) NOT NULL,
  `payment_method` varchar(12) NOT NULL,
  `tax` int(11) NOT NULL,
  `shipping` int(11) NOT NULL,
  `address` varchar(500) NOT NULL,
  `phone_number` varchar(20) NOT NULL,
  `history_checked` int(1) NOT NULL,
  `history_deleted` int(1) NOT NULL,
  `user_id` int(11) NOT NULL,
  `history_created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `history`
--

INSERT INTO `history` (`history_id`, `history_invoice`, `history_total`, `payment_method`, `tax`, `shipping`, `address`, `phone_number`, `history_checked`, `history_deleted`, `user_id`, `history_created_at`) VALUES
(1, 'mc-1', 56000, 'cash', 0, 0, '', '', 1, 0, 0, '2021-02-22 03:06:37'),
(2, 'mc-2', 56000, 'cash', 10000, 20000, 'Jalan mawar', '+6212345678', 1, 0, 1, '2021-02-23 11:20:53'),
(3, 'mc-3', 139000, 'card', 10000, 9000, 'Km 5 refinery road oppsite re public road, effurun, Jakarta', '+6281348287878', 0, 1, 3, '2021-02-23 11:45:05'),
(4, 'mc-4', 139000, 'bank_accou', 10000, 9000, 'Km 5 refinery road oppsite re public road, effurun, Jakarta', '+6281348287878', 0, 1, 3, '2021-02-23 11:51:00'),
(5, 'mc-5', 139000, 'bank_account', 10000, 9000, 'Km 5 refinery road oppsite re public road, effurun, Jakarta', '+6281348287878', 0, 1, 3, '2021-02-23 12:10:28'),
(6, 'mc-6', 139000, 'card', 10000, 9000, 'Km 5 refinery road oppsite re public road, effurun, Jakarta', '+6281348287878', 0, 1, 3, '2021-02-23 12:12:23'),
(7, 'mc-7', 139000, 'bank_account', 10000, 9000, 'Km 5 refinery road oppsite re public road, effurun, Jakarta', '+6281348287878', 0, 1, 3, '2021-02-23 12:14:10'),
(8, 'mc-8', 19000, 'cod', 10000, 9000, 'Km 5 refinery road oppsite re public road, effurun, Jakarta', '+6281348287878', 0, 1, 3, '2021-02-23 12:35:13'),
(9, 'mc-9', 133000, 'card', 10000, 9000, 'Km 5 refinery road oppsite re public road, effurun, Jakarta', '+6281348287878', 0, 1, 3, '2021-02-24 14:01:59'),
(10, 'mc-10', 79000, 'card', 10000, 9000, 'Km 5 refinery road oppsite re public road, effurun, Jakarta', '+6281348287878', 0, 1, 3, '2021-02-24 14:09:32'),
(11, 'mc-11', 69000, 'bank_account', 10000, 9000, 'Km 5 refinery road oppsite re public road, effurun, Jakarta', '+6281348287878', 0, 1, 3, '2021-02-24 14:12:45'),
(12, 'mc-12', 26000, 'card', 10000, 9000, 'Km 5 refinery road oppsite re public road, effurun, Jakarta', '+6281348287878', 0, 1, 3, '2021-02-24 14:14:06'),
(13, 'mc-13', 39000, 'bank_account', 10000, 9000, 'Km 5 refinery road oppsite re public road, effurun, Jakarta', '+6281348287878', 0, 1, 3, '2021-02-24 14:16:12'),
(14, 'mc-14', 59000, 'card', 10000, 9000, 'Km 5 refinery road oppsite re public road, effurun, Jakarta', '+6281348287878', 0, 1, 3, '2021-02-24 14:20:30'),
(15, 'mc-15', 39000, 'bank_account', 10000, 9000, 'Km 5 refinery road oppsite re public road, effurun, Jakarta', '+6281348287878', 0, 1, 3, '2021-02-24 14:22:28'),
(16, 'mc-16', 69000, 'bank_account', 10000, 9000, 'Km 5 refinery road oppsite re public road, effurun, Jakarta', '+6281348287878', 0, 1, 3, '2021-02-24 14:27:31'),
(17, 'mc-17', 89000, 'bank_account', 10000, 9000, 'Km 5 refinery road oppsite re public road, effurun, Jakarta', '+6281348287878', 0, 1, 3, '2021-02-24 14:39:00'),
(18, 'mc-18', 39000, 'bank_account', 10000, 9000, 'Km 5 refinery road oppsite re public road, effurun, Jakarta', '+6281348287878', 0, 1, 3, '2021-02-24 14:40:36'),
(19, 'mc-19', 39000, 'bank_account', 10000, 9000, 'Km 5 refinery road oppsite re public road, effurun, Jakarta', '+6281348287878', 0, 1, 3, '2021-02-24 14:40:41'),
(20, 'mc-20', 39000, 'card', 10000, 9000, 'Km 5 refinery road oppsite re public road, effurun, Jakarta', '+6281348287878', 0, 1, 3, '2021-02-24 14:43:44'),
(21, 'mc-21', 39000, 'card', 10000, 9000, 'Km 5 refinery road oppsite re public road, effurun, Jakarta', '+6281348287878', 0, 1, 3, '2021-02-24 14:44:29'),
(22, 'mc-22', 39000, 'card', 10000, 9000, 'Km 5 refinery road oppsite re public road, effurun, Jakarta', '+6281348287878', 0, 0, 3, '2021-02-24 14:50:59');

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
(1, 2, 0, 'Cold Brew', '2021-02-21T14-23-28.305Zimage 25 (2).png', 20000, 'R,L,XL', 'Bagi penikmat kafein, tidak salah memilih jenis kopi ini. Kualitas spesial dari kopi Flores Bajawa ini memiliki rasa spicy and fruity, dengan sentuhan rasa karamel uang natural dan dark chocolate.', '8 AM', '8 PM', 100, 'Home Delivery,Dine In,Take Away', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 1),
(2, 4, 0, 'Soy Ginger', '2021-02-16T09-36-34.026ZSoy-Ginger-Dipping-Sauce-PictureTheRecipe.jpg', 50000, '500 gr', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis aliquid doloremque, nobis officiis similique facilis cumque? Vitae ea id quibusdam tempore minima laborum, corrupti tempora est temporibus sequi voluptatibus voluptate.', '8 AM', '8 PM', 80, 'Dine In,Take Away', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 1),
(3, 3, 0, 'Lemon Iced Tea', '2021-02-16T09-38-37.205Zlemon-Iced-Tea.jpg', 7000, 'R,L', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis aliquid doloremque, nobis officiis similique facilis cumque? Vitae ea id quibusdam tempore minima laborum, corrupti tempora est temporibus sequi voluptatibus voluptate.', '8 AM', '8 PM', 100, 'Dine In', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 1),
(4, 5, 0, 'Cheese Pasta', '2021-02-21T14-33-12.105Z4.jpg', 20000, '250 gr,300 gr', 'Dengan memiliki rasa gurih dan creamy membuat produk ini sebagai andalan dari toko kami. Lelehan keju yang yummy membuatmu ketagihan sarapan di toko kami lagi dan lagi. ', '8 AM', '8 PM', 80, 'Dine In', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 1),
(5, 2, 0, 'Latte', '2021-02-24T11-07-04.676Zimage 36.png', 20000, 'L', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis aliquid doloremque, nobis officiis similique facilis cumque? Vitae ea id quibusdam tempore minima laborum, corrupti tempora est temporibus sequi voluptatibus voluptate.', '8 AM', '8 PM', 90, 'Dine In,Take Away', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 1);

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
(6, '', '', '', 'anicaocaa@gmail.com', 1, '$2b$10$cDj4cuareTx1KswytRHUFOwu6KdMfycygV1Xxfrm0xxU.0WXuuUXG', '+6212345678', '', '', '2021-02-17T08:14:27+', '', 'on', '2021-02-17 08:14:27', '2021-02-17 08:56:03', '0000-00-00 00:00:00', 1),
(7, '', '', '', 'viniani045@gmail.com', 1, '$2b$10$tnMFGyhjHB8u9aT0q1QPE.cUa5S3P28ZbuzBK1CQ3sMxTU3..alMG', '+6212345678', '', '', '2021-02-17T09:36:19+', '', 'off', '2021-02-17 09:36:19', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 1),
(8, '', '', '', 'vianiani045@gmail.com', 1, '$2b$10$1rEbH6m6UB/K9IAnwMtaROEoWYJTSXNhZeUTj.EaVMaEWJMDJ3rjq', '+6212345678', '', '', '2021-02-17T09:39:03+', '', 'on', '2021-02-17 09:39:03', '2021-02-17 09:40:19', '0000-00-00 00:00:00', 1),
(9, '', '', '', 'v@gmail.com', 1, '$2b$10$OlEIMloVKF99nOKfkwxgeOSNV0lqYDVSdvk/TKcGYeIusgAmzKrsi', '+6212345678', '', '', '2021-02-17T14:54:56+', '', 'off', '2021-02-17 14:54:56', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 1),
(10, '', '', '', 'x@gmail.com', 1, '$2b$10$HTFaowii/RJAy7yrJNdBguMLXcXDUHTWLMtTU32fZCaKNpilFj3xS', '+6212345678', '', '', '2021-02-17T14:57:02+', '', 'off', '2021-02-17 14:57:02', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 1),
(11, '', '', '', 'faithrose0100@gmail.com', 1, '$2b$10$zRiif4dsSpUECKie2ovMNeYXxj/Oey21MNjiWMksWCcx6ldVb3NBS', '+6212345678', '', '', '2021-02-17T15:14:54+', '', 'on', '2021-02-17 15:14:54', '2021-02-17 15:17:40', '0000-00-00 00:00:00', 1),
(12, '', '', '', 'faithrose01000@gmail.com', 1, '$2b$10$303268nqQ8BuJJuC8gaz9OqmcBwUQzpXBQ7CeiKTofwPKt0.P/Xfa', '+6212345678', '', '', '2021-02-18T07:24:12+', '', 'on', '2021-02-18 07:24:12', '2021-02-18 08:24:46', '0000-00-00 00:00:00', 1),
(13, '', '', '', 'faithrose010000@gmail.com', 1, '$2b$10$1iELCbeDgnwvxtlPV/Pj2e/Fh7.an5umrmH3V0ruAsSi5fnri2FWW', '+6212345678', '', '', '2021-02-18T08:23:51+', '', 'on', '2021-02-18 08:23:51', '2021-02-18 08:25:54', '0000-00-00 00:00:00', 1),
(14, '', '', '', 'faithrose0010@gmail.com', 1, '$2b$10$bf3Yx8FUAw6TNLMejDLXZueq92BIrkvFT/j/pKyoX5v714/.WVPQa', '+6212345678', '', '', '2021-02-21T21:38:23+', '', 'off', '2021-02-21 21:38:23', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 1),
(15, '', '', '', 'faithrose010@gmail.com', 1, '$2b$10$dSqfHCL9Kre9AE8vW.FBA.aujRlJOG7oDnCfNrfC9yRf7nO3xXCSK', '+6212345678', '', '', '2021-02-22T07:12:45+', '', 'off', '2021-02-22 07:12:45', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 1),
(16, '', '', '', 'anicaocaa@gmail.com', 1, '$2b$10$q9xoptQzwmfiur2epwFjD.kfqWO.aVk/hzd4COwBLPe5kMnymeP..', '+6212345678', '', '', '2021-02-22T07:18:00+', '', 'on', '2021-02-22 07:18:00', '2021-02-22 07:18:37', '0000-00-00 00:00:00', 1);

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
-- Indeks untuk tabel `detail_history`
--
ALTER TABLE `detail_history`
  ADD PRIMARY KEY (`detail_history_id`);

--
-- Indeks untuk tabel `history`
--
ALTER TABLE `history`
  ADD PRIMARY KEY (`history_id`);

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
-- AUTO_INCREMENT untuk tabel `detail_history`
--
ALTER TABLE `detail_history`
  MODIFY `detail_history_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT untuk tabel `history`
--
ALTER TABLE `history`
  MODIFY `history_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT untuk tabel `product`
--
ALTER TABLE `product`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT untuk tabel `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
