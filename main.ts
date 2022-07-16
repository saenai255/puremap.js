import Arrays from "./array";
import Compose from "./compose";
import Results from "./result";

Compose.$(
    (it: number[]) => Results.of(() => it),
    Results.$(
        Arrays.map(it => it * 2),
        Arrays.gte(6),
        Arrays.sum()
    ),
    Results.unwrap(),
    Compose.debug(),
)([1,2,3,4,5]);