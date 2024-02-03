# 숫자

Integers
Ratios 분수
Floating-Point Numbers
Complex Numbers

integer
  fixnum
  bignum
ratio
ratio, rational, real, number, t



float
#C(a b)
#\char


most-positive-fixnum
most-negative-fixnum

| 진법   |     |                      |
| ------ | --- | -------------------- |
| 2진법  | #b  | `b`inary             |
| 8진법  | #o  | `o`ctal              |
| 16진법 | #x  | he`x`adecimal        |
| N진법  | #Nr | 여기서 N은 임의의 수 |

| 부동 소수점 |                |
| ----------- | -------------- |
| s           | `s`hort-float  |
| f           | single-`f`loat |
| d           | `d`ouble-float |
| l           | `l`ong-float   |

## 복소수

`a + bi == (complex a b) == #C(a b)`

``` lisp
(type-of #C(1 2))
;;=> (COMPLEX (INTEGER 1 2))

(typep #C(1 2) 'complex)
;;=> T

(complex 1 2)
;;=> #C(1 2)

(* #C(1 2) #C(1 2))
;;=> #C(-3 4)

(complexp #C(1 2))
;;=> T
```

1+
1-
incf
decf
min
max
minusp / zerop / plusp
evenp / oddp

LOG
EXP
EXPT
SIN/COS/TAN
ASIN/ACOS/ATAN
쌍곡선 함수: SINH, COSH, 및 TANH
ASINH, ACOSH, 및 ATANH.



FLOOR
CEILING
TRUNCATE
ROUND
MOD
REM


isqrt, which returns the greatest integer less than or equal to the exact positive square root of natural.
gcd `G`reatest `C`ommon `D`enominator
lcm `L`east `C`ommon `M`ultiple.


## Ref

- [The Common Lisp Cookbook – Numbers](https://lispcookbook.github.io/cl-cookbook/numbers.html)
- [Common Lisp the Language, 2nd Edition - 2.1. Numbers](https://www.cs.cmu.edu/Groups/AI/html/cltl/clm/node16.html#SECTION00610000000000000000)
- [Practical Common Lisp - 10. Numbers, Characters, and Strings](https://gigamonkeys.com/book/numbers-characters-and-strings.html)

