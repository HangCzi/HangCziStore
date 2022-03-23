 - uses: actions/checkout@v2
  - uses: actions/setup-go@v2
    with:
      stable: 'false'
      go-version: '1.14.0-rc1' # The Go version to download (if necessary) and use.
  - run: go version
