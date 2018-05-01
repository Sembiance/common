#!/bin/bash

# Remove CGI files we don't need
rm -f /usr/local/nginx/conf/fastcgi* /usr/local/nginx/conf/scgi* /usr/local/nginx/conf/uwsgi*

# Remove charset conversion files we don't need
rm -f /usr/local/nginx/conf/win-utf /usr/local/nginx/conf/koi*

# Remove the default nginx conf file
rm -f /usr/local/nginx/conf/nginx.conf.default

# Don't need the default mime types file, we have our own mime file
rm -f /usr/local/nginx/conf/mime.types*
