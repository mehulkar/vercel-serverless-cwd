/* eslint-env node */
export default function (request, response) {
  response.status(200).send({
    taskRoot: process.env.LAMBDA_TASK_ROOT,
    cwd: process.cwd(),
  });
}
