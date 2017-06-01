{-
  Getting Started with Haskell
  Math

  to check Type of a thing (example)
  :t sqrt
  $> sqrt :: Floating a => a -> a

  or
  aFloatOf9  = 9.0
  :t aFloatOf9 :: Double
-}

import Data.List
import System.IO


-- sum of a List
sumOf6 = sum [1..5]

-- normal math operators + - / *
-- mod **
-- infix operators (aka backticks for functions)
modVal = mod 8 3
modValTicks = 8 `mod` 3

-- wrap negatives
negativeWrapped = 5 + (-6)

--converting an Int to a float
num9 = 9 :: Int
sqrtOf9 = sqrt(fromIntegral num9)


{-
  Built in Maths (non-exhuastive)

  pi
  exp
  log
  ** (squared)
  truncate (on float/double returns Integral)
  round
  floor
  ceiling

  also sin, cos, tan, asin, atan, acos, sinh, tanh, cosh, asinh, atanh, acosh
-}
powerCubed = 2 ** 3 -- returns a float


{- Logical Operators -}
trueAndFalse = True && False
trueOrFalse = True || False
notTrue = not(True)
