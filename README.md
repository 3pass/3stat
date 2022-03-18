# 3stat

3stat is a Metaverse analytics service offered by 3pass that tracks and reports activities around your virtual land.

Visit [dashboard.3pass.app](https://dashboard.3pass.app) to try it out

## Requirements

 * Node 16+
 * [decentraland](https://github.com/decentraland/cli) @latest
 * [decentraland-ecs](https://www.npmjs.com/package/decentraland-ecs) @latest

## Installation

#### Yarn

`yarn add @3pass/3stat`

#### NPM

`npm i @3pass/3stat`

## Usage

1. Simply add the following lines to your scene's `src/game.ts` file:

```
import { registerDclEvents } from "../node_modules/@3pass/3stat/index"

\\ Insert your code here

registerDclEvents()
```
2. Deploy your scene to the decentraland catalyst servers:

```
dcl deploy
```

3. Visit [dashboard.3pass.app](https://dashboard.3pass.app) and select your land's coordinates

## Problems?

For specific technical issues, please feel free to [file a github issue](https://github.com/3pass/3stat/issues) which includes the following information:

 * Full backtrace and/or a detailed explanation of the error
 * Steps to reproduce (when relevant)
 * Versions of the environment you are using: Node, NPM, Yarn, Decentraland
   CLI/SDK, OS, etc

For other topics, please join our [discord](https://discord.gg/2H5cYFqsWZ)

## License

Please see [LICENSE](https://github.com/3pass/3stat/blob/main/LICENSE) for licensing details.
