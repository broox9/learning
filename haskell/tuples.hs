{-
  ** Tuples **
  Unlike lists, Tuples don't need the same dataType
  Most of the time just 2 items "tuple pair"

  fst - first
  snd - second

  zip

-}
import Data.List
import System.IO

randTuple = (1, "Some Text")

-- Tuble Pairs
brookes = ("Brookes Stephens", 36)
brookesName = fst brookes
brookesAge = snd brookes

familyNames = ["Tracie", "Brandee", "Shirley"]
familyAges = [37,34, 58]

family = zip familyNames familyAges
