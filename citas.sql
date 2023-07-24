-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 24-07-2023 a las 02:58:33
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bases_d`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `citas`
--

CREATE TABLE `citas` (
  `fecha` varchar(50) NOT NULL,
  `cedula` int(11) NOT NULL,
  `especialidad` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `citas`
--

INSERT INTO `citas` (`fecha`, `cedula`, `especialidad`) VALUES
('', 3412, 'Medicina interna'),
('', 3412, 'Medicina interna'),
('', 3412, 'Medicina interna'),
('', 0, ''),
('', 0, ''),
('', 0, ''),
('', 3412, 'Medicina interna'),
('', 34132, 'Cardiología'),
('', 34132, 'Cardiología'),
('', 53934608, 'Medicina general'),
('', 34132, 'Cardiología'),
('', 43255, 'Dermatología'),
('3 de mayo de 2003', 10184, 'Medicina interna'),
('7 de abril de 2025', 542335, 'Dermatología'),
('3 de agosto de 2023', 56353, 'Dermatología');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
