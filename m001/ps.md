다음의 사용자 데이터를 입력으로 받아서, encoded jwt를 반환하는 sign 함수를 만들어라.
서명 암호화 알고리즘은 HMAC SHA256으로 한다.

```typescript
const user: User = {
  name: 'gildong',
  phoneNumber: '010-1234-5678',
};

//리턴값: encoded jwt
sign(user);
```
