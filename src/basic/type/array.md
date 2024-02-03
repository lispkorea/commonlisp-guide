# 배열


``` lisp
(defparameter *array* (make-array '(2 4) :initial-element 0))
;;=> *ARRAY*

*array*
;; => #2A((0 0 0 0) (0 0 0 0))

(aref *array* 0 0)
;; => 0

(setf (aref *array* 0 0) 100)
;; => 100

*array*
;; => #2A((100 0 0 0) (0 0 0 0))

(setf (aref *array* 1 1) 100)
;; => 100

*array*
;; => #2A((100 0 0 0) (0 100 0 0))
```