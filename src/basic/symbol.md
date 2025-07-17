# 심볼

(defparameter x 42)
(symbol-value 'x)       ; => 42
(symbol-name 'x)        ; => "X"
(symbol-package 'x)     ; => #<PACKAGE "COMMON-LISP-USER">

(intern "AAAA")        ; => AAAA
(intern "aaa")         ; => |aaa|


할당 assign
(let* )
let
flet
labels


https://lispkorea.github.io/successful-lisp-kr/ch03/lesson_05.html