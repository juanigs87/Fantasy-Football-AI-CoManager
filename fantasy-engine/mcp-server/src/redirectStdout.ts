// stdout is the MCP protocol channel. The shared library logs progress with
// console.log (some of it at import time), so this module must be imported
// before anything from @fantasy-ai/shared.
console.log = (...args: unknown[]) => console.error(...args);
