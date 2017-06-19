#define _POSIX_C_SOURCE 200809L

#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <assert.h>

#include "strutil.h"

int main(int argc, char ** argv)
{
	char * v = strdup("hello");

	assert(!strcmp(strappend(v, " world!"), "hello world!"));
	assert(strchrncount(v, 'o', strlen(v))==2);
	assert(strendswith(v, "world!")==1);
	assert(!strcmp(strstrstrip(v, "o w"), "hellorld!"));
	
	return EXIT_SUCCESS;
}
