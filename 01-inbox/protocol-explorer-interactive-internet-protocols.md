---
title: "Protocol Explorer — 인터넷 프로토콜 39종이 패킷 단위로 어떻게 오가는지 움직이는 그림으로 보는 학습 사이트"
date: 2026-11-18
tags: [learning/resources, dev/infra]
description: "HTTP·TCP·DNS·TLS·WebSocket·WireGuard 등 인터넷 프로토콜 39종을 네트워크 그림과 순서도로 재생하며, 패킷 캡처 도구처럼 오가는 메시지를 한 줄씩 보여 주는 무료 학습 사이트. Designed to Scale과 같은 사람이 만들었다."
source: "https://protocol-explorer-alpha.vercel.app/"
---

# Protocol Explorer — 인터넷 프로토콜이 어떻게 오가는지 보는 학습 사이트

- 사이트: https://protocol-explorer-alpha.vercel.app/ ("Learn how the internet works")
- 만든 사람: Dilum Sanjaya (사이트에 "Designed by DilumSanjaya" 표시, https://x.com/DilumSanjaya) — [[designed-to-scale-interactive-system-design-course|Designed to Scale]]과 같은 사람
- 주소에 `alpha`가 붙어 있어 초기 공개 버전으로 보인다.

## 무엇을 보여 주나

프로토콜 하나를 고르면 세 가지로 보여 준다.
1. **단계 요약**: 예) HTTP — 클라이언트 요청 준비 → DNS로 서버 IP 찾기 → TCP 연결 → HTTP 요청·응답 → 페이지 렌더링
2. **네트워크 그림 / 순서도(SEQUENCE)**: 클라이언트, DNS 리졸버, 루트·TLD·권한 DNS 서버, 웹·메일·파일·앱 서버, 프록시, ISP·전송·호스팅 라우터(AS 번호), 스위치, IP 카메라, TV 박스 같은 장비 사이로 패킷이 오가는 것을 재생한다 (재생·한 단계씩·속도 조절).
3. **패킷 목록**: 패킷 캡처 도구처럼 번호·시간·출발지·목적지·프로토콜·정보·크기를 한 줄씩 보여 준다.

HTTP의 예:

| No. | 시간 | 출발 → 도착 | 프로토콜 | 내용 |
|-----|------|-------------|----------|------|
| 1 | 0.000s | 클라이언트 → DNS 리졸버 | DNS | www.example.com의 A 레코드 질의 |
| 2 | 0.012s | DNS 리졸버 → 클라이언트 | DNS | 응답 203.0.113.10 |
| 3~5 | 0.024~0.058s | 클라이언트 ↔ 웹 서버 | TCP | SYN → SYN, ACK → ACK (3-way 핸드셰이크) |
| 6 | 0.058s | 클라이언트 → 웹 서버 | HTTP | GET / HTTP/1.1 |
| 7 | 0.076s | 웹 서버 → 클라이언트 | HTTP | 200 OK (text/html), 9 segments, 12.8KB |

프로토콜마다 개요 카드도 있다. HTTP는 계층(응용 계층, L7), 기본 포트(80, HTTPS 443), 전송(TCP), 데이터 형식(텍스트 헤더 + 본문), 주요 메서드(GET·POST·PUT·DELETE·HEAD), 정의 문서(RFC 9110, RFC 9112).

## 다루는 프로토콜 39종 (Core 11 · Application 19 · Security 9)

| 묶음 | 프로토콜 |
|------|----------|
| 웹·실시간 | HTTP · HTTPS · WebSocket · WebRTC(브라우저 영상 통화) · QUIC(HTTP/3 over UDP) |
| 음성·영상 스트림 | SIP(인터넷 전화) · RTSP(IP 카메라) · RTMP(라이브 송출) |
| 전송·네트워크 | TCP · UDP · IP · IPv6(주소 설정, 이웃 탐색) · BGP(네트워크 간 라우팅) · ICMP · IGMP(멀티캐스트·TV 채널) |
| 이름·주소·시간 | DNS · DNS over HTTPS · DNSSEC · DHCP · NTP |
| 링크·접속 | Ethernet(프레임과 스위치) · PPPoE(인터넷 회선 로그인) · Wi-Fi(WPA2 접속) · WPA3 · RADIUS(802.1X 기업 Wi-Fi) · Captive Portal(호텔·카페 Wi-Fi 로그인) |
| 메일·파일·원격 | SMTP · POP3 · IMAP · FTP · SMB(Windows 파일 공유) · SSH |
| 보안·프록시·VPN | TLS/SSL · HTTP Proxy(포워드 프록시와 CONNECT) · SOCKS5 · Reverse Proxy(TLS 종료) · WireGuard · IPsec(IKEv2, ESP) |
| 산업 제어 | Modbus(OT) |

## 참고

- 2026-11-18에 사이트 첫 화면(HTTP 선택 상태)을 직접 읽어 정리했다. 다른 프로토콜의 개별 화면은 열어 보지 않았다.
- 공개 GitHub 저장소는 확인하지 못했다 (같은 사람의 GitHub https://github.com/dilums 공개 저장소 115개 중 이름이 맞는 것은 없었다).
