#!/bin/bash

cd ./items/${1}
dcl pack
mv item.zip ../../${1}.zip
