
export default function onRequest() {
  return new Response(
    JSON.stringify({
      message: "TaskFlow API is running",
      status: "ok"
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
}
