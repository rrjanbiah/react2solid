// TOML to JSON converted rules
// TODO: Find better approach

export function transformersJson() {
  return [{
  "languages": {
    "en": {
      "description": "Unlike in React, SolidJS doesn't need the weird `className` for the CSS styling. So, we can use the normal CSS `class` itself.\n",
      "title": "In JSX, replace `className` with `class`"
    }
  },
  "meta": {
    "author": "@rrjanbiah",
    "credits": [
      "https://www.youtube.com/watch?v=wu6HvLoi9VQ"
    ]
  },
  "rule": {
    "transformer": [
      {
        "string": {
          "replace": "class",
          "search": "className"
        }
      }
    ]
  },
  "testcases": [
    {
      "input": "const element = (\n  <h1 className=\"greeting\">\n    Hello, world!\n  </h1>\n);\n",
      "output": "const element = (\n  <h1 class=\"greeting\">\n    Hello, world!\n  </h1>\n);\n",
      "test": "className in style attribute gets replaced"
    },
    {
      "input": "let className = 'menu';\n",
      "output": "let className = 'menu';\n",
      "test": "className in other parts are not affected"
    }
  ]
},
{
  "languages": {
    "en": {
      "description": "`createSignal` is the SolidJS equivalent of React `useState`\n",
      "title": "Replace `useState` with `createSignal`"
    }
  },
  "meta": {
    "author": "@rrjanbiah",
    "credits": {
      "0": "https://www.youtube.com/watch?v=wu6HvLoi9VQ"
    }
  },
  "rule": {
    "transformer": [
      {
        "string": {
          "replace": "createSignal",
          "search": "useState"
        }
      }
    ]
  },
  "testcases": [
    {
      "input": "const [count, setCount] = useState(0);\n",
      "output": "const [count, setCount] = createSignal(0);\n",
      "test": "useState gets replaced with createSignal"
    }
  ]
},
{
  "languages": {
    "en": {
      "description": "Replace the `react` library in import with `solid-js`\n",
      "title": "Replace `react` import with `solid-js`"
    }
  },
  "meta": {
    "author": "@rrjanbiah",
    "credits": [
      "https://www.youtube.com/watch?v=wu6HvLoi9VQ"
    ]
  },
  "rule": {
    "transformer": [
      {
        "jq": "walk(if type == \"object\" and .value == \"react\" then .value |= \"solid-js\" else . end)"
      }
    ]
  },
  "testcases": [
    {
      "input": "import React, { useState } from 'react';\n",
      "output": "import React, { useState } from \"solid-js\";",
      "test": "react gets replaced with solid-js in import"
    }
  ]
}]
}
