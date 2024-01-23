# property
The code is the property of Anouk Desury

# 1.0
website for Anouk Desury, photographer from Roubaix

# 1.1
- add a presse page
- add instagram icon
- set website description

# 1.1.1
- add open-graph meta balise for better link preview in social-network

## to transform jpg to webp
`for file in ./*.jpg; do cwebp -q 100 "$file" -o "${file%.*}.webp"; done`
`for file in ./*.jpg; do rm "$file"; done`
