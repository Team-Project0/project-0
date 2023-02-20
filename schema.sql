-- -- MySQL Workbench Forward Engineering

-- SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
-- SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
-- SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -- -----------------------------------------------------
-- -- Schema mydb
-- -- -----------------------------------------------------


-- -- -----------------------------------------------------
-- -- Schema mydb
-- -- -----------------------------------------------------
-- CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
-- USE `mydb` ;

-- -- -----------------------------------------------------
-- -- Table `mydb`.`user`
-- -- -----------------------------------------------------
-- CREATE TABLE IF NOT EXISTS `mydb`.`user` (
--   `iduser` INT NOT NULL AUTO_INCREMENT,
--   `firstName` VARCHAR(45) NULL,
--   `lastName` VARCHAR(45) NULL,
--   `password` VARCHAR(45) NULL,
--   `profil-photo` VARCHAR(255) NULL,
--   `role` VARCHAR(45) NULL,
--   `userName` VARCHAR(45) NOT NULL,
--   PRIMARY KEY (`iduser`),
--   UNIQUE INDEX `userName_UNIQUE` (`userName` ASC) VISIBLE)
-- ENGINE = InnoDB;

-- -----------------------------------------------------
-- Schema m-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8mb3 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`product`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`product` (
  `idProduct` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `eday` DATE NOT NULL,
  `quantity` INT NOT NULL,
  `img` VARCHAR(45) NULL DEFAULT NULL,
  `price` INT NOT NULL,
  PRIMARY KEY (`idProduct`))
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `mydb`.`user`
-- -----------------------------------------------------



-- -----------------------------------------------------
-- Table `mydb`.`vente`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`vente` (
  `idvente` INT NOT NULL AUTO_INCREMENT,
  `quantityV` INT NOT NULL,
  `price` INT NOT NULL,
  `product_idtable1` INT NOT NULL,
  PRIMARY KEY (`idvente`),
  INDEX `fk_vente_product_idx` (`product_idtable1` ASC) VISIBLE,
  CONSTRAINT `fk_vente_product`
    FOREIGN KEY (`product_idtable1`)
    REFERENCES `mydb`.`product` (`idProduct`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `mydb`.`notification`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`notification` (
  `idnotification` INT NOT NULL AUTO_INCREMENT,
  `message` VARCHAR(400) NOT NULL,
  `date` DATE NOT NULL,
  PRIMARY KEY (`idnotification`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8mb3 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`product`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`product` (
  `idProduct` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `eday` DATE NOT NULL,
  `quantity` INT NOT NULL,
  `img` VARCHAR(500) NULL DEFAULT NULL,
  `price` INT NOT NULL,
  PRIMARY KEY (`idProduct`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `mydb`.`user`
-- -----------------------------------------------------




-- MySQL Workbench Forward Engineering
SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8mb3 ;
USE `mydb` ;
-- -----------------------------------------------------
-- Table `mydb`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`user` (
  `iduser` INT NOT NULL AUTO_INCREMENT,
  `e_mail` VARCHAR(45) NULL DEFAULT NULL,
  `firstName` VARCHAR(45) NULL DEFAULT NULL,
  `lastName` VARCHAR(45) NULL DEFAULT NULL,
  `password` VARCHAR(512) NULL DEFAULT NULL,
  `profil_photo` VARCHAR(255) NULL DEFAULT NULL,
  `role` VARCHAR(45) NULL DEFAULT NULL,
  `userName` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`iduser`),
  UNIQUE INDEX `userName_UNIQUE` (`userName` ASC) VISIBLE,
  UNIQUE INDEX `e-mail_UNIQUE` (`e_mail` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 144
DEFAULT CHARACTER SET = utf8mb3;

 
-- -----------------------------------------------------
-- Table `mydb`.`vente`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`vente` (
  `idvente` INT NOT NULL AUTO_INCREMENT,
  `quantityV` INT NOT NULL,
  `price` INT NOT NULL,
  `product_idtable1` INT NOT NULL,
  PRIMARY KEY (`idvente`),
  INDEX `fk_vente_product_idx` (`product_idtable1` ASC) VISIBLE,
  CONSTRAINT `fk_vente_product`
    FOREIGN KEY (`product_idtable1`)
    REFERENCES `mydb`.`product` (`idProduct`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;
-- -----------------------------------------------------
-- Table `mydb`.`ingredient`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`ingredient` (
  `idingredient` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL DEFAULT NULL,
  `quantity` INT NULL DEFAULT NULL,
  `price` VARCHAR(4) NULL DEFAULT NULL,
  `edate` DATE NULL DEFAULT NULL,
  `image` VARCHAR(100) NULL DEFAULT NULL,
  PRIMARY KEY (`idingredient`))
ENGINE = InnoDB
AUTO_INCREMENT = 7
DEFAULT CHARACTER SET = utf8mb3;

-- SET SQL_MODE=@OLD_SQL_MODE;
-- SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
-- SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
