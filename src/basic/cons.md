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

## 짚고 넘어가기

- `car` / `cdr`
- `first` / `rest`
- `cons`
- `consp