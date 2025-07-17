# Cons

s-expression

cons cell

car cdr

cons가 아닌  것은 아톰


``` lisp
(atom (cons 1 2))
;;=>  NIL
```

``` lisp
(consp '())
;;=> NIL

(consp '(1))
;;=> T

(consp '(1 . 2))
;;=> T

(consp '(1 2))
;;=> T
```

``` lisp
(type-of '())
;;=> NULL
(typep '() 'atom)
;;=> T

(type-of '(1))
;;=> CONS


(typep '() 'cons)
;;=> NIL
(typep '() 'list)
;;=> T

(typep '(1) 'cons)
;;=> T
(typep '(1) 'list)
;;=> T

(typep '(1 . 2) 'cons)
;;=> T
(typep '(1 . 2) 'list)
;;=> T
```

- `car`, `cdr`는 `first`, `rest`보다 가독성이 떨어지니, 아이템이 2개 있는 Cons Cell을 제외하고는 사용을 안하는게 하는게 좋음.

## 짚고 넘어가기

- `cons`
- `consp`
- `car` / `cdr`
- `first` / `second` / `third`  / `fourth` / `fifth` / `sixth` / `seventh` / `eighth` / `ninth` / `tenth`
- `rest`

https://lispkorea.github.io/successful-lisp-kr/ch03/lesson_04.html