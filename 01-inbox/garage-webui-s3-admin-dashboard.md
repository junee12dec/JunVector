---
title: "Garage Web UI — 셀프호스팅 S3 스토리지를 브라우저로 관리하는 어드민 대시보드"
date: 2026-07-26
tags: [dev/storage, dev/self-hosted, dev/tools]
description: "Garage S3 호환 오브젝트 스토리지에 시각적 대시보드를 제공하는 경량 오픈소스 어드민. 버킷 관리·오브젝트 탐색·액세스 키 관리를 브라우저에서 처리하며 단일 바이너리 또는 Docker로 배포 가능."
source: "https://github.com/khairul169/garage-webui"
---

# Garage Web UI — 셀프호스팅 S3 스토리지를 브라우저로 관리하는 어드민 대시보드

GitHub: [khairul169/garage-webui](https://github.com/khairul169/garage-webui)

## 개요

[Garage](https://garagehq.deuxfleurs.fr) S3 호환 스토리지 서비스에 시각적 어드민 인터페이스를 추가하는 도구.

## 주요 기능

- 버킷(Bucket) 생성·관리
- 오브젝트 탐색 및 파일 브라우저
- 액세스 키 관리
- 브라우저 기반 UI (별도 클라이언트 불필요)

## 배포 방식

- **단일 바이너리** — 의존성 없이 바로 실행
- **Docker 이미지** — 컨테이너 환경에서 빠른 배포
