# Environment Variables for Angular 

1. in the folder environments/ search the file: `environment.ts` and modify with:
```ts
export const environment = {
  production: false,
  AUTH_DOMAIN: "this-is-my-domain",
  AUTH_CLIENT_ID: "this-is-my-id"
};
```
2. next, in the file for use the variable, import the environment so:
```
import { environment } from '../environments/environment'
```
3. use the environment variables so:
```
domain: environment.AUTH_DOMAIN
```
