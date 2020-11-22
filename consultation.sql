-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 06 Maj 2020, 18:54
-- Wersja serwera: 10.4.11-MariaDB
-- Wersja PHP: 7.2.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `consultation`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `consultation_scheme`
--

CREATE TABLE `consultation_scheme` (
  `id` int(11) NOT NULL,
  `teacher_id` int(11) NOT NULL,
  `start_time` time NOT NULL,
  `finish_time` time NOT NULL,
  `day` int(1) NOT NULL,
  `start_date` date NOT NULL,
  `end_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `consultation_scheme`
--

INSERT INTO `consultation_scheme` (`id`, `teacher_id`, `start_time`, `finish_time`, `day`, `start_date`, `end_date`) VALUES
(4, 2, '10:00:00', '11:00:00', 1, '2020-04-22', '2020-05-15'),
(17, 2, '14:00:00', '15:00:00', 3, '2020-05-04', '2020-05-30');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `student_consultation`
--

CREATE TABLE `student_consultation` (
  `id` int(11) NOT NULL,
  `teacher_id` int(11) NOT NULL,
  `subject_id` int(11) NOT NULL,
  `student_name` varchar(40) NOT NULL,
  `student_surname` varchar(40) NOT NULL,
  `student_email` varchar(40) NOT NULL,
  `date` date NOT NULL,
  `start_time` time NOT NULL,
  `finish_time` time NOT NULL,
  `accepted` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `student_consultation`
--

INSERT INTO `student_consultation` (`id`, `teacher_id`, `subject_id`, `student_name`, `student_surname`, `student_email`, `date`, `start_time`, `finish_time`, `accepted`) VALUES
(3, 2, 2, 'Adam', 'Kwiat', 'kwiat.adam@gmail.com', '2020-05-10', '12:40:00', '12:50:00', 1),
(6, 2, 2, 'sdasd', 'asdasd', 'dasd', '2020-05-06', '09:10:00', '09:20:00', 1),
(7, 2, 2, 'sdasd', 'asdasd', 'dasd', '2020-05-06', '09:10:00', '09:20:00', 1),
(8, 2, 2, 'sdasd', 'asdasd', 'dasd', '2020-05-05', '14:10:00', '14:20:00', 0),
(9, 2, 2, 'sdasd', 'asdasd', 'dasd', '2020-05-05', '14:50:00', '15:00:00', 0),
(10, 2, 2, 'sdasd', 'asdasd', 'dasd', '2020-05-05', '14:10:00', '14:20:00', 0),
(11, 2, 2, 'sdasd', 'asdasd', 'dasd', '2020-05-05', '14:10:00', '14:20:00', 0),
(12, 2, 2, 'sdasd', 'asdasd', 'dasd', '2020-05-05', '14:10:00', '14:20:00', 0),
(13, 2, 2, 'sdasd', 'asdasd', 'dasd', '2020-05-05', '14:10:00', '14:20:00', 0),
(14, 2, 2, 'sdasd', 'asdasd', 'dasd', '2020-05-05', '14:20:00', '14:30:00', 0),
(15, 2, 2, 'sdasd', 'asdasd', 'dasd', '2020-05-09', '10:20:00', '10:30:00', 1),
(16, 2, 2, 'sdasd', 'asdasd', 'dasd', '2020-05-09', '10:30:00', '10:40:00', 0),
(17, 2, 2, 'sdasd', 'asdasd', 'dasd', '2020-05-09', '10:00:00', '10:10:00', 0),
(18, 2, 2, 'sdasd', 'asdasd', 'dasd', '2020-05-07', '14:10:00', '14:20:00', 0),
(19, 2, 2, 'sdasd', 'asdasd', 'dasd', '2020-05-06', '14:10:00', '14:20:00', 0),
(20, 2, 2, 'sdasd', 'asdasd', 'dasd', '2020-05-06', '14:20:00', '14:30:00', 0),
(21, 2, 2, 'sdasd', 'asdasd', 'dasd', '2020-05-06', '14:50:00', '15:00:00', 0),
(22, 2, 2, 'sdasd', 'asdasd', 'dasd', '2020-05-06', '14:30:00', '14:40:00', 0),
(23, 2, 2, 'sdasd', 'asdasd', 'dasd', '2020-05-06', '14:40:00', '14:50:00', 0),
(24, 2, 2, 'sdasd', 'asdasd', 'dasd', '2020-05-06', '14:00:00', '14:10:00', 0),
(25, 2, 2, 'sdasd', 'asdasd', 'dasd', '2020-05-11', '10:00:00', '10:20:00', 0),
(26, 2, 2, 'sdasd', 'asdasd', 'dasd', '2020-05-11', '10:20:00', '10:30:00', 0),
(27, 2, 2, 'sdasd', 'asdasd', 'dasd', '2020-05-20', '15:30:00', '17:40:00', 1),
(28, 2, 2, 'sdasd', 'asdasd', 'dasd', '2020-05-20', '14:40:00', '14:50:00', 0),
(29, 2, 2, 'sdasd', 'asdasd', 'dasd', '2020-05-11', '10:30:00', '10:40:00', 0),
(30, 2, 2, 'sdasd', 'asdasd', 'dasd', '2020-05-11', '10:40:00', '10:50:00', 0),
(31, 2, 2, 'sdasd', 'asdasd', 'dasd', '2020-05-11', '10:50:00', '11:00:00', 0),
(32, 2, 2, 'sdasd', 'asdasd', 'dasd', '2020-05-13', '14:00:00', '14:10:00', 0);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `subject`
--

CREATE TABLE `subject` (
  `id` int(11) NOT NULL,
  `name` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `subject`
--

INSERT INTO `subject` (`id`, `name`) VALUES
(1, 'Inne'),
(2, 'Programowanie'),
(3, 'Analiza matematyczna'),
(4, 'Grafika komputerowa'),
(12, 'Nowy');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `teacher`
--

CREATE TABLE `teacher` (
  `id` int(11) NOT NULL,
  `name` varchar(40) NOT NULL,
  `surname` varchar(40) NOT NULL,
  `password` varchar(100) NOT NULL,
  `email` varchar(40) NOT NULL,
  `first_login` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `teacher`
--

INSERT INTO `teacher` (`id`, `name`, `surname`, `password`, `email`, `first_login`) VALUES
(2, 'Jan', 'Nowak', '$2y$10$N6Ii8PH2VwU6FnkkVkqjPu17bKgem8hSamD/vEXA/w2DOy6oj/Vl2', 'jan.kowalski@us.pl', 0),
(9, 'Adam', 'Nowak', '$2y$10$AElvn/kAqRkdN524r8GdleVkE3ocwSbrbgWphdc9OcmmabEKhiiNG', 'adam.nowak@us.pl', 1);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `teacher_subject`
--

CREATE TABLE `teacher_subject` (
  `id` int(11) NOT NULL,
  `teacher_id` int(11) NOT NULL,
  `subject_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `teacher_subject`
--

INSERT INTO `teacher_subject` (`id`, `teacher_id`, `subject_id`) VALUES
(14, 2, 1),
(20, 2, 4),
(27, 2, 3),
(28, 2, 12),
(29, 9, 1);

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `consultation_scheme`
--
ALTER TABLE `consultation_scheme`
  ADD PRIMARY KEY (`id`),
  ADD KEY `teacher_id` (`teacher_id`) USING BTREE;

--
-- Indeksy dla tabeli `student_consultation`
--
ALTER TABLE `student_consultation`
  ADD PRIMARY KEY (`id`),
  ADD KEY `subject_id` (`subject_id`) USING BTREE,
  ADD KEY `teacher_id` (`teacher_id`);

--
-- Indeksy dla tabeli `subject`
--
ALTER TABLE `subject`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `teacher`
--
ALTER TABLE `teacher`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `teacher_subject`
--
ALTER TABLE `teacher_subject`
  ADD PRIMARY KEY (`id`),
  ADD KEY `teacher_id` (`teacher_id`),
  ADD KEY `subject_id` (`subject_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT dla tabeli `consultation_scheme`
--
ALTER TABLE `consultation_scheme`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT dla tabeli `student_consultation`
--
ALTER TABLE `student_consultation`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT dla tabeli `subject`
--
ALTER TABLE `subject`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT dla tabeli `teacher`
--
ALTER TABLE `teacher`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT dla tabeli `teacher_subject`
--
ALTER TABLE `teacher_subject`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- Ograniczenia dla zrzutów tabel
--

--
-- Ograniczenia dla tabeli `consultation_scheme`
--
ALTER TABLE `consultation_scheme`
  ADD CONSTRAINT `consultation_scheme_ibfk_1` FOREIGN KEY (`teacher_id`) REFERENCES `teacher` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ograniczenia dla tabeli `student_consultation`
--
ALTER TABLE `student_consultation`
  ADD CONSTRAINT `student_consultation_ibfk_2` FOREIGN KEY (`subject_id`) REFERENCES `subject` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `student_consultation_ibfk_3` FOREIGN KEY (`teacher_id`) REFERENCES `teacher` (`id`) ON DELETE CASCADE;

--
-- Ograniczenia dla tabeli `teacher_subject`
--
ALTER TABLE `teacher_subject`
  ADD CONSTRAINT `teacher_subject_ibfk_1` FOREIGN KEY (`teacher_id`) REFERENCES `teacher` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `teacher_subject_ibfk_2` FOREIGN KEY (`subject_id`) REFERENCES `subject` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
