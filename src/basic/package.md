# 패키지

| 항목        | Quicklisp                   | Ultralisp                          |
| ----------- | --------------------------- | ---------------------------------- |
| URL         | <https://www.quicklisp.org> | <https://ultralisp.org>            |
| 주 목적     | 안정적인 패키지 배포        | 빠른 릴리스/CI 기반 배포           |
| 릴리스 주기 | 한 달에 한 번 수동 릴리스   | 자동화된 CI 시스템으로 몇 시간마다 |


``` lisp
;; ultralisp install

(ql-dist:install-dist "http://dist.ultralisp.org/" :prompt nil)
```

## Ref

- <https://lisp-lang.org/learn/writing-libraries>