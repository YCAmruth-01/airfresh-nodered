module.exports = {
  uiPort: process.env.PORT || 1880,
  flowFile: 'flows.json',
  userDir: '/opt/render/project/src/',
  credentialSecret: "airfresh-secret-change-this",
  functionGlobalContext: {},
  logging: { console: { level: "info", metrics: false, audit: false } },
  editorTheme: { tours: false }
}
