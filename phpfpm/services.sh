#!/bin/bash
service postfix start && php-fpm

while true
do
    sleep 10
done
