# 아톰

- Lisp에서 모든 데이터는 콘스 셀(cons cell) 혹은 아톰(atom) 중 하나.

## 사전 지식

### 표기법(notation)

- 표기법
  - 전위 표기법(prefix notation) : + 1 2
  - 중위 표기법(infix notation) : 1 + 2
  - 후위 표기법(postfix notation) : 1 2 +
- 자동완성
  - 전위 표기법 특성 상 Method Completion / Property Completion 이 안됨
  - 심볼 자동완성에 의존

code is data —  Homoiconicity

### 참과 거짓

참 : T
거짓 : NIL


## 아톰이 아닌 것

- Cons Cell인 것
  - Cons Cell이 결합된 리스트(list) 역시 아톰이 아니다.
- Cons Cell (콘스 셀)
  -  두 개의 값을 담는 한 쌍 (first . second)
-  List (리스트)
   -  Cons Cell을 이어 붙인 연결 구조


📋 Cons는 아톰이 아니다

``` lisp
(atom (cons 1 2))   ; => NIL
(atom '(1 . 2))     ; => NIL
```

📋 리스트는 아톰이 아니다

``` lisp
(atom (list 1 2 3)) ; => NIL
(atom '(1 2 3))     ; => NIL
```

## 아톰인 것

🔢 숫자는 아톰

``` lisp
(atom 42)           ; => T
(atom -1.5)         ; => T
```

🔤 문자열, 문자도 아톰

``` lisp
(atom "hello")      ; => T
(atom #\A)          ; => T
```

📌 키워드도 아톰

``` lisp
(atom :ok)          ; => T
```

🧠 심볼도 아톰

``` lisp
(atom 'x)           ; => T
(atom 'atom)        ; => T
```

🧪 T / NIL 도 아톰이다

'()은 NIL과 동의어(synonym)

``` lisp
(atom T)          ; => T
(atom NIL)          ; => T
(atom '())          ; => T
```

📦 함수 객체도 아톰이다

``` lisp
(atom #'helloworld) ; => T
```


## 짚고 넘어가기

- `atom`


https://lispkorea.github.io/successful-lisp-kr/ch03/lesson_01.html