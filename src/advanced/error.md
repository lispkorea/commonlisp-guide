# 에러

error
warn
'simple-error
(signal (make-condition 'error) )
(define-condition my-condition (simple-condition) // 사용자 에러 정의
 )

// sb-xc (ignore-errors (error "wtf"))
(unwind-protect (error "wtf")
 )
 
(invoke-debugger
(trivial-backtrace:print-backtrace
https://github.com/hraban/trivial-backtrace
Portable simple API to work with backtraces in Common Lisp



handle-case
https://www.cs.cmu.edu/Groups/AI/html/cltl/clm/node346.html
https://lisp-docs.github.io/cl-language-reference/chap-9/j-b-condition-system-concepts

https://cl-community-spec.github.io/pages/handler_002dbind.html
