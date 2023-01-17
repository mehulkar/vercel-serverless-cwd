/* eslint-env node */
export default function (request, response) {
  response.status(200).send(process.cwd());
}
