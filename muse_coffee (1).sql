-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 29 Des 2020 pada 10.05
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
(1, 1, 'FNPR15RG', 20, 'Get 20% OFF for Veggie Tomato Mix', '2020-10-10', '2021-02-01', '', '12/28/2020, 14:27:03', '12/28/2020, 21:56:12', '12/28/2020, 21:55:59', 1);

-- --------------------------------------------------------

--
-- Struktur dari tabel `couponn`
--

CREATE TABLE `couponn` (
  `coupon_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `coupon_code` varchar(100) NOT NULL,
  `coupon_disc` int(5) NOT NULL,
  `coupon_detail` varchar(300) NOT NULL,
  `coupon_background_color` varchar(50) NOT NULL,
  `coupon_created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `coupon_updated_at` datetime NOT NULL,
  `coupon_status` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `couponn`
--

INSERT INTO `couponn` (`coupon_id`, `product_id`, `coupon_code`, `coupon_disc`, `coupon_detail`, `coupon_background_color`, `coupon_created_at`, `coupon_updated_at`, `coupon_status`) VALUES
(1, 1, 'VFDGYY76', 25, 'delivery fees', '#895537', '2020-12-14 03:28:09', '2020-12-13 23:43:55', 1),
(2, 2, 'JKSNIREO12', 10, '1 cup of Cold Brew', 'burlywood', '2020-12-13 23:20:12', '0000-00-00 00:00:00', 1),
(3, 3, 'FRWOPNSB', 5, 'Salty Rice', 'rosybrown', '2020-12-14 02:28:25', '2020-12-14 02:31:36', 1),
(4, 4, 'FRWHJSD', 10, 'Drum Sticks', '#FFCB65', '2020-12-14 06:11:55', '0000-00-00 00:00:00', 1);

-- --------------------------------------------------------

--
-- Struktur dari tabel `detail_history`
--

CREATE TABLE `detail_history` (
  `detail_history_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `qty` int(11) NOT NULL,
  `total` int(11) NOT NULL,
  `history_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `detail_history`
--

INSERT INTO `detail_history` (`detail_history_id`, `product_id`, `qty`, `total`, `history_id`) VALUES
(2, 1, 1, 0, 1),
(4, 2, 1, 0, 1);

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
  `history_created_at` datetime NOT NULL,
  `history_checked_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `history`
--

INSERT INTO `history` (`history_id`, `history_invoice`, `history_subtotal`, `payment_method`, `user_id`, `admin_id`, `history_checked`, `history_created_at`, `history_checked_at`) VALUES
(1, 'mc-1', 56000, 'Cash on Delivery', 1, 0, 0, '2020-12-28 00:00:00', '2020-12-29 00:10:46'),
(2, 'mc-2', 30000, 'Cash on Delivery', 1, 0, 0, '2020-12-28 00:00:00', '2020-12-29 00:40:24'),
(3, 'mc-3', 40000, 'Cash on Delivery', 1, 0, 0, '2020-12-28 00:00:00', '2020-12-29 00:53:34'),
(4, 'mc-4', 17000, 'Cash on Delivery', 1, 0, 0, '2020-12-28 00:00:00', '2020-12-29 01:01:10'),
(5, 'mc-5', 21000, 'Cash on Delivery', 1, 0, 0, '2020-12-28 00:00:00', '2020-12-29 01:22:17'),
(6, 'mc-6', 70000, 'Cash on Delivery', 1, 0, 1, '2020-12-28 00:00:00', '0000-00-00 00:00:00'),
(7, 'mc-7', 50000, 'Cash on Delivery', 1, 0, 0, '2020-12-28 00:00:00', '2020-12-29 05:55:40'),
(8, 'mc-8', 24000, 'Cash on Delivery', 1, 0, 0, '2020-12-28 00:00:00', '2020-12-29 06:05:44'),
(9, 'mc-9', 30000, 'Cash on Delivery', 1, 0, 1, '2020-12-28 00:00:00', '0000-00-00 00:00:00'),
(10, 'mc-10', 21000, 'Cash on Delivery', 1, 0, 1, '2020-12-29 22:00:00', '0000-00-00 00:00:00'),
(11, 'mc-11', 56000, 'Cash on Delivery', 1, 0, 1, '2020-12-29 22:49:02', '0000-00-00 00:00:00'),
(12, 'mc-12', 56000, 'Cash on Delivery', 1, 0, 1, '2020-12-29 02:02:45', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Struktur dari tabel `historyy`
--

CREATE TABLE `historyy` (
  `history_id` int(11) NOT NULL,
  `history_invoice` varchar(10) NOT NULL,
  `subtotal` int(11) NOT NULL,
  `payment_method` varchar(10) NOT NULL,
  `status` int(1) NOT NULL,
  `user_id` int(11) NOT NULL,
  `history_created_at` time NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `historyy`
--

INSERT INTO `historyy` (`history_id`, `history_invoice`, `subtotal`, `payment_method`, `status`, `user_id`, `history_created_at`) VALUES
(4, 'mc-02', 56000, 'cash', 1, 1, '08:50:29'),
(5, 'MC-03', 25000, 'ACDS', 1, 1, '00:00:00');

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
(6, 1, 0, 'Vanilla-Cardamom Kulfi', '', 17000, '[\"250\", \"300\"]', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis aliquid doloremque, nobis officiis similique facilis cumque? Vitae ea id quibusdam tempore minima laborum, corrupti tempora est temporibus sequi voluptatibus voluptate.', '', '', 30, '[\"Takeaway\"]', 'true', '12/27/2020, 15:12:39', '12/28/2020, 16:57:13', '12/28/2020, 16:01:17', 1),
(7, 5, 0, 'Lemongrasss Chicken Dumplings', '2020-12-27T08-17-30.625ZSoy-Ginger-Dipping-Sauce-PictureTheRecipe.jpg', 21000, '[\"250\", \"300\", \"500\"]', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis aliquid doloremque, nobis officiis similique facilis cumque? Vitae ea id quibusdam tempore minima laborum, corrupti tempora est temporibus sequi voluptatibus voluptate.', '', '', 50, '[\"Home delivery\", \"Dine in\", \"Takeaway\"]', 'true', '12/27/2020, 15:17:30', '', '', 1),
(8, 5, 0, 'Sausages', '2020-12-27T08-19-17.354Zimage 37.png', 15000, '[\"250\", \"300\"]', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis aliquid doloremque, nobis officiis similique facilis cumque? Vitae ea id quibusdam tempore minima laborum, corrupti tempora est temporibus sequi voluptatibus voluptate.', '', '', 50, '[\"Home delivery\", \"Dine in\", \"Takeaway\"]', 'true', '12/27/2020, 15:19:17', '', '', 1),
(9, 3, 0, 'Lemon Iced Tea', '2020-12-27T08-40-26.733Zlemon-Iced-Tea.jpg', 15000, '[\"R\", \"L\"]', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis aliquid doloremque, nobis officiis similique facilis cumque? Vitae ea id quibusdam tempore minima laborum, corrupti tempora est temporibus sequi voluptatibus voluptate.', '', '', 50, '[\"Home delivery\", \"Dine in\", \"Takeaway\"]', 'false', '12/27/2020, 15:40:26', '', '', 1),
(10, 3, 0, 'Lemon Iced Tea', '2020-12-28T06-08-16.096Zlemon-Iced-Tea.jpg', 15000, '[\"X\", \"R\"]', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis aliquid doloremque, nobis officiis similique facilis cumque? Vitae ea id quibusdam tempore minima laborum, corrupti tempora est temporibus sequi voluptatibus voluptate.', '', '', 50, '[\"Home delivery\", \"Dine in\", \"Takeaway\"]', 'false', '12/28/2020, 13:08:16', '', '', 1);

-- --------------------------------------------------------

--
-- Struktur dari tabel `productt`
--

CREATE TABLE `productt` (
  `product_id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL,
  `coupon_id` int(11) NOT NULL,
  `product_name` varchar(100) NOT NULL,
  `product_photo` varchar(300) NOT NULL,
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
-- Dumping data untuk tabel `productt`
--

INSERT INTO `productt` (`product_id`, `category_id`, `coupon_id`, `product_name`, `product_photo`, `product_price`, `product_size`, `product_detail`, `start_delivery_hour`, `end_delivery_hour`, `stock_product`, `delivery_methods`, `is_food`, `product_created_at`, `product_updated_at`, `product_deleted_at`, `product_status`) VALUES
(1, 1, 1, 'Veggie tomato mix', 'veggie-img.png', 36000, '', '', '', '', 0, '', '', '2020-12-13 06:30:35', '0000-00-00 00:00:00', '2020-12-27 12:11:58', 1),
(2, 1, 2, 'Summer Fried Rice', 'veggie-img.png', 32000, '', '', '', '', 0, '', '', '2020-12-13 15:10:03', '0000-00-00 00:00:00', '2020-12-27 12:11:58', 1),
(3, 1, 3, 'Salty Rice', 'veggie-img.png', 20000, '', '', '', '', 0, '', '', '2020-12-13 15:10:03', '0000-00-00 00:00:00', '2020-12-27 12:11:58', 1),
(4, 1, 4, 'Drum Sticks', 'veggie-img.png', 35000, '[\"250\", \"300\", \"500\"]', '', '', '', 0, '', 'true', '2020-12-13 14:11:27', '0000-00-00 00:00:00', '2020-12-27 12:11:58', 1),
(5, 2, 0, 'Creamy Ice Latte', 'veggie-img.png', 21000, '', '', '', '', 0, '', '', '2020-12-13 17:46:08', '0000-00-00 00:00:00', '2020-12-27 12:11:58', 1),
(6, 4, 0, '', '2020-12-27T04-36-41.470Z0081.jpg', 15000, '', '', '', '', 0, '', '', '2020-12-14 00:20:19', '2020-12-27 04:36:41', '2020-12-27 12:11:58', 1),
(7, 1, 0, 'Fried Rice', 'veggie-img.png', 36000, '', '', '', '', 0, '', '', '2020-12-14 06:00:12', '0000-00-00 00:00:00', '2020-12-27 12:11:58', 0),
(8, 1, 0, 'Fried Rice', 'veggie-img.png', 40000, '', '', '', '', 0, '', '', '2020-12-14 08:47:05', '0000-00-00 00:00:00', '2020-12-27 12:11:58', 1),
(9, 3, 0, 'lolo', 'veggie-img.png', 13000, '', '', '', '', 0, '', '', '2020-12-16 04:25:50', '0000-00-00 00:00:00', '2020-12-27 12:11:58', 0),
(10, 1, 0, 'galon', 'veggie-img.png', 6000, '', '', '', '', 0, '', '', '2020-12-16 04:39:25', '0000-00-00 00:00:00', '2020-12-27 12:11:58', 0),
(11, 1, 0, 'mouse', 'veggie-img.png', 10000, '', '', '', '', 0, '', '', '2020-12-16 04:49:56', '0000-00-00 00:00:00', '2020-12-27 12:11:58', 0),
(12, 1, 0, 'koko', 'veggie-img.png', 12000, '', '', '', '', 0, '', '', '2020-12-17 07:55:19', '0000-00-00 00:00:00', '2020-12-27 12:11:58', 0),
(13, 2, 0, 'Cold Brew', 'image 25', 30000, '[\"R\", \"L\", \"XL\"]', 'Cold brewing is a method of brewing that combines ground coffee and cool water and uses time instead of heat to extract the flavor. It is brewed in small batches and steeped for as long as 48 hours.', '', '', 0, '', 'false', '2020-12-20 03:34:03', '0000-00-00 00:00:00', '2020-12-27 12:11:58', 1),
(14, 1, 0, 'Fried Rice', '', 18000, '', '', '', '', 0, '', '', '2020-12-23 01:04:22', '0000-00-00 00:00:00', '2020-12-27 12:11:58', 1),
(15, 4, 0, '', '2020-12-27T02-29-51.559Znitish-meena-RbbdzZBKRDY-unsplash.jpg', 15000, '', '', '', '', 0, '', '', '2020-12-26 14:45:39', '2020-12-27 02:29:51', '2020-12-27 12:11:58', 1),
(16, 0, 0, '', '2020-12-27T00-46-20.198Z0081.jpg', 0, '', '', '', '', 0, '', '', '2020-12-27 00:46:20', '0000-00-00 00:00:00', '2020-12-27 12:11:58', 1),
(17, 0, 0, '', '2020-12-27T01-40-24.568Z0081.jpg', 0, '', '', '', '', 0, '', '', '2020-12-27 01:40:24', '0000-00-00 00:00:00', '2020-12-27 12:11:58', 1),
(18, 4, 0, '', '2020-12-27T03-42-59.533Z0081.jpg', 15000, '', '', '', '', 0, '', '', '2020-12-27 02:37:48', '2020-12-27 03:43:00', '2020-12-27 12:11:58', 1),
(19, 4, 0, '', '', 15000, '', '', '', '', 0, '', '', '2020-12-27 02:47:23', '2020-12-27 02:48:46', '2020-12-27 05:27:34', 0),
(20, 4, 0, '', '2020-12-27T03-54-15.436Z0081.jpg', 15000, '', '', '', '', 0, '', '', '2020-12-27 03:51:44', '2020-12-27 03:54:15', '2020-12-27 12:11:58', 1),
(21, 4, 0, 'cobaaaaaaaalagiyaa', '', 0, '', '', '', '', 0, '', '', '2020-12-27 04:15:41', '0000-00-00 00:00:00', '2020-12-27 12:11:58', 0),
(22, 4, 0, 'cobaaaaaaaalagiyaa', '2020-12-27T05-33-11.432ZScreenshot_2019-03-31-01-07-02-75 (2).png', 0, '', '', '', '', 0, '', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 1),
(23, 4, 0, 'cobaaaaaaaalagiyaa', '2020-12-27T05-42-32.451ZScreenshot_2019-03-31-01-07-02-75 (2).png', 0, '', '', '', '', 0, '', '', '12/27/2020, 12:42:32', '', '', 1);

-- --------------------------------------------------------

--
-- Struktur dari tabel `size`
--

CREATE TABLE `size` (
  `size_id` int(11) NOT NULL,
  `size_name` varchar(10) NOT NULL,
  `size_created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `size_updated_at` datetime NOT NULL,
  `size_status` int(1) NOT NULL,
  `size_kind` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `size`
--

INSERT INTO `size` (`size_id`, `size_name`, `size_created_at`, `size_updated_at`, `size_status`, `size_kind`) VALUES
(1, 'R', '2020-12-14 18:30:40', '0000-00-00 00:00:00', 1, 0),
(2, 'L', '2020-12-14 18:30:40', '0000-00-00 00:00:00', 1, 0),
(3, 'XL', '2020-12-14 18:31:21', '0000-00-00 00:00:00', 1, 0),
(4, '250', '2020-12-14 18:34:23', '0000-00-00 00:00:00', 1, 1),
(5, '300', '2020-12-14 18:34:23', '0000-00-00 00:00:00', 1, 1),
(6, '500', '2020-12-14 18:34:54', '0000-00-00 00:00:00', 1, 1);

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
(2, 'viani', '', '', 'vianiani045@gmail.com', 1, '$2b$10$1ikGi8vhjrzzwySuiaStE.5bgGExNw3fT4Sbahje/ragbRxEd7UeC', '', '2020-12-28T01-30-33.607Zcoffee 1.png', '', '', '', '12/28/2020, 08:30:33', '', '', 1);

-- --------------------------------------------------------

--
-- Struktur dari tabel `userr`
--

CREATE TABLE `userr` (
  `user_id` int(11) NOT NULL,
  `user_name` varchar(200) NOT NULL,
  `user_email` varchar(200) NOT NULL,
  `user_role` int(3) NOT NULL,
  `user_password` varchar(300) NOT NULL,
  `user_created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `user_updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `userr`
--

INSERT INTO `userr` (`user_id`, `user_name`, `user_email`, `user_role`, `user_password`, `user_created_at`, `user_updated_at`) VALUES
(1, 'Ani', 'ani@gmail.com', 1, '$2b$10$/q6WOciFOz7TSRLQO33GjuQyaXvgGsvAu6r8gzB4eyIZv9H0pPzKC', '2020-12-22 14:44:08', '0000-00-00 00:00:00'),
(2, 'Ania', 'ani@gmail.com', 1, '$2b$10$zlwKAghqhIoRBALEnkUXpOAecHk0Se08tXi3hQmjvLQp7WIS/0BRm', '2020-12-22 14:46:53', '0000-00-00 00:00:00'),
(3, 'Ania Yadi Imah', 'aniay@gmail.com', 1, '$2b$10$CnLdhQ9Hi.a.n/jHa5BirupowcPrvTACJU2.wT0j8cXyAadjn3Poe', '2020-12-22 23:35:58', '0000-00-00 00:00:00');

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
-- Indeks untuk tabel `couponn`
--
ALTER TABLE `couponn`
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
-- Indeks untuk tabel `historyy`
--
ALTER TABLE `historyy`
  ADD PRIMARY KEY (`history_id`);

--
-- Indeks untuk tabel `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`product_id`);

--
-- Indeks untuk tabel `productt`
--
ALTER TABLE `productt`
  ADD PRIMARY KEY (`product_id`);

--
-- Indeks untuk tabel `size`
--
ALTER TABLE `size`
  ADD PRIMARY KEY (`size_id`);

--
-- Indeks untuk tabel `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- Indeks untuk tabel `userr`
--
ALTER TABLE `userr`
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
-- AUTO_INCREMENT untuk tabel `couponn`
--
ALTER TABLE `couponn`
  MODIFY `coupon_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT untuk tabel `detail_history`
--
ALTER TABLE `detail_history`
  MODIFY `detail_history_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT untuk tabel `history`
--
ALTER TABLE `history`
  MODIFY `history_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT untuk tabel `historyy`
--
ALTER TABLE `historyy`
  MODIFY `history_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT untuk tabel `product`
--
ALTER TABLE `product`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT untuk tabel `productt`
--
ALTER TABLE `productt`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT untuk tabel `size`
--
ALTER TABLE `size`
  MODIFY `size_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT untuk tabel `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT untuk tabel `userr`
--
ALTER TABLE `userr`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
