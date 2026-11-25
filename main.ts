const line =
  'Till firmware do us part — or until a forced update introduces irreconcilable differences.';

function renderLine(shout: boolean): string {
  return shout ? line.toUpperCase() : line;
}

const args = process.argv.slice(2);

function hasFlag(flag: string): boolean {
  return args.includes(flag);
}

function printUsage(): void {
  console.error('Usage: node main.ts [--shout] [--help]');
}

function main(): void {
  if (hasFlag('--help')) {
    printUsage();
    process.exit(0);
  }

  console.log(renderLine(hasFlag('--shout')));
}

main();
