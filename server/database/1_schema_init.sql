CREATE SCHEMA IF NOT EXISTS `project` DEFAULT CHARACTER SET utf8;
USE `project`;

CREATE TABLE IF NOT EXISTS `users` (
    `id` BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `email` VARCHAR(256) NOT NULL UNIQUE,
    `password` VARCHAR(256) NOT NULL,
    `role` VARCHAR(256) NOT NULL
) ENGINE = InnoDB;