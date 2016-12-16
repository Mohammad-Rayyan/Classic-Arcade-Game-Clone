frontend-nanodegree-arcade-game
===============================

Students should use this [rubric](https://review.udacity.com/#!/projects/2696458597/rubric) for self-checking their submission. Make sure the functions you write are **object-oriented** - either class functions (like Player and Enemy) or class prototype functions such as Enemy.prototype.checkCollisions, and that the keyword 'this' is used appropriately within your class and class prototype functions to refer to the object the function is called upon. Also be sure that the **readme.md** file is updated with your instructions on both how to 1. Run and 2. Play your arcade game.

For detailed instructions on how to get started, check out this [guide](https://docs.google.com/document/d/1v01aScPjSWCCWQLIpFqvg3-vXLH2e8_SZQKC8jNO0Dc/pub?embedded=true).


# Tournament Results

## Table of contents
- [Overview](#overview)
- [Description](#description)
- [How to use](#how-to-use)

## Overview
This is the fourth project from udacity full-stack web developer nanodegree.
based on:
* Intro to relational database course.

## Description
In this project, we’ll be writing a Python module that uses the PostgreSQL database to keep track of players and matches in a game tournament.
The game tournament will use the Swiss system for pairing up players in each round: players are not eliminated, and each player should be paired with another player with the same number of wins, or as close as possible.
This project has two parts:
1. defining the database schema (SQL table definitions).
2. writing the code that will use it.

## How to use
1. Install Vagrant and VirtualBox.
2. Clone the fullstack-nanodegree-vm repository.
3. Launch the Vagrant VM.
4. Write SQL database and table definitions in a file (tournament.sql).
5. Write Python functions filling out a template of an API (tournament.py).
6. Run a test suite to verify your code (tournament_test.py).