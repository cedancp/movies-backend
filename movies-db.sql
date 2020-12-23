-- MySQL dump 10.13  Distrib 8.0.22, for macos10.15 (x86_64)
--
-- Host: localhost    Database: movies
-- ------------------------------------------------------
-- Server version	8.0.17

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `movie`
--

DROP TABLE IF EXISTS `movie`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `movie` (
  `id` varchar(36) NOT NULL,
  `title` varchar(255) NOT NULL,
  `coverUrl` varchar(255) NOT NULL,
  `movieDetailId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `REL_57f4307aa9ade02f45fd0c5c90` (`movieDetailId`),
  CONSTRAINT `FK_57f4307aa9ade02f45fd0c5c902` FOREIGN KEY (`movieDetailId`) REFERENCES `movie_detail` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movie`
--

LOCK TABLES `movie` WRITE;
/*!40000 ALTER TABLE `movie` DISABLE KEYS */;
INSERT INTO `movie` VALUES ('1','Back to the future','https://image.tmdb.org/t/p/w1280/xlBivetfrtF84Yx0zISShnNtHYe.jpg',1),('2','Matrix','https://image.tmdb.org/t/p/w1280/vybQQ7w7vGvF53IsGD0y0JSgIsA.jpg',2),('3','12 Monkeys','https://image.tmdb.org/t/p/w1280/170VKibfqMR1k0eaR2pIj830MgW.jpg',3),('4','Scott Pilgrim vs. the World','https://image.tmdb.org/t/p/w1280/g5IoYeudx9XBEfwNL0fHvSckLBz.jpg',4);
/*!40000 ALTER TABLE `movie` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `movie_detail`
--

DROP TABLE IF EXISTS `movie_detail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `movie_detail` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `coverUrl` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `releaseDate` date NOT NULL,
  `duration` int(11) NOT NULL,
  `qualification` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movie_detail`
--

LOCK TABLES `movie_detail` WRITE;
/*!40000 ALTER TABLE `movie_detail` DISABLE KEYS */;
INSERT INTO `movie_detail` VALUES (1,'Back to the future','https://image.tmdb.org/t/p/w1280/xlBivetfrtF84Yx0zISShnNtHYe.jpg','Eighties teenager Marty McFly is accidentally sent back in time to 1955, inadvertently disrupting his parents\' first meeting and attracting his mother\'s romantic interest. Marty must repair the damage to history by rekindling his parents\' romance and - with the help of his eccentric inventor friend Doc Brown - return to 1985.','1885-07-03',114,8),(2,'Matrix','https://image.tmdb.org/t/p/w1280/vybQQ7w7vGvF53IsGD0y0JSgIsA.jpg','Set in the 22nd century, The Matrix tells the story of a computer hacker who joins a group of underground insurgents fighting the vast and powerful computers who now rule the earth.','1999-03-30',136,8),(3,'12 Monkeys','https://image.tmdb.org/t/p/w1280/170VKibfqMR1k0eaR2pIj830MgW.jpg','The provocative story of Cole, a time traveler from a decimated future in a high-stakes race against the clock. Utilizing a dangerous and untested method of time travel, he journeys from 2043 to the present day on a mission to locate and eradicate the source of a deadly plague that will all but annihilate the human race.','1995-12-29',129,7),(4,'Scott Pilgrim vs. the World','https://image.tmdb.org/t/p/w1280/g5IoYeudx9XBEfwNL0fHvSckLBz.jpg','As bass guitarist for a garage-rock band, Scott Pilgrim has never had trouble getting a girlfriend; usually, the problem is getting rid of them. But when Ramona Flowers skates into his heart, he finds she has the most troublesome baggage of all: an army of ex-boyfriends who will stop at nothing to eliminate him from her list of suitors.','2010-08-13',112,7);
/*!40000 ALTER TABLE `movie_detail` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `trailer`
--

DROP TABLE IF EXISTS `trailer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `trailer` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `trailerUrl` varchar(255) NOT NULL,
  `movieDetailId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_6adb907aa50499b2edd468f3362` (`movieDetailId`),
  CONSTRAINT `FK_6adb907aa50499b2edd468f3362` FOREIGN KEY (`movieDetailId`) REFERENCES `movie_detail` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `trailer`
--

LOCK TABLES `trailer` WRITE;
/*!40000 ALTER TABLE `trailer` DISABLE KEYS */;
INSERT INTO `trailer` VALUES (1,'Back to the future 1','url',1),(2,'Matrix 1','https://youtu.be/m8e-FF8MsqU',2),(3,'Matrix 2','https://youtu.be/qEXv-rVWAu8',2),(4,'12 Monkeys','https://youtu.be/YxLbHHYGzkg',3),(5,'Scott Pilgrim vs. the World','https://youtu.be/4MmY78eSIug',4);
/*!40000 ALTER TABLE `trailer` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-12-22 22:18:10
