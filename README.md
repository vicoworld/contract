## Make commands to get started
```shell
make bootstrap

make compile

make test
```

## Note

- The rate of `VICO` to `USD` has to be declared using [Basis Point (BPS)](https://www.omnicalculator.com/finance/basis-point) as Solidity does not support float number at the moment.
  - Example: if you would like to set the rate of `VICO` to `USD` to 0.5, then you should input 5000, as the divisor used in BPS is `10000`