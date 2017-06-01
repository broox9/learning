{-
  ** LISTS **
  singly linked, can only add to the front

  length
  null
  reverse
  !! (index lookup)
  head
  last
  init (all but the last value)
  take (num)
  drop (num)
  maximum
  minimum
  sum
  product (lowest common denomonator)
  sort
  filter

  repeat, replicate, cycle
  zip, zipWith, takeWhile, foldl foldr

  infix
  `elem` :t elem ~ elem :: Eq a => a -> [a] -> Bool -- is the element there

-}

import Data.List
import System.IO

-- concat (++) or "cons" operator  item : item : []
primeNumbers = [3,5,7,11]
nextPrimes = [13,17,22]

concatPrime = primeNumbers ++ nextPrimes
extraPrime = 23 : 29 :[]

primeLenth = length concatPrime

listForProd = [2,7,5] -- 70
prodValue = product listForProd


-- patterns
evenNumbers = [2,4..20]
someChars = ['A','C'..'Z'] -- every other letter

-- infine list (evaluates lazily)
infinteTens = [10,20..] -- infinteTens !! 6 => 70

many2s = take 10 (repeat 2)
many3s = replicate 10 3
cycleList = take 10 (cycle [1,3,5]) -- [1,3,5,1,3,5,1,3,5,1]

-- List Operations
divideEvens = [x / 2 | x <- [2,4..16]] -- returns floats

--filtering
listBiggerThan5 = filter (>5) [1..20]

listTime3Below51 = [x * 3 | x <- [1..10], x * 3 <= 50 ]

divisibleBy9And13 = [x | x <- [1..500], x `mod` 13 == 0, x `mod` 9 == 0] -- [117,234,351,468]

sumOfLists = zipWith (+) [1,2,3,4,5] [6..10]

-- something like a while loop
evensTo50 = takeWhile (<=50) [2,4..]

-- something like a forEach
multiplyEachOdd = foldl (*) 2 [1,3,5,7] -- multiplyEach by 2

{-
  List Comprehensions
  operations on a list (small examples above)
-}

pow3List = [3^n | n <- [1..10]]

multTable = [[x * y | y <- [1,2]] | x <-take 7 [1..]]
