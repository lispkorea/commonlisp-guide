# Quicklisp

``` lisp
;; REF: https://www.darkchestnut.com/2016/quicklisp-load-personal-projects-from-arbitrary-locations/

(pushnew (truename "/projects/app/") ql:*local-project-directories* )
(ql:register-local-projects)
(ql:quickload :app)
```



deploy - https://github.com/Shinmera/deploy
commandline parser
clingon - https://github.com/dnaeon/clingon
cl21 - https://github.com/cl21/cl21
    - https://lispcookbook.github.io/cl-cookbook/cl21.html