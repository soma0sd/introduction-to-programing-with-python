---
layout: book
---

파이썬의 배포판 중 하나인 아나콘다(ANACONDA)는 수학/과학/통계를 위한 패키지를 내장하고 있으며, 편집기와 해석기 등 프로그래밍에 필요한 여러 응용프로그램들을 한번에 설치할 수 있습니다.

* 목차
{:toc}

# 내려받기

![01](../anaconda-install-01.png)

아나콘다 [다운로드](https://www.anaconda.com/download/)[^1] 페이지 에서 파이썬 3.6(Python 3.6 version)을 위한 아나콘다 설치파일을 내려 받아 설치를 시작합니다. 설치 마법사에서 아나콘다 설치와 관련한 설정을 합니다

[^1]: 다운로드 URL: https://www.anaconda.com/download/

![02](../anaconda-install-02.png){: .center .X6}

다운로드 버튼을 눌렀을 때 나오는 이 창은 아나콘다의 온라인 소식지를 보내주는 메일링 서비스를 위한 것입니다. 이미 메일링을 신청했거나 소식지가 필요 없다면, 아래의 `No Thanks`를 눌러서 창을 닫으면 됩니다.

# 설치하기

내려받은 파일을 실행하면 설치 마법사가 실행됩니다.

![03](../anaconda-install-03.png){: .col .s12 .m4}
<span class="col s12 m8">
**Just Me**<br>
현재 윈도우에 로그온하고 있는 사용자만 아나콘다를 사용합니다.<br>
**All Users**<br>
윈도우에 로그온 하는 모든 사용자가 아나콘다를 사용할 수 있습니다. (관리자 권한 필요)
</span>
{: .row}

![04](../anaconda-install-04.png){: .col .s12 .m4}
<span class="col s12 m8">
**Destination Folder**<br>
아나콘다를 설치할 경로를 지정합니다.
</span>
{: .row}

![05](../anaconda-install-05.png){: .col .s12 .m4}
<span class="col s12 m8">
**Add Anaconda to my PATH environment variable**<br>
윈도우 시스템의 환경변수에 아나콘다의 응용프로그램과 스크립트 디렉토리를 추가합니다.<br>
**Register Anaconda as my default Python 3.6**<br>
컴퓨터에 이미 파이썬이 설치되어 있더라도 지금 설치하는 파이썬을 기본적으로 사용합니다.<br>
</span>
{: .row}

# 아나콘다 살펴보기

아나콘다를 설치하면 프로그램 그룹 `Anaconda3`에 새로운 응용프로그램들이 등록되어 있는것을 볼 수 있습니다. 윈도우 운영체제의 경우에는 `시작`>`모든 앱`(혹은 `프로그램`)에 프로그램 그룹이 있습니다.

| 아이콘 | 설명 |
|:-:|-|
|![](../../img/anaconda-navigator.png){:width="50"}| **Anaconda Navigator**<br>아나콘다의 부가기능을 설치하고 실행할 수 있으며 Python 관련 설정을 돕는 프로그램 |
|![](../../img/anaconda-prompt.png){:width="50"}| **Anaconda Prompt**<br>명령어를 이용해 직접 아나콘다를 제어할 수 있습니다. |
|![](../../img/jupyter-notebook.png){:width="50"}| **Jupyter Notebook**<br>대화하듯 명령을 작성하고 편집하는 스크립트와 실행결과를 함께 담아 문서를 만들 수 있습니다. |
|![](../../img/spyder.png){:width="50"}| **Spyder**<br>명령을 문서형태로 편집하고 실행할 수 있는 프로그램 |
