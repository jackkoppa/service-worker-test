# ServiceWorkerTest
This is a minimal reproduction of Angular issue [#21636](https://github.com/angular/angular/issues/21636) (as well as [#22110](https://github.com/angular/angular/issues/22110), a duplicate).

To see the problem for yourself, run:

```shell
git clone https://github.com/jackkoppa/service-worker-test.git
cd service-worker-test
git checkout routing-failure-minimal-repro
npm install
ng build --prod
cd dist
http-server -p 8080
```

* Now in Chrome Incognito, visit http://localhost:8080/, and then http://localhost:8080/test-route
* In dev tools, in the network tab, check "Offline"
* Visit http://localhost:8080/ & refresh - the page should load
* Attempt to visit http://localhost:8080/test-route

**Expected:** The page also loads, since the index should be cached by the Service Worker, which should load, w/ Angular redirecting to the correct `test-route`
**Failure:** The page fails to load. In the network tab, the service worker has responded with `504 - Gateway Timeout`

* Visiting http://localhost:8080/ continues to work

## Notes
* Instructions written on 2/10/2018
* The above assumes you have already installed
    * Node (8.9.4 used) & npm (5.6.0 used)
    * Angular CLI (1.6.8 used) `npm install -g @angular/cli`
    * http-server (0.11.0 used) `npm install -g http-server`


## Environment
```
Angular CLI: 1.6.4
Node: 8.9.4
npm: 5.6.0
OS: Windows 10 Home 64-bit, x64
Angular: 5.2.1

Browser:
I've only tested on:
- [x] Chrome (desktop) Version 64.0.3282.140 (Official Build) (64-bit)
```
