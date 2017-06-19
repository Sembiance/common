#ifndef _STRUTIL_H
#define _STRUTIL_H

#include <stdlib.h>
#include <stdbool.h>

char * strappend(char * original, const char * const appendage);
size_t strchrncount(const char * haystack, char needle, size_t max);
bool strendswith(const char * const haystack, const char * const needle);
char * strstrstrip(char * haystack, const char * const needle);

#endif

