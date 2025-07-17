# 매크로

|     |              |
| --- | ------------ |
| `   | Backquote    |
| ,   | Comma        |
| ,@  | Comma-splice |
| ',  | Quote-comma  |



quote
defmacro

매크로 확장
M-x slime-macroexpand-all (C-c M-m)

매크로를 수정하게 되면 매크로를 쓴 함수 역시 다시 평가해야 하는데
M-x slime-who-macroexpands 로 찾고 C-c C-k로 컴파일


&body
(gensym)
variable capture


- compile function
  - read time - reader macros
  - macro expansion time - macros
  - compilation time
  - run time - function


alexandria:with-gensyms
https://alexandria.common-lisp.dev/
https://gitlab.common-lisp.net/alexandria/alexandria


================================================================================================================================================
define-symbol-macro
symbol-macrolet

sharpsign(#)  - https://www.lispworks.com/documentation/HyperSpec/Body/02_dh.htm

#. read-time evaluation

(defun func1 ()
  :my-func1)

(defun #.(func1) ()
  :kkk)

;;> (:func1)
;;=> :FUNC10
;;> (:my-func1)
;;=> :KKK

(asdf:defsystem "mysystem"
  :decription "short description"
  :long-description
  #.(uiop:read-file-string (subpathname *load-pathname* "README.md")))
  
  
- sly-macrostep
  - <https://github.com/joaotavora/sly-macrostep>


- <https://cl-community-spec.github.io/pages/gensym.html>
- <https://cl-community-spec.github.io/pages/quote.html>
- <https://lispkorea.github.io/successful-lisp-kr/ch03/lesson_03.html>
- <https://lispkorea.github.io/successful-lisp-kr/ch03/lesson_08.html>



- `gensym`
- `quote`