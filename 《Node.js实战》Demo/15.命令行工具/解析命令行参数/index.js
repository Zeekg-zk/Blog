let args = process.argv.slice(2)

args.forEach(arg => {
  switch (arg) {
    case '-h':
    case '--help':
      printHelp();
      break
  }
})

function printHelp() {
  console.log(`
  usage:
  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
  `);
  process.exit(0);
}