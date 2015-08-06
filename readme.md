#String Calculator

A calculator that accepts a string as input and performs basic arithmetic operations including addition, subtraction, multiplication, and division.

```
calculation -> expression =
expression  -> value | value operator expression
value       -> number | sign number
number      -> unsigned | unsigned . unsigned
unsigned    -> digit | digit unsigned
digit       -> 0..9
sign        -> + | -
operator    -> + | - | * | /
```