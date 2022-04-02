<img width="100%" src="logo.png" alt="React to Solid Converter, ReactJS to SolidJS Converter, ReactJS to SolidJS Transpiler">

# ReactJS to SolidJS Converter aka Transpiler

SolidJS is the framework known for its performance (based on the [js framework benchmark](https://github.com/krausest/js-framework-benchmark) project). react2solid is an attempt to create a React to Solid code converter. 

This project has 5 sub-projects or modules:

1. Language agnostic React to Solid transformer rules and test cases
1. ReactJS to SolidJS transpiler - JavaScript frontend
1. React to Solid converter - Rust CLI version, for batch conversion
1. React.js to Solid.js transformer rules  builder - Web UI
1. Automatic ReactJS to SolidJS migration guide - from the transformer rules

## Status

Started the development :-)

## Architecture / Approach

1. Create language agnostic transpiler rules using JMESPath selectors and also keep test case scripts along with that
1. Using swc, get AST for the ReactJS code
1. Apply JMESPath selection on the AST
1. Convert the AST to JavaScript/SolidJS


## Acknowledgments

* `u/agriculturez` of `r/rust` for letting me know about the SWC project
* SWC project, especially the [swc-playground](https://github.com/swc-project/swc-playground) for the base code
* @ryansolid for creating SolidJS and the awesome community


## Roadmap

- [ ] v0.0.1 
  - [x] Basic folder structure and naming conventions for the transform rules
  - [ ] ReactJS to SolidJS transpiler - JavaScript frontend
  - [ ] Builder UI
  - [ ] Automatic migration guide generation
- [ ] v0.0.2
  - [ ] Tailwind CSS based UI cleanup
- [ ] v0.0.3
  - [ ] Rust-based converter
- [ ] v0.0.4
  - [ ] Convert the transpiler UI to SolidJS (from Next.js), preferably using this converter (?)
  - [ ] Refactor the code so that the builder codes are not duplicated


## Contributing

* Feel free to post any issues or suggestions
* Submit your transform rules using the builder (TODO. Till then feel free to submit PR)


## Support / Sponsor

**Hire Me**, **Recommend Me** for any remote/freelancer opportunity

Contact Email: rrjanbiah-at-Y!com

Twitter: [@rrjanbiah](https://twitter.com/rrjanbiah) (DM open)
