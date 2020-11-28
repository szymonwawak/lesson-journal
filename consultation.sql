-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 28 Lis 2020, 22:37
-- Wersja serwera: 10.4.11-MariaDB
-- Wersja PHP: 7.4.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
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
-- Struktura tabeli dla tabeli `activity`
--

CREATE TABLE `activity` (
  `id` int(11) NOT NULL,
  `name` varchar(80) NOT NULL,
  `start_time` time NOT NULL,
  `finish_time` time NOT NULL,
  `day` int(11) NOT NULL,
  `teacher_id` int(11) NOT NULL,
  `subject_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `activity_subject`
--

CREATE TABLE `activity_subject` (
  `id` int(11) NOT NULL,
  `activity_id` int(11) NOT NULL,
  `subject_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `classes`
--

CREATE TABLE `classes` (
  `id` int(11) NOT NULL,
  `date` date NOT NULL,
  `teacher_classes_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `classes`
--

INSERT INTO `classes` (`id`, `date`, `teacher_classes_id`) VALUES
(1, '2020-11-02', 4),
(2, '0000-00-00', 0),
(3, '2020-11-02', 0),
(4, '2020-11-02', 0),
(5, '2020-11-02', 0),
(6, '2020-11-02', 0),
(7, '2020-11-09', 0),
(8, '2020-11-16', 0),
(9, '2020-11-02', 0),
(13, '2020-11-16', 4),
(14, '2020-11-16', 4);

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
(17, 2, '14:00:00', '15:00:00', 3, '2020-05-19', '2020-05-30'),
(18, 9, '10:00:00', '11:00:00', 2, '2020-04-06', '2020-05-07'),
(20, 9, '10:00:00', '11:00:00', 3, '2020-10-13', '2020-10-30');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `group`
--

CREATE TABLE `group` (
  `id` int(11) NOT NULL,
  `name` varchar(40) NOT NULL,
  `year` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `group`
--

INSERT INTO `group` (`id`, `name`, `year`) VALUES
(1, 'test', 1),
(2, 'test2', 0),
(4, 'test3', 0),
(5, 'dfdsf', 0),
(6, 'ssss', 2),
(7, 'sssssss', 1),
(8, 'sssss', 0),
(9, 'ssssssss', 0),
(11, 'qqqqqq', 0),
(12, 'qqqqqq', 0);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `score`
--

CREATE TABLE `score` (
  `id` int(11) NOT NULL,
  `type` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `teacher_classes_id` int(11) NOT NULL,
  `weight` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `score`
--

INSERT INTO `score` (`id`, `type`, `name`, `teacher_classes_id`, `weight`) VALUES
(84, 'quiz', 'Pszyrka 1', 4, 1),
(85, 'exam', 'Przyrka Test', 4, 3);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `student`
--

CREATE TABLE `student` (
  `id` int(11) NOT NULL,
  `name` varchar(40) NOT NULL,
  `surname` varchar(40) NOT NULL,
  `age` int(11) NOT NULL,
  `group_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `student`
--

INSERT INTO `student` (`id`, `name`, `surname`, `age`, `group_id`) VALUES
(7, 'test', 'test', 0, 1),
(8, 'dfdsfd', 'fdfsdff', 2, 1),
(10, 'adsdas', 'dsadd', 22, 1);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `student_classes`
--

CREATE TABLE `student_classes` (
  `id` int(11) NOT NULL,
  `student_id` int(11) NOT NULL,
  `classes_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `student_classes`
--

INSERT INTO `student_classes` (`id`, `student_id`, `classes_id`) VALUES
(1, 7, 3),
(3, 7, 4),
(5, 7, 5),
(6, 8, 5),
(7, 7, 6),
(8, 8, 6),
(9, 7, 7),
(10, 8, 7),
(11, 7, 8),
(12, 8, 8),
(13, 7, 9),
(14, 8, 9),
(24, 7, 13),
(25, 7, 14);

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
(32, 2, 2, 'sdasd', 'asdasd', 'dasd', '2020-05-13', '14:00:00', '14:10:00', 0),
(33, 9, 1, 'Test', 'Test', 'test@test.pl', '2020-10-14', '10:00:00', '10:10:00', 1);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `student_score`
--

CREATE TABLE `student_score` (
  `id` int(11) NOT NULL,
  `value` int(11) DEFAULT NULL,
  `score_id` int(11) NOT NULL,
  `student_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `student_score`
--

INSERT INTO `student_score` (`id`, `value`, `score_id`, `student_id`) VALUES
(90, 1, 84, 7),
(91, 3, 85, 7),
(92, 3, 84, 8),
(93, 2, 85, 8),
(94, 4, 84, 10),
(95, 4, 85, 10);

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
(12, 'Nowy'),
(13, 'Informatyka'),
(14, 'Test'),
(15, 'Testowy');

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
(9, 'Adam', 'Nowak', '$2y$10$s6Blg8HqJnMMx9m8qM6Ux.xWu5pwuGbmhfrCz0sm9cSZcSvbpI6OW', 'adam.nowak@us.pl', 1);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `teacher_classes`
--

CREATE TABLE `teacher_classes` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `day` int(11) NOT NULL,
  `teacher_subject_id` int(11) NOT NULL,
  `group_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `teacher_classes`
--

INSERT INTO `teacher_classes` (`id`, `name`, `day`, `teacher_subject_id`, `group_id`) VALUES
(1, '123', 3, 20, 2),
(4, '1111', 2, 20, 1);

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
(29, 9, 1),
(30, 9, 3);

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `activity`
--
ALTER TABLE `activity`
  ADD PRIMARY KEY (`id`),
  ADD KEY `teacher_id` (`teacher_id`);

--
-- Indeksy dla tabeli `activity_subject`
--
ALTER TABLE `activity_subject`
  ADD PRIMARY KEY (`id`),
  ADD KEY `teacher_id` (`activity_id`),
  ADD KEY `subject_id` (`subject_id`);

--
-- Indeksy dla tabeli `classes`
--
ALTER TABLE `classes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `teacher_classes_id` (`teacher_classes_id`) USING BTREE;

--
-- Indeksy dla tabeli `consultation_scheme`
--
ALTER TABLE `consultation_scheme`
  ADD PRIMARY KEY (`id`),
  ADD KEY `teacher_id` (`teacher_id`) USING BTREE;

--
-- Indeksy dla tabeli `group`
--
ALTER TABLE `group`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `score`
--
ALTER TABLE `score`
  ADD PRIMARY KEY (`id`),
  ADD KEY `teacher_classes_id` (`teacher_classes_id`);

--
-- Indeksy dla tabeli `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`id`),
  ADD KEY `group_id` (`group_id`);

--
-- Indeksy dla tabeli `student_classes`
--
ALTER TABLE `student_classes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `1` (`student_id`) USING BTREE,
  ADD KEY `2` (`classes_id`) USING BTREE;

--
-- Indeksy dla tabeli `student_consultation`
--
ALTER TABLE `student_consultation`
  ADD PRIMARY KEY (`id`),
  ADD KEY `subject_id` (`subject_id`) USING BTREE,
  ADD KEY `teacher_id` (`teacher_id`);

--
-- Indeksy dla tabeli `student_score`
--
ALTER TABLE `student_score`
  ADD PRIMARY KEY (`id`),
  ADD KEY `student_id` (`student_id`),
  ADD KEY `score_id` (`score_id`) USING BTREE;

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
-- Indeksy dla tabeli `teacher_classes`
--
ALTER TABLE `teacher_classes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `teachersubjects` (`teacher_subject_id`) USING BTREE,
  ADD KEY `group` (`group_id`) USING BTREE;

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
-- AUTO_INCREMENT dla tabeli `activity`
--
ALTER TABLE `activity`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT dla tabeli `activity_subject`
--
ALTER TABLE `activity_subject`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT dla tabeli `classes`
--
ALTER TABLE `classes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT dla tabeli `consultation_scheme`
--
ALTER TABLE `consultation_scheme`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT dla tabeli `group`
--
ALTER TABLE `group`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT dla tabeli `score`
--
ALTER TABLE `score`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=86;

--
-- AUTO_INCREMENT dla tabeli `student`
--
ALTER TABLE `student`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT dla tabeli `student_classes`
--
ALTER TABLE `student_classes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT dla tabeli `student_consultation`
--
ALTER TABLE `student_consultation`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT dla tabeli `student_score`
--
ALTER TABLE `student_score`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=96;

--
-- AUTO_INCREMENT dla tabeli `subject`
--
ALTER TABLE `subject`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT dla tabeli `teacher`
--
ALTER TABLE `teacher`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT dla tabeli `teacher_classes`
--
ALTER TABLE `teacher_classes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT dla tabeli `teacher_subject`
--
ALTER TABLE `teacher_subject`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- Ograniczenia dla zrzutów tabel
--

--
-- Ograniczenia dla tabeli `activity`
--
ALTER TABLE `activity`
  ADD CONSTRAINT `activity_ibfk_1` FOREIGN KEY (`teacher_id`) REFERENCES `teacher` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ograniczenia dla tabeli `activity_subject`
--
ALTER TABLE `activity_subject`
  ADD CONSTRAINT `activity_subject_ibfk_1` FOREIGN KEY (`activity_id`) REFERENCES `activity` (`id`),
  ADD CONSTRAINT `activity_subject_ibfk_2` FOREIGN KEY (`subject_id`) REFERENCES `subject` (`id`);

--
-- Ograniczenia dla tabeli `consultation_scheme`
--
ALTER TABLE `consultation_scheme`
  ADD CONSTRAINT `consultation_scheme_ibfk_1` FOREIGN KEY (`teacher_id`) REFERENCES `teacher` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ograniczenia dla tabeli `score`
--
ALTER TABLE `score`
  ADD CONSTRAINT `score_ibfk_1` FOREIGN KEY (`teacher_classes_id`) REFERENCES `teacher_classes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ograniczenia dla tabeli `student`
--
ALTER TABLE `student`
  ADD CONSTRAINT `student_ibfk_1` FOREIGN KEY (`group_id`) REFERENCES `group` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ograniczenia dla tabeli `student_classes`
--
ALTER TABLE `student_classes`
  ADD CONSTRAINT `student_classes_ibfk_1` FOREIGN KEY (`classes_id`) REFERENCES `classes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `student_classes_ibfk_2` FOREIGN KEY (`student_id`) REFERENCES `student` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ograniczenia dla tabeli `student_consultation`
--
ALTER TABLE `student_consultation`
  ADD CONSTRAINT `student_consultation_ibfk_2` FOREIGN KEY (`subject_id`) REFERENCES `subject` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `student_consultation_ibfk_3` FOREIGN KEY (`teacher_id`) REFERENCES `teacher` (`id`) ON DELETE CASCADE;

--
-- Ograniczenia dla tabeli `student_score`
--
ALTER TABLE `student_score`
  ADD CONSTRAINT `student_score_ibfk_1` FOREIGN KEY (`score_id`) REFERENCES `score` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `student_score_ibfk_2` FOREIGN KEY (`student_id`) REFERENCES `student` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ograniczenia dla tabeli `teacher_classes`
--
ALTER TABLE `teacher_classes`
  ADD CONSTRAINT `teacher_classes_ibfk_1` FOREIGN KEY (`group_id`) REFERENCES `group` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `teacher_classes_ibfk_2` FOREIGN KEY (`teacher_subject_id`) REFERENCES `teacher_subject` (`id`);

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
