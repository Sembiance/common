-- Description: Move all elements of LIST <src> to LIST <dest>
-- Arguments:
-- #1: src
-- #2: dest

local len = redis.call("LLEN", ARGV[1])

for i = 0, len do
	redis.call("LMOVE", ARGV[1], ARGV[2], "LEFT", "RIGHT")
end
