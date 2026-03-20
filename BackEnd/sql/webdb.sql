-- phpMyAdmin SQL Dump
-- version 5.2.3
-- https://www.phpmyadmin.net/
--
-- Host: db:3306
-- Generation Time: Mar 19, 2026 at 12:05 PM
-- Server version: 8.0.45
-- PHP Version: 8.3.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `webdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `Accounts`
--

CREATE TABLE `Accounts` (
  `Id_Accounts` int NOT NULL,
  `Fristname` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `Lastname` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `Age` int DEFAULT NULL,
  `User` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `Password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `Email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `Accounts`
--

INSERT INTO `Accounts` (`Id_Accounts`, `Fristname`, `Lastname`, `Age`, `User`, `Password`, `Email`) VALUES
(1, 'Natthaphat', 'Keattiwaraphorn', 18, 'Cuulgaming', 'zxcvbnmjam1234', 'nattapatskate@gmail.com'),
(2, 'Natthaphat', 'Keattiwaraphorn', 18, 'Cuulgaming7', 'zxcvbnmjam1234', 'nattapatskate7@gmail.com'),
(4, 'Namo', 'Tassa', 18, 'Nanajaja', 'zxcvbnmjam123', 'Tassanamoputtaya@gmail.com'),
(6, 'Namo1', 'Tassa1', 17, 'aa', 'bbbbbbbbbbbbb', 'Tassanamoputtaya12@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `Items`
--

CREATE TABLE `Items` (
  `Id_items` int NOT NULL,
  `Item_name` text NOT NULL COMMENT 'ส่วนของชื่อที่ res หลังจากค้น Id_item',
  `Stock` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `Items`
--

INSERT INTO `Items` (`Id_items`, `Item_name`, `Stock`) VALUES
(1, 'Computer&Notebook', 50),
(2, 'Webcam', 10),
(3, 'Tablet', 15),
(4, 'Mouse', 16),
(5, 'Keyboard Aula s98s', 17);

-- --------------------------------------------------------

--
-- Table structure for table `Report`
--

CREATE TABLE `Report` (
  `ID_Report` int NOT NULL,
  `ID_Account` int NOT NULL,
  `Itemsnames` text NOT NULL,
  `Report_Discription` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `Report`
--

INSERT INTO `Report` (`ID_Report`, `ID_Account`, `Itemsnames`, `Report_Discription`) VALUES
(1, 1, 'Notebook', 'คอมกากกระจอกบอกเจ๋งเมื่อไหร่จะ แรงวะจอต้องการใหญ่ๆอะเขียนโค้ดสบายๆ'),
(2, 2, 'Mouse', 'กดไม่ติดเลยเนี่ยเม้าโครตกากกระจอกจัด');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Accounts`
--
ALTER TABLE `Accounts`
  ADD PRIMARY KEY (`Id_Accounts`),
  ADD UNIQUE KEY `Email` (`Email`),
  ADD UNIQUE KEY `User` (`User`);

--
-- Indexes for table `Items`
--
ALTER TABLE `Items`
  ADD PRIMARY KEY (`Id_items`);

--
-- Indexes for table `Report`
--
ALTER TABLE `Report`
  ADD PRIMARY KEY (`ID_Report`),
  ADD KEY `ID_Account` (`ID_Account`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Accounts`
--
ALTER TABLE `Accounts`
  MODIFY `Id_Accounts` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `Items`
--
ALTER TABLE `Items`
  MODIFY `Id_items` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `Report`
--
ALTER TABLE `Report`
  MODIFY `ID_Report` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `Report`
--
ALTER TABLE `Report`
  ADD CONSTRAINT `Report_ibfk_1` FOREIGN KEY (`ID_Account`) REFERENCES `Accounts` (`Id_Accounts`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
