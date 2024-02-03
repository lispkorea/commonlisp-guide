# 문자열


| Numeric Analog | Case-Sensitive | Case-Insensitive    |
| -------------- | -------------- | ------------------- |
| =              | STRING=        | STRING-EQUAL        |
| /=             | STRING/=       | STRING-NOT-EQUAL    |
| <              | STRING<        | STRING-LESSP        |
| >              | STRING>        | STRING-GREATERP     |
| <=             | STRING<=       | STRING-NOT-GREATERP |
| >=             | STRING>=       | STRING-NOT-LESSP    |


:start1 
:end1 
:start2
:end2

(string= "foobarbaz" "quuxbarfoo" :start1 3 :end1 6 :start2 4 :end2 7)
