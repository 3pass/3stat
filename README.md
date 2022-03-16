# 3stat
[3pass] Analytics solution



## Install the SDK

Type `yarn add @3pass/3stat`

## Use the SDK

In your scene, from `game.ts` you can register the events with:

```
import { registerDclEvents } from "../node_modules/@3pass/3stat/index"

\\ Insert your code here

registerDclEvents()
```

Our SDK will automatically detect the land parcel, so no customerId is needed.
