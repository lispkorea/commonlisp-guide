// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><a href="Index.html">들어가며</a></li><li class="chapter-item expanded affix "><li class="part-title">설치</li><li class="chapter-item expanded "><a href="install/install.html">설치</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="install/sbcl.html">SBCL</a></li></ol></li><li class="chapter-item expanded "><li class="part-title">기초</li><li class="chapter-item expanded "><a href="basic/atom.html">아톰</a></li><li class="chapter-item expanded "><a href="basic/cons.html">Cons</a></li><li class="chapter-item expanded "><a href="basic/expression.html">표현식</a></li><li class="chapter-item expanded "><a href="basic/symbol.html">심볼</a></li><li class="chapter-item expanded "><a href="basic/comment.html">주석</a></li><li class="chapter-item expanded "><a href="basic/function.html">함수</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="basic/recursion.html">재귀</a></li></ol></li><li class="chapter-item expanded "><a href="basic/values.html">values</a></li><li class="chapter-item expanded "><a href="basic/return.html">return</a></li><li class="chapter-item expanded "><a href="basic/lambda.html">람다</a></li><li class="chapter-item expanded "><a href="basic/condition.html">조건문</a></li><li class="chapter-item expanded "><a href="basic/comparison.html">비교</a></li><li class="chapter-item expanded "><a href="basic/type/type.html">데이터 타입</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="basic/type/number.html">숫자</a></li><li class="chapter-item expanded "><a href="basic/type/boolean.html">불리언</a></li><li class="chapter-item expanded "><a href="basic/type/char.html">문자</a></li><li class="chapter-item expanded "><a href="basic/type/string.html">문자열</a></li><li class="chapter-item expanded "><a href="basic/type/array.html">배열</a></li><li class="chapter-item expanded "><a href="basic/type/vector.html">벡터</a></li><li class="chapter-item expanded "><a href="basic/type/hashtable.html">해시테이블</a></li><li class="chapter-item expanded "><a href="basic/type/structure.html">구조체</a></li></ol></li><li class="chapter-item expanded "><a href="basic/map.html">map</a></li><li class="chapter-item expanded "><a href="basic/print.html">print</a></li><li class="chapter-item expanded "><a href="basic/file.html">파일 입출력</a></li><li class="chapter-item expanded "><a href="basic/bind.html">바인드</a></li><li class="chapter-item expanded "><a href="basic/package.html">패키지</a></li><li class="chapter-item expanded affix "><li class="part-title">심화</li><li class="chapter-item expanded "><a href="advanced/type-part2.html">타입 part2</a></li><li class="chapter-item expanded "><a href="advanced/error.html">에러</a></li><li class="chapter-item expanded "><a href="advanced/macro.html">매크로</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="advanced/gensym.html">gensym</a></li></ol></li><li class="chapter-item expanded "><a href="advanced/debug.html">디버그</a></li><li class="chapter-item expanded "><a href="advanced/asdf.html">asdf</a></li><li class="chapter-item expanded "><a href="advanced/ffi.html">FFI(Foreign Function Interface)</a></li><li class="chapter-item expanded "><a href="advanced/test.html">test</a></li><li class="chapter-item expanded "><a href="advanced/regexp.html">regexp</a></li><li class="chapter-item expanded "><a href="advanced/network.html">network</a></li><li class="chapter-item expanded affix "><li class="part-title">Common Lisp Object System</li><li class="chapter-item expanded "><a href="clos/clos.html">CLOS</a></li><li class="chapter-item expanded affix "><li class="part-title">어둠의 길</li><li class="chapter-item expanded "><a href="darkside/reader-macro.html">리더매크로</a></li><li class="chapter-item expanded "><a href="darkside/symbol-macro.html">심볼매크로</a></li><li class="chapter-item expanded "><a href="darkside/loop.html">Loop</a></li><li class="chapter-item expanded "><a href="darkside/format.html">Format</a></li><li class="chapter-item expanded affix "><li class="part-title">자투리</li><li class="chapter-item expanded "><a href="snippets/snippets.html">자투리</a></li><li class="chapter-item expanded affix "><li class="part-title">기타 라이브러리</li><li class="chapter-item expanded "><a href="library/quicklisp.html">Quicklisp</a></li><li class="chapter-item expanded affix "><li class="part-title">박물관</li><li class="chapter-item expanded "><a href="museum/history.html">커먼리스프 역사</a></li><li class="chapter-item expanded "><a href="museum/implementation.html">배포판</a></li><li class="chapter-item expanded "><a href="museum/people/people.html">인물들</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="museum/people/john-mccarthy.html">John McCarthy</a></li></ol></li><li class="chapter-item expanded "><li class="part-title">Lisp 만들기</li><li class="chapter-item expanded "><a href="making/writing-lisp.html">Lisp 만들기</a></li><li class="chapter-item expanded affix "><li class="part-title">참고</li><li class="chapter-item expanded "><a href="reference/reference.html">참고자료</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0].split("?")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
