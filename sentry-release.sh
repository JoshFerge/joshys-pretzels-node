export VERSION=nodejs@`sentry-cli releases propose-version`
sentry-cli releases new "$VERSION"
sentry-cli releases set-commits "$VERSION" --auto
sentry-cli releases finalize "$VERSION"
sentry-cli releases deploys "$VERSION" new -e production --name test