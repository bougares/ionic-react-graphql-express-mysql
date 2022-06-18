CREATE DATABASE  IF NOT EXISTS `db_ionic` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `db_ionic`;

--
-- Host: localhost    Database: db_ionic
-- ------------------------------------------------------
--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(45) UNIQUE NOT NULL ,
  `lats_name` varchar(45)  NULL ,
  `first_name` varchar(45)  NULL ,
  `adresse` varchar(45)  NULL ,
  `note` decimal(10,2) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;
