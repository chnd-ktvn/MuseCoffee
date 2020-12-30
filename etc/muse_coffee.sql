-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 30 Des 2020 pada 07.30
-- Versi server: 10.4.13-MariaDB
-- Versi PHP: 7.4.7

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
  `category_name` varchar(100) NOT NULL,
  `category_created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `category_updated_at` datetime NOT NULL,
  `category_status` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `category`
--

INSERT INTO `category` (`category_id`, `category_name`, `category_created_at`, `category_updated_at`, `category_status`) VALUES
(1, 'Favorite Product', '2020-12-13 11:40:43', '0000-00-00 00:00:00', 1),
(2, 'Coffee', '2020-12-13 11:41:14', '0000-00-00 00:00:00', 1),
(3, 'Non Coffee', '2020-12-13 11:41:51', '0000-00-00 00:00:00', 1),
(4, 'Foods', '2020-12-13 11:41:51', '0000-00-00 00:00:00', 1),
(5, 'Add-on', '2020-12-13 11:42:13', '0000-00-00 00:00:00', 1);

-- --------------------------------------------------------

--
-- Struktur dari tabel `coupon`
--

CREATE TABLE `coupon` (
  `coupon_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `coupon_code` varchar(10) NOT NULL,
  `coupon_disc` int(5) NOT NULL,
  `coupon_detail` varchar(300) NOT NULL,
  `coupon_valid_start` date NOT NULL,
  `coupon_valid_end` date NOT NULL,
  `coupon_background_color` varchar(50) NOT NULL,
  `coupon_created_at` varchar(20) NOT NULL,
  `coupon_updated_at` varchar(20) NOT NULL,
  `coupon_deleted_at` varchar(20) NOT NULL,
  `coupon_status` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `coupon`
--

INSERT INTO `coupon` (`coupon_id`, `product_id`, `coupon_code`, `coupon_disc`, `coupon_detail`, `coupon_valid_start`, `coupon_valid_end`, `coupon_background_color`, `coupon_created_at`, `coupon_updated_at`, `coupon_deleted_at`, `coupon_status`) VALUES
(1, 1, 'FNPR15RG', 20, 'Get 20% OFF for Veggie Tomato Mix', '2020-10-10', '2021-02-01', '', '12/28/2020, 14:27:03', '12/30/2020, 03:45:25', '12/30/2020, 03:56:12', 0);

-- --------------------------------------------------------

--
-- Struktur dari tabel `detail_history`
--

