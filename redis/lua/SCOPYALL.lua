-- Description: Copies all elements of SET <src> to SET <dest>
-- Arguments:
-- #1: src
-- #2: dest

redis.call("SDIFFSTORE", ARGV[2], ARGV[1])
