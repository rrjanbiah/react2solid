<img width="100%" src="logo.png" alt="React to Solid Converter, ReactJS to SolidJS Converter, ReactJS to SolidJS Transpiler">

# ReactJS to SolidJS Converter aka Transpiler

SolidJS is the framework known for its performance (based on the [js framework benchmark](https://github.com/krausest/js-framework-benchmark) project). react2solid is an attempt to create a React to Solid code converter. 

This project has 5 sub-projects or modules:

1. Language agnostic React to Solid transformer rules and test cases
1. ReactJS to SolidJS transpiler - JavaScript frontend
1. React to Solid converter - CLI version, for batch conversion
1. React.js to Solid.js transformer rules  builder - Web UI
1. Automatic ReactJS to SolidJS migration guide - from the transformer rules

## Demo

[ReactJS to SolidJS Converter & Utilities](https://rrjanbiah.github.io/react2solid/)

## Status

Started with swc, JMESPath and Rust in mind, but had to switch to the Babel, jq and SolidJS due to multiple challenges (such as [^](https://github.com/swc-project/swc/discussions/4241)). Now, an MVP is ready without CLI.

## Architecture / Approach

1. Idea is to avoid hardcoding of parser rules
1. Create language agnostic transpiler rules using `jq` selectors and also keep test case scripts along with that
1. Using Babel, get AST for the ReactJS code
1. Apply `jq` selection on the AST
1. Convert the AST to JavaScript/SolidJS
1. For string transformer, it is merely string replace over the code (no AST conversion)


## Acknowledgments

* `schwartzworld` of Hacker News for suggesting SolidJS hackathon
* @ryansolid for creating SolidJS and the awesome community (especially Discord)


## Roadmap

- [ ] v0.0.1 
  - [x] Basic folder structure and naming conventions for the transform rules
  - [x] ReactJS to SolidJS transpiler - JavaScript frontend
  - [x] Builder UI (partly)
  - [x] Automatic migration guide generation
  - [x] ReactJS to SolidJS libraries alternatives (MVP, not handled in code)
- [ ] v0.0.2
  - [ ] Refactor for code duplication and TOML structure
- [ ] v0.0.3
  - [ ] Rust-based converter. Switch to swc?

## Contributing

* Feel free to post any issues or suggestions
* Submit your transform rules using the builder (TODO. Till then feel free to submit PR)


## Support / Sponsor

**Hire Me**, **Recommend Me** for any remote/freelancer opportunity

Contact Email: rrjanbiah-at-Y!com

Twitter: [@rrjanbiah](https://twitter.com/rrjanbiah) (DM open)
