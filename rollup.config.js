import { nodeResolve } from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-terser";
import fs from "fs";
import path from "path";
import license from "rollup-plugin-license";
import css from "rollup-plugin-css-only";

export default {
  input: "./src/index.js",
  output: [
    {
      file: "dist/mobject-litegraph.bundle.js",
      format: "umd",
      name: "MobjectLitegraph",
    },
    {
      file: "dist/mobject-litegraph.bundle.min.js",
      format: "umd",
      name: "MobjectLitegraph",
      plugins: [terser()],
    },
  ],
  plugins: [
    nodeResolve(),
    babel({
      babelHelpers: "bundled",
      exclude: /node_modules/,
      presets: ["@babel/preset-env"],
    }),
    css({
      output: "litegraph.css",
    }),
    cssLicenseBanner(),
    // terser(),
    license({
      sourcemap: true,
      cwd: process.cwd(),

      banner: {
        commentStyle: "regular",

        content: () => {
          return makeLicenseContent();
        },
      },
      thirdParty: {
        allow: {
          test: "MIT",
          failOnUnlicensed: true,
          failOnViolation: true,
        },
      },
    }),
  ],
};

function makeLicenseContent() {
  const licenseFile = path.join(__dirname, "LICENSE");
  let licenseContent = fs.readFileSync(licenseFile, "utf-8");
  const thirdPartyLicenseFile = path.join(__dirname, "THIRD-PARTY-LICENSES");
  if (fs.existsSync(thirdPartyLicenseFile)) {
    licenseContent += "\nThird Party Licenses";
    licenseContent += "\n--------------------";
    licenseContent += "\n";
    licenseContent += "\n" + fs.readFileSync(thirdPartyLicenseFile, "utf-8");
  }
  return licenseContent;
}

function cssLicenseBanner() {
  return {
    name: "css-license-banner",
    generateBundle(outputOptions, bundle) {
      const licenseContent = makeLicenseContent();
      const banner = `/*\n${licenseContent}\n*/\n`;

      for (const fileName of Object.keys(bundle)) {
        if (fileName.endsWith(".css")) {
          bundle[fileName].source = banner + bundle[fileName].source;
        }
      }
    },
  };
}
