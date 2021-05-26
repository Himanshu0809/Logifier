# Take component name and add it to the variable
echo "Enter component name"
read component_name

# Ask whether to include test file
echo "Do you want to include test files (y/n)"
read include_test_files

# Create folder for component with component name as variable
# _ stores the value of last executable value and has the path of folder
mkdir -p Components/$component_name && cd $_

# Now we are in the newly created folder. Add corresponding files there
touch $component_name.js $component_name.styles.js index.js

# Print template for component_name.js file
echo "import React from 'react';\n\nfunction $component_name() {\n\n}\n\nexport default $component_name;"> $component_name.js

# Print template for index.js file
echo "import $component_name from './$component_name'; \n\nexport default $component_name;" > index.js

# Print template for component_name.styles.js file
echo "import styled from 'styled-components';" > $component_name.styles.js

if echo "$include_test_files" | grep -iq "^[yY]"; then
	touch $component_name.test.js
fi
echo "Done ..."
