-- phpMyAdmin SQL Dump
-- version 5.2.3
-- https://www.phpmyadmin.net/
--
-- Host: db:3306
-- Generation Time: Mar 20, 2026 at 12:30 PM
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
-- Table structure for table `AdminAccount`
--

CREATE TABLE `AdminAccount` (
  `No` int NOT NULL,
  `ID_Admin` int NOT NULL,
  `Username` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `AdminAccount`
--

INSERT INTO `AdminAccount` (`No`, `ID_Admin`, `Username`) VALUES
(1, 1, 'Cuulgaming');

-- --------------------------------------------------------

--
-- Table structure for table `Durable_articles`
--

CREATE TABLE `Durable_articles` (
  `No` int NOT NULL,
  `ItemstypeData` int NOT NULL,
  `DuraticelsID` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `Duraticelstype` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `DuraticlesName` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `Durable_articles`
--

INSERT INTO `Durable_articles` (`No`, `ItemstypeData`, `DuraticelsID`, `Duraticelstype`, `DuraticlesName`) VALUES
(1, 1, '#1101', 'Computer', 'Computer cpu Intelcore i9-14900k'),
(2, 1, '#1102', 'Computer', 'Computer cpu Intelcorei5-7200u'),
(3, 1, '#1103', 'Computer', 'Computer cpu Pentium 4'),
(4, 1, '#1104', 'Notebook', 'Notebook omen'),
(5, 1, '#1105', 'Notebook', 'Notebook Isus'),
(6, 2, '#2101', 'Webcam', 'Logitech C922'),
(7, 2, '#2102', 'Webcam', 'Logitech C505e'),
(8, 2, '#2103', 'Webcam', 'Logitech BRIO'),
(9, 2, '#2104', 'Webcam', 'GW1 PRO'),
(10, 3, '#3101', 'Tablet', 'Xiaomi pad 7s'),
(11, 3, '#3102', 'Tablet', 'Xiaomi pad 7s'),
(12, 3, '#3103', 'Tablet', 'Xiaomi pad 6s'),
(13, 4, '#4101', 'Mouse', 'Logitech G502'),
(14, 4, '#4102', 'Mouse', 'Logitech G502'),
(15, 4, '#4103', 'Mouse', 'Logitech G PRO X SUPERLIGHT 2'),
(16, 4, '#4104', 'Mouse', 'Logitech G PRO X SUPERLIGHT 2'),
(17, 4, '#4105', 'Mouse', 'Logitech G PRO X SUPERLIGHT 2'),
(18, 5, '#5101', 'Keyboard', 'Aula s98 pro'),
(19, 5, '#5102', 'Keyboard', 'Aula s98 pro'),
(20, 5, '#5103', 'Keyboard', 'Aula s98 pro'),
(21, 5, '#5104', 'Keyboard', 'Aula s98 pro');

-- --------------------------------------------------------

--
-- Table structure for table `ItemsType`
--

CREATE TABLE `ItemsType` (
  `Id_items` int NOT NULL,
  `Item_name` text NOT NULL COMMENT 'ส่วนของชื่อที่ res หลังจากค้น Id_item',
  `Stock` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `ItemsType`
--

INSERT INTO `ItemsType` (`Id_items`, `Item_name`, `Stock`) VALUES
(1, 'Computer&Notebook', 5),
(2, 'Webcam', 4),
(3, 'Tablet', 3),
(4, 'Mouse', 5),
(5, 'Keyboard', 4);

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
  ADD UNIQUE KEY `User` (`User`),
  ADD KEY `Id_Accounts` (`Id_Accounts`);

--
-- Indexes for table `AdminAccount`
--
ALTER TABLE `AdminAccount`
  ADD PRIMARY KEY (`No`),
  ADD KEY `ID_Admin` (`ID_Admin`);

--
-- Indexes for table `Durable_articles`
--
ALTER TABLE `Durable_articles`
  ADD PRIMARY KEY (`No`),
  ADD KEY `ItemstypeData` (`ItemstypeData`);

--
-- Indexes for table `ItemsType`
--
ALTER TABLE `ItemsType`
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
-- AUTO_INCREMENT for table `AdminAccount`
--
ALTER TABLE `AdminAccount`
  MODIFY `No` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `Durable_articles`
--
ALTER TABLE `Durable_articles`
  MODIFY `No` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `ItemsType`
--
ALTER TABLE `ItemsType`
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
-- Constraints for table `AdminAccount`
--
ALTER TABLE `AdminAccount`
  ADD CONSTRAINT `AdminAccount_ibfk_1` FOREIGN KEY (`ID_Admin`) REFERENCES `Accounts` (`Id_Accounts`);

--
-- Constraints for table `Durable_articles`
--
ALTER TABLE `Durable_articles`
  ADD CONSTRAINT `Durable_articles_ibfk_1` FOREIGN KEY (`ItemstypeData`) REFERENCES `ItemsType` (`Id_items`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
