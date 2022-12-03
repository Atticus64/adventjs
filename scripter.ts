import { Args, parse } from "https://deno.land/std@0.119.0/flags/mod.ts";

const flags = parse(Deno.args, {
  boolean: ["help", "ts"],
  string: ["n"],
  default: { reto: 1 },
});

const runChallenge = async (retoNumber: string | number, flags: Args) => {
  let script = `retos/reto${retoNumber}/app.js`;

  if (!retoNumber) {
    script = `retos/reto1/app.js`;
  }

  if (flags.ts) {
    script = `retos/reto${retoNumber}/app.ts`;
  }

  const result = await Deno.run({
    cmd: ["deno", "run", script],
    stdout: "piped",
    stderr: "piped",
  }).output();
  const output = new TextDecoder().decode(result);
  console.log(output, "");
};

runChallenge(flags.n, flags);
