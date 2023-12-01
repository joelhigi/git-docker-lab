CREATE TABLE IF NOT EXISTS `books` (
  `id` int(11) AUTO_INCREMENT PRIMARY KEY,
  `title` varchar(255) NOT NULL,
  `descrip` varchar(255) NOT NULL,
  `price` float NOT NULL,
  `cover` varchar(255) NOT NULL
)