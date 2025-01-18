# JavaScript Silent Null Handling Bug

This repository demonstrates a subtle bug in JavaScript function that silently ignores `null` values as arguments.  The function `foo` adds two numbers, but if either number is `null`, it does nothing.

## Bug Description

The issue lies in how `null` values are handled within the conditional statement.  The function simply returns without any indication of an error or a clear alternative action. This could lead to unexpected behavior if `null` values are passed, as there will be no error, and no clear feedback on the function's result.

## Bug Reproduction

1. Clone this repository.
2. Open `bug.js`.
3. Run the script using a JavaScript interpreter (Node.js, for example).
4. Observe the output; there's no error, but the result isn't what one might expect for `null` inputs. 

## Solution

The solution demonstrates a more robust way to handle `null` values by explicitly checking and throwing an error (or using another appropriate error handling technique). Refer to `bugSolution.js` for a working solution.

## How to fix

The solution file provides a modified version of the function which throws an error when a `null` value is encountered, leading to more informative error handling.  This way, the programmer is alerted that `null` values are not appropriate in the context of this function. Alternative approaches include providing a default value to substitute for `null`.