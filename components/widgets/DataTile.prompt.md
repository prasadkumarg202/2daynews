One-line: A compact utility stat tile for the gold/markets/weather/cricket rail; mono numerals with a colored delta arrow.

```jsx
<DataTile kind="gold" label="Gold 22K" value="₹71,240" sub="per 10g · Hyd" delta={180} />
<DataTile kind="market" label="Nifty 50" value="24,318" delta={-96} />
<DataTile kind="weather" label="Vijayawada" value="34°" sub="AQI 82 · Haze" />
```

`kind` sets the accent dot color. `delta` positive = green ▲, negative = red ▼. Great in a horizontally-scrolling rail.
