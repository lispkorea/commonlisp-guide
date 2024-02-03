# 데이터 타입

1
1.1
1234567890123456789012345678901234567890123456789012345678901234567890
#C(1.2 3) ; 1.2 + 3i


| type-of      |     |
| ------------ | --- |
| cons         |     |
| null         |     |
|              |     |
| symbol       |     |
| condition    |     |
| function     |     |
|              |     |
| sequence     |     |
| array        |     |
| vector       |     |
| bit-vector   |     |
| hash-table   |     |
| stream       |     |
|              |     |
| integer      |     |
| float        |     |
| number       |     |
| short-float  |     |
| single-float |     |
| double-float |     |
| long-float   |     |
| complex      |     |
| ratio        |     |
| rational     |     |
| string       |     |
| character    |     |
|              |     |
| random-state |     |
|              |     |
| package      |     |
| pathname     |     |
| readtable    |     |
| restart      |     |


array
atom
bignum
bit
bit-vector
chracter
[common]
compiled-function
complex
cons
double-float
fixnum
float
function
hash-table
integer
keyword
list
long-float
nil
null
number
package
pathname
random-state
ratio
rational
readtable
sequence
short-float
signed-byte
simple-array
simple-bit-vector
simple-string
simple-vector
single-float
standard-char
stream
string
[string-char]
symbol
t
unsigned-byte
vector



typep
subtypep
type-of

- [4.9. Determining the Type of an Object - Common Lisp the Language, 2nd Edition](https://www.cs.cmu.edu/Groups/AI/html/cltl/clm/node53.html)




| make-random-state |                        |
| ----------------- | ---------------------- |
| random-state      | random-state 복사      |
| nil (기본값)      | 현재 random-state 복사 |
| t                 | 새로운 random-state    |


| Common Lisp    |             |
| -------------- | ----------- |
| (logand a b c) | a & b & c   |
| (logior a b c) | a \| b \| c |
| (lognot a)     | ~a          |
| (logxor a b c) | a ^ b ^ c   |
| (ash a 3)      | a << 3      |
| (ash a -3)     | a >> 3      |

log: bit-wise `log`ical operations
ash: `a`rithmetic `sh`ift operation

https://www.lispworks.com/documentation/lw70/CLHS/Body/f_logand.htm