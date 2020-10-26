const { readBuilderProgram } = require("typescript")

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  theme: {
    fontFamily: {
      sans: ["Inter"],
    },
    extend: {
      screens: {
        "2xl": "1440px",
        "3xl": "1600px",
        "4xl": "1800px",
      },
      width: {
        "1/10": "10%",
        "2/10": "20%",
        "3/10": "30%",
        "4/10": "40%",
        "5/10": "50%",
        "6/10": "60%",
        "7/10": "70%",
        "8/10": "80%",
        "9/10": "90%",
        "1/20": "5%",
        "2/20": "10%",
        "3/20": "15%",
        "4/20": "20%",
        "5/20": "25%",
        "6/20": "30%",
        "7/20": "35%",
        "8/20": "40%",
        "9/20": "45%",
        "10/20": "50%",
        "11/20": "55%",
        "12/20": "60%",
        "13/20": "65%",
        "14/20": "70%",
        "15/20": "75%",
        "16/20": "80%",
        "17/20": "85%",
        "18/20": "90%",
        "19/20": "95%",
        "9/50": "18%",
        "11/50": "22%",
        "12/50": "24%",
        "24/50": "48%",
        "18/100": "18%",
        "19/100": "19%",
        "23/100": "23%",
        "24/100": "24%",
        14: "3.5rem",
        18: "4.5rem",
        28: "7rem",
        60: "15rem",
        64: "16rem",
        72: "18rem",
        80: "20rem",
        88: "22rem",
        96: "24rem",
        120: "30rem",
        128: "32rem",
        144: "36rem",
        160: "40rem",
        168: "42rem",
        172: "44rem",
        180: "45rem",
        200: "50rem",
        240: "60rem",
      },
      minWidth: {
        6: "1.5rem",
        8: "2rem",
        10: "2.5rem",
        28: "7rem",
        48: "12rem",
        56: "14rem",
      },
      maxWidth: {
        0: "0",
      },
      height: {
        "1/2": "50%",
        "1/10": "10%",
        "2/10": "20%",
        "3/10": "30%",
        "4/10": "40%",
        "5/10": "50%",
        "6/10": "60%",
        "7/10": "70%",
        "8/10": "80%",
        "9/10": "90%",
        "1/20": "5%",
        "2/20": "10%",
        "3/20": "15%",
        "4/20": "20%",
        "5/20": "25%",
        "6/20": "30%",
        "7/20": "35%",
        "8/20": "40%",
        "9/20": "45%",
        "10/20": "50%",
        "11/20": "55%",
        "12/20": "60%",
        "13/20": "65%",
        "14/20": "70%",
        "15/20": "75%",
        "16/20": "80%",
        "17/20": "85%",
        "18/20": "90%",
        "19/20": "95%",
        "9/50": "18%",
        "11/50": "22%",
        "12/50": "24%",
        "19/100": "19%",
        "23/100": "23%",
        14: "3.5rem",
        28: "7rem",
        60: "15rem",
        64: "16rem",
        72: "18rem",
        80: "20rem",
        88: "22rem",
        96: "24rem",
        100: "25rem",
        120: "30rem",
        128: "32rem",
        144: "36rem",
        160: "40rem",
        168: "42rem",
        172: "44rem",
        180: "45rem",
        200: "50rem",
        240: "60rem",
      },
      minHeight: {
        6: "1.5rem",
        10: "2.5rem",
        32: "8rem",
        48: "12rem",
        56: "14rem",
        64: "16rem",
        128: "32rem",
        200: "50rem",
        224: "56rem",
      },
      padding: {
        40: "10rem",
        60: "15rem",
        64: "16rem",
        72: "18rem",
        80: "20rem",
        96: "24rem",
        112: "28rem",
      },
      margin: {
        40: "10rem",
        60: "15rem",
        64: "16rem",
        72: "18rem",
        80: "20rem",
        96: "24rem",
        112: "28rem",
      },
      borderWidth: {
        3: "3px",
        5: "5px",
        6: "6px",
      },
      opacity: {
        10: 0.1,
        20: 0.2,
        30: 0.3,
        40: 0.4,
        50: 0.5,
        60: 0.6,
        70: 0.7,
        80: 0.8,
        90: 0.9,
        95: 0.95,
        99: 0.99,
      },
      zIndex: {
        "-10": -10,
        "-40": -40,
        100: 100,
        200: 200,
        300: 300,
      },
      colors: {
        "black-50": "rgba(0, 0, 0, 0.5)",
        "black-80": "rgba(0, 0, 0, 0.8)",
        "white-5": "rgba(255, 255, 255, 0.05)",
        "white-10": "rgba(255, 255, 255, 0.1)",
        "white-20": "rgba(255, 255, 255, 0.2)",
        "white-30": "rgba(255, 255, 255, 0.3)",
        "white-40": "rgba(255, 255, 255, 0.4)",
        "white-50": "rgba(255, 255, 255, 0.5)",
        "white-60": "rgba(255, 255, 255, 0.6)",
        "white-70": "rgba(255, 255, 255, 0.7)",
        "white-80": "rgba(255, 255, 255, 0.8)",
        "white-85": "rgba(255, 255, 255, 0.85)",
        "white-90": "rgba(255, 255, 255, 0.9)",
        "white-95": "rgba(255, 255, 255, 0.95)",
        "white-96": "rgba(255, 255, 255, 0.96)",
        "white-98": "rgba(255, 255, 255, 0.98)",
        "white-99": "rgba(255, 255, 255, 0.99)",
        "black-5": "rgba(0, 0, 0, 0.05)",
        "black-8": "rgba(0, 0, 0, 0.08)",
        "black-10": "rgba(0, 0, 0, 0.1)",
        "black-20": "rgba(0, 0, 0, 0.2)",
        "black-30": "rgba(0, 0, 0, 0.3)",
        "black-40": "rgba(0, 0, 0, 0.4)",
        "black-50": "rgba(0, 0, 0, 0.5)",
        "black-60": "rgba(0, 0, 0, 0.6)",
        "black-70": "rgba(0, 0, 0, 0.7)",
        "black-80": "rgba(0, 0, 0, 0.8)",
        "black-90": "rgba(0, 0, 0, 0.9)",
        "black-95": "rgba(0, 0, 0, 0.95)",
        "dark-gray": "rgb(10, 10, 10)",
        "default-color": "#4a5568",
      },
      borderRadius: {
        xl: "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
      boxShadow: {
        card: "0 16px 16px rgba(0, 0, 0, 0.2)",
        "flat-card": "0 0 20px rgba(0, 0, 0, 0.02)",
        "slide-menu": "0 0 30px rgba(0, 0, 0, 0.3)",
        header: "0 0 20px rgba(0, 0, 0, 0.02)",
        menu: "0 0 20px rgba(0, 0, 0, 0.25)",
        "card-lg": "0 0 25px rgba(0, 0, 0, 0.15)",
        "square-card": "0 0 20px rgba(0, 0, 0, 0.05)",
        "square-card-lg": "0 0 20px rgba(0, 0, 0, 0.1)",
        button: "0 0 10px rgba(0, 0, 0, 0.2)",
        "button-lg": "0 0 10px rgba(0, 0, 0, 0.3)",
      },
      transitionProperty: {
        width: "width",
        height: "height",
        spacing: "margin, padding",
        filter: "filter, opacity, color",
      },
      scale: {
        102: "1.02",
      },
      transitionDuration: {
        400: "400ms",
      },
      inset: {
        "-2": "-0.5rem",
      },
    },
  },
  variants: {},
  plugins: [],
}
