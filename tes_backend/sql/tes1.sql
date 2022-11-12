-- Test 1

-- --------------------------------------------------------

--
-- Struktur untuk tabel `hobbies`
--

CREATE TABLE `hobbies` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `level` int(11) NOT NULL
);

ALTER TABLE `hobbies`
  ADD PRIMARY KEY (`id`),
  ADD KEY `hobbies` (`name`,`level`);

ALTER TABLE `hobbies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Menambahkan data untuk tabel `hobbies`
--

INSERT INTO `hobbies` (`name`, `level`) VALUES
('Running', 8),
('Skipping', 5),
('Push Up', 10);

-- --------------------------------------------------------

--
-- Struktur untuk tabel `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `gender` char(1) NOT NULL,
  `status` varchar(255) NOT NULL
);

ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `users` (`name`,`gender`,`status`);

ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;


--
-- Menambahkan data untuk tabel `users`
--

INSERT INTO `users` (`name`, `gender`, `status`) VALUES
('Frasch', 'F', 'active'),
('Garmuth', 'M', 'active'),
('Goliath', 'M', 'active'),
('Luna', 'F', 'active'),
('Zeus', 'M', 'active'),
('Aphrodite', 'F', 'active'),
('Ares', 'M', 'active'),
('Lina', 'F', 'active'),
('Lanaya', 'F', 'active'),
('Hades', 'M', 'active');

-- --------------------------------------------------------

--
-- Struktur untuk tabel `map_user_hobby`
--

CREATE TABLE `map_user_hobby` (
  `id` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `id_hobby` int(11) NOT NULL,
  `status` varchar(255) NOT NULL
);

ALTER TABLE `map_user_hobby`
  ADD PRIMARY KEY (`id`),
  ADD KEY `mapping` (`id_user`,`id_hobby`),
  ADD KEY `status` (`status`),
  ADD KEY `id_hobby` (`id_hobby`);

ALTER TABLE `map_user_hobby`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Menambahkan data untuk tabel `map_user_hobby`
--

INSERT INTO `map_user_hobby` (`id_user`, `id_hobby`, `status`) VALUES
(1, 1, 'active'),
(3, 1, 'Active'),
(8, 3, 'deleted'),
(2, 2, 'active'),
(4, 1, 'deleted'),
(6, 2, 'active'),
(5, 3, 'active'),
(8, 1, 'active'),
(7, 2, 'active'),
(4, 2, 'active'),
(9, 3, 'deleted'),
(10, 2, 'deleted'),
(3, 2, 'active'),
(2, 3, 'active'),
(10, 2, 'active');
