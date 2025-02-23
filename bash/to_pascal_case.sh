#!/bin/bash

to_pascal_case() {
    echo "$1" | sed -E 's/(^|-|_)([a-z])/\U\2/g'
}