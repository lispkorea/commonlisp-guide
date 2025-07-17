# ASDF

| 버전 |                                                         |
| ---- | ------------------------------------------------------- |
| 3    | released May 15th 2013. UIOP is part of ASDF 3          |
| 2    | François-René Rideau's ASDF 2 (released May 31st 2010). |
| 1    | Daniel Barlow's ASDF (created on August 1st 2001)       |


- [ASDF](https://asdf.common-lisp.dev/)
  - `A`nother `S`ystem `D`efinition `F`acility
- .asd 파일
  - lisp 프로젝트 관리 파일
  - `A`SDF `s`ystem `d`efinition



| 경로                               | 설명                                        |
| ---------------------------------- | ------------------------------------------- |
| ~/common-lisp/                     | Common Lisp 소프트웨어 설치 기본 위치(권장) |
| ~/.local/share/common-lisp/source/ |                                             |

- 크게 다음 2파트로 나뉩니다.
  - `asdf/defsystem`: 패키지정의
  - `uiop`: 유틸리티



``` lisp
;; file: helloworld/helloworld.asdf

(asdf:defsystem "helloworld"

  :build-operation program-op
  :build-pathname "helloworld"
  :entry-point "helloworld::main"

  :depends-on ()

  :components
  ((:static-file "README.md")
   (:module "src"
    :depends-on ()
    :components
    ((:file "package")
     (:file "hello" :depends-on ("package"))))))
```

``` lisp
;; file: helloworld/src/package.lisp

(defpackage :helloworld
  (:use :common-lisp))
(in-package :helloworld)
```

``` lisp
;; file: helloworld/src/hello.lisp

(in-package :helloworld)

(defun -main (args)
  (princ args))

(defun main ()
  (-main (uiop:command-line-arguments)))
```

## .asd

시스템이 있고 그 다음 패키지

- #P"..." : Common Lisp에서 pathname 리터럴을 의미합니다.
  - 예: #P"/home/user/code" → (make-pathname :directory '(:absolute "home" "user" "code"))
  - 해당 경로가 실제 존재하는지는 확인하지 않음
- truename : Pathname 리턴
  - (truename "D:/@lisp/my-lisp-systems") ;; => #P"D:/@lisp/my-lisp-systems/"
  - 경로가 존재하지 않으면 에러

``` lisp
(require 'asdf) ; => ("ASDF" "asdf" "UIOP" "uiop")

;;; 버전 확인
(asdf:asdf-version) ; => "3.3.1"

;;; 시스템 폴더를 센트럴 레지스트리에 추가
(pushnew (truename "D:/@lisp/my-lisp-systems/helloworld") asdf:*central-registry*)

;;; 시스템 로드. helloworld.asd 파일을 읽어들임
(asdf:load-system :helloworld)

;;; 시스템 로드 ( 강제 )
(asdf:load-system :helloworld :force t)


(asdf:make :helloworld)


(asdf:load-system :helloworld)
(asdf:compile-system :helloworld)
```



.fasl - `Fas`t `L`oading (or Loadable) file
(asdf:operate 'asdf:compile-bundle-op :helloworld :verbose t)

|                              |                                                                                                 |
| ---------------------------- | ----------------------------------------------------------------------------------------------- |
| program-op                   | (create a standalone application, which we will see below), etc.                                |
| compile-bundle-op            | (create a single fasl for the entire system, for delivery),                                     |
| monolithic-compile-bundle-op | (create a single fasl for the entire system and all its transitive dependencies, for delivery), |
| compile-op                   | (ensure the system is compiled, without necessarily loading all of it, or any bit of it),       |
| image-op                     | (create a development image with this system already loaded, for fast startup),                 |
| load-source-op               | (load the system from source without compiling),                                                |

compile-bundle-op필요한 각 시스템에 대해 하나의 FASL 파일을 생성하고, 여러 FASL을 하나로 묶어 각 시스템을 하나의 FASL로 제공할 수 있습니다.
monolithic-compile-bundle-op대상 시스템과 모든 종속성에 대해 하나의 FASL 파일을 생성하여 전체 애플리케이션을 하나의 FASL로 제공할 수 있습니다

(defsystem :mysystem :class :precompiled-system
  :fasl (some expression that will evaluate to a pathname))

;; asdf:operate == asdf:oos (  operate-on-system )

(asdf/output-translations:output-translations)
asdf/output-translations:*output-translations*
https://github.com/fare/asdf/blob/master/output-translations.lisp

https://www.sbcl.org/manual/asdf.html#Configuring-ASDF-to-find-your-systems

## asdf/defsystem

- <https://asdf.common-lisp.dev/asdf.html>
- <https://www.sbcl.org/manual/asdf.html>
- <https://qiita.com/MYAO/items/874aafcc531862c5f7c7>
- <https://github.com/fare/asdf/blob/master/doc/best_practices.md>


## uiop

UIOP(`U`tilities for `I`mplementation and `O`S-`P`ortability)

- <https://asdf.common-lisp.dev/uiop.html>
- <https://quickdocs.org/uiop>
- <https://zenn.dev/hyotang666/articles/3f7abcec6f8270>

``` lisp
;; example

(require 'asdf) ; => ("ASDF" "asdf" "UIOP" "uiop")

(uiop:command-line-arguments) ; 커맨드라인 인자

(uiop:getenv "USER")

(uiop:run-program "firefox") ; 동기
(uiop:launch-program "firefox") ; 비동기

(uiop:run-program (list "git" "--help") :output t)
(uiop:run-program "htop" :output :interactive :input :interactive)

;;; pipe: ls | sort
(uiop:run-program "sort"
                   :input
                   (uiop:process-info-output
                    (uiop:launch-program "ls"
                                         :output :stream))
                   :output :string)
(uiop:with-temporary-file (:stream s :pathname p :keep t)
  (format t "path is ~a~%" p)
  (format s "hello, temporary file!"))

(uiop:quit 0)
```

## Ref

- <https://asdf.common-lisp.dev/asdf.html>
  - <https://asdf.common-lisp.dev/uiop.html>
  - <https://asdf.common-lisp.dev/uiop.html#UIOP_002fOS>
  - <https://asdf.common-lisp.dev/uiop.html#UIOP_002fFILESYSTEM>
  - <https://asdf.common-lisp.dev/uiop.html#UIOP_002fUTILITY>
  - <https://asdf.common-lisp.dev/uiop.html#UIOP_002fPACKAGE>
  - <https://asdf.common-lisp.dev/asdf.html#Defining-systems-with-defsystem>
