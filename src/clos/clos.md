# CLOS

`C`ommon `L`isp `O`bject `S`ystem



defpackage :hello
 :use :common-lisp
 :documentation
in-package :hello

(defclass Hello () (name age) ) 에서 C-c C-y하면 (make-instance 'Hello ) 가 입력됨

(setf hello (make-instance 'Hello))
(setf (slot-value hello 'name) "my name")
:initform
:initarg
:reader / :writer / :accesor
:documentation
:allocation - :class / :instance

(defclass Hello ()
  ((name
    :documentation "Name"
    :initarg :name
    :accessor name)))
;; C-c C-y

(defmethod hi ((o Hello))
  (format t "Hello ~a!" (name o)))

(defparameter a (make-instance 'Hello :name "my Name"))


call-next-method // super

(typep a 'BaseA) ;; => T           // a is BaseA
subtypep ✔️ 타입 vs 타입 비교       // typeof(Derived).IsSubclassOf(typeof(Base))
find-class 클래스 심볼로 클래스 객체를 찾아줌 // typeof
class-of 객체가 정확히 어떤 클래스의 인스턴스인지 알려줌 // .GetType()

:before / :after / :around


(defmethod print-object ((o Hello) stream)
  )
(print-unreadable-object 
(defmethod INITIALIZE-INSTANCE

다중상속 가능

(defgeneric greet (obj)
(:documentation "asdf")
(:method ((p person))
  )
(:method ((o X))
 ))
https://github.com/pcostanza/closer-mop

M-x slime-unintern-symbol
(fmakunbound 'greet)



## MOP

`M`eta`o`bject `P`rotocol

[Closer to MOP](https://github.com/pcostanza/closer-mop)


## Ref

- <https://lispcookbook.github.io/cl-cookbook/clos.html>
  - <https://cl-community-spec.github.io/pages/defclass.html>
  - <https://cl-community-spec.github.io/pages/print_002dobject.html>
  - <https://cl-community-spec.github.io/pages/Initialize_002dInstance.html>
  - <https://cl-community-spec.github.io/pages/Inheritance.html>
  - <https://cl-community-spec.github.io/pages/defgeneric.html>


## 짚고 넘어가기

- `defclass`
- `defmethod`


