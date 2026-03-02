import * as React from "react";

const tokens = {
  colorDefault: "#ffffff",
  colorPrimary: "#000000",
  colorMutedBg: "#f9f9f7",
  colorTextMuted: "rgba(38,38,38,0.60)",
  colorBorderInversed: "rgba(38,38,38,0.10)",

  fontFamily:
    "'General Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",

  fsHeading2: "32px",
  fsHeading3: "24px",
  fsHeading4: "20px",
  fsHeading5: "18px",
  fsHeading6: "16px",
  fsTextDefault: "16px",
  fsTextSmall: "14px",
  fsTextTiny: "12px",

  lhHeading2: "58px",
  lhHeading3: "130%",
  lhTextDefault: "28px",
  lhTextSmall: "24px",
  lhTextTiny: "20px",

  fwRegular: 400,
  fwMedium: 500,
  fwSemiBold: 600,

  spTiny: "2px",
  spXxSmall: "4px",
  spXSmall: "8px",
  spSmall: "16px",
  spMedium: "20px",
  spLarge: "24px",
  spXLarge: "32px",
  spXxLarge: "48px",
  spHuge: "56px",
  spXHuge: "64px",
} as const;

export const styles: Record<string, React.CSSProperties> = {
  body: {
    backgroundColor: tokens.colorMutedBg,
    fontFamily: tokens.fontFamily,
    fontWeight: tokens.fwRegular,
    margin: "0",
    padding: `${tokens.spXxLarge} 0`,
  },

  container: {
    backgroundColor: tokens.colorDefault,
    maxWidth: "600px",
    margin: "0 auto",
    border: `1px solid ${tokens.colorBorderInversed}`,
  },

  header: {
    backgroundColor: tokens.colorPrimary,
    padding: `${tokens.spXHuge} ${tokens.spXxLarge}`,
    textAlign: "center",
  },

  logo: {
    color: tokens.colorDefault,
    fontFamily: tokens.fontFamily,
    fontSize: tokens.fsHeading2,
    fontWeight: tokens.fwSemiBold,
    lineHeight: tokens.lhHeading2,
    letterSpacing: "10px",
    textTransform: "uppercase",
    margin: `0 0 ${tokens.spXSmall} 0`,
  },

  logoSub: {
    display: "inline-block",
    color: tokens.colorDefault,
    fontFamily: tokens.fontFamily,
    fontSize: tokens.fsTextTiny,
    fontWeight: tokens.fwMedium,
    lineHeight: tokens.lhTextTiny,
    letterSpacing: "3px",
    textTransform: "uppercase",
    padding: `${tokens.spTiny} ${tokens.spSmall}`,
    opacity: "6",
    margin: "0",
  },

  divider: {
    borderColor: tokens.colorBorderInversed,
    margin: "0",
  },

  mainSection: {
    padding: `${tokens.spXHuge} ${tokens.spXxLarge} ${tokens.spXLarge}`,
  },

  label: {
    color: tokens.colorTextMuted,
    fontFamily: tokens.fontFamily,
    fontSize: tokens.fsTextTiny,
    fontWeight: tokens.fwMedium,
    lineHeight: tokens.lhTextTiny,
    letterSpacing: "3px",
    textTransform: "uppercase",
    margin: `0 0 ${tokens.spSmall} 0`,
  },

  title: {
    color: tokens.colorPrimary,
    fontFamily: tokens.fontFamily,
    fontSize: tokens.fsHeading3,
    fontWeight: tokens.fwSemiBold,
    lineHeight: tokens.lhHeading3,
    textTransform: "uppercase",
    letterSpacing: "1px",
    margin: `0 0 ${tokens.spSmall} 0`,
  },

  subtitle: {
    color: tokens.colorTextMuted,
    fontFamily: tokens.fontFamily,
    fontSize: tokens.fsTextDefault,
    fontWeight: tokens.fwRegular,
    lineHeight: tokens.lhTextDefault,
    margin: "0",
  },

  dataSection: {
    padding: `${tokens.spXLarge} ${tokens.spXxLarge} ${tokens.spXHuge}`,
  },

  dataRow: {
    padding: `${tokens.spSmall} ${tokens.spLarge}`,
    backgroundColor: tokens.colorMutedBg,
  },

  dataRowDivider: {
    borderColor: tokens.colorBorderInversed,
    margin: "0",
  },

  dataLabelCol: {
    width: "130px",
    verticalAlign: "middle",
  },

  dataValueCol: {
    verticalAlign: "middle",
  },

  dataLabel: {
    color: tokens.colorTextMuted,
    fontFamily: tokens.fontFamily,
    fontSize: tokens.fsTextTiny,
    fontWeight: tokens.fwMedium,
    lineHeight: tokens.lhTextTiny,
    letterSpacing: "2px",
    textTransform: "uppercase",
    margin: "0",
  },

  dataValue: {
    color: tokens.colorPrimary,
    fontFamily: tokens.fontFamily,
    fontSize: tokens.fsTextSmall,
    fontWeight: tokens.fwSemiBold,
    lineHeight: tokens.lhTextSmall,
    margin: "0",
  },

  dataValueHighlight: {
    color: tokens.colorPrimary,
    fontFamily: tokens.fontFamily,
    fontSize: tokens.fsHeading5,
    fontWeight: tokens.fwSemiBold,
    lineHeight: tokens.lhTextDefault,
    margin: "0",
  },

  actionSection: {
    padding: `${tokens.spXLarge} ${tokens.spXxLarge}`,
  },

  actionLabel: {
    color: tokens.colorTextMuted,
    fontFamily: tokens.fontFamily,
    fontSize: tokens.fsTextTiny,
    fontWeight: tokens.fwMedium,
    lineHeight: tokens.lhTextTiny,
    letterSpacing: "3px",
    textTransform: "uppercase",
    margin: `0 0 ${tokens.spSmall} 0`,
  },

  actionButtonPrimary: {
    backgroundColor: tokens.colorPrimary,
    color: tokens.colorDefault,
    fontFamily: tokens.fontFamily,
    fontSize: tokens.fsTextTiny,
    fontWeight: tokens.fwSemiBold,
    letterSpacing: "2px",
    textTransform: "uppercase",
    textDecoration: "none",
    display: "inline-block",
    padding: `${tokens.spSmall} ${tokens.spXLarge}`,
  },

  actionButtonSecondary: {
    backgroundColor: "transparent",
    color: tokens.colorPrimary,
    fontFamily: tokens.fontFamily,
    fontSize: tokens.fsTextTiny,
    fontWeight: tokens.fwSemiBold,
    letterSpacing: "2px",
    textTransform: "uppercase",
    textDecoration: "none",
    display: "inline-block",
    padding: `${tokens.spSmall} ${tokens.spXLarge}`,
    border: `1px solid ${tokens.colorPrimary}`,
  },

  footer: {
    backgroundColor: tokens.colorMutedBg,
    padding: `${tokens.spXLarge} ${tokens.spXxLarge}`,
    textAlign: "center",
  },

  footerText: {
    color: tokens.colorTextMuted,
    fontFamily: tokens.fontFamily,
    fontSize: tokens.fsTextTiny,
    fontWeight: tokens.fwRegular,
    lineHeight: tokens.lhTextTiny,
    margin: `0 0 ${tokens.spXSmall} 0`,
  },

  footerCopy: {
    color: tokens.colorTextMuted,
    fontFamily: tokens.fontFamily,
    fontSize: tokens.fsTextTiny,
    fontWeight: tokens.fwRegular,
    lineHeight: tokens.lhTextTiny,
    margin: `${tokens.spSmall} 0 0 0`,
  },
};