CREATE TABLE `detail_history` (
  `detail_history_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `qty` int(11) NOT NULL,
  `total` int(11) NOT NULL,
  `history_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `status` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `detail_history`
--

INSERT INTO `detail_history` (`detail_history_id`, `product_id`, `qty`, `total`, `history_id`, `user_id`, `status`) VALUES
(2, 2, 1, 0, 1, 0, 1),
(4, 1, 1, 0, 1, 0, 0),
(6, 2, 1, 0, 1, 0, 1),
(7, 2, 1, 0, 1, 0, 1),
(8, 2, 1, 0, 1, 8, 0);

-- --------------------------------------------------------

--
-- Struktur dari tabel `history`
--

CREATE TABLE `history` (
  `history_id` int(11) NOT NULL,
  `history_invoice` varchar(13) NOT NULL,
  `history_subtotal` int(11) NOT NULL,
  `payment_method` varchar(16) NOT NULL,
  `user_id` int(11) NOT NULL,
  `admin_id` int(11) NOT NULL,
  `history_checked` int(1) NOT NULL,
  `history_created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `history_checked_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `history`
--

INSERT INTO `history` (`history_id`, `history_invoice`, `history_subtotal`, `payment_method`, `user_id`, `admin_id`, `history_checked`, `history_created_at`, `history_checked_at`) VALUES
(1, 'mc-1', 56000, 'Cash on Delivery', 8, 1, 0, '2020-12-28 00:00:00', '2020-12-29 00:10:46'),
(2, 'mc-2', 30000, 'Cash on Delivery', 8, 1, 0, '2020-12-28 00:00:00', '2020-12-29 00:40:24'),
(3, 'mc-3', 40000, 'Cash on Delivery', 8, 1, 0, '2020-12-28 00:00:00', '2020-12-29 00:53:34'),
(4, 'mc-4', 17000, 'Cash on Delivery', 8, 1, 0, '2020-12-28 00:00:00', '2020-12-29 01:01:10'),
(5, 'mc-5', 21000, 'Cash on Delivery', 8, 1, 0, '2020-12-28 00:00:00', '2020-12-29 01:22:17'),
(6, 'mc-6', 70000, 'Cash on Delivery', 8, 1, 0, '2020-12-28 00:00:00', '2020-12-29 21:42:12'),
(7, 'mc-7', 50000, 'Cash on Delivery', 8, 1, 0, '2020-12-28 00:00:00', '2020-12-29 21:42:19'),
(8, 'mc-8', 24000, 'Cash on Delivery', 8, 1, 0, '2020-12-28 00:00:00', '2020-12-29 21:42:29'),
(9, 'mc-9', 30000, 'Cash on Delivery', 8, 1, 0, '2020-12-28 00:00:00', '2020-12-29 21:42:34'),
(10, 'mc-10', 21000, 'Cash on Delivery', 8, 0, 1, '2020-12-29 22:00:00', '2020-12-29 21:42:39'),
(11, 'mc-11', 56000, 'Cash on Delivery', 8, 0, 1, '2020-12-29 22:49:02', '2020-12-29 21:42:43'),
(12, 'mc-12', 56000, 'Cash on Delivery', 8, 1, 0, '2020-12-29 02:02:45', '2020-12-29 22:03:30'),
(13, 'mc-13', 56000, 'Cash on Delivery', 8, 1, 0, '2020-12-29 21:17:49', '2020-12-29 22:03:34'),
(14, 'mc-14', 56000, 'Cash on Delivery', 8, 0, 1, '2020-12-30 01:46:08', '0000-00-00 00:00:00'),
(15, 'mc-15', 56000, 'Cash on Delivery', 8, 0, 1, '2020-12-30 01:49:50', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Struktur dari tabel `product`
--

CREATE TABLE `product` (
  `product_id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL,
  `coupon_id` int(11) NOT NULL,
  `product_name` varchar(100) NOT NULL,
  `photo` varchar(300) NOT NULL,
  `product_price` int(10) NOT NULL,
  `product_size` varchar(250) NOT NULL,
  `product_detail` varchar(500) NOT NULL,
  `start_delivery_hour` varchar(5) NOT NULL,
  `end_delivery_hour` varchar(5) NOT NULL,
  `stock_product` int(4) NOT NULL,
  `delivery_methods` varchar(250) NOT NULL,
  `is_food` varchar(5) NOT NULL,
  `product_created_at` varchar(20) NOT NULL,
  `product_updated_at` varchar(20) NOT NULL,
  `product_deleted_at` varchar(20) NOT NULL,
  `product_status` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `product`
--

INSERT INTO `product` (`product_id`, `category_id`, `coupon_id`, `product_name`, `photo`, `product_price`, `product_size`, `product_detail`, `start_delivery_hour`, `end_delivery_hour`, `stock_product`, `delivery_methods`, `is_food`, `product_created_at`, `product_updated_at`, `product_deleted_at`, `product_status`) VALUES
(1, 4, 1, 'Veggie Tomato Mix', '2020-12-27T06-18-43.132Zimage 2.png', 34000, '[\"250\", \"300\", \"500\"]', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis aliquid doloremque, nobis officiis similique facilis cumque? Vitae ea id quibusdam tempore minima laborum, corrupti tempora est temporibus sequi voluptatibus voluptate.', '', '', 50, '[\"Home delivery\", \"Dine in\", \"Takeaway\"]', 'true', '12/27/2020, 13:18:43', '', '', 1),
(2, 2, 0, 'Hazelnut Latte', '2020-12-27T06-22-13.696Zimage 36.png', 25000, '[\"R\", \"L\", \"XL\"]', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis aliquid doloremque, nobis officiis similique facilis cumque? Vitae ea id quibusdam tempore minima laborum, corrupti tempora est temporibus sequi voluptatibus voluptate.', '', '', 50, '[\"Home delivery\", \"Dine in\", \"Takeaway\"]', 'false', '12/27/2020, 13:22:13', '', '', 1),
(3, 4, 0, 'Butter Chicken', '2020-12-27T07-54-42.198ZPictureTheRecipe-Butter-Chicken.jpg', 25000, '[\"250\", \"300\"]', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis aliquid doloremque, nobis officiis similique facilis cumque? Vitae ea id quibusdam tempore minima laborum, corrupti tempora est temporibus sequi voluptatibus voluptate.', '', '', 50, '[\"Home delivery\", \"Dine in\", \"Takeaway\"]', 'true', '12/27/2020, 14:54:42', '', '', 1),
(4, 1, 0, 'Vanilla-Cardamom Kulfi', '2020-12-27T14-03-16.398ZVanilla-Cardamom-Kulfi-by-PictureTheRecipe.jpg', 17000, '[\"250\", \"300\"]', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis aliquid doloremque, nobis officiis similique facilis cumque? Vitae ea id quibusdam tempore minima laborum, corrupti tempora est temporibus sequi voluptatibus voluptate.', '', '', 30, '[\"Takeaway\"]', 'true', '12/27/2020, 15:00:10', '12/27/2020, 21:03:16', '12/27/2020, 20:59:59', 1),
(5, 1, 0, 'Vanilla-Cardamom Kulfi', '2020-12-27T13-58-00.686ZVanilla-Cardamom-Kulfi-by-PictureTheRecipe.jpg', 17000, '[\"250\", \"300\"]', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis aliquid doloremque, nobis officiis similique facilis cumque? Vitae ea id quibusdam tempore minima laborum, corrupti tempora est temporibus sequi voluptatibus voluptate.', '', '', 30, '[\"Takeaway\"]', 'true', '12/27/2020, 15:09:20', '12/27/2020, 20:58:00', '12/27/2020, 20:53:53', 1),
(6, 1, 0, 'Vanilla-Cardamom Kulfi', '2020-12-30T04-38-42.220ZScreenshot_2019-03-31-01-07-02-75 (2).png', 17000, '[\"250\", \"300\"]', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis aliquid doloremque, nobis officiis similique facilis cumque? Vitae ea id quibusdam tempore minima laborum, corrupti tempora est temporibus sequi voluptatibus voluptate.', '', '', 30, '[\"Takeaway\"]', 'true', '12/27/2020, 15:12:39', '12/30/2020, 11:38:42', '12/30/2020, 03:10:09', 1),
(7, 5, 0, 'Lemongrasss Chicken Dumplings', '2020-12-27T08-17-30.625ZSoy-Ginger-Dipping-Sauce-PictureTheRecipe.jpg', 21000, '[\"250\", \"300\", \"500\"]', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis aliquid doloremque, nobis officiis similique facilis cumque? Vitae ea id quibusdam tempore minima laborum, corrupti tempora est temporibus sequi voluptatibus voluptate.', '', '', 50, '[\"Home delivery\", \"Dine in\", \"Takeaway\"]', 'true', '12/27/2020, 15:17:30', '', '', 1),
(8, 5, 0, 'Sausages', '2020-12-27T08-19-17.354Zimage 37.png', 15000, '[\"250\", \"300\"]', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis aliquid doloremque, nobis officiis similique facilis cumque? Vitae ea id quibusdam tempore minima laborum, corrupti tempora est temporibus sequi voluptatibus voluptate.', '', '', 50, '[\"Home delivery\", \"Dine in\", \"Takeaway\"]', 'true', '12/27/2020, 15:19:17', '', '', 1),
(9, 3, 0, 'Lemon Iced Tea', '2020-12-27T08-40-26.733Zlemon-Iced-Tea.jpg', 15000, '[\"R\", \"L\"]', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis aliquid doloremque, nobis officiis similique facilis cumque? Vitae ea id quibusdam tempore minima laborum, corrupti tempora est temporibus sequi voluptatibus voluptate.', '', '', 50, '[\"Home delivery\", \"Dine in\", \"Takeaway\"]', 'false', '12/27/2020, 15:40:26', '', '', 1),
(10, 3, 0, 'Lemon Iced Tea', '2020-12-28T06-08-16.096Zlemon-Iced-Tea.jpg', 15000, '[\"X\", \"R\"]', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis aliquid doloremque, nobis officiis similique facilis cumque? Vitae ea id quibusdam tempore minima laborum, corrupti tempora est temporibus sequi voluptatibus voluptate.', '', '', 50, '[\"Home delivery\", \"Dine in\", \"Takeaway\"]', 'false', '12/28/2020, 13:08:16', '', '', 1),
(11, 3, 0, 'Sausage', '2020-12-30T05-35-08.456Z0081.jpg', 15000, '[\"X\", \"R\"]', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis aliquid doloremque, nobis officiis similique facilis cumque? Vitae ea id quibusdam tempore minima laborum, corrupti tempora est temporibus sequi voluptatibus voluptate.', '', '', 50, '[\"Home delivery\", \"Dine in\", \"Takeaway\"]', 'false', '12/30/2020, 12:35:08', '', '', 1),
(12, 3, 0, 'Sausages', '2020-12-30T05-43-20.459Z0081.jpg', 15000, '[\"X\", \"R\"]', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis aliquid doloremque, nobis officiis similique facilis cumque? Vitae ea id quibusdam tempore minima laborum, corrupti tempora est temporibus sequi voluptatibus voluptate.', '', '', 50, '[\"Home delivery\", \"Dine in\", \"Takeaway\"]', 'false', '12/30/2020, 12:43:20', '', '', 1);

-- --------------------------------------------------------

--
-- Struktur dari tabel `user`
--

CREATE TABLE `user` (
  `user_id` int(11) NOT NULL,
  `user_name` varchar(200) NOT NULL,
  `user_first_name` varchar(200) NOT NULL,
  `user_last_name` varchar(200) NOT NULL,
  `user_email` varchar(200) NOT NULL,
  `user_role` int(1) NOT NULL,
  `user_password` varchar(300) NOT NULL,
  `user_phone_number` varchar(25) NOT NULL,
  `photo` varchar(300) NOT NULL,
  `user_delivery_address` varchar(500) NOT NULL,
  `user_date_birth` varchar(20) NOT NULL,
  `user_gender` varchar(6) NOT NULL,
  `user_created_at` varchar(20) NOT NULL,
  `user_updated_at` varchar(20) NOT NULL,
  `user_deleted_at` varchar(20) NOT NULL,
  `user_status` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `user`
--

INSERT INTO `user` (`user_id`, `user_name`, `user_first_name`, `user_last_name`, `user_email`, `user_role`, `user_password`, `user_phone_number`, `photo`, `user_delivery_address`, `user_date_birth`, `user_gender`, `user_created_at`, `user_updated_at`, `user_deleted_at`, `user_status`) VALUES
(1, 'caoca', '', '', 'anicaoca@gmail.com', 2, '$2b$10$WbbnHf9mRznPDD9TMjjkvuTG7IQ6W2e6qYLElycj3HKWVMrBHi9oC', '', '2020-12-28T01-26-18.928Zcoffee 1.png', '', '', '', '12/28/2020, 08:26:19', '', '', 1),
(2, 'viani', '', '', 'vianiani045@gmail.com', 1, '$2b$10$1ikGi8vhjrzzwySuiaStE.5bgGExNw3fT4Sbahje/ragbRxEd7UeC', '', '2020-12-28T01-30-33.607Zcoffee 1.png', '', '', '', '12/28/2020, 08:30:33', '', '', 1),
(6, 'via', '', '', 'caocaaani@gmail..com', 1, '$2b$10$38Wz4KGdTCid1CgBSwgU6.ZBq0mtMQwFCr7LJAv7562VmmkmmRi.W', '', '2020-12-29T18-55-55.304Zimage 36.png', '', '', 'female', '12/30/2020, 01:45:38', '12/30/2020, 01:55:55', '', 1),
(7, 'aabbccdd', '', '', 'aabbcccdd@gmail.com', 1, '$2b$10$.clbiviRBNrPEeexKmWuk.RUeLgd/YdCLgaUz4nKh6wEnXESI8zum', '', '2020-12-29T19-10-42.431Zcoffee 1.png', '', '', 'female', '12/30/2020, 01:59:52', '12/30/2020, 02:10:42', '', 1),
(8, 'aabbcc', '', '', 'aabbccc@gmail.com', 1, '$2b$10$Sx6fyhJigi04cYDtUD0u1O8z59KhsWJav7d1HEDNxJ21Ycxw1Ob0C', '', '2020-12-30T06-00-30.604Znitish-meena-RbbdzZBKRDY-unsplash.jpg', 'Rasuna Said strreet', '', 'female', '12/30/2020, 02:00:05', '12/30/2020, 13:00:30', '', 1),
(9, 'a', '', '', 'ania@gmail.com', 1, '$2b$10$M96LfR1ab08Ay3x60eSGWuX6RwywT9QcI2hZQbPUmCBzR9O6a1TTO', '', '', '', '', '', '12/30/2020, 09:22:26', '', '', 1),
(10, 'b', '', '', 'aniab@gmail.com', 1, '$2b$10$SQLbcUJCXdW7YSp809LfUeC818E8Uyq8EAN3GtnJuE7hN0VI09a1W', '', '2020-12-30T05-45-26.337Zcoffee 1.png', '', '', '', '12/30/2020, 12:45:26', '', '', 1);

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
  MODIFY `coupon_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT untuk tabel `detail_history`
--
ALTER TABLE `detail_history`
  MODIFY `detail_history_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT untuk tabel `history`
--
ALTER TABLE `history`
  MODIFY `history_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT untuk tabel `product`
--
ALTER TABLE `product`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT untuk tabel `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
