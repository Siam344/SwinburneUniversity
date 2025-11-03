-- Create database
CREATE DATABASE nes_game_store;

-- Use the database
USE nes_game_store;

-- Create payments table
CREATE TABLE payments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    cardNumber VARCHAR(255) NOT NULL,
    expiryDate VARCHAR(255) NOT NULL,
    cvv VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
