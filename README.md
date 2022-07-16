# puremap.js

Javascript but kinda made functional.

## Variants

This library provides FP-like variant objects such as:
 - `Option<T>`: is either `Some<T> | None`. This helps you deal with Javascript's `null` and `undefined` 
 - `Result<T, E>`: is `Ok<T> | Err<E>`. Used to wrap functions that might throw exceptions
 - `AsyncResult<T, E>`: `AsyncOk<T> | AsyncErr<E>`. Used to wrap Promises that might reject
 - `Either<L, R>`: `Left<L> | Right<R>`. Used for generic logic branching

## Function composition and array utilities

Also utility collections such as:
 - `Compose.$`: Composes functions. `Compose.$(doubleIt, squareIt, toString)(x) === toString( squareIt( doubleIt(x) ) )`
 - `Arrays`: A collection of array functions that go well with `Compose.$`

## Why?

As far as I know, there is no other library that implements this set of utilities while also providing Typescript declarations that actually work

## Examples

### Map number to Month in short format, and triple the text.
```ts
const months = [
    'Jan', 'Feb',
    'Mar', 'Apr', 'May',
    'Jun', 'Jul', 'Aug',
    'Sep', 'Oct' 'Nov',
    'Dec'
]

const toShortMonth = (month: number) => Options.of(months.at(month - 1))
const triple = (str: string) => `${str}, ${str}, ${str}`

const toMonth3Times = Compose.$(
    toShortMonth,
    Options.$(
        triple
    )
);

const monthOption = toMonth3Times(5)
if (isSome(monthOption)) {
    console.log(Options.get(monthOption)) // Output: 'May, May, May' 
}

// Options.get is not available on `None`
// You can use `unwrap` on Option types but it will throw if the type ends up as `None`
Options.unwrap(Some(10)); // Evaluates to `10`
Options.unwrap(None()); // throws OptionUnwrapError
```

### Return the sum of all the numbers whose factorial is less than 30

```ts

const factorial = (it: num) =>
    it > 1
    ? it * factorial(it - 1)
    : 1

const sumNumsWithFactorialGt30 = Compose.$(
    Arrays.filter(Compose.$(
        factorial,
        it => it < 30
    )), // or Arrays.filter(it => factorial(it) < 30)
    Arrays.sum()
)

sumNumsWithFactorialGt30([
    3, 4, 5, 6, 7
]) // Output: 7 because only 3 & 4 match and they get summed up
```

## License

The MIT License (MIT)

Copyright (c) 2022 Paul Cosma

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.