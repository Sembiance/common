#!/bin/bash

scp -r /mnt/compendium/DevLab/common/nginx/common/ $1:/usr/local/nginx/conf/
scp /mnt/compendium/DevLab/common/nginx/nginx.conf $1:/usr/local/nginx/conf/
scp /mnt/compendium/DevLab/common/lib/nginx/server-configs-nginx/mime.types $1:/usr/local/nginx/conf/
