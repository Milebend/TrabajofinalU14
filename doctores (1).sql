-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 24-07-2023 a las 02:59:42
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
-- Estructura de tabla para la tabla `doctores`
--

CREATE TABLE `doctores` (
  `cedula` int(11) NOT NULL,
  `nombre` varchar(50) DEFAULT NULL,
  `apellido` varchar(50) DEFAULT NULL,
  `especialidad` varchar(50) DEFAULT NULL,
  `consultorio` char(50) DEFAULT NULL,
  `correo` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `doctores`
--

INSERT INTO `doctores` (`cedula`, `nombre`, `apellido`, `especialidad`, `consultorio`, `correo`) VALUES
(5432, 'Dora', 'Feliz', 'Medicina interna', '456', 'doritafe@medicina.com'),
(34562, 'Tania', 'Jarro', 'Psicología', '203', 'tan.jar@medicina.com'),
(45678, 'Dorys', 'Vallejo', 'Medicina interna', '456', 'dory@doctora.com'),
(67654, 'Gabriela', 'Gomez', 'Medicina interna', '201', 'gabmed@medicina.com'),
(67894, 'Sara', 'Yaya', 'Dermatología', '345', 'sarita@doctora.com'),
(90876, 'Felipe', 'Garzon', 'Dermatología', '456', 'feli@fdmedicina.com'),
(97890, 'Graciela', ' Benavides', 'Medicina general', '709', 'graci.be@medica.com'),
(678766, 'Fernando ', 'Garcia', 'Radiología', '456', 'docfer@radiologia.com'),
(987422, 'Alejandro ', 'Fernandez', 'Odontología', '101', 'ale.fer@medicina.com'),
(2468976, 'Franciso', 'Santos', 'Cardiología', '503', 'franscis@hotmail.com'),
(3463665, 'Gabriel', 'Mejia', 'Rehabilitación física', '456', 'meji@doctor.com'),
(21567836, 'Juan', 'Lopez', '', '506A', 'juan@docmed.com'),
(34523562, 'Milena', 'Gaviria', '', '456', 'miledoc@gmail.com'),
(375658292, 'Margarita', 'Lopez', 'Dermatología', '302', 'mardoc@gmail.com');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `doctores`
--
ALTER TABLE `doctores`
  ADD PRIMARY KEY (`cedula`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
