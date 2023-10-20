echo -n "{"championNames": [" > championNames.json
for file in /home/cophos/react-workspace/LeagueCooldowns/assets/Icons/*; do
  filename=$(basename "$file")
  filename="${filename%.*}"
  echo -n "\"$filename\"," >> championNames.json
done
echo -n "]}" >> championNames.json