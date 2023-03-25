Node.js 배운 내용
=================================
# Node.js의 이벤트 루프 개략도

 Node.js는 싱글 쓰레드를 사용합니다.

쓰레드를 이해하기 위해서는 프로세스에 대한 소개가 필요합니다.

 

프로세스는 실행 중인 프로그램을 의미합니다. 각각의 프로세스는 자신만의 독립된 공간에서 실행되며, 서로 영향을 주지 않습니다. 이를 통해 안정적으로 프로그램을 실행할 수 있습니다. 

 쓰레드는 프로세스 내에서 실행되는 작은 실행 단위입니다. 

싱글 쓰레드는 프로세스의 실행 흐름을 1개 사용한다는 뜻이며, 멀티 쓰레드는 실행의 흐름을 여러개로 사용한다는 뜻이다.

Node.js가 싱글 쓰레드를 사용한다는 것은 결국에는 한 번에 하나의 일을 처리한다는 것을 의미한다는 뜻이다.

위의 글을 잘 이해한다면 싱글 스레드를 사용하면 동시성을 갖기 어려울텐데 어떻게 만들 수 있을까?

# 동기와 비동기의 차이

## 동기(Synchronous)

동기는 동시에 일어난다는 뜻으로 요청에 대한 결과가 즉각적으로 나타난다.

처리 시간에 상관없이 그 자리에서 결과가 주어져야 한다.

A와 B노드 사이의 작업 처리 단위를 동시에 맞춰야 한다.

(EX : 송금)

## 비동기(Asynchronous)

비동기는 동시에 일어나지 않는다는 의미로 요청과 결과가 동시에 일어나지 않습니다.

요청한 결과가 그 자리에서 주어지지 않습니다.

A와 B노드 사이의 작업 처리 단위를 동시에 맞추지 않아도 됩니다.

(EX : 시험지 채점)

# exports : 사용자 모듈 만들기

module.export는 하나의 객체를 사용하여 여러개의  속성과 메소드를 만듬.

![image](https://user-images.githubusercontent.com/83203154/227710160-32abaf67-ab4d-47da-98b8-5affa0c8dd22.png)

![image](https://user-images.githubusercontent.com/83203154/227710179-febced62-b19b-4c34-9cd4-674662d4418c.png)


exports.method 여러개의 객체를 만들어 메소드나 속성을 만들 수 있음.
![image](https://user-images.githubusercontent.com/83203154/227710189-4bbda2e9-4c65-43c1-9d8a-039bc53f2419.png)

![image](https://user-images.githubusercontent.com/83203154/227710205-db5c5f11-33b9-4255-aa40-f0e94047a8d6.png)
