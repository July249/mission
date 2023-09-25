id/password 방식 인증 시스템을 만들려고 한다.
하지만 DB 권한을 탈취 당할 경우, password가 노출될 수 있으므로, password의 해시값을 저장하고자 한다.
nodejs의 crypto 모듈을 활용하여, password를 입력으로 받아, password에 대한 hash값과 그 쌍이 되는 salt값을 반환하는 함수를 만들어라.

```typescript
const password = 'babo';

// 리턴값: [hashed password, salt]
encryptPassword(password);
```

-> hint: pbkdf2 (https://nodejs.org/docs/latest-v18.x/api/crypto.html#cryptopbkdf2password-salt-iterations-keylen-digest-callback)
