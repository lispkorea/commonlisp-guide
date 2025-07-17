# 표현식

``` lisp
(+ 1 1)
;; => 2
```

- `(+ 1 1)`라는 평가(eval)할 수 있는 표현식(expression)이 있고, 리스프에서는 이를 `S-expression`이라 합니다.
- `S-Expression`은 `S`ymbolic-`Expression의` 약자로, 더 줄여서 `sexpr`라 쓰기도 합니다.

sexpr은 Atom | Expression으로 되어있으며, 각각은 다음과 같습니다.

``` txt
    Atom : 숫자 | 심볼.

        여기서 심볼은 변수이름이나 데이터로 사용되는 문자집합.

    Expression

        (x . y)와 같은 형태(form)를 띈 표현식. (여기서 x, y는 s-exression)
```

``` txt
(x y z) => (x . (y . (z . nil))
 => (심볼 . (심볼 . (심볼 . 심볼))
 => (Atom . (Atom . (Atom . Atom)
 => Expression (Expression (Expression))
 => Expression

(+ 1 1) => (+ . (1 . (1 . nil))
 => (심볼 . (숫자 . (숫자 . 심볼))
 => (Atom . (Atom . (Atom . Atom)
 => Expression (Expression (Expression))
 => Expression
```

이제 (eval '(+ 1 1))와 같이 eval로 (+ 1 1)이라는 표현식을 평가시키면 2라는 숫자를 얻게됩니다.





https://www.cliki.net/infix

AST(Abstract Syntax Tree)
수학표기

M-Expression (`M`eta-`Expressions`) [Lets LISP like it's 1959](https://www.youtube.com/watch?v=hGY3uBHVVr4)

https://en.wikipedia.org/wiki/M-expression
http://xahlee.info/comp/lisp_sans_sexp.html