# SBCL

SBCL: `S`teel `B`ank `C`ommon `L`isp

- [문서](https://www.sbcl.org/manual)
  - [Command-Line-Options](https://www.sbcl.org/manual/index.html#Command-Line-Options)

## ⚠️ 주의

### 설치시 폴더명에 공백 없도록.

- emacs를 사용할시 패키지에서 실행파일을 못 찾거나, 실행하지 못하는 문제가 생길 수 있음.
- 기본 설치폴더 `C:\Program Files\Steel Bank Common Lisp` 이 아닌 `C:\SBCL` 와 같이 공백이 없도록 설치한다.

### lisp파일의 라인 끝은(eol, End of Line)은 `LF`(line feed)로 끝나도록 한다.


- SBCL에는 윈도우의 기본 라인엔딩 `CRLF`(carriage return + line feed) 문제가 있다.
  - <https://bugs.launchpad.net/sbcl/+bug/1342005>
  - <https://github.com/joaotavora/sly/issues/685>

따라서 [.editorconfig](https://editorconfig.org/), [.gitattribute](https://git-scm.com/book/ko/v2/Git%EB%A7%9E%EC%B6%A4-Git-Attributes) 를 수정 해 강제해 주는 편이 좋다.

``` ini
# file: .editorconfig

root = true

# Lisp 파일 설정
[*.lisp]
end_of_line = lf
insert_final_newline = true
charset = utf-8
```

```  txt
# file: .gitattribute

*.lisp text eol=lf
*.asd  text eol=lf
*.cl   text eol=lf
```
