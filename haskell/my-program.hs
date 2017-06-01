{-

** Aprogram **
I mean... Haskel IS a functional programming language right?

first make:
`ghc --make my-program.hs`

then run
`./my-program`

-}

import Data.List
import System.IO

main = do
  putStrLn "Who Dis?"
  name <- getLine
  putStrLn ("Oh Hey " ++ name)
