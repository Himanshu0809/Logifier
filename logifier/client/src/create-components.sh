echo "Enter component name"
read component_name
echo "Do you want to include test files (y/n)"
read include_test_files
mkdir -p Components/$component_name && cd $_
touch $component_name.js $component_name.styles.js index.js
if echo "$include_test_files" | grep -iq "^[yY]"; then
	touch $component_name.test.js
fi
echo "Done ..."
