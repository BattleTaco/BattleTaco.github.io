import React, {useContext} from "react";
import "./ResultChart.scss";
import StyleContext from "../../contexts/StyleContext";

/*
  ResultChart renders real measured results as inline SVG.
  No charting dependency; everything here is plain SVG so it ships
  with zero extra bundle weight and stays legible in light and dark.

  Supported shapes (see `chart` objects in portfolio.js):
    type: "bars"     -> horizontal comparison bars
    type: "polarity" -> reflection-sign table for the GPR physics baseline
*/

function Bars({chart, isDark}) {
  const max = chart.max || Math.max(...chart.series.map(s => s.value));
  return (
    <div className="rc-bars">
      {chart.series.map((s, i) => {
        const pct = Math.max(0, Math.min(100, (s.value / max) * 100));
        return (
          <div className="rc-bar-row" key={i}>
            <div className={isDark ? "rc-bar-label dark" : "rc-bar-label"}>
              {s.label}
            </div>
            <div className="rc-bar-track">
              <div
                className={
                  s.highlight ? "rc-bar-fill rc-bar-fill-hl" : "rc-bar-fill"
                }
                style={{width: pct + "%"}}
              >
                <span className="rc-bar-value">
                  {s.value}
                  {chart.unit || ""}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function PolarityRow({row, isDark}) {
  // A small waveform glyph: positive lobe up, negative lobe down, flat for null.
  const w = 108;
  const h = 34;
  const mid = h / 2;
  let d;
  if (row.sign === 0) {
    d = `M2 ${mid} L${w - 2} ${mid}`;
  } else {
    const a = row.sign > 0 ? -11 : 11; // SVG y grows downward
    d =
      `M2 ${mid} L${w * 0.3} ${mid} ` +
      `C${w * 0.38} ${mid} ${w * 0.4} ${mid + a} ${w * 0.5} ${mid + a} ` +
      `C${w * 0.6} ${mid + a} ${w * 0.62} ${mid - a * 0.45} ${w * 0.72} ${
        mid - a * 0.45
      } ` +
      `C${w * 0.8} ${mid - a * 0.45} ${w * 0.82} ${mid} ${w - 2} ${mid}`;
  }
  const stroke =
    row.sign === 0 ? "#9aa4b2" : row.sign > 0 ? "#2f9e8f" : "#c2653a";

  return (
    <div className={isDark ? "rc-pol-row dark" : "rc-pol-row"}>
      <div className="rc-pol-name">
        <span className="rc-pol-label">{row.label}</span>
        <span className="rc-pol-eps">{row.eps}</span>
      </div>
      <svg
        className="rc-pol-wave"
        viewBox={`0 0 ${w} ${h}`}
        width={w}
        height={h}
        role="img"
        aria-label={`${row.label}, reflection ${
          row.sign === 0 ? "none" : row.sign > 0 ? "positive" : "negative"
        }`}
      >
        <line
          x1="2"
          y1={mid}
          x2={w - 2}
          y2={mid}
          className="rc-pol-axis"
          strokeDasharray="3 3"
        />
        <path d={d} fill="none" stroke={stroke} strokeWidth="2.2" />
      </svg>
      <div className="rc-pol-verdict">
        <span
          className={
            row.sign === 0
              ? "rc-pol-chip rc-pol-chip-null"
              : row.sign > 0
                ? "rc-pol-chip rc-pol-chip-pos"
                : "rc-pol-chip rc-pol-chip-neg"
          }
        >
          {row.sign === 0
            ? "no reflection"
            : row.sign > 0
              ? "positive (void-like)"
              : "negative (bone-like)"}
        </span>
      </div>
    </div>
  );
}

export default function ResultChart({chart}) {
  const {isDark} = useContext(StyleContext);
  if (!chart) return null;

  return (
    <div className={isDark ? "result-chart dark" : "result-chart"}>
      {chart.title && <h4 className="rc-title">{chart.title}</h4>}
      {chart.type === "bars" && <Bars chart={chart} isDark={isDark} />}
      {chart.type === "polarity" && (
        <div className="rc-pol">
          {chart.rows.map((r, i) => (
            <PolarityRow key={i} row={r} isDark={isDark} />
          ))}
        </div>
      )}
      {chart.caption && <p className="rc-caption">{chart.caption}</p>}
    </div>
  );
}
