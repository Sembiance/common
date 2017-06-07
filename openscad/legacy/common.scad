module rotateAround(a, v) { translate(v) { rotate(a) { translate(-v) { children(); } } } }

