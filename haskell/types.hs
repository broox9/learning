{-
  Getting Started with Haskell
  Data Types
-}

import Data.List
import System.IO

-- Haskell has type inference
-- Int -2^63 to 2^63
-- Integer (unbounded)
maxInt = maxBound :: Int
minInt = minBound :: Int

-- Float and Double
someFloat = 33.33
someBigFloat = 66.6666666666666


-- Bool (True or False)
-- Char
-- Tuple
-- Permanent Values
always5 :: Int
always5 = 5 -- now a constant

-- Lists (Super powerful)
listTo100 = [1..100]
