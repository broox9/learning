{-

** functions **
I mean... Haskel IS a functional programming language right?
- Of course functions MUST return a value (they do by default)
- cannot start with a Capital Letter
- Data Types work if they make Sens


-}

import Data.List
import System.IO


-- Type Declaration
-- "receives and Int and another Int and returns an Int"
addMe :: Int -> Int -> Int

-- funcName param1 param2 = operations (returned value)
addMe a b = a + b


-- Use Type Inference
-- Haskell says this is sumMe :: Num a => a -> a -> a
-- Num means Int or Float
sumMe x y = y + x

addTuples :: (Int, Int) -> (Int, Int) -> (Int, Int)
addTuples (x, y) (x2, y2) = (x2 + x, y2 + y)


whatAge :: Int -> String
whatAge 16 = "You can drive in New Jersey"
whatAge 18 = "You can drive Vote"
whatAge 21 = "You're an adult"
whatAge 72 = "You can Retire"
whatAge _ = "Not a milestone"

-- recursion
factorial :: Int -> Int
factorial 0 = 1
factorial n = n * factorial (n - 1)
-- factorial 3 -- product [1..3 does the same thing]
-- 3 * factorial (2)
-- 2 * factorial (1)
-- 1 * factorial (0) [equals 1]
-- returns 3 <- 2 <- 1 = 6


-- without "Guards"
isEven n = n `mod` 2 == 0

-- with "Guards"
isOdd :: Int -> Bool
isOdd n
    | n `mod` 2 == 0 = False
    | otherwise = True
