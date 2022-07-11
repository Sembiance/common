-- Description: Move all elements of SET <src> to SET <dest>
-- Arguments:
-- #1: src
-- #2: dest

for k,v in pairs(redis.call("SMEMBERS", ARGV[1])) do
	redis.call("SMOVE", ARGV[1], ARGV[2], v)
end
